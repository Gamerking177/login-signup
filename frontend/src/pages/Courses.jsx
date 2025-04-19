import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, GraduationCap, BookUser, BriefcaseBusiness, Code, BarChart3, Brain, Cpu, BadgePlus } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const techAddonCourses = [
  {
    id: 1,
    title: "Ethical Hacking",
    description: "Learn penetration testing, vulnerability assessment, and security practices.",
    duration: "3 Months",
    isNew: false
  },
  {
    id: 2,
    title: "Data Science with Python",
    description: "Master data analysis, visualization, and machine learning fundamentals.",
    duration: "4 Months",
    isNew: true
  },
  {
    id: 3,
    title: "Web Development Mastery",
    description: "Build responsive websites with modern frameworks and technologies.",
    duration: "3 Months",
    isNew: false
  },
  {
    id: 4,
    title: "Mobile App Development",
    description: "Create cross-platform mobile applications for iOS and Android.",
    duration: "4 Months",
    isNew: false
  },
  {
    id: 5,
    title: "Cloud Computing Basics",
    description: "Understand cloud infrastructure, services, and deployment models.",
    duration: "2 Months",
    isNew: true
  }
];

const businessAddonCourses = [
  {
    id: 1,
    title: "Digital Marketing",
    description: "Learn SEO, SEM, social media marketing, and content strategies.",
    duration: "3 Months",
    isNew: true
  },
  {
    id: 2,
    title: "Business Analytics",
    description: "Analyze business data to make informed strategic decisions.",
    duration: "3 Months",
    isNew: false
  },
  {
    id: 3,
    title: "Entrepreneurship Development",
    description: "Develop business plans, understand funding, and launch startups.",
    duration: "4 Months",
    isNew: false
  },
  {
    id: 4,
    title: "Human Resource Management",
    description: "Learn talent acquisition, development, and employee relations.",
    duration: "3 Months",
    isNew: false
  },
  {
    id: 5,
    title: "Financial Planning Basics",
    description: "Understand financial statements, budgeting, and investment principles.",
    duration: "2 Months",
    isNew: true
  }
];

const academicCourses = [
  {
    id: 1,
    title: "BCA",
    fullName: "Bachelor of Computer Applications",
    description: "A comprehensive program focusing on computer applications, programming, and software development fundamentals.",
    duration: "3 Years",
    icon: <Code className="h-8 w-8 text-[#0F62FE]" />,
    level: "Undergraduate",
    type: "tech",
    addonCourses: techAddonCourses
  },
  {
    id: 2,
    title: "BBA",
    fullName: "Bachelor of Business Administration",
    description: "Develops management and leadership skills for diverse business environments and career opportunities.",
    duration: "3 Years",
    icon: <BriefcaseBusiness className="h-8 w-8 text-[#0F62FE]" />,
    level: "Undergraduate",
    type: "business",
    addonCourses: businessAddonCourses
  },
  {
    id: 3,
    title: "BBM",
    fullName: "Bachelor of Business Management",
    description: "Focuses on business management principles, organizational behavior, and strategic planning.",
    duration: "3 Years",
    icon: <BarChart3 className="h-8 w-8 text-[#0F62FE]" />,
    level: "Undergraduate",
    type: "business",
    addonCourses: businessAddonCourses
  },
  {
    id: 4,
    title: "B.Sc-IT",
    fullName: "Bachelor of Science in Information Technology",
    description: "Focuses on IT infrastructure, networks, databases, and cutting-edge technology applications.",
    duration: "3 Years",
    icon: <Cpu className="h-8 w-8 text-[#0F62FE]" />,
    level: "Undergraduate",
    type: "tech",
    addonCourses: techAddonCourses
  },
  {
    id: 5,
    title: "B.Com",
    fullName: "Bachelor of Commerce",
    description: "Provides comprehensive knowledge of business, accounting, finance, and commercial operations.",
    duration: "3 Years",
    icon: <BookUser className="h-8 w-8 text-[#0F62FE]" />,
    level: "Undergraduate"
  },
  {
    id: 6,
    title: "PGDM",
    fullName: "Post Graduate Diploma in Management",
    description: "An intensive management program focusing on practical skills and industry-ready knowledge.",
    duration: "2 Years",
    icon: <BookOpen className="h-8 w-8 text-[#0F62FE]" />,
    level: "Postgraduate"
  },
  {
    id: 7,
    title: "MBA",
    fullName: "Master of Business Administration",
    description: "Advanced studies in business strategy, leadership, and specialized management disciplines.",
    duration: "2 Years",
    icon: <GraduationCap className="h-8 w-8 text-[#0F62FE]" />,
    level: "Postgraduate"
  },
  {
    id: 8,
    title: "MCA",
    fullName: "Master of Computer Applications",
    description: "Advanced studies in software development, system architecture, and IT management.",
    duration: "2 Years",
    icon: <Brain className="h-8 w-8 text-[#0F62FE]" />,
    level: "Postgraduate"
  }
];

const levels = ['All', 'Undergraduate', 'Postgraduate'];

