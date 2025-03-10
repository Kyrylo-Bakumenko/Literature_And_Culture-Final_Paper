/**
 * Toggles the visibility of code blocks
 * @param {HTMLElement} button - The button that was clicked
 */
function toggleCodeVisibility(button) {
    // Find the code content container (sibling of the header)
    const codeBlock = button.closest('.code-block');
    const codeContent = codeBlock.querySelector('.code-content');
    
    // Toggle visibility
    if (codeContent.classList.contains('hidden')) {
        codeContent.classList.remove('hidden');
        button.textContent = 'Hide Code';
    } else {
        codeContent.classList.add('hidden');
        button.textContent = 'Show Code';
    }
}

// Initialize any code blocks when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // This is in case we need any initialization logic
});
