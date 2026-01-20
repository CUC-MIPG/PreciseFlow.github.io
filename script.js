/**
 * PreciseFlow Project Website
 * Interactive functionality
 */

// Smooth scrolling for navigation
document.addEventListener('DOMContentLoaded', () => {
    // Tab navigation
    const tabs = document.querySelectorAll('.tab');

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();

            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));

            // Add active class to clicked tab
            tab.classList.add('active');

            // Smooth scroll to section
            const targetId = tab.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for sticky nav
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Update active tab on scroll
    const sections = document.querySelectorAll('.section');
    const navHeight = document.querySelector('.nav-tabs').offsetHeight;

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.pageYOffset >= sectionTop - navHeight - 100) {
                current = section.getAttribute('id');
            }
        });

        tabs.forEach(tab => {
            tab.classList.remove('active');
            if (tab.getAttribute('href') === `#${current}`) {
                tab.classList.add('active');
            }
        });
    });

    // Add intersection observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });

    // Video placeholder hover effects
    const videoPlaceholders = document.querySelectorAll('.video-placeholder');

    videoPlaceholders.forEach(placeholder => {
        placeholder.addEventListener('mouseenter', () => {
            placeholder.style.transform = 'translateY(-5px) scale(1.02)';
        });

        placeholder.addEventListener('mouseleave', () => {
            placeholder.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Copy BibTeX to clipboard
    const bibtexBox = document.querySelector('.bibtex-box');

    if (bibtexBox) {
        bibtexBox.style.cursor = 'pointer';
        bibtexBox.title = 'Click to copy BibTeX';

        bibtexBox.addEventListener('click', () => {
            const bibtexText = bibtexBox.querySelector('code').textContent;

            navigator.clipboard.writeText(bibtexText).then(() => {
                // Show feedback
                const originalBorder = bibtexBox.style.borderColor;
                bibtexBox.style.borderColor = '#8D85E5';
                bibtexBox.style.boxShadow = '0 0 20px rgba(141, 133, 229, 0.3)';

                setTimeout(() => {
                    bibtexBox.style.borderColor = originalBorder;
                    bibtexBox.style.boxShadow = 'none';
                }, 500);

                // Optional: Show a toast notification
                showToast('BibTeX copied to clipboard!');
            }).catch(err => {
                console.error('Failed to copy:', err);
            });
        });
    }

    // Toast notification function
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

    // Add CSS for toast animations
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

    console.log('✅ PreciseFlow website loaded successfully!');
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');

    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
    }
});
