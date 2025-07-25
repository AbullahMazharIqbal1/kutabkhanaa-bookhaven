import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookCard from '@/components/BookCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter } from 'lucide-react';
import book1 from '@/assets/book1.jpg';
import book2 from '@/assets/book2.jpg';
import book3 from '@/assets/book3.jpg';
import book4 from '@/assets/book4.jpg';
import book5 from '@/assets/book5.jpg';
import book6 from '@/assets/book6.jpg';

const Books = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [sortBy, setSortBy] = useState('title');

  const allBooks = [
    {
      id: '1',
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      price: 12.99,
      originalPrice: 16.99,
      image: book1,
      rating: 4.5,
      genre: 'Classic'
    },
    {
      id: '2',
      title: 'Where the Crawdads Sing',
      author: 'Delia Owens',
      price: 14.99,
      image: book2,
      rating: 4.8,
      genre: 'Fiction'
    },
    {
      id: '3',
      title: 'The Silent Patient',
      author: 'Alex Michaelides',
      price: 13.99,
      originalPrice: 17.99,
      image: book3,
      rating: 4.3,
      genre: 'Mystery'
    },
    {
      id: '4',
      title: 'The Seven Husbands of Evelyn Hugo',
      author: 'Taylor Jenkins Reid',
      price: 15.99,
      image: book4,
      rating: 4.7,
      genre: 'Romance'
    },
    {
      id: '5',
      title: 'The Name of the Wind',
      author: 'Patrick Rothfuss',
      price: 16.99,
      image: book5,
      rating: 4.6,
      genre: 'Fantasy'
    },
    {
      id: '6',
      title: 'Project Hail Mary',
      author: 'Andy Weir',
      price: 18.99,
      originalPrice: 22.99,
      image: book6,
      rating: 4.9,
      genre: 'Sci-Fi'
    },
    // Add more books for demonstration
    {
      id: '7',
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      price: 11.99,
      image: book1,
      rating: 4.8,
      genre: 'Classic'
    },
    {
      id: '8',
      title: 'The Midnight Library',
      author: 'Matt Haig',
      price: 13.99,
      image: book2,
      rating: 4.4,
      genre: 'Fiction'
    }
  ];

  const filteredBooks = allBooks.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === 'all' || book.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  const sortedBooks = [...filteredBooks].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return (b.rating || 0) - (a.rating || 0);
      default:
        return a.title.localeCompare(b.title);
    }
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Page Header */}
      <section className="bg-gradient-to-br from-light-cream to-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Our Book Collection
            </h1>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our extensive collection of books across all genres and discover your next great read.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search books or authors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-border focus:border-warm-brown"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-4 items-center">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="font-inter text-sm text-muted-foreground">Filter by:</span>
              </div>
              
              <Select value={selectedGenre} onValueChange={setSelectedGenre}>
                <SelectTrigger className="w-32 border-border focus:border-warm-brown">
                  <SelectValue placeholder="Genre" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Genres</SelectItem>
                  <SelectItem value="Classic">Classic</SelectItem>
                  <SelectItem value="Fiction">Fiction</SelectItem>
                  <SelectItem value="Mystery">Mystery</SelectItem>
                  <SelectItem value="Romance">Romance</SelectItem>
                  <SelectItem value="Fantasy">Fantasy</SelectItem>
                  <SelectItem value="Sci-Fi">Sci-Fi</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-36 border-border focus:border-warm-brown">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="title">Title A-Z</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <p className="font-inter text-muted-foreground">
              Showing {sortedBooks.length} book{sortedBooks.length !== 1 ? 's' : ''}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedBooks.map((book) => (
              <BookCard key={book.id} {...book} />
            ))}
          </div>

          {sortedBooks.length === 0 && (
            <div className="text-center py-12">
              <p className="font-inter text-lg text-muted-foreground">
                No books found matching your criteria. Try adjusting your search or filters.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Books;