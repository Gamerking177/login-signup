import { useState, useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { SectionTitle } from '@/components/ui/SectionTitle';

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    title: "Annual Tech Fest 2023",
    category: "TechFest",
    year: "2023",
    description: "Students showcasing their innovative projects during our annual technology festival."
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    title: "Graduation Ceremony",
    category: "Graduation",
    year: "2023",
    description: "Celebrating our graduates' achievements and their journey into professional careers."
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1540317580384-e5d43867caa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    title: "Robotics Workshop",
    category: "Workshop",
    year: "2023",
    description: "Hands-on learning experience in our state-of-the-art robotics lab."
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    title: "Hackathon Winners",
    category: "Hackathon",
    year: "2023",
    description: "Team Innovators celebrating their victory at the 48-hour coding marathon."
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    title: "Campus Tour",
    category: "Campus",
    year: "2023",
    description: "A glimpse of our modern campus facilities designed for collaborative learning."
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    title: "Cultural Festival",
    category: "Festival",
    year: "2022",
    description: "Students celebrating diversity through performances at our annual cultural festival."
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    title: "Guest Lecture",
    category: "Lecture",
    year: "2022",
    description: "Industry experts sharing insights on emerging technologies and career opportunities."
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    title: "Design Exhibition",
    category: "Exhibition",
    year: "2022",
    description: "Showcasing creative projects from our design department students."
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80",
    title: "Sports Day",
    category: "Sports",
    year: "2022",
    description: "Annual sports competition promoting teamwork and physical well-being."
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80",
    title: "VR Lab Session",
    category: "Labs",
    year: "2022",
    description: "Students exploring virtual reality applications in our immersive technology lab."
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
    title: "Group Project",
    category: "Academics",
    year: "2021",
    description: "Collaborative learning in action as students work on real-world projects."
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    title: "Game Design Workshop",
    category: "Workshop",
    year: "2021",
    description: "Creating interactive games and exploring game mechanics in our specialized workshop."
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1402&q=80",
    title: "Research Presentation",
    category: "Research",
    year: "2021",
    description: "Students presenting their innovative research findings to faculty and peers."
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=1412&q=80",
    title: "Industry Visit",
    category: "Industry",
    year: "2021",
    description: "Learning from professionals through organized visits to leading tech companies."
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1573164574511-73c773193279?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80",
    title: "Coding Competition",
    category: "Competition",
    year: "2021",
    description: "Students showcasing their programming skills in our annual coding challenge."
  }
];

function GalleryPage() {
  const [images, setImages] = useState(galleryImages);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeYear, setActiveYear] = useState(null);
  const [loadedImages, setLoadedImages] = useState(8);

  // Extract unique categories and years
  const categories = ['All', ...new Set(galleryImages.map(img => img.category))];
  const years = ['All', ...new Set(galleryImages.map(img => img.year))];

  useEffect(() => {
    let filtered = [...galleryImages];
    
    if (activeCategory && activeCategory !== 'All') {
      filtered = filtered.filter(img => img.category === activeCategory);
    }
    
    if (activeYear && activeYear !== 'All') {
      filtered = filtered.filter(img => img.year === activeYear);
    }
    
    setImages(filtered);
    setLoadedImages(8); // Reset loaded images count when filters change
  }, [activeCategory, activeYear]);

  const loadMoreImages = () => {
    setLoadedImages(prev => Math.min(prev + 8, images.length));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Header */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-[#0F62FE] to-[#00CFFD] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">Gallery</h1>
            <p className="text-xl text-gray-100">
              Explore snapshots of campus life, events, and activities at CIMAGE through our photo gallery.
            </p>
          </div>
        </div>
      </section>
      
      {/* Filters */}
      <section className="bg-white py-6 sticky top-16 z-20 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
            <div className="flex flex-wrap gap-2">
              <span className="text-gray-600 font-medium self-center mr-2">Category:</span>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category === 'All' ? null : category)}
                  className={`px-4 py-1.5 rounded-full transition-all text-sm ${
                    (category === 'All' && activeCategory === null) || category === activeCategory
                      ? 'bg-[#0F62FE] text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-2">
              <span className="text-gray-600 font-medium self-center mr-2">Year:</span>
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setActiveYear(year === 'All' ? null : year)}
                  className={`px-4 py-1.5 rounded-full transition-all text-sm ${
                    (year === 'All' && activeYear === null) || year === activeYear
                      ? 'bg-[#6979F8] text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery Grid */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-gray-50 flex-grow">
        <div className="container mx-auto px-4">
          {images.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">No images match your filters</h3>
              <p className="text-gray-500 mb-6">Try adjusting your filter criteria</p>
              <button 
                onClick={() => {
                  setActiveCategory(null);
                  setActiveYear(null);
                }}
                className="bg-[#0F62FE] text-white rounded-lg px-6 py-2.5 font-medium transition-all hover:bg-[#0F62FE]/90 hover:shadow-md"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {images.slice(0, loadedImages).map((image, index) => (
                  <div 
                    key={image.id} 
                    className="group cursor-pointer relative overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-xl"
                    style={{ animationDelay: `${index * 50}ms` }}
                    onClick={() => setSelectedImage(image)}
                  >
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={image.src} 
                        alt={image.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                      <p className="text-gray-200 text-sm">{image.category} • {image.year}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {loadedImages < images.length && (
                <div className="text-center mt-10">
                  <button 
                    onClick={loadMoreImages}
                    className="bg-transparent text-[#0F62FE] border border-[#0F62FE] rounded-lg px-6 py-2.5 font-medium transition-all hover:bg-[#0F62FE]/10 hover:shadow-md"
                  >
                    Load More
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
      
      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="max-w-4xl w-full bg-white rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title} 
                className="w-full h-auto max-h-[70vh] object-contain bg-black"
              />
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-[#0F62FE]/10 text-[#0F62FE] rounded-full px-3 py-1 text-sm font-medium">
                  {selectedImage.category}
                </span>
                <span className="bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-sm font-medium">
                  {selectedImage.year}
                </span>
              </div>
              <h2 className="text-2xl font-display font-bold mb-3">{selectedImage.title}</h2>
              <p className="text-gray-600">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
}

export default GalleryPage;