import './style.css'

// Initializing the design system showcase
document.addEventListener('DOMContentLoaded', () => {
    console.log('KodNest Premium Build System Initialized');
    
    // Simple interactive elements for the showcase
    const copyBtn = document.querySelector('.btn-secondary');
    if (copyBtn && copyBtn.innerText === 'Copy Prompt') {
        copyBtn.addEventListener('click', () => {
            const promptText = document.querySelector('.prompt-box').innerText;
            navigator.clipboard.writeText(promptText).then(() => {
                const originalText = copyBtn.innerText;
                copyBtn.innerText = 'Copied!';
                setTimeout(() => {
                    copyBtn.innerText = originalText;
                }, 2000);
            });
        });
    }
});
