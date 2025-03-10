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
            imageElement.src = 'assets/tfidf_top10.jpg';
            imageElement.alt = 'TF-IDF top 10 words per source';
            break;
        case 'positive':
            imageElement.src = 'assets/positive_words.jpg';
            imageElement.alt = 'Positive words per source';
            break;
        case 'negative':
            imageElement.src = 'assets/negative_words.jpg';
            imageElement.alt = 'Negative words per source';
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
    
    // Wait a bit to ensure content is rendered
    setTimeout(() => {
        // Only run this code on the text-analysis page
        const urlParams = new URLSearchParams(window.location.search);
        const mdParam = urlParams.get('md');
        
        if (mdParam === 'text-analysis') {
            console.log("viz-toggle.js: On text-analysis page, looking for toggle container");
            // Check if the toggle buttons exist
            const toggleContainer = document.querySelector('.visualization-toggle');
            if (toggleContainer) {
                console.log("viz-toggle.js: Toggle container found, initializing");
                // Set the default visualization to 'overall'
                switchVisualization('overall');
            } else {
                console.warn("viz-toggle.js: Toggle container not found!");
            }
        }
    }, 1000);
});
