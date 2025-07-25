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
    <section className="py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose Kutabkhanaa?
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            We're more than just a bookstore. We're your partners in the journey of literary discovery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 bg-background border-border">
                <CardContent className="p-6">
                  <div className="mx-auto w-16 h-16 bg-warm-brown rounded-full flex items-center justify-center mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-playfair font-semibold text-xl text-foreground mb-3">
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