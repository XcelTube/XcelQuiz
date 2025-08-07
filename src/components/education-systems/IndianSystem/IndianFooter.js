import React from 'react';

const IndianFooter = () => {
  return (
    <footer className="bg-orange-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Branding */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Indian Education Hub</h3>
            <p className="text-orange-200 text-sm">
              Your centralized platform for Indian education systems, competitive exams, study resources, and school boards.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-orange-200">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Resources</a></li>
              <li><a href="#" className="hover:text-white">Competitive Exams</a></li>
              <li><a href="#" className="hover:text-white">Study Tools</a></li>
            </ul>
          </div>

          {/* Education Boards */}
          <div>
            <h4 className="font-medium mb-3">Education Boards</h4>
            <ul className="space-y-2 text-sm text-orange-200">
              <li><a href="#" className="hover:text-white">CBSE</a></li>
              <li><a href="#" className="hover:text-white">ICSE</a></li>
              <li><a href="#" className="hover:text-white">State Boards</a></li>
              <li><a href="#" className="hover:text-white">Maharashtra Board</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-medium mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-orange-200">
              <li>support@indianeduhub.com</li>
              <li>+91 98765 43210</li>
              <li>New Delhi, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-orange-700 mt-8 pt-6 text-sm text-center text-orange-300">
          © 2025 Indian Education Hub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default IndianFooter;
