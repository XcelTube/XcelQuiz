import React from 'react';
import { motion } from 'framer-motion';

const BritishFooter = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="mt-20 pt-8 border-t border-gray-200"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {/* Brand */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">British Education Hub</h3>
          <p className="text-gray-600">
            Comprehensive resources for UK students, teachers, and parents.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Links</h3>
          <ul className="space-y-2">
            {['About Us', 'Our Resources', 'Exam Boards', 'Teaching Resources'].map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Support</h3>
          <ul className="space-y-2">
            {['Contact Us', 'FAQs', 'Privacy Policy', 'Terms of Service'].map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Newsletter</h3>
          <p className="text-gray-600 mb-3">
            Subscribe for updates and new resources.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 w-full"
            />
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-r-lg transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="pt-8 border-t border-gray-200 text-center text-gray-600">
        <p>© {new Date().getFullYear()} British Education Hub. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default BritishFooter;
