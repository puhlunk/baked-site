/**
 * Baked on 8th - Main JavaScript
 * Enhanced for better performance and user experience
 */

document.addEventListener('DOMContentLoaded', function() {
    // Cache frequently used DOM elements
    const header = document.querySelector('header');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const animateElements = document.querySelectorAll('.cake-card, .info-box, .faq-item, .location-card');
    
    // Initialize Mobile Menu Toggle
    initMobileMenu();
    
    // Initialize Header Scroll Effect
    initHeaderScroll();
    
    // Initialize Scroll Animations
    initScrollAnimations();
    
    // Initialize Add to Cart functionality
    initCartFunctionality();
    
    // Initialize Smooth Scrolling
    initSmoothScrolling();
    
    // Initialize Native Lazy Loading for images
    initImageLazyLoading();
    
    /**
     * Mobile Menu Functionality
     */
    function initMobileMenu() {
        if (mobileMenuBtn && mobileNav) {
            mobileMenuBtn.addEventListener('click', function() {
                this.classList.toggle('active');
                mobileNav.classList.toggle('active');
                document.body.classList.toggle('menu-open');
            });
            
            mobileNavLinks.forEach(link => {
                link.addEventListener('click', function() {
                    mobileMenuBtn.classList.remove('active');
                    mobileNav.classList.remove('active');
                    document.body.classList.remove('menu-open');
                });
            });
        }
    }
    
    /**
     * Header Scroll Effect with Throttling
     */
    function initHeaderScroll() {
        let lastScrollTop = 0;
        let ticking = false;
        
        window.addEventListener('scroll', function() {
            lastScrollTop = window.scrollY;
            
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    if (lastScrollTop > 50) {
                        header.classList.add('header-scrolled');
                    } else {
                        header.classList.remove('header-scrolled');
                    }
                    ticking = false;
                });
                
                ticking = true;
            }
        });
    }
    
    /**
     * Scroll Animations with Intersection Observer
     */
    function initScrollAnimations() {
        if ('IntersectionObserver' in window) {
            const animationObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal', 'active');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                root: null,
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });
            
            // Add initial classes to elements
            animateElements.forEach(element => {
                element.classList.add('reveal');
                animationObserver.observe(element);
            });
        } else {
            // Fallback for browsers that don't support Intersection Observer
            animateElements.forEach(element => {
                element.classList.add('animate-fade-in');
            });
        }
    }
    
    /**
     * Add to Cart Functionality
     */
    function initCartFunctionality() {
        addToCartButtons.forEach(button => {
            button.addEventListener('click', function() {
                const cakeInfo = this.closest('.cake-info');
                const cakeName = cakeInfo.querySelector('h3').textContent;
                const cakePrice = cakeInfo.querySelector('.price').textContent;
                
                // Show notification
                showCartNotification(cakeName);
                
                // Visual feedback on button
                const originalText = this.textContent;
                this.textContent = 'Added to Cart!';
                this.classList.add('added');
                this.disabled = true;
                
                // Reset button after animation
                setTimeout(() => {
                    this.textContent = originalText;
                    this.classList.remove('added');
                    this.disabled = false;
                }, 2000);
                
                // Mock cart functionality
                console.log(`Added ${cakeName} (${cakePrice}) to cart`);
            });
        });
    }
    
    /**
     * Cart Notification System
     */
    function showCartNotification(itemName) {
        // Check if notification element already exists
        let notification = document.querySelector('.cart-notification');
        
        if (!notification) {
            notification = document.createElement('div');
            notification.className = 'cart-notification';
            document.body.appendChild(notification);
        }
        
        notification.textContent = `${itemName} added to cart`;
        notification.classList.add('active');
        
        setTimeout(() => {
            notification.classList.remove('active');
        }, 3000);
    }
    
    /**
     * Smooth Scrolling for Anchor Links
     */
    function initSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Calculate header height dynamically
                    const headerHeight = header.offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                    
                    window.scrollTo({
                        top: targetPosition - headerHeight - 20, // Additional 20px for spacing
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    /**
     * Native Lazy Loading for Images
     */
    function initImageLazyLoading() {
        if ('loading' in HTMLImageElement.prototype) {
            // Browser supports native lazy loading
            const images = document.querySelectorAll('img:not([loading])');
            images.forEach(img => {
                img.setAttribute('loading', 'lazy');
            });
        }
    }
});