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
    <section className="py-20 bg-gradient-to-b from-background via-cream/30 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-warm-brown rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-warm-brown/10 backdrop-blur-sm border border-warm-brown/20 rounded-full mb-6">
            <span className="font-inter text-sm font-medium text-warm-brown">Handpicked Selection</span>
          </div>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Featured Books
          </h2>
          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Discover our handpicked selection of bestsellers, award winners, and hidden gems 
            that are capturing readers' hearts worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBooks.map((book, index) => (
            <div 
              key={book.id} 
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <BookCard {...book} />
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in">
          <button className="group font-inter font-semibold text-lg text-warm-brown hover:text-dark-brown border-b-2 border-warm-brown hover:border-dark-brown transition-all duration-300 pb-1">
            View All Books 
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;