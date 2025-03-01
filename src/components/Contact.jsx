import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 gap-12"
        >
          <div>
            <h2 className="text-4xl font-playfair text-cafe-600 mb-8">Contact Us</h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <FaPhone className="text-cafe-400 w-6 h-6" />
                <span className="ml-4 text-gray-700">(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-cafe-400 w-6 h-6" />
                <span className="ml-4 text-gray-700">hello@cafeserenity.com</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-cafe-400 w-6 h-6" />
                <span className="ml-4 text-gray-700">123 Coffee Street, Beantown, ST 12345</span>
              </div>
            </div>

            <form className="mt-8 space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cafe-400"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cafe-400"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cafe-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-cafe-400 text-white py-2 px-6 rounded-md hover:bg-cafe-500 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="h-[400px] md:h-full relative">
            <div className="absolute inset-0 bg-gray-200 rounded-lg">
              {/* Replace with actual Google Maps embed */}
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                Map placeholder
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;