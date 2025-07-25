import { BookOpen, Truck, Shield, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const WhyChooseUs = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Curated Collection',
      description: 'Every book in our store is carefully selected by our team of literary experts for quality and significance.'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Free shipping on orders over $25 with express delivery options available nationwide.'
    },
    {
      icon: Shield,
      title: 'Quality Guarantee',
      description: '30-day return policy and satisfaction guarantee on all purchases. Your happiness is our priority.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Join our vibrant community of book lovers with exclusive events, discussions, and author meetups.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-cream/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-r from-warm-brown/10 to-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-gold/15 to-warm-brown/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-warm-brown/10 backdrop-blur-sm border border-warm-brown/20 rounded-full mb-6">
            <span className="font-inter text-sm font-medium text-warm-brown">Excellence in Every Detail</span>
          </div>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Why Choose Kutabkhanaa?
          </h2>
          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up">
            We're more than just a bookstore. We're your partners in the journey of literary discovery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-background/80 backdrop-blur-sm border-border/50 group animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="mx-auto w-20 h-20 bg-gradient-to-br from-warm-brown to-dark-brown rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="font-playfair font-semibold text-xl text-foreground mb-4 group-hover:text-warm-brown transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="font-inter text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;