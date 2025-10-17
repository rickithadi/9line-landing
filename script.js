// ==========================================================================
// 9LINE AGENCY - INTERACTIVE FUNCTIONALITY
// ==========================================================================

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
    
    // Smooth Scrolling for Anchor Links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navigation Background on Scroll
    const nav = document.querySelector('.nav');
    let lastScrollY = window.scrollY;
    
    function updateNavOnScroll() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 50) {
            nav.style.background = 'rgba(255, 255, 255, 0.98)';
            nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
            nav.style.boxShadow = 'none';
        }
        
        // Stable nav visibility on scroll
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            nav.style.opacity = '0.95';
        } else {
            nav.style.opacity = '1';
        }
        
        lastScrollY = currentScrollY;
    }
    
    window.addEventListener('scroll', updateNavOnScroll);
    
    // Hero Audit Form Handling
    const heroAuditForm = document.getElementById('hero-audit-form');
    if (heroAuditForm) {
        heroAuditForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(heroAuditForm);
            const url = heroAuditForm.querySelector('input[type="url"]').value;
            const email = heroAuditForm.querySelector('input[type="email"]').value;
            
            // Basic validation
            if (!url || !email) {
                showNotification('Please fill in all fields.', 'error');
                return;
            }
            
            // URL validation
            try {
                new URL(url);
            } catch (e) {
                showNotification('Please enter a valid website URL.', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Show loading state
            const submitBtn = heroAuditForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Processing...';
            submitBtn.disabled = true;
            
            // Simulate audit request (replace with actual endpoint)
            setTimeout(() => {
                showNotification('🎉 Audit request received! Check your email for your personalized roadmap.', 'success');
                heroAuditForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }

    // Audit Form Handling
    const auditForm = document.getElementById('audit-form');
    if (auditForm) {
        auditForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(auditForm);
            const url = auditForm.querySelector('input[type="url"]').value;
            const email = auditForm.querySelector('input[type="email"]').value;
            
            // Basic validation
            if (!url || !email) {
                showNotification('Please fill in all fields.', 'error');
                return;
            }
            
            // URL validation
            try {
                new URL(url);
            } catch (e) {
                showNotification('Please enter a valid website URL.', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Show loading state
            const submitBtn = auditForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Processing...';
            submitBtn.disabled = true;
            
            // Simulate audit request (replace with actual endpoint)
            setTimeout(() => {
                showNotification('Audit request received! We\'ll email your report within 24 hours.', 'success');
                auditForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }

    // Contact Form Handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Basic validation
            if (!data.name || !data.email || !data.message) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual endpoint)
            setTimeout(() => {
                showNotification('Thank you! We\'ll get back to you within 24 hours.', 'success');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }
    
    // Intersection Observer for Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.service-card, .case-study, .tech-category');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
    
    // Tech Stack Hover Effects
    const techItems = document.querySelectorAll('.tech-item');
    techItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px) scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Code Tab Switching
    const codeTabs = document.querySelectorAll('.code-tab');
    const codeContents = document.querySelectorAll('.code-content');
    
    codeTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all tabs
            codeTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Hide all code contents
            codeContents.forEach(content => content.classList.add('hidden'));
            // Show target content
            const targetContent = document.getElementById(targetTab + '-tab');
            if (targetContent) {
                targetContent.classList.remove('hidden');
            }
        });
    });
    
    // Service Card Interactions
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-12px)';
            this.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // Performance Metrics Animation
    const statNumbers = document.querySelectorAll('.stat-number');
    
    function animateNumbers() {
        statNumbers.forEach(stat => {
            const finalValue = stat.textContent;
            const isPercentage = finalValue.includes('%');
            const isPlus = finalValue.includes('+');
            const numericValue = parseFloat(finalValue.replace(/[%+]/g, ''));
            
            let currentValue = 0;
            const increment = numericValue / 60; // Animate over ~1 second at 60fps
            
            const timer = setInterval(() => {
                currentValue += increment;
                if (currentValue >= numericValue) {
                    currentValue = numericValue;
                    clearInterval(timer);
                }
                
                let displayValue = Math.floor(currentValue);
                if (isPercentage) displayValue += '%';
                if (isPlus) displayValue += '+';
                
                stat.textContent = displayValue;
            }, 16); // ~60fps
        });
    }
    
    // Trigger number animation when stats section is visible
    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateNumbers();
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        statsObserver.observe(statsSection);
    }
    
    // Trigger animation for audit preview
    const auditPreview = document.querySelector('.audit-preview');
    if (auditPreview) {
        const auditObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Trigger all audit preview animations
                    const auditHeader = entry.target.querySelector('.audit-header');
                    const beforeSection = entry.target.querySelector('.before-section');
                    const afterSection = entry.target.querySelector('.after-section');
                    const comparisonDivider = entry.target.querySelector('.comparison-divider');
                    const categoryCards = entry.target.querySelectorAll('.category-card');
                    const testimonial = entry.target.querySelector('.audit-testimonial');
                    const actions = entry.target.querySelector('.audit-actions');
                    const metricRows = entry.target.querySelectorAll('.metric-row');
                    
                    // Animation sequence timing
                    const timings = {
                        header: 0,
                        beforeSection: 0.3,
                        divider: 0.6,
                        afterSection: 0.9,
                        categories: 1.4,
                        testimonial: 2.2,
                        actions: 2.6
                    };
                    
                    // Header animation
                    if (auditHeader) {
                        auditHeader.style.opacity = '0';
                        auditHeader.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            auditHeader.style.transition = 'all 0.8s ease-out';
                            auditHeader.style.opacity = '1';
                            auditHeader.style.transform = 'translateY(0)';
                        }, timings.header * 1000);
                    }
                    
                    // Before section animation
                    if (beforeSection) {
                        beforeSection.style.opacity = '0';
                        beforeSection.style.transform = 'translateX(-50px)';
                        setTimeout(() => {
                            beforeSection.style.transition = 'all 0.8s ease-out';
                            beforeSection.style.opacity = '1';
                            beforeSection.style.transform = 'translateX(0)';
                        }, timings.beforeSection * 1000);
                    }
                    
                    // Divider animation
                    if (comparisonDivider) {
                        comparisonDivider.style.opacity = '0';
                        comparisonDivider.style.transform = 'scale(0.5)';
                        setTimeout(() => {
                            comparisonDivider.style.transition = 'all 0.6s ease-out';
                            comparisonDivider.style.opacity = '1';
                            comparisonDivider.style.transform = 'scale(1)';
                        }, timings.divider * 1000);
                    }
                    
                    // After section animation
                    if (afterSection) {
                        afterSection.style.opacity = '0';
                        afterSection.style.transform = 'translateX(50px)';
                        setTimeout(() => {
                            afterSection.style.transition = 'all 0.8s ease-out';
                            afterSection.style.opacity = '1';
                            afterSection.style.transform = 'translateX(0)';
                        }, timings.afterSection * 1000);
                    }
                    
                    // Metric rows animation (staggered within sections)
                    metricRows.forEach((row, index) => {
                        row.style.opacity = '0';
                        row.style.transform = 'translateY(20px)';
                        const delay = (index < 4 ? timings.beforeSection + 0.4 : timings.afterSection + 0.4) + (index % 4) * 0.1;
                        setTimeout(() => {
                            row.style.transition = 'all 0.6s ease-out';
                            row.style.opacity = '1';
                            row.style.transform = 'translateY(0)';
                        }, delay * 1000);
                    });
                    
                    // Category cards animation
                    categoryCards.forEach((card, index) => {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(30px)';
                        setTimeout(() => {
                            card.style.transition = 'all 0.6s ease-out';
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, (timings.categories + index * 0.1) * 1000);
                    });
                    
                    // Testimonial animation
                    if (testimonial) {
                        testimonial.style.opacity = '0';
                        testimonial.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            testimonial.style.transition = 'all 0.8s ease-out';
                            testimonial.style.opacity = '1';
                            testimonial.style.transform = 'translateY(0)';
                        }, timings.testimonial * 1000);
                    }
                    
                    // Actions animation
                    if (actions) {
                        actions.style.opacity = '0';
                        actions.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            actions.style.transition = 'all 0.8s ease-out';
                            actions.style.opacity = '1';
                            actions.style.transform = 'translateY(0)';
                        }, timings.actions * 1000);
                    }
                    
                    auditObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        auditObserver.observe(auditPreview);
    }
    
    // Interactive Audit Category Cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        const categoryType = card.getAttribute('data-category');
        
        // Add hover tooltips with detailed information
        const tooltipData = {
            performance: {
                title: 'Performance Issues',
                details: [
                    'Large image files slowing load times',
                    'Unused CSS and JavaScript',
                    'Poor server response times',
                    'Unoptimized fonts and resources'
                ]
            },
            mobile: {
                title: 'Mobile Experience Problems',
                details: [
                    'Text too small to read',
                    'Touch targets too small',
                    'Content wider than screen',
                    'Poor mobile navigation'
                ]
            },
            seo: {
                title: 'SEO Optimization Gaps',
                details: [
                    'Missing meta descriptions',
                    'Poor heading structure',
                    'No structured data markup',
                    'Broken internal links'
                ]
            },
            conversion: {
                title: 'Conversion Blockers',
                details: [
                    'Confusing call-to-action buttons',
                    'Long, complex forms',
                    'Unclear value proposition',
                    'Poor trust signals'
                ]
            }
        };
        
        // Create tooltip element
        const tooltip = document.createElement('div');
        tooltip.className = 'category-tooltip';
        tooltip.innerHTML = `
            <div class="tooltip-title">${tooltipData[categoryType].title}</div>
            <ul class="tooltip-list">
                ${tooltipData[categoryType].details.map(detail => `<li>${detail}</li>`).join('')}
            </ul>
        `;
        
        // Add tooltip styles and interactions
        card.addEventListener('mouseenter', function() {
            document.body.appendChild(tooltip);
            const rect = this.getBoundingClientRect();
            tooltip.style.position = 'fixed';
            tooltip.style.top = `${rect.bottom + 10}px`;
            tooltip.style.left = `${rect.left + (rect.width / 2)}px`;
            tooltip.style.transform = 'translateX(-50%)';
            tooltip.style.zIndex = '1000';
            tooltip.style.opacity = '0';
            tooltip.style.transition = 'opacity 0.3s ease';
            
            // Trigger tooltip appearance
            setTimeout(() => {
                tooltip.style.opacity = '1';
            }, 10);
        });
        
        card.addEventListener('mouseleave', function() {
            if (tooltip.parentNode) {
                tooltip.style.opacity = '0';
                setTimeout(() => {
                    if (tooltip.parentNode) {
                        document.body.removeChild(tooltip);
                    }
                }, 300);
            }
        });
        
        // Add click interaction for mobile
        card.addEventListener('click', function() {
            // Toggle expanded state
            this.classList.toggle('expanded');
            
            // Add expanded content if not exists
            let expandedContent = this.querySelector('.category-expanded');
            if (!expandedContent) {
                expandedContent = document.createElement('div');
                expandedContent.className = 'category-expanded';
                expandedContent.innerHTML = `
                    <div class="expanded-title">Common Issues Found:</div>
                    <ul class="expanded-list">
                        ${tooltipData[categoryType].details.map(detail => `<li>${detail}</li>`).join('')}
                    </ul>
                `;
                this.appendChild(expandedContent);
            }
        });
    });
    
    // Enhanced Tooltip and Expandable Content Interactions
    const expandableCards = document.querySelectorAll('.expandable-card');
    expandableCards.forEach(card => {
        // Add click to expand functionality for mobile/touch devices
        card.addEventListener('click', function(e) {
            // Don't interfere with other clickable elements
            if (e.target.closest('button, a, input, select, textarea')) return;
            
            this.classList.toggle('expanded');
            
            // Update ARIA attributes for accessibility
            const isExpanded = this.classList.contains('expanded');
            this.setAttribute('aria-expanded', isExpanded);
        });
        
        // Keyboard support
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.classList.toggle('expanded');
                const isExpanded = this.classList.contains('expanded');
                this.setAttribute('aria-expanded', isExpanded);
            }
        });
        
        // Initialize ARIA attributes
        card.setAttribute('aria-expanded', 'false');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', card.getAttribute('aria-label') + ' - Click to expand for more details');
    });
    
    // Enhanced tooltip positioning for edge cases
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            // Dynamic positioning to prevent tooltips from going off-screen
            const rect = this.getBoundingClientRect();
            const tooltipWidth = 250; // approximate max width
            
            if (rect.left + tooltipWidth/2 > window.innerWidth) {
                this.style.setProperty('--tooltip-offset', 'translateX(-80%)');
            } else if (rect.left - tooltipWidth/2 < 0) {
                this.style.setProperty('--tooltip-offset', 'translateX(-20%)');
            } else {
                this.style.setProperty('--tooltip-offset', 'translateX(-50%)');
            }
        });
    });
    
    // Add subtle animation delays for staggered reveals
    const cards = document.querySelectorAll('.card-grid .card');
    cards.forEach((card, index) => {
        card.style.setProperty('--card-delay', `${index * 0.1}s`);
    });
    
    // Removed typing effect to prevent layout jumping
    
    // Progressive Enhancement for Modern Browsers
    if ('IntersectionObserver' in window) {
        // Lazy load images when added
        const lazyImages = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    }
    
    // Form Enhancement
    const formInputs = document.querySelectorAll('.form-input, .form-textarea');
    formInputs.forEach(input => {
        // Add floating label effect
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
        
        // Check if input has value on load
        if (input.value) {
            input.parentElement.classList.add('focused');
        }
    });
});

// Utility Functions
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '100px',
        right: '20px',
        background: type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6',
        color: 'white',
        padding: '16px 24px',
        borderRadius: '8px',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        zIndex: '9999',
        transform: 'translateX(400px)',
        transition: 'transform 0.3s ease-out',
        maxWidth: '400px',
        fontSize: '14px',
        fontWeight: '500'
    });
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after delay
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 4000);
}

// Handle reduced motion preferences
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Disable animations for users who prefer reduced motion
    document.documentElement.style.setProperty('--duration-fast', '0ms');
    document.documentElement.style.setProperty('--duration-normal', '0ms');
    document.documentElement.style.setProperty('--duration-slow', '0ms');
}

// Error Handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // Could send error reports to analytics service
});

// Performance Monitoring
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
            
            if (loadTime > 3000) {
                console.warn('Page load time is slow:', loadTime + 'ms');
            }
        }, 0);
    });
}