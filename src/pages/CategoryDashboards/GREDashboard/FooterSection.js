// src/pages/CategoryDashboards/GREDashboard/FooterSection.js

import React from 'react';

const FooterSection = ({ darkMode }) => {
  return (
    <footer className={`p-6 ${darkMode ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-600'}`}>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>© 2023 GRE Dashboard. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
