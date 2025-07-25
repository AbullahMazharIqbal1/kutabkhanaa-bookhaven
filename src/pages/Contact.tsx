import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Store',
      details: ['123 Literary Lane', 'Booktown, BT 12345', 'United States']
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', 'Mon-Fri: 9 AM - 8 PM', 'Sat-Sun: 10 AM - 6 PM']
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['hello@kutabkhanaa.com', 'support@kutabkhanaa.com', 'We reply within 24 hours']
    },
    {
      icon: Clock,
      title: 'Store Hours',
      details: ['Monday - Friday: 9 AM - 8 PM', 'Saturday - Sunday: 10 AM - 6 PM', 'Holidays: 12 PM - 5 PM']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Page Header */}
      <section className="bg-gradient-to-br from-light-cream to-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Contact Us
            </h1>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-playfair text-2xl font-semibold text-foreground mb-6">
                Send us a Message
              </h2>
              
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block font-inter text-sm font-medium text-foreground mb-2">
                          First Name
                        </label>
                        <Input
                          id="firstName"
                          type="text"
                          placeholder="Your first name"
                          className="border-border focus:border-warm-brown"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block font-inter text-sm font-medium text-foreground mb-2">
                          Last Name
                        </label>
                        <Input
                          id="lastName"
                          type="text"
                          placeholder="Your last name"
                          className="border-border focus:border-warm-brown"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block font-inter text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="border-border focus:border-warm-brown"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block font-inter text-sm font-medium text-foreground mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        type="text"
                        placeholder="What's this about?"
                        className="border-border focus:border-warm-brown"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block font-inter text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry..."
                        rows={5}
                        className="border-border focus:border-warm-brown"
                      />
                    </div>
                    
                    <Button className="w-full bg-warm-brown hover:bg-dark-brown text-white font-inter font-medium">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="mt-12 lg:mt-0">
              <h2 className="font-playfair text-2xl font-semibold text-foreground mb-6">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Card key={index} className="bg-background border-border">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-warm-brown rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-playfair font-semibold text-foreground mb-2">
                              {info.title}
                            </h3>
                            <div className="space-y-1">
                              {info.details.map((detail, idx) => (
                                <p key={idx} className="font-inter text-muted-foreground text-sm">
                                  {detail}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Map Placeholder */}
              <Card className="mt-6">
                <CardContent className="p-0">
                  <div className="h-64 bg-cream rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-warm-brown mx-auto mb-2" />
                      <p className="font-inter text-muted-foreground">Interactive Map</p>
                      <p className="font-inter text-sm text-muted-foreground">Coming Soon</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;