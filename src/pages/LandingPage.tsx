import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Shield, Phone, Users, Scale, Bell, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function LandingPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const stagger = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { staggerChildren: 0.2 }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Phone size={16} />
            <span>Emergency: 100</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/dashboard" className="hover:text-blue-200">Dashboard</Link>
            <a href="#" className="hover:text-blue-200"><Facebook size={16} /></a>
            <a href="#" className="hover:text-blue-200"><Twitter size={16} /></a>
            <a href="#" className="hover:text-blue-200"><Instagram size={16} /></a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <Shield className="text-blue-900" size={32} />
              <span className="text-2xl font-bold text-blue-900">AP Police</span>
            </motion.div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-900">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-900">About</a>
              <a href="#features" className="text-gray-700 hover:text-blue-900">Services</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-900">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-[600px]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="h-full"
        >
          <SwiperSlide>
            <div className="h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://pbs.twimg.com/media/Ew7dLn4VgAA3cVd.jpg")' }}>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
                <div className="container mx-auto px-4">
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl font-bold text-white mb-4"
                  >
                    Serving & Protecting Our Community
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-white mb-8"
                  >
                    24/7 dedication to keeping our city safe
                  </motion.p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://education.sakshi.com/sites/default/files/images/2022/11/28/ap-police-1669654014.jpg")' }}>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
                <div className="container mx-auto px-4">
                  <h1 className="text-5xl font-bold text-white mb-4">Community First Policing</h1>
                  <p className="text-xl text-white mb-8">Building trust through partnership</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-4">About Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are dedicated to maintaining public safety and enhancing the quality of life in our community through professional law enforcement and community partnership.
            </p>
          </motion.div>
          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-lg shadow-lg">
              <Users className="text-blue-900 w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Community Service</h3>
              <p className="text-gray-600">Building strong relationships with our community members.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-lg shadow-lg">
              <Scale className="text-blue-900 w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Justice & Integrity</h3>
              <p className="text-gray-600">Upholding the law with fairness and transparency.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-lg shadow-lg">
              <Bell className="text-blue-900 w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">24/7 Response</h3>
              <p className="text-gray-600">Always ready to respond to emergency situations.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide a wide range of services to ensure the safety and well-being of our community.
            </p>
          </motion.div>
          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              "Emergency Response",
              "Crime Prevention",
              "Community Outreach",
              "Traffic Safety",
              "Investigation Services",
              "Youth Programs"
            ].map((service) => (
              <motion.div
                key={service}
                variants={fadeInUp}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-blue-900 mb-2">{service}</h3>
                <p className="text-gray-600">Professional service delivery with dedication to excellence.</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're here to help. Contact us for non-emergency inquiries.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <Phone className="text-blue-900 w-6 h-6 mr-2" />
                  <span className="text-gray-700">Emergency: 100</span>
                </div>
                <div className="flex items-center mb-4">
                  <Mail className="text-blue-900 w-6 h-6 mr-2" />
                  <span className="text-gray-700">info@appolice.gov</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-blue-900 w-6 h-6 mr-2" />
                  <span className="text-gray-700">123 Safety Street, City, State</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              <form className="bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-4">
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-900" />
                </div>
                <div className="mb-4">
                  <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-900" />
                </div>
                <div className="mb-4">
                  <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-900"></textarea>
                </div>
                <button className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition-colors">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield size={24} />
                <span className="text-xl font-bold">AP Police</span>
              </div>
              <p className="text-blue-200">
                Dedicated to serving and protecting our community 24/7.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-blue-200 hover:text-white">Home</a></li>
                <li><a href="#about" className="text-blue-200 hover:text-white">About</a></li>
                <li><a href="#features" className="text-blue-200 hover:text-white">Services</a></li>
                <li><a href="#contact" className="text-blue-200 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-200 hover:text-white"><Facebook /></a>
                <a href="#" className="text-blue-200 hover:text-white"><Twitter /></a>
                <a href="#" className="text-blue-200 hover:text-white"><Instagram /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center">
            <p className="text-blue-200">&copy; 2024 AP Police Department. All rights reserved.</p>
          </div>
        </div>  
      </footer>
    </div>
  );
}

export default LandingPage;