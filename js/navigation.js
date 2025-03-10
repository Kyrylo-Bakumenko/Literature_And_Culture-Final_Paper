document.addEventListener('DOMContentLoaded', () => {
    const toPaperBtn = document.getElementById('to-paper-btn');
    const toVizBtn = document.getElementById('to-viz-btn');
    const urlParams = new URLSearchParams(window.location.search);
    const mdParam = urlParams.get('md');

    // Show/hide appropriate navigation buttons based on the current page
    if (mdParam === 'text-analysis') {
        toPaperBtn.style.display = 'flex';
        toVizBtn.style.display = 'none';
    } else {
        toPaperBtn.style.display = 'none';
        toVizBtn.style.display = 'flex';
    }

    // Set up navigation button click handlers
    toPaperBtn.addEventListener('click', () => {
        window.location.href = 'index.html?md=korean-identity-final';
    });
    
    toVizBtn.addEventListener('click', () => {
        window.location.href = 'index.html?md=text-analysis';
    });

    // Function to scroll to a specific visualization section
    window.scrollToViz = function(vizId) {
        const element = document.getElementById(vizId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else if (mdParam !== 'text-analysis') {
            // If we're not on the visualization page, navigate there first
            window.location.href = `index.html?md=text-analysis#${vizId}`;
        }
    };

    // Add ID attributes to visualization sections for direct navigation
    if (mdParam === 'text-analysis') {
        setTimeout(() => {
            // Add IDs to each visualization section after content loads
            const pythonCells = document.querySelectorAll('.python-cell');
            pythonCells.forEach((cell, index) => {
                if (cell.querySelector('pre code').textContent.includes('plt.show()')) {
                    cell.id = `viz-${index}`;
                }
            });
        }, 2000); // Allow time for content to load
    }
});
