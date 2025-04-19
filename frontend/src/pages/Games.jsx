import { useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Gamepad, ArrowUpRight } from 'lucide-react';

const studentGames = [
  {
    id: 1,
    title: "Huddle Escape",
    designer: "Vishal ID:- (452-26567)",
    description: "",
    techStack: ["Flame Engine", "Dart", "Flutter"],
    platform: "Web",
    thumbnail: "https://www.cimage.in/game/hurdle_escape.jpg",
    playLink: "https://cimage.in/game/hurdle_escape/"
  },
  {
    id: 2,
    title: "Snake Game",
    designer: "Shreya ID:- (445-8978)",
    description: "",
    techStack: ["Flutter", "Dart"],
    platform: "Web",
    thumbnail: "https://cimage.in/game/snake.jpg",
    playLink: "https://cimage.in/game/snake"
  },
  {
    id: 3,
    title: "Flappy Bird",
    designer: "Nitesh ID:- (445-8934)",
    description: "",
    techStack: ["FLutter", "Dart"],
    platform: "Web",
    thumbnail: "https://cimage.in/game/FlappyBird.jpg",
    playLink: "https://cimage.in/game/FlappyBird"
  },
  {
    id: 4,
    title: "Simon Game",
    designer: "Aadarsh ID:- (452-27015)",
    description: "",
    techStack: ["FLutter", "Dart"],
    platform: "Web",
    thumbnail: "https://cimage.in/game/simon.jpg",
    playLink: "https://cimage.in/game/simon"
  },
  {
    id: 5,
    title: "Whac a Mole",
    designer: "Shashank ID:- (310-15708)",
    description: "",
    techStack: ["FLutter", "Dart"],
    platform: "Web",
    thumbnail: "https://cimage.in/game/whacamole.jpg",
    playLink: "https://cimage.in/game/whack-a-mole"
  },
];

function GamesPage() {
  const [activePlatform, setActivePlatform] = useState(null);
  
  const platforms = ['All', 'Web', 'App', 'PC'];
  
  const filteredGames = activePlatform === 'All' || activePlatform === null
    ? studentGames
    : studentGames.filter(game => game.platform === activePlatform);

  const getPlatformColor = (platform) => {
    switch (platform) {
      case 'Web':
        return 'bg-blue-100 text-blue-600';
      case 'App':
        return 'bg-green-100 text-green-600';
      case 'PC':
        return 'bg-purple-100 text-purple-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Header */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-[#1A365D] to-[#00CFFD] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">Games developed by CIMAGIANS</h1>
            <p className="text-xl text-gray-100">
              Discover innovative games created by our talented students. From web-based puzzles to immersive adventures, explore the creativity of our developers.
            </p>
          </div>
        </div>
      </section>
      
      {/* Filters */}
      <section className="bg-white py-6 sticky top-16 z-20 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {platforms.map((platform) => (
              <button
                key={platform}
                onClick={() => setActivePlatform(platform === 'All' ? null : platform)}
                className={`px-4 py-2 rounded-full transition-all ${
                  (platform === 'All' && activePlatform === null) || platform === activePlatform
                    ? 'bg-[#0F62FE] text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {platform}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Games Grid */}
      <section className="py-16 bg-gray-50 flex-grow">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredGames.map((game) => (
              <Card 
                key={game.id} 
                className="overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-lg group cursor-pointer border border-gray-200"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={game.thumbnail} 
                    alt={game.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute top-4 right-4 ${getPlatformColor(game.platform)} px-3 py-1 rounded-full text-sm font-medium`}>
                    {game.platform}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Gamepad className="w-5 h-5 text-[#0F62FE]" />
                    <span className="text-sm text-gray-500">Designed by {game.designer}</span>
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold mb-2">{game.title}</h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {game.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-5">
                    {game.techStack.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-[#0F62FE]/10 text-[#0F62FE] rounded-full px-2 py-1 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={game.playLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-[#0F62FE] text-white py-2.5 rounded-lg font-medium transition-all
                      hover:bg-[#0F62FE]/90 active:scale-[0.98] group-hover:shadow-md"
                  >
                    Try Now <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default GamesPage;