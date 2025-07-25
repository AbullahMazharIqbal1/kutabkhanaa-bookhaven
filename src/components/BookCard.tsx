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
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {originalPrice && originalPrice > price && (
          <Badge className="absolute top-2 left-2 bg-destructive text-destructive-foreground">
            Sale
          </Badge>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-background/80 hover:bg-background/90"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      
      <CardContent className="p-4">
        {genre && (
          <Badge variant="secondary" className="mb-2 text-xs bg-cream text-dark-brown">
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