function Courses() {
  const [activeLevel, setActiveLevel] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);
  
  const filteredCourses = academicCourses.filter((course) => {
    const matchesLevel = activeLevel === 'All' || course.level === activeLevel;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         course.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesLevel && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Header */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-[#0F62FE] to-[#6979F8] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">Academic Programs</h1>
            <p className="text-xl text-gray-100">
              Explore our diverse range of undergraduate and postgraduate programs designed to prepare you for successful careers.
            </p>
          </div>
        </div>
      </section>
      
      {/* Filters */}
      <section className="bg-white py-6 sticky top-16 z-20 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {levels.map((level) => (
                <button
                  key={level}
                  onClick={() => setActiveLevel(level)}
                  className={`px-4 py-2 rounded-full transition-all ${
                    activeLevel === level
                      ? 'bg-[#0F62FE] text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
            
            <div className="relative">
              <input
                type="text"
                placeholder="Search programs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0F62FE]"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Course Grid */}
      <section className="py-16 bg-gray-50 flex-grow">
        <div className="container mx-auto px-4">
          {filteredCourses.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">No programs match your filters</h3>
              <p className="text-gray-500 mb-6">Try adjusting your search or filter criteria</p>
              <button 
                onClick={() => {
                  setActiveLevel('All');
                  setSearchQuery('');
                }}
                className="bg-[#0F62FE] text-white rounded-lg px-6 py-2.5 font-medium transition-all hover:bg-[#0F62FE]/90 hover:shadow-md"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <div 
                  key={course.id}
                  className="flex flex-col"
                >
                  <div 
                    className="cursor-pointer group flex-1"
                    onClick={() => setSelectedCourse(course)}
                  >
                    <Card className="h-full border border-gray-200 overflow-hidden transition-all duration-300 
                      group-hover:scale-[1.03] group-hover:shadow-lg group-hover:border-[#0F62FE]/30 
                      group-hover:bg-[#0F62FE]/5">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="bg-[#0F62FE]/10 p-3 rounded-lg">
                            {course.icon}
                          </div>
                          <span className="text-sm font-medium px-3 py-1 bg-gray-100 rounded-full">
                            {course.level}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl font-display font-bold mb-2 text-gray-900">
                          {course.title}
                        </h3>
                        <p className="text-[#0F62FE] font-medium mb-3">
                          {course.fullName}
                        </p>
                        <p className="text-gray-600 mb-4">
                          {course.description}
                        </p>
                        
                        <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                          <span className="text-sm font-medium text-gray-500">Duration: {course.duration}</span>
                          <button className="text-[#0F62FE] font-medium flex items-center gap-1 transition-all 
                            group-hover:text-[#6979F8]">
                            Learn More
                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* {course.addonCourses && (
                    <div className={`mt-2 overflow-hidden transition-all duration-300 ${
                      course.type === 'tech' ? 'bg-blue-50/50' : course.type === 'business' ? 'bg-green-50/50' : ''
                    }`}>
                      <div className="border border-gray-200 rounded-lg">
                        <div className="w-full flex items-center justify-between p-4 text-left font-medium hover:bg-gray-50 transition-all">
                          <span className="flex items-center gap-2">
                            <BadgePlus className="h-4 w-4 text-[#0F62FE]" />
                            Add-on Courses
                          </span>
                        </div>
                        <div className="p-4 pt-0 space-y-3">
                          {course.addonCourses.map((addon) => (
                            <div 
                              key={addon.id} 
                              className={`p-3 rounded-lg border ${
                                course.type === 'tech' 
                                  ? 'border-blue-200 bg-blue-50' 
                                  : 'border-green-200 bg-green-50'
                              } transition-all duration-200 hover:shadow-md`}
                            >
                              <div className="flex items-center justify-between mb-1">
                                <h4 className="font-medium flex items-center gap-2">
                                  {addon.title}
                                  {addon.isNew && (
                                    <Badge className="ml-2 bg-red-500 hover:bg-red-600">
                                      NEW
                                    </Badge>
                                  )}
                                </h4>
                                <span className="text-xs font-medium text-gray-500">
                                  {addon.duration}
                                </span>
                              </div>
                              <p className="text-sm text-gray-600">{addon.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )} */}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* Course Detail Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <div className="bg-[#0F62FE]/10 p-4 rounded-lg">
                    {selectedCourse.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-display font-bold">{selectedCourse.title}</h2>
                    <p className="text-[#0F62FE] font-medium">{selectedCourse.fullName}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedCourse(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Program Overview</h3>
                  <p className="text-gray-700 mb-4">
                    {selectedCourse.description}
                  </p>
                  <p className="text-gray-700">
                    This program provides students with the knowledge and skills needed to excel in today's competitive job market. 
                    Our curriculum is designed in collaboration with industry experts to ensure relevance and practical application.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">Program Details</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium">{selectedCourse.duration}</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-gray-600">Level:</span>
                      <span className="font-medium">{selectedCourse.level}</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-gray-600">Eligibility:</span>
                      <span className="font-medium">
                        {selectedCourse.level === 'Undergraduate' ? '10+2 or equivalent' : "Bachelor's degree"}
                      </span>
                    </li>
                    <li className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-gray-600">Intake:</span>
                      <span className="font-medium">June & January</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-gray-600">Campus:</span>
                      <span className="font-medium">Main Campus</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {selectedCourse.addonCourses && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Add-on Courses Available</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedCourse.addonCourses.map(addon => (
                      <div 
                        key={addon.id} 
                        className={`p-3 rounded-lg border ${
                          selectedCourse.type === 'tech' 
                            ? 'border-blue-200 bg-blue-50' 
                            : 'border-green-200 bg-green-50'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium flex items-center gap-2">
                            {addon.title}
                            {addon.isNew && (
                              <Badge className="ml-2 bg-red-500 hover:bg-red-600">
                                NEW
                              </Badge>
                            )}
                          </h4>
                          <span className="text-xs font-medium text-gray-500">
                            {addon.duration}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{addon.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Key Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Industry-aligned curriculum</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Experienced faculty</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Hands-on practical training</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Placement assistance</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>State-of-the-art facilities</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Extra-curricular activities</span>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between">
                <button 
                  onClick={() => setSelectedCourse(null)}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
                <Link
                  to="/contact" 
                  className="bg-[#0F62FE] text-white rounded-lg px-6 py-2.5 font-medium transition-all hover:bg-[#0F62FE]/90 hover:shadow-md"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
}

export default Courses;