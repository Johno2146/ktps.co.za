import React from 'react';
import { Link } from 'react-router-dom';
import { PawPrint, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6">
              <PawPrint className="h-8 w-8 text-primary-400" />
              <span className="ml-2 text-2xl font-bold tracking-tight text-white">KTPS</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Providing premium, personalized pet care across South Africa. Your pet's happiness is our top priority.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Our Services</h3>
            <ul className="space-y-4">
              <li className="text-gray-400">Professional Pet Sitting</li>
              <li className="text-gray-400">Expert Dog Walking</li>
              <li className="text-gray-400">Premium Grooming</li>
              <li className="text-gray-400">Overnight Care</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-primary-400 mr-3 mt-1" />
                <div className="flex flex-col">
                  <span className="text-gray-400">+27 82 801 8700</span>
                  <span className="text-gray-400">+27 82 791 1068</span>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-primary-400 mr-3 mt-1" />
                <span className="text-gray-400">bookings@ktps.co.za</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-400 mr-3 mt-1" />
                <span className="text-gray-400">Benoni, Gauteng, South Africa</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Kaylea and Tenielles' Pet Services (KTPS). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
