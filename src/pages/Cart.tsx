import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import book1 from '@/assets/book1.jpg';
import book2 from '@/assets/book2.jpg';
import book4 from '@/assets/book4.jpg';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      price: 12.99,
      image: book1,
      quantity: 2
    },
    {
      id: '2',
      title: 'Where the Crawdads Sing',
      author: 'Delia Owens',
      price: 14.99,
      image: book2,
      quantity: 1
    },
    {
      id: '4',
      title: 'The Seven Husbands of Evelyn Hugo',
      author: 'Taylor Jenkins Reid',
      price: 15.99,
      image: book4,
      quantity: 1
    }
  ]);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(items => items.filter(item => item.id !== id));
    } else {
      setCartItems(items =>
        items.map(item =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal >= 25 ? 0 : 4.99;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Page Header */}
      <section className="bg-gradient-to-br from-light-cream to-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Shopping Cart
            </h1>
            <p className="font-inter text-lg text-muted-foreground">
              Review your selected books before checkout
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag className="h-24 w-24 mx-auto text-muted-foreground mb-6" />
              <h2 className="font-playfair text-2xl font-semibold text-foreground mb-4">
                Your cart is empty
              </h2>
              <p className="font-inter text-muted-foreground mb-8">
                Discover our amazing collection of books to get started
              </p>
              <Link to="/books">
                <Button className="bg-warm-brown hover:bg-dark-brown text-white">
                  Browse Books
                </Button>
              </Link>
            </div>
          ) : (
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-8">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="font-playfair text-xl font-semibold text-foreground mb-6">
                      Cart Items ({cartItems.length})
                    </h2>
                    
                    <div className="space-y-6">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center space-x-4 py-4 border-b border-border last:border-b-0">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-16 h-20 object-cover rounded"
                          />
                          
                          <div className="flex-1">
                            <h3 className="font-playfair font-semibold text-foreground">
                              {item.title}
                            </h3>
                            <p className="font-inter text-muted-foreground text-sm">
                              {item.author}
                            </p>
                            <p className="font-inter font-semibold text-warm-brown mt-1">
                              ${item.price}
                            </p>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="font-inter font-medium w-8 text-center">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-destructive hover:text-destructive"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-4 mt-8 lg:mt-0">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="font-playfair text-xl font-semibold text-foreground mb-6">
                      Order Summary
                    </h2>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between font-inter">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span className="text-foreground">${subtotal.toFixed(2)}</span>
                      </div>
                      
                      <div className="flex justify-between font-inter">
                        <span className="text-muted-foreground">Shipping</span>
                        <span className="text-foreground">
                          {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                        </span>
                      </div>
                      
                      {subtotal < 25 && (
                        <p className="text-sm text-muted-foreground">
                          Add ${(25 - subtotal).toFixed(2)} more for free shipping
                        </p>
                      )}
                      
                      <div className="border-t border-border pt-4">
                        <div className="flex justify-between font-inter font-semibold text-lg">
                          <span className="text-foreground">Total</span>
                          <span className="text-warm-brown">${total.toFixed(2)}</span>
                        </div>
                      </div>
                      
                      <Button className="w-full bg-warm-brown hover:bg-dark-brown text-white font-inter font-medium">
                        Proceed to Checkout
                      </Button>
                      
                      <Link to="/books" className="block">
                        <Button variant="outline" className="w-full border-warm-brown text-warm-brown hover:bg-warm-brown hover:text-white">
                          Continue Shopping
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cart;