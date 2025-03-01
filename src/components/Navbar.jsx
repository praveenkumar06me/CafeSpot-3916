import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCoffee } from 'react-icons/fa';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white shadow-md fixed w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <FaCoffee className="h-8 w-8 text-cafe-500" />
              <span className="ml-2 text-xl font-playfair font-bold text-cafe-600">Café Serenity</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-cafe-600 hover:text-cafe-400">Home</Link>
            <Link to="/menu" className="text-cafe-600 hover:text-cafe-400">Menu</Link>
            <Link to="/contact" className="text-cafe-600 hover:text-cafe-400">Contact</Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;