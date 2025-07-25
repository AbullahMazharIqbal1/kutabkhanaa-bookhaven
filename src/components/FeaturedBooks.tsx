import BookCard from './BookCard';
import book1 from '@/assets/book1.jpg';
import book2 from '@/assets/book2.jpg';
import book3 from '@/assets/book3.jpg';
import book4 from '@/assets/book4.jpg';
import book5 from '@/assets/book5.jpg';
import book6 from '@/assets/book6.jpg';

const FeaturedBooks = () => {
  const featuredBooks = [
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
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Books
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of bestsellers, award winners, and hidden gems 
            that are capturing readers' hearts worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredBooks.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="font-inter font-medium text-warm-brown hover:text-dark-brown border-b-2 border-warm-brown hover:border-dark-brown transition-colors duration-200">
            View All Books →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;