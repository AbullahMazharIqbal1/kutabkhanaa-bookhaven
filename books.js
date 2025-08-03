// Sample book data
const books = [
    {
        id: 1,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        price: 3640,
        rating: 4.8,
        genre: "classic",
        image: "src/assets/book1.jpg",
        description: "A timeless classic exploring themes of racial injustice and moral growth."
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        price: 4200,
        rating: 4.9,
        genre: "classic",
        image: "src/assets/book2.jpg",
        description: "A dystopian masterpiece about totalitarian control and surveillance."
    },
    {
        id: 3,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        price: 3360,
        rating: 4.7,
        genre: "romance",
        image: "src/assets/book3.jpg",
        description: "A witty and romantic tale of love overcoming social prejudices."
    },
    {
        id: 4,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 3920,
        rating: 4.6,
        genre: "classic",
        image: "src/assets/book4.jpg",
        description: "A tragic story of the American Dream in the Jazz Age."
    },
    {
        id: 5,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        price: 3500,
        rating: 4.5,
        genre: "fiction",
        image: "src/assets/book5.jpg",
        description: "A coming-of-age story about teenage rebellion and alienation."
    },
    {
        id: 6,
        title: "Lord of the Flies",
        author: "William Golding",
        price: 3080,
        rating: 4.4,
        genre: "fiction",
        image: "src/assets/book6.jpg",
        description: "A powerful allegory about civilization and human nature."
    },
    {
        id: 7,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        price: 4480,
        rating: 4.8,
        genre: "fiction",
        image: "src/assets/book1.jpg",
        description: "An enchanting adventure in Middle-earth."
    },
    {
        id: 8,
        title: "Jane Eyre",
        author: "Charlotte Brontë",
        price: 3780,
        rating: 4.6,
        genre: "romance",
        image: "src/assets/book2.jpg",
        description: "A Gothic romance about an orphaned governess."
    },
    {
        id: 9,
        title: "The Mystery of Edwin Drood",
        author: "Charles Dickens",
        price: 4760,
        rating: 4.3,
        genre: "mystery",
        image: "src/assets/book3.jpg",
        description: "Dickens' unfinished mystery novel."
    },
    {
        id: 10,
        title: "Sapiens",
        author: "Yuval Noah Harari",
        price: 5320,
        rating: 4.7,
        genre: "non-fiction",
        image: "src/assets/book4.jpg",
        description: "A thought-provoking look at human history."
    },
    {
        id: 11,
        title: "The Girl with the Dragon Tattoo",
        author: "Stieg Larsson",
        price: 4200,
        rating: 4.5,
        genre: "mystery",
        image: "src/assets/book5.jpg",
        description: "A gripping Scandinavian crime thriller."
    },
    {
        id: 12,
        title: "Educated",
        author: "Tara Westover",
        price: 5040,
        rating: 4.8,
        genre: "non-fiction",
        image: "src/assets/book6.jpg",
        description: "A powerful memoir about education and family."
    }
];

let filteredBooks = [...books];
let cartCount = 0;

// DOM elements
const booksGrid = document.getElementById('booksGrid');
const searchInput = document.getElementById('searchInput');
const genreFilter = document.getElementById('genre-filter');
const priceFilter = document.getElementById('price-filter');
const sortFilter = document.getElementById('sort-filter');
const cartCountElement = document.querySelector('.cart-count');

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Check for search query in URL
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search');
    if (searchQuery) {
        searchInput.value = searchQuery;
        filterBooks();
    } else {
        displayBooks(books);
    }
    
    // Add event listeners
    searchInput.addEventListener('input', filterBooks);
    genreFilter.addEventListener('change', filterBooks);
    priceFilter.addEventListener('change', filterBooks);
    sortFilter.addEventListener('change', sortBooks);
});

