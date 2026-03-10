/**
 * Layout Manager
 * Injects the Navigation Bar and Footer into all pages to create a unified "App" feel.
 * Also injects the necessary CSS for the layout.
 */

const APP_CONFIG = {
    name: "Local LLM Toolkit",
    version: "v0.1.4",
    tools: [
        { name: "Chat Interface", link: "chat_interface.html", icon: "💬", desc: "General purpose chat with history and streaming." },
        { name: "Prompt Generator", link: "prompt_generator.html", icon: "📝", desc: "Create robust system prompts for any persona." },
        { name: "Idea Generator", link: "idea_generator.html", icon: "💡", desc: "Brainstorm concepts, topics, and ideas." },
        { name: "Summarizer", link: "summarizer.html", icon: "📝", desc: "Condense long text into bullets or summaries." },
        { name: "Story Architect", link: "story_architect.html", icon: "📖", desc: "Generate story bibles, characters, and outlines." },
        { name: "Novel Writer", link: "novel_writer.html", icon: "✍️", desc: "Write prose based on your Story Architect outline." },
        { name: "Email Polisher", link: "email_polisher.html", icon: "📧", desc: "Draft professional, empathetic, or stern emails." },
        { name: "Code Janitor", link: "code_janitor.html", icon: "🧹", desc: "Refactor spaghetti code into clean, readable code." },
        { name: "Regex Wizard", link: "regex_wizard.html", icon: "🧙‍♂️", desc: "Generate complex Regular Expressions from plain English." },
        { name: "Universal Translator", link: "universal_translator.html", icon: "🌐", desc: "Localize JSON files while preserving keys." },
        { name: "Agent Builder", link: "agent_builder.html", icon: "🤖", desc: "Define AI Agents and generate AGENT.md files." },
        { name: "Skill Builder", link: "skill_builder.html", icon: "🛠️", desc: "Create reusable Skills and generate SKILLS.md files." },
        { name: "Meeting Notes", link: "meeting_notes.html", icon: "📅", desc: "Turn raw transcripts into structured minutes & action items." },
        { name: "Visual Prompter", link: "visual_prompter.html", icon: "🎨", desc: "Generate detailed prompts for Midjourney, Stable Diffusion & Video." },
        { name: "Project Architect", link: "project_prompt_builder.html", icon: "🏗️", desc: "Generate a 'Mega-Prompt' to build an entire project in one go." },
        { name: "YouTube Script", link: "youtube_script_writer.html", icon: "📹", desc: "Write engaging video scripts with hooks and visual cues." },
        { name: "Quiz Generator", link: "quiz_generator.html", icon: "❓", desc: "Create multiple-choice questions or flashcards from source text." },
        { name: "Persona Chat", link: "persona_chat.html", icon: "🎭", desc: "Define a character (e.g., Sherlock Holmes) and chat with them." },
        { name: "Markdown to HTML", link: "markdown_converter.html", icon: "📝", desc: "Convert Markdown to clean HTML for blogs." }
    ]
};

document.addEventListener("DOMContentLoaded", () => {
    // 1. Inject Prism.js for global syntax highlighting
    const prismCss = document.createElement('link');
    prismCss.rel = 'stylesheet';
    prismCss.href = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css';
    document.head.appendChild(prismCss);

    const prismJs = document.createElement('script');
    prismJs.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js';
    document.body.appendChild(prismJs);

    // Optional: Add commonly used Prism languages
    const prismPython = document.createElement('script');
    prismPython.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-python.min.js';
    document.body.appendChild(prismPython);

    const prismBash = document.createElement('script');
    prismBash.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-bash.min.js';
    document.body.appendChild(prismBash);

    // 2. Build Navbar HTML
    const navHtml = `
        <nav class="navbar">
            <div class="nav-brand">
                <a href="index.html">🚀 ${APP_CONFIG.name}</a>
            </div>
            <button class="hamburger" id="nav-toggle">☰</button>
            <ul class="nav-links" id="nav-menu">
                <li><a href="index.html">Dashboard</a></li>
                <li class="dropdown" id="tools-dropdown">
                    <a href="tools.html" class="dropbtn" id="tools-toggle">Tools ▾</a>
                    <div class="dropdown-content">
                        <a href="tools.html" style="font-weight: bold; border-bottom: 2px solid rgba(255,255,255,0.1);">📚 View Gallery</a>
                        ${APP_CONFIG.tools.map(t => `<a href="${t.link}">${t.icon} ${t.name}</a>`).join('')}
                    </div>
                </li>
                <li><a href="settings.html">⚙️ Settings</a></li>
                <li><button id="theme-toggle" style="background:none; border:none; cursor:pointer; font-size:1.2rem; padding:0; width:auto;" title="Toggle Theme">🌙</button></li>
            </ul>
        </nav>
    `;

    // 3. Build Footer HTML
    const footerHtml = `
        <footer class="footer">
            <p>${APP_CONFIG.name} ${APP_CONFIG.version} | <a href="https://github.com/jasonbra1n/Local-LLM-Toolkit" target="_blank">GitHub</a> | <a href="../ROADMAP.md" target="_blank">Roadmap</a></p>
            <p style="opacity: 0.5; margin-top: 5px;">Privacy Focused. Localhost Centric.</p>
        </footer>
    `;

    // 4. Inject into DOM
    document.body.insertAdjacentHTML('afterbegin', navHtml);
    document.body.insertAdjacentHTML('beforeend', footerHtml);

    // 5. Highlight Active Link
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.nav-links a, .dropdown-content a');
    links.forEach(link => { if (link.getAttribute('href') === currentPath) link.classList.add('active'); });

    // 6. Mobile Menu Toggles
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const toolsToggle = document.getElementById('tools-toggle');
    const toolsDropdown = document.getElementById('tools-dropdown');

    navToggle.addEventListener('click', () => navMenu.classList.toggle('active'));
    
    toolsToggle.addEventListener('click', (e) => {
        // Only toggle on mobile where hover is disabled
        if (window.innerWidth <= 768) {
            e.preventDefault();
            toolsDropdown.classList.toggle('active');
        }
    });

    // 7. Theme Toggler Logic
    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.innerText = savedTheme === 'dark' ? '🌙' : '☀️';

    themeToggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        themeToggle.innerText = next === 'dark' ? '🌙' : '☀️';
    });

    // 8. Inject/Standardize Status Bar
    // This ensures every page has the connection status and dynamic target IP display.
    const container = document.querySelector('.container');
    const h1 = container ? container.querySelector('h1') : null;
    const existingStatus = document.querySelector('.status-bar');

    const statusBarHtml = `
        <div class="status-bar">
            <div><span id="status-dot" class="status-indicator"></span><span id="status-text">Checking connection...</span></div>
            <div id="target-display" style="font-size: 0.8em; opacity: 0.7;">Target: Loading...</div>
        </div>
    `;

    if (existingStatus) {
        existingStatus.outerHTML = statusBarHtml;
    } else if (container && h1) {
        h1.insertAdjacentHTML('afterend', statusBarHtml);
    }
});