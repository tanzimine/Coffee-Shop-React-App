import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-5 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          
          {/* Logo + Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl font-bold">☕</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  BrewCraft
                </h2>
                <p className="text-sm text-gray-400">Artisan Coffee Experience</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Crafting exceptional coffee experiences since 2020. From bean to cup, we bring you the finest 
              artisan coffee with passion and precision. Every sip tells a story.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <FaFacebookF className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-sky-400 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <FaTwitter className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-pink-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <FaInstagram className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <FaLinkedinIn className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-amber-400">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200 flex items-center">
                  <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200 flex items-center">
                  <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
                  Our Menu
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200 flex items-center">
                  <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200 flex items-center">
                  <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200 flex items-center">
                  <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-amber-400">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">123 Brew Street</p>
                  <p className="text-gray-400 text-sm">Lombok, Indonesia 83352</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-amber-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">+62 812-3456-7890</p>
                  <p className="text-gray-400 text-sm">Mon-Sat: 7AM-10PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-amber-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">hello@brewcraft.com</p>
                  <p className="text-gray-400 text-sm">We reply within 24h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="max-w-md">
            <h4 className="text-lg font-semibold mb-3 text-amber-400">Stay Updated</h4>
            <p className="text-gray-300 mb-4 text-sm">
              Get the latest coffee news, brewing tips, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex space-x-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} BrewCraft Coffee. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
