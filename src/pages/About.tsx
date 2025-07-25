import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Heart, Users, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: BookOpen,
      title: 'Literary Excellence',
      description: 'We believe in the transformative power of great literature and carefully curate every book in our collection.'
    },
    {
      icon: Heart,
      title: 'Passionate Service',
      description: 'Our love for books drives everything we do, from customer service to community engagement.'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'We foster a vibrant community of readers through events, discussions, and shared literary experiences.'
    },
    {
      icon: Award,
      title: 'Quality Commitment',
      description: 'Every book meets our high standards for quality, significance, and lasting value to readers.'
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
              About Kutabkhanaa
            </h1>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the story behind our passion for books and our commitment to connecting readers with extraordinary stories.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 font-inter text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2020, Kutabkhanaa began as a dream to create more than just a bookstore. 
                  We envisioned a sanctuary for book lovers, a place where literature comes alive and 
                  every reader finds their perfect match.
                </p>
                <p>
                  The name "Kutabkhanaa" comes from Persian, meaning "house of books." This reflects 
                  our vision of creating a home for literature where every book has a story, and every 
                  reader has a journey waiting to unfold.
                </p>
                <p>
                  Today, we've grown into a trusted destination for book enthusiasts, but our core 
                  mission remains unchanged: to celebrate the written word and foster a community 
                  of passionate readers.
                </p>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="bg-warm-brown/10 rounded-lg p-8 text-center">
                <h3 className="font-playfair text-2xl font-semibold text-warm-brown mb-4">
                  Our Mission
                </h3>
                <p className="font-inter text-muted-foreground leading-relaxed">
                  "To inspire and nurture the love of reading by providing access to exceptional 
                  literature, fostering literary discussions, and building a community where 
                  stories connect hearts and minds."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Kutabkhanaa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 bg-background border-border">
                  <CardContent className="p-6">
                    <div className="mx-auto w-16 h-16 bg-warm-brown rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-playfair font-semibold text-xl text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
              The passionate individuals behind Kutabkhanaa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Mitchell',
                role: 'Founder & Literary Curator',
                description: 'With over 15 years in publishing, Sarah brings her expertise in literature curation and community building.'
              },
              {
                name: 'David Chen',
                role: 'Community Manager',
                description: 'David organizes our book clubs, author events, and ensures every customer feels part of our literary family.'
              },
              {
                name: 'Maya Patel',
                role: 'Digital Experience Lead',
                description: 'Maya crafts our online experience, making it easy for readers to discover their next favorite book.'
              }
            ].map((member, index) => (
              <Card key={index} className="text-center bg-background border-border">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-warm-brown/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-playfair font-semibold text-warm-brown">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-playfair font-semibold text-xl text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="font-inter text-warm-brown font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="font-inter text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;