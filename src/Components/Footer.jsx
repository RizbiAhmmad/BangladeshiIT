import React from "react";
import { FaFacebookF, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and Brand Info */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="../../src/assets/BangladeshiIT.jpg"  
              alt="BangladeshiIT Logo"
              className="h-10 w-auto"
            />
            <h2 className="text-2xl font-bold text-orange-500">
              Bangladeshi<span className="text-white">IT</span>
            </h2>
          </div>
          <p className="text-gray-400">
            Empowering businesses with modern digital solutions. We specialize in web development, branding, and marketing services.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" aria-label="Facebook"><FaFacebookF className="hover:text-orange-500" /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn className="hover:text-orange-500" /></a>
            <a href="mailto:info@bangladeshiit.com" aria-label="Email"><FaEnvelope className="hover:text-orange-500" /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-orange-500">Home</a></li>
            <li><a href="#about" className="hover:text-orange-500">About Us</a></li>
            <li><a href="#services" className="hover:text-orange-500">Services</a></li>
            <li><a href="#blogs" className="hover:text-orange-500">Blogs</a></li>
            <li><a href="#contact" className="hover:text-orange-500">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>SEO Optimization</li>
            <li>Branding & Identity</li>
            <li>Social Media Marketing</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <FaPhone /> +880 1234-567890
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> info@bangladeshiit.com
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> Dhaka, Bangladesh
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} BangladeshiIT. All rights reserved.
      </div>
    </footer>
  );
}
