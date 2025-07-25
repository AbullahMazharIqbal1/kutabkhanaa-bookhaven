import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-light-cream to-cream py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Welcome to{' '}
            <span className="text-warm-brown">Kutabkhanaa</span>
          </h1>
          <p className="font-inter text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Discover your next favorite book in our carefully curated collection of timeless classics, 
            contemporary fiction, and thought-provoking non-fiction.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search for books, authors, or genres..."
                className="pl-12 pr-4 py-3 text-lg border-2 border-border focus:border-warm-brown bg-background"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Button 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-warm-brown hover:bg-dark-brown text-white"
              >
                Search
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-warm-brown hover:bg-dark-brown text-white font-inter font-medium"
            >
              Browse Collection
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-warm-brown text-warm-brown hover:bg-warm-brown hover:text-white font-inter font-medium"
            >
              Featured Books
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gold/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-warm-brown/10 rounded-full blur-xl"></div>
    </section>
  );
};

export default Hero;