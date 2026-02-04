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