/**
 * Switches between different visualizations when toggle buttons are clicked
 */
function switchVisualization(type) {
    console.log(`Switching visualization to: ${type}`);
    
    // Get the image element
    const imageElement = document.getElementById('tfidf-image');
    if (!imageElement) {
        console.error('tfidf-image element not found!');
        return;
    }
    
    // Update the image source based on the selected type
    switch(type) {
        case 'overall':
            imageElement.src = 'assets/tfidf_overall_all.png';
            imageElement.alt = 'TF-IDF top 10 words per source';
            break;
        case 'positive':
            imageElement.src = 'assets/tfidf_positive_all.png';
            imageElement.alt = 'TF-IDF top 10 positive sentiment words per source';
            break;
        case 'negative':
            imageElement.src = 'assets/tfidf_negative_all.png';
            imageElement.alt = 'TF-IDF top 10 negative sentiment words per source';
            break;
        default:
            console.error(`Unknown visualization type: ${type}`);
            return;
    }
    
    // Update the active button
    document.querySelectorAll('.visualization-toggle .btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Find the button that matches the current type and make it active
    const activeButton = document.querySelector(`.visualization-toggle .btn[onclick="switchVisualization('${type}')"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

// Function to toggle code visibility
function toggleCodeVisibility(button) {
    const codeContent = button.closest('.code-block').querySelector('.code-content');
    if (codeContent.classList.contains('hidden')) {
        codeContent.classList.remove('hidden');
        button.textContent = 'Hide Code';
    } else {
        codeContent.classList.add('hidden');
        button.textContent = 'Show Code';
    }
}

// Initialize toggle buttons when the page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log("viz-toggle.js: Document ready");
    
    // Simplified initialization - check if visualization toggle exists on any page
    const toggleContainer = document.querySelector('.visualization-toggle');
    if (toggleContainer) {
        console.log("viz-toggle.js: Toggle container found, initializing");
        // Set the default visualization to 'overall'
        switchVisualization('overall');
    }
});
