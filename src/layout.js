/**
 * Layout Manager
 * Injects the Navigation Bar and Footer into all pages to create a unified "App" feel.
 * Also injects the necessary CSS for the layout.
 */

const APP_CONFIG = {
    name: "Local LLM Toolkit",
    version: "v0.1.4",
    tools: [
        { name: "Chat Interface", link: "chat_interface.html", icon: "💬" },
        { name: "Prompt Generator", link: "prompt_generator.html", icon: "📝" },
        { name: "Idea Generator", link: "idea_generator.html", icon: "💡" },
        { name: "Summarizer", link: "summarizer.html", icon: "📝" },
        { name: "Story Architect", link: "story_architect.html", icon: "📖" },
        { name: "Novel Writer", link: "novel_writer.html", icon: "✍️" },
        { name: "Email Polisher", link: "email_polisher.html", icon: "📧" },
        { name: "Code Janitor", link: "code_janitor.html", icon: "🧹" },
        { name: "Regex Wizard", link: "regex_wizard.html", icon: "🧙‍♂️" },
        { name: "Universal Translator", link: "universal_translator.html", icon: "🌐" },
        { name: "Agent Builder", link: "agent_builder.html", icon: "🤖" },
        { name: "Skill Builder", link: "skill_builder.html", icon: "🛠️" },
        { name: "Meeting Notes", link: "meeting_notes.html", icon: "📅" },
        { name: "Visual Prompter", link: "visual_prompter.html", icon: "🎨" },
        { name: "Project Architect", link: "project_prompt_builder.html", icon: "🏗️" },
        { name: "YouTube Script", link: "youtube_script_writer.html", icon: "📹" },
        { name: "Quiz Generator", link: "quiz_generator.html", icon: "❓" },
        { name: "Persona Chat", link: "persona_chat.html", icon: "🎭" },
        { name: "Markdown to HTML", link: "markdown_converter.html", icon: "📝" }
    ]
};

document.addEventListener("DOMContentLoaded", () => {
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
                    <a href="#" class="dropbtn" id="tools-toggle">Tools ▾</a>
                    <div class="dropdown-content">
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