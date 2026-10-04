// ============================================
// ECONOVA STORE - VANILLA JAVASCRIPT
// ============================================

// ============================================
// PRODUCT DATA
// ============================================

const products = [
    {
        id: 1,
        name: "EcoCharge Solar Power Bank",
        price: 49,
        description: "Harness the sun's power. Portable solar charging for all your devices.",
        image: "assets/images/ecocharge-powerbank.png",
        emoji: "☀️",
        rating: 4.8,
        reviews: 234
    },
    {
        id: 2,
        name: "SmartLeaf Air Monitor",
        price: 79,
        description: "Monitor air quality in real-time with smart sensors and insights.",
        image: "assets/images/smartleaf-air-monitor.png",
        emoji: "🌿",
        rating: 4.6,
        reviews: 189
    },
    {
        id: 3,
        name: "TerraBuds Wireless Earbuds",
        price: 89,
        description: "Eco-friendly wireless audio with premium sound quality and comfort.",
        image: "assets/images/terrabuds-earbuds.png",
        emoji: "🎧",
        rating: 4.7,
        reviews: 312
    },
    {
        id: 4,
        name: "EcoGlow Smart Lamp",
        price: 59,
        description: "Energy-efficient LED lighting with smart controls and scheduling.",
        image: "assets/images/ecoglow-smart-lamp.png",
        emoji: "💡",
        rating: 4.5,
        reviews: 156
    },
    {
        id: 5,
        name: "HydroSense Smart Bottle",
        price: 39,
        description: "Stay hydrated. Smart reminders keep you drinking water throughout the day.",
        image: "assets/images/hydrosense-bottle.png",
        emoji: "💧",
        rating: 4.4,
        reviews: 267
    },
    {
        id: 6,
        name: "SolarNest Mini Charger",
        price: 69,
        description: "Compact solar charger perfect for travel and outdoor adventures.",
        image: "assets/images/solarnest-charger.png",
        emoji: "⚡",
        rating: 4.9,
        reviews: 423
    }
];

// ============================================
// CART MANAGEMENT
// ============================================

class ShoppingCart {
    constructor() {
        this.items = this.loadFromLocalStorage();
        this.init();
    }

    init() {
        this.updateCartCount();
        this.renderCart();
    }

    loadFromLocalStorage() {
        const stored = localStorage.getItem('econova-cart');
        return stored ? JSON.parse(stored) : [];
    }

    saveToLocalStorage() {
        localStorage.setItem('econova-cart', JSON.stringify(this.items));
    }

    addItem(product) {
        const existingItem = this.items.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({
                ...product,
                quantity: 1
            });
        }

        this.saveToLocalStorage();
        this.updateCartCount();
        this.renderCart();
        this.animateCartIcon();
        this.showAddToCartFeedback();
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveToLocalStorage();
        this.updateCartCount();
        this.renderCart();
    }

    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            if (quantity <= 0) {
                this.removeItem(productId);
            } else {
                item.quantity = quantity;
                this.saveToLocalStorage();
                this.renderCart();
            }
        }
    }

    getSubtotal() {
        return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }

    getTotalItems() {
        return this.items.reduce((sum, item) => sum + item.quantity, 0);
    }

    updateCartCount() {
        const cartCount = document.getElementById('cartCount');
        const total = this.getTotalItems();
        cartCount.textContent = total;
        cartCount.style.display = total > 0 ? 'flex' : 'none';
    }

    renderCart() {
        const cartBody = document.getElementById('cartBody');
        const subtotal = document.getElementById('subtotal');
        const cartTotal = document.getElementById('cartTotal');

        if (this.items.length === 0) {
            cartBody.innerHTML = '<p class="empty-cart-message">Your cart is empty</p>';
            subtotal.textContent = '$0.00';
            cartTotal.textContent = '$0.00';
            return;
        }

        cartBody.innerHTML = this.items.map(item => `
            <div class="cart-item">
                <div class="cart-item-image-wrapper">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="cart-item-image-fallback" style="display:none;">${item.emoji}</div>
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                    <div class="cart-item-controls">
                        <button class="quantity-btn decrease-qty" data-id="${item.id}">−</button>
                        <span class="quantity-value">${item.quantity}</span>
                        <button class="quantity-btn increase-qty" data-id="${item.id}">+</button>
                        <button class="remove-item-btn" data-id="${item.id}">Remove</button>
                    </div>
                </div>
            </div>
        `).join('');

        // Attach event listeners
        document.querySelectorAll('.increase-qty').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.target.dataset.id);
                const item = this.items.find(i => i.id === id);
                this.updateQuantity(id, item.quantity + 1);
            });
        });

        document.querySelectorAll('.decrease-qty').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.target.dataset.id);
                const item = this.items.find(i => i.id === id);
                this.updateQuantity(id, item.quantity - 1);
            });
        });

        document.querySelectorAll('.remove-item-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.target.dataset.id);
                this.removeItem(id);
            });
        });

        const total = this.getSubtotal();
        subtotal.textContent = `$${total.toFixed(2)}`;
        cartTotal.textContent = `$${total.toFixed(2)}`;
    }

    animateCartIcon() {
        const cartCount = document.getElementById('cartCount');
        cartCount.style.animation = 'popIn 0.4s ease-out';
        setTimeout(() => {
            cartCount.style.animation = '';
        }, 400);
    }

    showAddToCartFeedback() {
        const cartBtn = document.getElementById('cartBtn');
        cartBtn.style.transform = 'scale(1.1)';
        setTimeout(() => {
            cartBtn.style.transform = '';
        }, 300);
    }
}