// Display books
function displayBooks(booksToShow) {
    if (booksToShow.length === 0) {
        booksGrid.innerHTML = `
            <div class="no-books">
                <i data-lucide="book-x"></i>
                <h3>No books found</h3>
                <p>Try adjusting your filters or search terms.</p>
            </div>
        `;
        lucide.createIcons();
        return;
    }
    
    booksGrid.innerHTML = booksToShow.map(book => `
        <div class="book-card" data-book-id="${book.id}">
            <div class="book-image-container">
                <img src="${book.image}" alt="${book.title}" class="book-image">
            </div>
            <div class="book-info">
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">${book.author}</p>
                <div class="book-rating">
                    <div class="stars">${generateStars(book.rating)}</div>
                    <span class="rating-text">(${book.rating})</span>
                </div>
                <p class="book-description">${book.description}</p>
                <div class="book-footer">
                    <span class="book-price">Rs ${book.price.toLocaleString()}</span>
                    <button class="add-to-cart-btn" onclick="addToCart(${book.id})">
                        <i data-lucide="shopping-cart"></i>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    lucide.createIcons();
}

// Generate star rating
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    return '★'.repeat(fullStars) + 
           (halfStar ? '☆' : '') + 
           '☆'.repeat(emptyStars);
}

// Filter books
function filterBooks() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedGenre = genreFilter.value;
    const selectedPriceRange = priceFilter.value;
    
    filteredBooks = books.filter(book => {
        // Search filter
        const matchesSearch = !searchTerm || 
            book.title.toLowerCase().includes(searchTerm) ||
            book.author.toLowerCase().includes(searchTerm) ||
            book.genre.toLowerCase().includes(searchTerm);
        
        // Genre filter
        const matchesGenre = !selectedGenre || book.genre === selectedGenre;
        
        // Price filter (PKR ranges)
        let matchesPrice = true;
        if (selectedPriceRange) {
            if (selectedPriceRange === '0-15') {
                matchesPrice = book.price <= 4200; // Up to Rs 4200
            } else if (selectedPriceRange === '15-25') {
                matchesPrice = book.price > 4200 && book.price <= 7000; // Rs 4200-7000
            } else if (selectedPriceRange === '25+') {
                matchesPrice = book.price > 7000; // Above Rs 7000
            }
        }
        
        return matchesSearch && matchesGenre && matchesPrice;
    });
    
    sortBooks();
}

// Sort books
function sortBooks() {
    const sortBy = sortFilter.value;
    
    switch (sortBy) {
        case 'title':
            filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'author':
            filteredBooks.sort((a, b) => a.author.localeCompare(b.author));
            break;
        case 'price-low':
            filteredBooks.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredBooks.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filteredBooks.sort((a, b) => b.rating - a.rating);
            break;
        default:
            break;
    }
    
    displayBooks(filteredBooks);
}

// Add to cart
function addToCart(bookId) {
    cartCount++;
    cartCountElement.textContent = cartCount;
    
    // Add animation to cart button
    const cartBtn = document.querySelector('.cart-btn');
    cartBtn.style.transform = 'scale(1.1)';
    setTimeout(() => {
        cartBtn.style.transform = 'scale(1)';
    }, 200);
    
    // Show success message
    const book = books.find(b => b.id === bookId);
    showNotification(`"${book.title}" added to cart!`);
}

// View book details (placeholder)
function viewBookDetails(bookId) {
    const book = books.find(b => b.id === bookId);
    alert(`Book Details:\n\nTitle: ${book.title}\nAuthor: ${book.author}\nPrice: Rs ${book.price.toLocaleString()}\nRating: ${book.rating}/5\n\nDescription: ${book.description}`);
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--primary);
        color: var(--primary-foreground);
        padding: 1rem 1.5rem;
        border-radius: 8px;
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add CSS for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .books-page {
        padding-top: 120px;
        min-height: 100vh;
        background: var(--background);
    }
    
    .page-header {
        text-align: center;
        margin-bottom: 3rem;
    }
    
    .page-title {
        font-size: 3rem;
        margin-bottom: 1rem;
        color: var(--foreground);
    }
    
    .page-subtitle {
        font-size: 1.2rem;
        color: var(--muted-foreground);
    }
    
    .filters-section {
        display: flex;
        gap: 2rem;
        margin-bottom: 3rem;
        padding: 2rem;
        background: var(--card);
        border-radius: 16px;
        border: 1px solid var(--border);
        flex-wrap: wrap;
    }
    
    .filter-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        min-width: 200px;
    }
    
    .filter-group label {
        font-weight: 600;
        color: var(--foreground);
    }
    
    .filter-select {
        padding: 12px;
        border: 2px solid var(--border);
        border-radius: 8px;
        background: var(--background);
        color: var(--foreground);
        font-size: 1rem;
        cursor: pointer;
        transition: var(--transition-smooth);
    }
    
    .filter-select:focus {
        outline: none;
        border-color: var(--primary);
        box-shadow: 0 0 0 3px hsla(25, 60%, 45%, 0.1);
    }
    
    .book-description {
        color: var(--muted-foreground);
        font-size: 0.9rem;
        margin-bottom: 1rem;
        line-height: 1.5;
    }
    
    .no-books {
        grid-column: 1 / -1;
        text-align: center;
        padding: 4rem 2rem;
        color: var(--muted-foreground);
    }
    
    .no-books i {
        font-size: 4rem;
        margin-bottom: 1rem;
        color: var(--muted-foreground);
    }
    
    .no-books h3 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
        color: var(--foreground);
    }
    
    @media (max-width: 768px) {
        .filters-section {
            flex-direction: column;
            gap: 1rem;
        }
        
        .filter-group {
            min-width: auto;
        }
        
        .page-title {
            font-size: 2rem;
        }
    }
`;
document.head.appendChild(style);