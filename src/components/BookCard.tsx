import { ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating?: number;
  genre?: string;
}

const BookCard = ({ title, author, price, originalPrice, image, rating, genre }: BookCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-background border-border/50 backdrop-blur-sm">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {originalPrice && originalPrice > price && (
          <Badge className="absolute top-2 left-2 bg-destructive text-destructive-foreground">
            Sale
          </Badge>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 bg-background/90 hover:bg-background backdrop-blur-sm border border-white/20 shadow-lg transition-all duration-300 hover:scale-110"
        >
          <Heart className="h-4 w-4 text-warm-brown" />
        </Button>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      <CardContent className="p-6">
        {genre && (
          <Badge variant="secondary" className="mb-3 text-xs bg-gold/20 text-warm-brown border border-gold/30 hover:bg-gold/30 transition-colors duration-300">
            {genre}
          </Badge>
        )}
        
        <h3 className="font-playfair font-semibold text-lg text-foreground mb-1 line-clamp-2">
          {title}
        </h3>
        
        <p className="font-inter text-muted-foreground mb-3">
          {author}
        </p>
        
        {rating && (
          <div className="flex items-center mb-3">
            <div className="flex text-gold">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < Math.floor(rating) ? 'text-gold' : 'text-muted'}>
                  ★
                </span>
              ))}
            </div>
            <span className="ml-2 text-sm text-muted-foreground">({rating})</span>
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-inter font-bold text-lg text-warm-brown">
              ${price}
            </span>
            {originalPrice && originalPrice > price && (
              <span className="font-inter text-sm text-muted-foreground line-through">
                ${originalPrice}
              </span>
            )}
          </div>
          
          <Button 
            size="sm" 
            className="bg-warm-brown hover:bg-dark-brown text-white"
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookCard;