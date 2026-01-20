/**
 * PreciseFlow Project Website
 * Minimal interactions for academic paper presentation
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ PreciseFlow website loaded');

    // Initialize Juxtapose sliders
    initializeJuxtapose();

    // BibTeX copy functionality
    setupBibtexCopy();

    // Smooth scroll
    setupSmoothScroll();
});

/**
 * Initialize Juxtapose comparison sliders
 */
function initializeJuxtapose() {
    // Juxtapose library will automatically initialize elements with class "juxtapose"
    // No additional code needed if using the CDN version
    console.log('Juxtapose sliders initialized');
}

/**
 * Setup BibTeX copy to clipboard
 */
function setupBibtexCopy() {
    const bibtexBox = document.querySelector('.bibtex-box');

    if (bibtexBox) {
        bibtexBox.title = 'Click to copy BibTeX';

        bibtexBox.addEventListener('click', () => {
            const bibtexText = bibtexBox.querySelector('code').textContent;

            navigator.clipboard.writeText(bibtexText).then(() => {
                // Visual feedback
                const originalBorder = bibtexBox.style.borderColor;
                bibtexBox.style.borderColor = '#8D85E5';
                bibtexBox.style.boxShadow = '0 0 20px rgba(141, 133, 229, 0.3)';

                setTimeout(() => {
                    bibtexBox.style.borderColor = originalBorder;
                    bibtexBox.style.boxShadow = 'none';
                }, 500);

                showToast('BibTeX copied to clipboard!');
            }).catch(err => {
                console.error('Failed to copy:', err);
            });
        });
    }
}

/**
 * Setup smooth scrolling for anchor links
 */
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Show toast notification
 */
function showToast(message) {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(141, 133, 229, 0.9);
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        font-size: 0.95rem;
        font-weight: 500;
        z-index: 1000;
        backdrop-filter: blur(10px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        animation: slideUp 0.3s ease-out;
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slideDown 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 2000);
}

// Toast animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }
    
    @keyframes slideDown {
        from {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        to {
            opacity: 0;
            transform: translateX(-50%) translateY(20px);
        }
    }
`;
document.head.appendChild(style);
