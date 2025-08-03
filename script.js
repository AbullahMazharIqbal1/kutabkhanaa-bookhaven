// Cart management
let cartItems = [];
let cartCount = 0;

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Cart functionality
    const cartCountElement = document.querySelector('.cart-count');
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const cartBtn = document.querySelector('.cart-btn');
    
    // Add to cart button listeners
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const bookData = {
                id: this.dataset.bookId,
                title: this.dataset.bookTitle,
                author: this.dataset.bookAuthor,
                price: parseInt(this.dataset.bookPrice),
                image: this.dataset.bookImage
            };
            
            addToCart(bookData);
        });
    });
    
    // Cart button click to open modal
    if (cartBtn) {
        cartBtn.addEventListener('click', function() {
            openCart();
        });
    }
    
    // Search functionality
    const searchInput = document.querySelector('.search-input');
    const mobileSearchInput = document.querySelector('.mobile-search-input');
    
    function handleSearch(event) {
        if (event.key === 'Enter') {
            const query = event.target.value.trim();
            if (query) {
                // Redirect to books page with search query
                window.location.href = `books.html?search=${encodeURIComponent(query)}`;
            }
        }
    }
    
    if (searchInput) {
        searchInput.addEventListener('keydown', handleSearch);
    }
    
    if (mobileSearchInput) {
        mobileSearchInput.addEventListener('keydown', handleSearch);
    }
    
    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('.newsletter-input').value;
            if (email) {
                showNotification('Thank you for subscribing to our newsletter!', 'success');
                this.querySelector('.newsletter-input').value = '';
            }
        });
    }
    
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
    
    // Load cart from localStorage
    loadCartFromStorage();
    updateCartDisplay();
});

// Cart functions
function addToCart(bookData) {
    const existingItem = cartItems.find(item => item.id === bookData.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartItems.push({
            ...bookData,
            quantity: 1
        });
    }
    
    cartCount++;
    updateCartDisplay();
    saveCartToStorage();
    
    // Add animation to cart button
    const cartBtn = document.querySelector('.cart-btn');
    cartBtn.style.transform = 'scale(1.1)';
    setTimeout(() => {
        cartBtn.style.transform = 'scale(1)';
    }, 200);
    
    // Show success notification
    showNotification(`"${bookData.title}" added to cart!`, 'success');
}

function removeFromCart(bookId) {
    const itemIndex = cartItems.findIndex(item => item.id === bookId);
    if (itemIndex > -1) {
        const item = cartItems[itemIndex];
        cartCount -= item.quantity;
        cartItems.splice(itemIndex, 1);
        updateCartDisplay();
        saveCartToStorage();
        renderCartItems();
    }
}

function updateQuantity(bookId, newQuantity) {
    const item = cartItems.find(item => item.id === bookId);
    if (item) {
        const diff = newQuantity - item.quantity;
        item.quantity = newQuantity;
        cartCount += diff;
        
        if (item.quantity <= 0) {
            removeFromCart(bookId);
            return;
        }
        
        updateCartDisplay();
        saveCartToStorage();
        renderCartItems();
    }
}

function updateCartDisplay() {
    const cartCountElement = document.querySelector('.cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
    }
}

function openCart() {
    const cartModal = document.getElementById('cart-modal');
    if (cartModal) {
        cartModal.classList.remove('hidden');
        renderCartItems();
        // Re-initialize Lucide icons
        setTimeout(() => {
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }, 100);
    }
}

function closeCart() {
    const cartModal = document.getElementById('cart-modal');
    if (cartModal) {
        cartModal.classList.add('hidden');
    }
}

function renderCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const emptyCartElement = document.getElementById('empty-cart');
    
    if (cartItems.length === 0) {
        cartItemsContainer.style.display = 'none';
        emptyCartElement.style.display = 'block';
        updateCartTotals();
        return;
    }
    
    cartItemsContainer.style.display = 'block';
    emptyCartElement.style.display = 'none';
    
    cartItemsContainer.innerHTML = cartItems.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.title}" class="cart-item-image">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.title}</div>
                <div class="cart-item-author">by ${item.author}</div>
                <div class="cart-item-price">₹${item.price.toLocaleString()}</div>
            </div>
            <div class="cart-item-controls">
                <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity - 1})" ${item.quantity <= 1 ? 'disabled' : ''}>
                    <i data-lucide="minus"></i>
                </button>
                <span class="quantity-display">${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity + 1})">
                    <i data-lucide="plus"></i>
                </button>
                <button class="remove-btn" onclick="removeFromCart('${item.id}')">
                    <i data-lucide="trash-2"></i>
                </button>
            </div>
        </div>
    `).join('');
    
    updateCartTotals();
    
    // Re-initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function updateCartTotals() {
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal >= 7000 ? 0 : 200; // Free shipping over ₹7000
    const total = subtotal + shipping;
    
    document.getElementById('cart-subtotal').textContent = `₹${subtotal.toLocaleString()}`;
    document.getElementById('cart-shipping').textContent = shipping === 0 ? 'Free' : `₹${shipping}`;
    document.getElementById('cart-total').textContent = `₹${total.toLocaleString()}`;
}

function saveCartToStorage() {
    localStorage.setItem('kutabkhanaa_cart', JSON.stringify(cartItems));
    localStorage.setItem('kutabkhanaa_cart_count', cartCount.toString());
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('kutabkhanaa_cart');
    const savedCount = localStorage.getItem('kutabkhanaa_cart_count');
    
    if (savedCart) {
        cartItems = JSON.parse(savedCart);
    }
    
    if (savedCount) {
        cartCount = parseInt(savedCount);
    }
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    const styles = {
        position: 'fixed',
        top: '100px',
        right: '20px',
        padding: '1rem 1.5rem',
        borderRadius: '12px',
        zIndex: '10000',
        fontWeight: '500',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
        animation: 'slideInRight 0.3s ease-out',
        maxWidth: '400px'
    };
    
    if (type === 'success') {
        styles.background = 'linear-gradient(135deg, #059669, #10b981)';
        styles.color = 'white';
    } else if (type === 'error') {
        styles.background = 'linear-gradient(135deg, #dc2626, #ef4444)';
        styles.color = 'white';
    } else {
        styles.background = 'var(--primary)';
        styles.color = 'var(--primary-foreground)';
    }
    
    Object.assign(notification.style, styles);
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add CSS for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);