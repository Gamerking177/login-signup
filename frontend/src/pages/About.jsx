import { useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { CimageCard } from '@/components/ui/CimageCard';

const leadershipTeam = [
  {
    id: 1,
    name: "Prof. Basant Kumar Agrawal",
    role: "Chairman",
    image: "https://www.cimage.in/sitepanel/uploads/administration/Prof.-Basant-Kumar-Agrawal-400x400.jpg",
    bio: "CIMAGE College and The Career Catalyst Group have received immense support, trust and love from the residents of Bihar, Jharkhand and Northeast UP for the last 15 consecutive years. This is our capital. CIMAGE College has continuously carried out successful innovative experiments in the field of IT and Management education, which has resulted in better results and better campus placements of our students. CIMAGE has been ranked as the best college in patna, bihar for the study of BCA, BBA, BBM, BSc.IT, B.Com & PGDM course with an excellent campus placement. We are confident that we will be able to maintain this belief firmly in future also. With best wishes for a bright future.",
    isLeadership: true
  },
  {
    id: 2,
    name: "Prof. (Dr.) Neeraj Agrawal",
    role: "Director",
    image: "https://www.cimage.in/sitepanel/uploads/administration/Director-CIMAGE-Group-of-Institutions-1024x683.jpg",
    bio: `Nobody ever said that leading an academic institution like CIMAGE Group of Institutions would be an easy task! They also didn't say that in providing this leadership I would find special rewards that have enriched my life experience immeasurably, yet this is exactly what I have experienced here. CIMAGE is my dream! We teach the students that they need to be lifelong learners, open to the lessons of every experience, and then we provide them with the opportunities to do just that. The examples of many of our successful students, who graduated or post-graduated from our college, have made our faith even more stronger than before that hard-work, devotion, dedication along with correct guidance; lead us to success. The many formal or informal, direct or indirect ways, in which we teach students at CIMAGE, contribute a lot in propelling our students rapidly towards their goal. The success of our college leaves us thinking that CIMAGE has truly become a remarkable teaching and learning community for learners still we have to go miles away and soon we will. As I always say and believe 'Either you have strong will power or weak excuses. CIMAGE  has developed into a such an educational institution for the study of IT & Management courses, where we have the expertise to support new directions, where the directions are based on what is good for the students now and the college in the long term, where the individual leaders are important only for their passion in moving the programmes forward, and where we have a healthy balance of tradition and innovation.`,
    isLeadership: true
  },
  {
    id: 3,
    name: "Mrs. Megha Agrawal",
    role: "CENTER HEAD",
    image: "https://www.cimage.in/sitepanel/uploads/administration/Megha-Agrawal-1024x576.png",
    bio: `Let me take this opportunity to applaud the efforts of the students, our teachers, and supporting staffs for all their hard work, sincere and dedicated efforts in keeping the CIMAGE flag flying high in the academic as well as co-curricular activities.

I am happy to see that our students have achieved excellence in various fields; whether it be profession or business, be it management or accounting.  In spite of being geographically dispersed all over the country, CIMAGEians continue to cherish a treasured bond with College, a bond nurtured by fond memories of lifelong friendships and dedicated teachers, not  to speak  of the various activities undertaken in College.

I take this opportunity to express my sincere and heartfelt gratitude to all the students, their parents, the teaching and the supporting staffs of the college for all their efforts and for the support for effective running of the college.`,
    isLeadership: true
  },
  {
    id: 4,
    name: "Prof. (Dr.) Neeraj Poddar",
    role: "DEAN",
    image: "https://www.cimage.in/sitepanel/uploads/administration/n_p.jpg",
    bio: `Dear Students,

The globalization & the opening up of the economy have ushered in a paradigm shift in the entire gamut of industries. Priorities have changed to conforming to the emerging needs.
For the students the changing scenario poses new challenges. To make their mark in this new environs they need to be strong in commitments, focused in their approach and ever quick to assimilate and adopt new ideas and skills.
CIMAGE is big, both in size & in reputation. It is meant to demonstrate impressive performance on account of almost all parameters. Key factors in CIMAGE's growth have been superior quality student's intake, high quality career & placement, technology drivers and culture.
At CIMAGE perspective on learning is different. The courses have been designed and structured in tune with the present market needs. Its multi-disciplinary approach, constant interface with the industry, and networking to instantly access the latest changes, contribute to the overall development of the students.
At CIMAGE students set benchmark that fewer will be able to achieve and that's why our students do not fail to deliver in a demanding, professional and result-driven environment.
I know that in addition to academic excellence, you are also interested in having a fulfilling and enjoyable quality of life while on campus. At CIMAGE when you pass out, you are a superior professional and better person.`,
    isLeadership: true
  }
];

const facultyMembers = [
  {
    id: 5,
    name: "Prof. ( Dr.) Neeraj Poddar",
    role: "Dean, HOD of English Department",
    department: "English",
    image: "https://www.cimage.in/sitepanel/uploads/image/n_p.jpg",
    bio: "Prof. (Dr.) Neeraj Poddar is a highly qualified and experienced educator with a Ph.D. in English Literature. He has been instrumental in developing the English curriculum at CIMAGE, focusing on enhancing students' communication skills and critical thinking abilities."
  },
  {
    id: 6,
    name: "Prof. Nitish Kr Rohatgi",
    role: "HOD, Management Department",
    department: "Management",
    image: "https://www.cimage.in/sitepanel/uploads/image/Nitish-Kr-Rohatgi.jpg",
    bio: "Prof. Nitish Kr Rohatgi brings extensive industry experience to his role as Head of the Management Department. With expertise in organizational behavior and strategic management, he prepares students for leadership roles in the corporate world."
  },
  {
    id: 7,
    name: "Prof. Amit Kr. Shukla",
    role: "HOD, IT Department",
    department: "IT",
    image: "https://www.cimage.in/sitepanel/uploads/image/Amit-Shukla.jpg",
    bio: "Prof. Amit Kr. Shukla leads our IT Department with a focus on emerging technologies. His expertise in software development and data structures helps students build strong technical foundations."
  },
  {
    id: 8,
    name: "Ravi Kumar Soni",
    role: "Faculty",
    department: "IT",
    image: "https://www.cimage.in/sitepanel/uploads/image/Ravi-Soni-Sir.jpg",
    bio: ""
  },
  {
    id: 9,
    name: "Dr. Pawan Kr Jha",
    role: "Faculty",
    department: "Management",
    image: "https://www.cimage.in/sitepanel/uploads/image/Pawan-Jha.jpg",
    bio: ""
  },
  {
    id: 10,
    name: "Murli Manohar",
    role: "Faculty",
    department: "IT",
    image: "https://www.cimage.in/sitepanel/uploads/image/Murli-Sir.jpg",
    bio: ""
  },
  {
    id: 11,
    name: "Anjesh Kumar",
    role: "Faculty",
    department: "IT",
    image: "https://www.cimage.in/sitepanel/uploads/image/Anjesh-Kr.jpg",
    bio: ""
  },
  {
    id: 12,
    name: "Raju Upadhyay",
    role: "Faculty",
    department: "IT",
    image: "https://www.cimage.in/sitepanel/uploads/image/Raju-kr.jpg",
    bio: ""
  },
  {
    id: 13,
    name: "Sanjana Sinha",
    role: "Faculty",
    department: "English",
    image: "https://www.cimage.in/sitepanel/uploads/image/Sanjana-Mam.jpg",
    bio: ""
  },
  {
    id: 14,
    name: "Ms. Akanksha",
    role: "Faculty",
    department: "English",
    image: "https://www.cimage.in/sitepanel/uploads/image/Ms-Akanksha.jpg",
    bio: ""
  },
  {
    id: 15,
    name: "Kundan Kumar",
    role: "Faculty",
    department: "Mathematics",
    image: "https://www.cimage.in/sitepanel/uploads/image/Kundan-Kumar.jpg",
    bio: ""
  },
];

function AboutPage() {
  const [activeFilter, setActiveFilter] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);
  
  const departments = ['All', 'IT', 'Management', 'English', 'Mathematics'];
  
  const filteredFaculty = activeFilter 
    ? facultyMembers.filter(member => activeFilter === 'All' || member.department === activeFilter)
    : facultyMembers;

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-[#1A365D] to-[#0F62FE] text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10 bg-repeat"
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">About CIMAGE</h1>
            <p className="text-xl text-gray-100">
              Dedicated to excellence in education and innovation, CIMAGE empowers students with the knowledge and skills to succeed in a rapidly evolving digital world.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <SectionTitle 
                title="Our Mission" 
                subtitle="Empowering the next generation of digital innovators"
              />
              <p className="text-gray-700 mb-6">
                At CIMAGE, we are committed to providing transformative education that bridges the gap between theoretical knowledge and practical skills. Our mission is to empower students with the technical expertise, creative thinking, and professional competencies needed to thrive in the digital economy.
              </p>
              <p className="text-gray-700">
                Through innovative teaching methods, industry partnerships, and a supportive learning environment, we prepare our students to become leaders in their fields and contribute meaningfully to technological advancement and societal progress.
              </p>
            </div>
            
            <div className="order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                alt="CIMAGE campus" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-20">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80" 
                alt="Students collaborating" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            
            <div>
              <SectionTitle 
                title="Our Vision" 
                subtitle="Creating a hub for technological excellence and innovation"
              />
              <p className="text-gray-700 mb-6">
                We envision CIMAGE as a global center of excellence for technology and business education, recognized for producing graduates who are not just job-ready but future-ready. We strive to create an ecosystem where innovation flourishes, and students are encouraged to push boundaries.
              </p>
              <p className="text-gray-700">
                By fostering a culture of continuous learning, ethical leadership, and entrepreneurial thinking, we aim to contribute to the development of a skilled workforce that can address complex challenges and drive positive change in an increasingly digital world.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Leadership Team */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Leadership Team" 
            subtitle="Meet the visionaries guiding CIMAGE's mission"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {leadershipTeam.map((member) => (
              <CimageCard 
                key={member.id} 
                className="overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                    <h3 className="text-white text-xl font-semibold">{member.name}</h3>
                    <p className="text-[#00CFFD] font-medium">{member.role}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-700 line-clamp-3">{member.bio}</p>
                  <button 
                    onClick={() => setSelectedMember(member)}
                    className="text-[#0F62FE] font-medium mt-2 hover:underline"
                  >
                    Read More
                  </button>
                </div>
              </CimageCard>
            ))}
          </div>
        </div>
      </section>
      
      {/* Faculty */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Faculty" 
            subtitle="Expert educators dedicated to student success"
            centered
          />
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {departments.map((department) => (
              <button
                key={department}
                onClick={() => setActiveFilter(department === 'All' ? null : department)}
                className={`px-4 py-2 rounded-full transition-all ${
                  (department === 'All' && activeFilter === null) || department === activeFilter
                    ? 'bg-[#0F62FE] text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {department}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {filteredFaculty.map((member) => (
              <CimageCard 
                key={member.id} 
                className="overflow-hidden"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-sm font-semibold text-[#0F62FE]">
                    {member.department}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-[#0F62FE] font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-gray-700 text-sm line-clamp-3">{member.bio}</p>
                  <button 
                    onClick={() => setSelectedMember(member)}
                    className="text-[#0F62FE] font-medium mt-2 hover:underline text-sm"
                  >
                    Read More
                  </button>
                </div>
              </CimageCard>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#0F62FE] to-[#6979F8] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight mb-6 max-w-3xl mx-auto">Join Our Community of Innovators</h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Begin your journey with CIMAGE and discover a world of opportunities in technology, design, and business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/courses" className="bg-white text-[#0F62FE] rounded-lg px-6 py-2.5 font-medium transition-all hover:bg-gray-100 hover:shadow-md">
              Explore Courses
            </a>
            <a href="/contact" className="bg-transparent text-white border border-white rounded-lg px-6 py-2.5 font-medium transition-all hover:bg-white/10 hover:shadow-md">
              Contact Us
            </a>
          </div>
        </div>
      </section>
      
      {/* Team Member Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative h-56 md:h-64">
              <img 
                src={selectedMember.image} 
                alt={selectedMember.name} 
                className="w-full h-full object-cover"
              />
              <button 
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h2 className="text-white text-2xl font-semibold">{selectedMember.name}</h2>
                <p className="text-[#00CFFD]">{selectedMember.role}{selectedMember.department && ` • ${selectedMember.department}`}</p>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">About {selectedMember.name.split(' ')[0]}</h3>
              {Array.isArray(selectedMember.bio) ? (
                selectedMember.bio.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 mb-4">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="text-gray-700 mb-6">
                  {selectedMember.bio}
                </p>
              )}
              
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h4 className="font-semibold mb-2">Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedMember.department === 'IT' && (
                    <>
                      <span className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm">Web Development</span>
                      <span className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm">AI & Machine Learning</span>
                      <span className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm">Cloud Computing</span>
                    </>
                  )}
                  {selectedMember.department === 'Management' && (
                    <>
                      <span className="bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm">Digital Marketing</span>
                      <span className="bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm">Entrepreneurship</span>
                      <span className="bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm">Business Strategy</span>
                    </>
                  )}
                  {selectedMember.department === 'English' && (
                    <>
                      <span className="bg-indigo-100 text-indigo-800 rounded-full px-3 py-1 text-sm">Literature</span>
                      <span className="bg-indigo-100 text-indigo-800 rounded-full px-3 py-1 text-sm">Communication Skills</span>
                      <span className="bg-indigo-100 text-indigo-800 rounded-full px-3 py-1 text-sm">Critical Thinking</span>
                    </>
                  )}
                  {selectedMember.department === 'Mathematics' && (
                    <>
                      <span className="bg-purple-100 text-purple-800 rounded-full px-3 py-1 text-sm">Applied Mathematics</span>
                      <span className="bg-purple-100 text-purple-800 rounded-full px-3 py-1 text-sm">Statistics</span>
                      <span className="bg-purple-100 text-purple-800 rounded-full px-3 py-1 text-sm">Quantitative Methods</span>
                    </>
                  )}
                </div>
              </div>
              
              <button 
                onClick={() => setSelectedMember(null)}
                className="bg-transparent text-[#0F62FE] border border-[#0F62FE] rounded-lg px-6 py-2.5 font-medium transition-all hover:bg-[#0F62FE]/10 hover:shadow-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
}

export default AboutPage;