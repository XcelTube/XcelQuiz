import React, { useState } from 'react';

const BlogNewsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLaunching(true);
    setTimeout(() => {
      setSubscribed(true);
      setIsLaunching(false);
      setEmail('');

      setTimeout(() => {
        setSubscribed(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section className="relative bg-gradient-to-br from-cyan-400/10 to-pink-400/10 py-20 px-6 md:px-12 rounded-2xl mx-4 md:mx-20 mt-20 text-white shadow-lg overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(0,247,255,0.05)_0%,transparent_70%)] animate-spin-slow pointer-events-none -z-10" />

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Stay Updated with the Future of Learning!
      </h2>
      <p className="text-center text-white/70 max-w-2xl mx-auto mb-10">
        Subscribe to our newsletter for weekly insights, tutorials, and exclusive content delivered straight to your inbox.
      </p>

      <form onSubmit={handleSubscribe} className="max-w-xl mx-auto relative flex flex-col md:flex-row items-center gap-4">
        <input
          type="email"
          placeholder="Your email address"
          className="flex-1 w-full rounded-full px-6 py-3 bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className={`relative px-6 py-3 rounded-full font-bold text-black bg-gradient-to-r from-cyan-400 to-pink-500 shadow-lg transition-all ${
            isLaunching ? 'rocket-launch' : ''
          }`}
        >
          {subscribed ? 'Subscribed!' : 'Subscribe'}
        </button>
      </form>

      {/* Rocket Launch Animation */}
      <style>{`
        @keyframes rocketLaunch {
          0% { transform: translateX(0) translateY(0); opacity: 1; }
          50% { transform: translateX(100px) translateY(-50px); opacity: 0.8; }
          100% { transform: translateX(200px) translateY(-200px); opacity: 0; }
        }
        .rocket-launch {
          animation: rocketLaunch 1.5s forwards;
        }
        .animate-spin-slow {
          animation: spin 15s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default BlogNewsletter;
