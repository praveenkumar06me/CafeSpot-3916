import React from 'react';
import { motion } from 'framer-motion';

const menuItems = {
  Coffee: [
    { name: 'Espresso', price: '$3.50', description: 'Rich and bold' },
    { name: 'Cappuccino', price: '$4.50', description: 'Espresso with steamed milk foam' },
    { name: 'Latte', price: '$4.75', description: 'Espresso with steamed milk' },
  ],
  Tea: [
    { name: 'Earl Grey', price: '$3.00', description: 'Classic black tea with bergamot' },
    { name: 'Green Tea', price: '$3.00', description: 'Light and refreshing' },
  ],
  Pastries: [
    { name: 'Croissant', price: '$3.50', description: 'Buttery and flaky' },
    { name: 'Chocolate Muffin', price: '$3.75', description: 'Rich chocolate flavor' },
  ],
};

const Menu = () => {
  return (
    <div className="bg-cafe-100 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-playfair text-center text-cafe-600 mb-12"
        >
          Our Menu
        </motion.h2>
        
        {Object.entries(menuItems).map(([category, items], index) => (
          <motion.div 
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-playfair text-cafe-500 mb-6">{category}</h3>
            <div className="grid gap-6">
              {items.map((item) => (
                <div key={item.name} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xl font-lato text-cafe-600">{item.name}</h4>
                    <span className="text-cafe-400 font-semibold">{item.price}</span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Menu;