import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedBooks from '@/components/FeaturedBooks';
import WhyChooseUs from '@/components/WhyChooseUs';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturedBooks />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Home;