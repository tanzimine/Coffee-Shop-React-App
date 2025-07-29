import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-sm">
        
        {/* Logo + Brand */}
        <div>
          <h2 className="text-xl font-bold mb-3">☕ Coffee Shop</h2>
          <p className="text-gray-400">
            Brewing joy, one cup at a time. Come for the coffee, stay for the vibe.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-blue-500">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-sky-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-700">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Menu</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-gray-400">123 Brew Street<br/>Lombok, Indonesia</p>
          <p className="text-gray-400 mt-2">Email: support@coffeeshop.com</p>
          <p className="text-gray-400">Phone: +11 812-3456-7890</p>
        </div>
      </div>

      <div className="text-center mt-10 text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} Coffee Shop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
