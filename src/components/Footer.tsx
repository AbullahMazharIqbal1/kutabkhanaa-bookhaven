import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark-brown text-light-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="font-playfair text-2xl font-bold text-gold mb-4">
              Kutabkhanaa
            </h3>
            <p className="font-inter text-light-cream/80 mb-6 leading-relaxed">
              Your trusted companion in the world of books. Discover, explore, and immerse yourself in stories that matter.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-warm-brown/20 text-light-cream hover:text-gold">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-warm-brown/20 text-light-cream hover:text-gold">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-warm-brown/20 text-light-cream hover:text-gold">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg font-semibold text-gold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Home', 'Books', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <Link 
                    to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                    className="font-inter text-light-cream/80 hover:text-gold transition-colors duration-200"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair text-lg font-semibold text-gold mb-4">
              Contact Info
            </h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-gold" />
                <span className="font-inter text-light-cream/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-gold" />
                <span className="font-inter text-light-cream/80">hello@kutabkhanaa.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-3 mt-1 text-gold" />
                <span className="font-inter text-light-cream/80">
                  123 Literary Lane<br />
                  Booktown, BT 12345
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-playfair text-lg font-semibold text-gold mb-4">
              Newsletter
            </h4>
            <p className="font-inter text-light-cream/80 mb-4">
              Subscribe to get updates on new arrivals and special offers.
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-warm-brown/20 border-warm-brown/30 text-light-cream placeholder:text-light-cream/60 focus:border-gold"
              />
              <Button className="w-full bg-gold hover:bg-gold/90 text-dark-brown font-inter font-medium">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-warm-brown/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-inter text-light-cream/60 text-sm">
              © 2024 Kutabkhanaa. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="font-inter text-light-cream/60 hover:text-gold text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="font-inter text-light-cream/60 hover:text-gold text-sm transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;