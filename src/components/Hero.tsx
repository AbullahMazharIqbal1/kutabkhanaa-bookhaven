import { Button } from '@/components/ui/button';
import { BookOpen, ArrowRight, Sparkles } from 'lucide-react';
import heroBackground from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-transparent"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-gold/30 to-warm-brown/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-warm-brown/20 to-gold/30 rounded-full blur-xl animate-float" style={{ animationDelay: '-1s' }}></div>
      <div className="absolute bottom-32 left-20 w-20 h-20 bg-gradient-to-br from-gold/25 to-warm-brown/15 rounded-full blur-xl animate-float" style={{ animationDelay: '-2s' }}></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-warm-brown/10 backdrop-blur-sm border border-warm-brown/20 rounded-full mb-8 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <Sparkles className="h-4 w-4 text-warm-brown" />
            <span className="font-inter text-sm font-medium text-warm-brown">Curated Collection of Literary Excellence</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Welcome to{' '}
            <span className="bg-gradient-to-r from-warm-brown to-gold bg-clip-text text-transparent">
              Kutabkhanaa
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="font-inter text-xl sm:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.6s' }}>
            Discover extraordinary stories that inspire, educate, and transform. 
            Your literary journey begins here with our carefully curated collection.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <Button 
              size="lg" 
              className="bg-warm-brown hover:bg-dark-brown text-white font-inter font-medium px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <BookOpen className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              Explore Collection
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-warm-brown text-warm-brown hover:bg-warm-brown hover:text-white font-inter font-medium px-8 py-4 text-lg rounded-xl backdrop-blur-sm bg-background/50 transition-all duration-300"
            >
              Featured Books
            </Button>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '1s' }}>
            {[
              { number: '10K+', label: 'Books Available' },
              { number: '5K+', label: 'Happy Readers' },
              { number: '50+', label: 'Authors Featured' }
            ].map((stat, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="font-playfair text-3xl font-bold text-warm-brown mb-2 group-hover:text-dark-brown transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="font-inter text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;