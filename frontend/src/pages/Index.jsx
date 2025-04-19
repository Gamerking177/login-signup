import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Award, Users, BookOpen, Code } from 'lucide-react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { CimageCard, CimageCardContent } from '@/components/ui/CimageCard';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToExplore = () => {
    const exploreSection = document.getElementById('explore-section');
    if (exploreSection) {
      exploreSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: <BookOpen className="w-12 h-12 text-[#0F62FE]" />,
      title: "Industry-Relevant Courses",
      description: "Our curriculum is designed in collaboration with industry experts to ensure you learn skills that matter.",
    },
    {
      icon: <Code className="w-12 h-12 text-[#0F62FE]" />,
      title: "Hands-on Learning",
      description: "Build real projects and gain practical experience with our project-based learning approach.",
    },
    {
      icon: <Users className="w-12 h-12 text-[#0F62FE]" />,
      title: "Expert Faculty",
      description: "Learn from industry practitioners and academic experts with years of experience.",
    },
    {
      icon: <Award className="w-12 h-12 text-[#0F62FE]" />,
      title: "Recognized Certification",
      description: "Earn certificates that are recognized and valued by top employers worldwide.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-[#0F62FE] via-[#6979F8] to-cimage-accent text-white">
        <div 
          className="absolute inset-0 overflow-hidden"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.3)",
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-r from-cimage-dark/80 to-[#0F62FE]/40" />
        
        <div 
          className="container relative z-10 px-4 md:px-6 text-center space-y-8"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        >
          <h1 className="heading-xl max-w-5xl mx-auto animate-fade-in">
            Unleash Your Potential
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200 animate-fade-in delay-100">
            Discover cutting-edge courses in technology, management, and design to power your career forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 animate-fade-in delay-200">
            <Link to="/courses" className="bg-[#0F62FE] px-8 py-3 text-lg rounded-md">
              Explore Courses
            </Link>
            <button 
              onClick={scrollToExplore}
              className="btn-cimage-outline text-white border-white hover:bg-white/10"
            >
              Learn More
            </button>
          </div>
        </div>
        
        <div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={scrollToExplore}
        >
          <ChevronDown className="w-10 h-10 text-white" />
        </div>
      </section>
      
      {/* Explore Section */}
      <section id="explore-section" className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle 
            title="Why Choose CIMAGE" 
            subtitle="We provide comprehensive education that prepares you for success in the real world"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {features.map((feature, index) => (
              <CimageCard 
                key={index} 
                className="text-center p-8 animate-scale-in"
                hover
                glass
              >
                <div className="flex justify-center mb-6">{feature.icon}</div>
                <h3 className="text-xl font-display font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CimageCard>
            ))}
          </div>
        </div>
      </section>
      
      {/* Quick Navigation */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <SectionTitle 
            title="Explore CIMAGE" 
            subtitle="Discover our programs, facilities, and community"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <Link to="/courses">
              <CimageCard 
                className="relative h-64 overflow-hidden group" 
                hover
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cimage-dark/90 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-display font-semibold mb-2">Courses</h3>
                  <p className="text-gray-300">Explore our diverse range of programs</p>
                </div>
              </CimageCard>
            </Link>
            
            <Link to="/gallery">
              <CimageCard 
                className="relative h-64 overflow-hidden group" 
                hover
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cimage-dark/90 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-display font-semibold mb-2">Gallery</h3>
                  <p className="text-gray-300">View photos from campus events and activities</p>
                </div>
              </CimageCard>
            </Link>
            
            <Link to="/games">
              <CimageCard 
                className="relative h-64 overflow-hidden group" 
                hover
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cimage-dark/90 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-display font-semibold mb-2">Games</h3>
                  <p className="text-gray-300">Discover games created by our students</p>
                </div>
              </CimageCard>
            </Link>
            
            <Link to="/about">
              <CimageCard 
                className="relative h-64 overflow-hidden group" 
                hover
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cimage-dark/90 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-display font-semibold mb-2">About Us</h3>
                  <p className="text-gray-300">Learn about our mission and faculty</p>
                </div>
              </CimageCard>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="heading-lg mb-6 max-w-3xl mx-auto">Ready to Start Your Journey With CIMAGE?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Take the first step towards a successful career by exploring our courses and programs.
          </p>
          <Link to="/courses" className="btn-cimage px-8 py-3 text-lg">
            Get Started Today
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;