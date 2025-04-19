
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Header */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-[#0F62FE] to-[#6979F8] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">Contact Us</h1>
            <p className="text-xl text-gray-100">
              Have questions or need more information? We're here to help. Reach out to us through any of the channels below.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionTitle 
                title="Get In Touch" 
                subtitle="We'd love to hear from you"
              />
              
              <div className="space-y-6 mt-8">
                <div className="flex items-start gap-4">
                  <div className="bg-[#0F62FE]/10 p-3 rounded-full">
                    <MapPin className="text-[#0F62FE] w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Visit Us</h3>
                    <p className="text-gray-600">
                      123 Education Street, Learning City, LC 12345
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#0F62FE]/10 p-3 rounded-full">
                    <Phone className="text-[#0F62FE] w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                    <p className="text-gray-600">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#0F62FE]/10 p-3 rounded-full">
                    <Mail className="text-[#0F62FE] w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                    <p className="text-gray-600">
                      info@cimage.edu
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#0F62FE]/10 p-3 rounded-full">
                    <Clock className="text-[#0F62FE] w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <form className="bg-gray-50 p-8 rounded-xl shadow-sm">
                <h2 className="text-2xl font-display font-bold mb-6">Send Us a Message</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0F62FE] focus:border-[#0F62FE]"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0F62FE] focus:border-[#0F62FE]"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0F62FE] focus:border-[#0F62FE]"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0F62FE] focus:border-[#0F62FE]"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0F62FE] focus:border-[#0F62FE]"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="btn-cimage w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="bg-white">
        <div className="h-96 w-full bg-gray-300 relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.1799214507846!2d85.0982457759402!3d25.632153413945066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed57d6a5ca4bc5%3A0xf13297437ad031f6!2sCIMAGE%20%7C%20Catalyst%20College%20%7C%20Best%20BCA%20College%20in%20Patna%20%7C%20Top%20BBA%20College%20in%20Patna!5e0!3m2!1sen!2sin!4v1744920125140!5m2!1sen!2sin"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="CIMAGE location map"
          ></iframe>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ContactPage;