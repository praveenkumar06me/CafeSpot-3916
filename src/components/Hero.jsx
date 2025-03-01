import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] 
        bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white px-4"
        >
          <h1 className="text-5xl md:text-6xl font-playfair mb-4">Welcome to Café Serenity</h1>
          <p className="text-xl md:text-2xl font-lato mb-8">Where every cup tells a story</p>
          <button className="bg-cafe-400 text-white px-8 py-3 rounded-full hover:bg-cafe-500 transition duration-300">
            Explore Menu
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;