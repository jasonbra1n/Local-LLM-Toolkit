/**
 * Shared Utilities for Local LLM Toolkit
 * Handles API adapters and common logic.
 */

/**
 * Adapter to handle Google Gemini API calls.
 * 
 * @param {Array} messages - Standard OpenAI format messages [{role, content}]
 * @param {String} model - e.g., "gemini-1.5-flash"
 * @param {String} apiKey - Stored in localStorage.getItem('gemini_api_key')
 * @param {Function} onChunk - Callback for streaming text chunks
 * @param {Function} onComplete - Callback when stream finishes
 * @param {Function} onError - Callback for errors
 */
async function generateGemini(messages, model, apiKey, onChunk, onComplete, onError) {
    if (!apiKey) {
        if (onError) onError(new Error("Gemini API Key is missing. Please check Settings."));
        return;
    }

    // Default endpoint for Gemini
    model = model || "gemini-1.5-flash";
    
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:streamGenerateContent?key=${apiKey}`;

    // Map OpenAI roles to Gemini roles
    // Gemini uses 'user' and 'model'. System prompts are merged into the first user message
    // to ensure compatibility with the v1beta generateContent endpoint.
    let contents = [];
    let systemInstruction = "";

    messages.forEach(msg => {
        if (msg.role === 'system') {
            systemInstruction += msg.content + "\n\n";
        } else if (msg.role === 'user') {
            let text = msg.content;
            if (systemInstruction) {
                text = systemInstruction + "System Instructions:\n" + text;
                systemInstruction = "";
            }
            contents.push({
                role: 'user',
                parts: [{ text: text }]
            });
        } else if (msg.role === 'assistant') {
            contents.push({
                role: 'model',
                parts: [{ text: msg.content }]
            });
        }
    });

    // Fallback if system instruction exists but no user message
    if (systemInstruction) {
        contents.push({
            role: 'user',
            parts: [{ text: systemInstruction }]
        });
    }

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents: contents })
        });

        if (!response.ok) {
            const errText = await response.text();
            throw new Error(`Gemini API Error ${response.status}: ${errText}`);
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            const chunk = decoder.decode(value, { stream: true });
            buffer += chunk;

            // Gemini stream sends JSON objects. We'll use a regex to extract "text" fields
            // from the raw buffer to avoid complex JSON stream parsing in vanilla JS.
            const regex = /"text":\s*"((?:[^"\\]|\\.)*)"/g;
            let match;
            let lastIndex = 0;

            while ((match = regex.exec(buffer)) !== null) {
                // Unescape the JSON string
                const text = JSON.parse(`"${match[1]}"`);
                if (text) onChunk(text);
                lastIndex = match.index + match[0].length;
            }

            // Keep the unprocessed tail of the buffer
            if (lastIndex > 0) buffer = buffer.slice(lastIndex);
        }
        
        if (onComplete) onComplete();

    } catch (error) {
        console.error("Gemini Adapter Failed:", error);
        if (onError) onError(error);
        else onChunk(`\n[Error: ${error.message}]`);
    }
}

/**
 * Adapter to handle OpenAI-compatible API calls (LM Studio, Ollama, etc.).
 * 
 * @param {Array} messages - Standard OpenAI format messages [{role, content}]
 * @param {String} model - Model ID
 * @param {String} baseUrl - API Base URL (e.g., http://127.0.0.1:1234/v1)
 * @param {String} apiKey - API Key (optional for local)
 * @param {Number} temperature - Temperature (0.0 to 1.0)
 * @param {Function} onChunk - Callback for streaming text chunks
 * @param {Function} onComplete - Callback when stream finishes
 * @param {Function} onError - Callback for errors
 * @param {AbortSignal} [signal] - Optional abort signal for stopping generation
 */
async function generateOpenAI(messages, model, baseUrl, apiKey, temperature, onChunk, onComplete, onError, signal) {
    try {
        const headers = {
            "Content-Type": "application/json"
        };
        if (apiKey) {
            headers["Authorization"] = `Bearer ${apiKey}`;
        }

        const response = await fetch(`${baseUrl}/chat/completions`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
                model: model,
                messages: messages,
                temperature: temperature,
                max_tokens: -1, // LM Studio specific for infinite generation
                stream: true
            }),
            signal: signal
        });

        if (!response.ok) {
            const errText = await response.text();
            throw new Error(`API Error ${response.status}: ${errText}`);
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder("utf-8");

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            const chunk = decoder.decode(value, { stream: true });
            const lines = chunk.split('\n');

            for (const line of lines) {
                if (line.startsWith('data: ') && line !== 'data: [DONE]') {
                    try {
                        const data = JSON.parse(line.slice(6));
                        const content = data.choices[0]?.delta?.content || "";
                        if (content) onChunk(content);
                    } catch (e) {
                        console.error("JSON Parse Error", e);
                    }
                }
            }
        }

        if (onComplete) onComplete();

    } catch (error) {
        if (error.name === 'AbortError') {
            // Handled by caller usually
        } else {
            console.error("OpenAI Adapter Failed:", error);
            if (onError) onError(error);
        }
    }
}

/**
 * Centralized Router for AI Generation.
 * Tools call this function, and it routes to the correct adapter based on config.
 * 
 * @param {Array} messages - Standard OpenAI format messages
 * @param {Object} config - { provider, base, apiKey, model, temp }
 * @param {Function} onChunk - Callback for streaming
 * @param {Function} onComplete - Callback for completion
 * @param {Function} onError - Callback for errors
 * @param {AbortSignal} [signal] - Abort signal
 */
async function generateText(messages, config, onChunk, onComplete, onError, signal) {
    const { provider, base, apiKey, model, temp } = config;

    if (provider === 'gemini') {
        // Gemini adapter (currently doesn't support signal/temp in this implementation, but we route it)
        return generateGemini(messages, model, apiKey, onChunk, onComplete, onError);
    } else {
        // Default to OpenAI compatible (LM Studio, Ollama, etc.)
        return generateOpenAI(messages, model, base, apiKey, temp, onChunk, onComplete, onError, signal);
    }
}

/**
 * Retrieves configuration from localStorage for all providers.
 * @returns {Object} { provider, base, apiKey, model, temp }
 */
function getConfig() {
    const provider = localStorage.getItem('active_provider') || 'lm-studio';
    const temp = parseFloat(localStorage.getItem('global_temperature')) || 0.7;
    
    let base = "";
    let apiKey = "";
    let model = "";

    switch (provider) {
        case 'lm-studio':
            base = localStorage.getItem('lm_studio_url') || "http://127.0.0.1:1234/v1";
            model = localStorage.getItem('lm_studio_model') || "";
            break;
        case 'ollama':
            base = localStorage.getItem('ollama_url') || "http://127.0.0.1:11434/v1";
            break;
        case 'gemini':
            apiKey = localStorage.getItem('gemini_api_key') || "";
            model = localStorage.getItem('gemini_model') || "gemini-1.5-flash";
            break;
        case 'openai':
            base = localStorage.getItem('openai_url') || "https://api.openai.com/v1";
            apiKey = localStorage.getItem('openai_api_key') || "";
            model = localStorage.getItem('openai_model') || "gpt-4o";
            break;
        case 'groq':
            base = localStorage.getItem('groq_url') || "https://api.groq.com/openai/v1";
            apiKey = localStorage.getItem('groq_api_key') || "";
            model = localStorage.getItem('groq_model') || "llama3-8b-8192";
            break;
        case 'deepseek':
            base = localStorage.getItem('deepseek_url') || "https://api.deepseek.com";
            apiKey = localStorage.getItem('deepseek_api_key') || "";
            model = localStorage.getItem('deepseek_model') || "deepseek-chat";
            break;
        case 'mistral':
            base = localStorage.getItem('mistral_url') || "https://api.mistral.ai/v1";
            apiKey = localStorage.getItem('mistral_api_key') || "";
            model = localStorage.getItem('mistral_model') || "mistral-small-latest";
            break;
    }

    return { provider, base, apiKey, model, temp };
}

/**
 * Shared initialization logic for tools.
 * Connects to the provider, fetches models (if local), and updates the UI.
 * @param {Object} config - Configuration object from getConfig()
 */
async function loadModels(config) {
    const { provider, base, model } = config;
    const select = document.getElementById('model-select');
    const statusDot = document.getElementById('status-dot');
    const statusText = document.getElementById('status-text');

    // Cloud Providers (Fixed Model)
    if (['gemini', 'openai', 'groq', 'deepseek', 'mistral'].includes(provider)) {
        statusText.innerText = `${provider.charAt(0).toUpperCase() + provider.slice(1)} Connected`;
        select.innerHTML = `<option value="${model}">${model}</option>`;
        statusDot.classList.add('online');
        return;
    }

    // Local Providers (Fetch Models)
    try {
        const response = await fetch(`${base}/models`);
        if(response.ok) {
            const data = await response.json();
            if (data.data && data.data.length > 0) {
                select.innerHTML = ''; 
                data.data.forEach(m => {
                    const option = document.createElement('option');
                    option.value = m.id;
                    option.text = m.id;
                    select.appendChild(option);
                });
                // Auto-select default if it exists in the list
                if (model && Array.from(select.options).some(o => o.value === model)) select.value = model;
            }
            statusDot.classList.add('online');
            statusText.innerText = "Local Server Connected";
        }
    } catch (e) {
        console.error(e);
        statusText.innerText = "Error: Check Settings & CORS";
    }
}