import React from 'react';

const PakistaniFooter = () => {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Pakistani Education Hub</h3>
            <p className="text-green-200 text-sm">
              Providing comprehensive educational resources for students across Pakistan's diverse education systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-green-200">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Subjects</a></li>
              <li><a href="#" className="hover:text-white">Resources</a></li>
              <li><a href="#" className="hover:text-white">Exam Dates</a></li>
            </ul>
          </div>

          {/* Boards List */}
          <div>
            <h4 className="font-medium mb-3">Education Boards</h4>
            <ul className="space-y-2 text-sm text-green-200">
              <li><a href="#" className="hover:text-white">FBISE</a></li>
              <li><a href="#" className="hover:text-white">Punjab Board</a></li>
              <li><a href="#" className="hover:text-white">Sindh Board</a></li>
              <li><a href="#" className="hover:text-white">Cambridge</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-green-200">
              <li>info@pakistanieduhub.com</li>
              <li>+92 300 1234567</li>
              <li>Islamabad, Pakistan</li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-green-700 mt-8 pt-6 text-sm text-center text-green-300">
          © 2025 Pakistani Education Hub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default PakistaniFooter;
