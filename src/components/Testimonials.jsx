import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Sarah Johnson',
    rating: 5,
    text: "The best coffee I've ever had! The atmosphere is so cozy and welcoming.",
  },
  {
    name: 'Michael Chen',
    rating: 5,
    text: "Amazing pastries and great service. This is my go-to spot for morning meetings.",
  },
  {
    name: 'Emma Davis',
    rating: 4,
    text: "Love the peaceful ambiance and the artisanal coffee selection.",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-cafe-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-playfair text-center text-cafe-600 mb-12"
        >
          What Our Customers Say
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 w-5 h-5" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <p className="font-semibold text-cafe-500">{testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;