// ============================================
// PRODUCT RENDERING
// ============================================

function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    
    productsGrid.innerHTML = products.map((product, index) => `
        <div class="product-card" style="animation-delay: ${index * 0.1}s;">
            <div class="product-image-wrapper">
                <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="product-image-fallback" style="display:none;">${product.emoji}</div>
            </div>
            <div class="product-content">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-rating">
                    <span class="stars">${'★'.repeat(Math.floor(product.rating))}${product.rating % 1 ? '☆' : ''}</span>
                    <span class="rating-count">(${product.reviews})</span>
                </div>
                <div class="product-footer">
                    <span class="product-price">$${product.price}</span>
                    <button class="add-to-cart-btn" data-id="${product.id}">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    // Attach click listeners
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.id);
            const product = products.find(p => p.id === productId);
            cart.addItem(product);
        });
    });
}

// ============================================
// NAVIGATION & MOBILE MENU
// ============================================

function setupNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Update active state
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Close mobile menu
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Update active nav on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.section === current) {
                link.classList.add('active');
            }
        });
    });
}

// ============================================
// CART DRAWER & OVERLAY
// ============================================

function setupCartDrawer() {
    const cartBtn = document.getElementById('cartBtn');
    const cartClose = document.getElementById('cartClose');
    const cartDrawer = document.getElementById('cartDrawer');
    const cartOverlay = document.getElementById('cartOverlay');

    function openCart() {
        cartDrawer.classList.add('open');
        cartOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
        cartBtn.setAttribute('aria-expanded', 'true');
        cartDrawer.setAttribute('aria-hidden', 'false');
    }

    function closeCart() {
        cartDrawer.classList.remove('open');
        cartOverlay.classList.remove('open');
        document.body.style.overflow = '';
        cartBtn.setAttribute('aria-expanded', 'false');
        cartDrawer.setAttribute('aria-hidden', 'true');
    }

    cartBtn.addEventListener('click', openCart);
    cartClose.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);

    // Close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCart();
        }
    });
}

// ============================================
// FORM VALIDATION
// ============================================

function setupFormValidation() {
    const form = document.getElementById('contactForm');
    
    if (!form) return;

    const fields = {
        fullName: {
            element: document.getElementById('fullName'),
            errorElement: document.getElementById('fullNameError'),
            validate: (value) => value.trim().length >= 2 ? '' : 'Name must be at least 2 characters'
        },
        email: {
            element: document.getElementById('email'),
            errorElement: document.getElementById('emailError'),
            validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Please enter a valid email'
        },
        phone: {
            element: document.getElementById('phone'),
            errorElement: document.getElementById('phoneError'),
            validate: (value) => value === '' || /^[\d\s\-\+\(\)]{10,}$/.test(value.replace(/\s/g, '')) ? '' : 'Please enter a valid phone number'
        },
        message: {
            element: document.getElementById('message'),
            errorElement: document.getElementById('messageError'),
            validate: (value) => value.trim().length >= 10 ? '' : 'Message must be at least 10 characters'
        }
    };

    Object.values(fields).forEach(field => {
        field.element.addEventListener('blur', () => validateField(field));
        field.element.addEventListener('input', () => {
            if (field.errorElement.textContent) {
                validateField(field);
            }
        });
    });

    function validateField(field) {
        const error = field.validate(field.element.value);
        field.errorElement.textContent = error;
        field.element.parentElement.classList.toggle('error', !!error);
        return !error;
    }

    function validateForm() {
        return Object.values(fields).every(field => validateField(field));
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        // Show success message
        const successMessage = document.getElementById('successMessage');
        successMessage.textContent = '✓ Thank you! We\'ll be in touch shortly.';
        successMessage.style.color = 'var(--accent)';

        // Clear form
        setTimeout(() => {
            form.reset();
            successMessage.textContent = '';
            Object.values(fields).forEach(field => {
                field.element.parentElement.classList.remove('error');
                field.errorElement.textContent = '';
            });
        }, 2000);
    });
}

// ============================================
// COUNTDOWN TIMER
// ============================================

function setupCountdown() {
    const offerEnd = new Date();
    offerEnd.setDate(offerEnd.getDate() + 7); // 7 days from now

    function updateCountdown() {
        const now = new Date();
        const diff = offerEnd - now;

        if (diff <= 0) {
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// ============================================
// SCROLL REVEAL ANIMATION
// ============================================

function setupScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// ============================================
// VIDEO CONTROLS
// ============================================

function setupVideoControls() {
    const video = document.getElementById('showcaseVideo');
    const playBtn = document.getElementById('videoPlayBtn');

    if (!video || !playBtn) return;

    playBtn.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playBtn.style.opacity = '0';
        } else {
            video.pause();
            playBtn.style.opacity = '1';
        }
    });

    video.addEventListener('play', () => {
        playBtn.style.opacity = '0';
    });

    video.addEventListener('pause', () => {
        playBtn.style.opacity = '1';
    });
}

// ============================================
// BACK-TO-TOP BUTTON
// ============================================

function setupBackToTop() {
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize cart
    window.cart = new ShoppingCart();

    // Setup features
    renderProducts();
    setupNavigation();
    setupCartDrawer();
    setupFormValidation();
    setupCountdown();
    setupScrollReveal();
    setupVideoControls();
    setupBackToTop();
    setupSmoothScroll();

    // Remove loader if exists
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.remove();
    }
});

// ============================================
// HANDLE PAGE VISIBILITY
// ============================================

document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        console.log('Welcome back to EcoNova Store!');
    }
});
