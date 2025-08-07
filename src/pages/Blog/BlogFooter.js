import React from 'react';

const BlogFooter = () => {
  return (
    <footer className="bg-[#0a0a1a] border-t border-white/10 pt-16 pb-8 px-6 md:px-12 text-white relative z-10">
      {/* Top Section */}
      <div className="grid gap-10 md:grid-cols-3 mb-12">
        {/* About */}
        <div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text mb-4">XcelTube</h3>
          <p className="text-white/70 text-sm leading-relaxed mb-4">
            Empowering the next generation of learners with cutting-edge educational content and AI-powered learning experiences.
          </p>
          {/* Social Icons */}
          <div className="flex gap-3 mt-4">
            {[
              { icon: 'fab fa-twitter', href: '#' },
              { icon: 'fab fa-linkedin-in', href: '#' },
              { icon: 'fab fa-github', href: '#' },
              { icon: 'fab fa-youtube', href: '#' }
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-gradient-to-r from-cyan-400 to-pink-500 hover:text-black transition-all"
              >
                <i className={`${s.icon}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><a href="#" className="hover:text-cyan-400 transition">Home</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition">Blog</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition">Courses</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition">About Us</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition">Contact</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <div className="text-sm text-white/70 space-y-3">
            <p><i className="fas fa-map-marker-alt text-cyan-400 mr-2" />123 Tech Park, Silicon Valley, CA</p>
            <p><i className="fas fa-envelope text-cyan-400 mr-2" />hello@xcel-tube.com</p>
            <p><i className="fas fa-phone-alt text-cyan-400 mr-2" />+1 (555) 123-4567</p>
          </div>
        </div>
      </div>

      {/* Bottom Ticker */}
      <div className="border-t border-white/10 pt-6 text-center text-sm text-white/50 relative overflow-hidden h-6">
        <div className="absolute animate-ticker whitespace-nowrap">
          © 2025 XcelTube. All rights reserved. | Designed with 💡 for the future of education | Stay curious, keep learning!
        </div>
        <style>{`
          @keyframes ticker {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-ticker {
            animation: ticker 20s linear infinite;
          }
        `}</style>
      </div>
    </footer>
  );
};

export default BlogFooter;
