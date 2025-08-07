import React, { useEffect, useRef, useState, useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadAll } from '@tsparticles/all'; // ✅ Replaces loadFull from v2

const BlogHero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [subtextIndex, setSubtextIndex] = useState(0);
  const [showButtons, setShowButtons] = useState(false);

  const heading = "Unlock Knowledge with XcelTube";
  const subtext = "Explore cutting-edge tutorials, articles, and resources.";

  const particlesInit = useCallback(async (engine) => {
    await loadAll(engine); // ✅ Correct way to initialize particles
  }, []);

  useEffect(() => {
    if (textIndex < heading.length) {
      setTimeout(() => setTextIndex(textIndex + 1), 70);
    } else if (subtextIndex < subtext.length) {
      setTimeout(() => setSubtextIndex(subtextIndex + 1), 40);
    } else {
      setShowButtons(true);
    }
  }, [textIndex, subtextIndex]);

  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "#0a0a1a" },
          particles: {
            number: { value: 80 },
            color: { value: "#00f7ff" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 3, random: true },
            links: {
              enable: true,
              distance: 150,
              color: "#00f7ff",
              opacity: 0.2,
              width: 1,
            },
            move: { enable: true, speed: 2 },
          },
        }}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 drop-shadow-lg z-10">
        {heading.slice(0, textIndex)}
      </h1>
      <p className="mt-4 text-lg md:text-xl text-white/80 z-10">
        {subtext.slice(0, subtextIndex)}
      </p>

      {showButtons && (
        <div className="mt-8 flex gap-4 z-10 animate-fade-in">
          <a
            href="#"
            className="hero-btn bg-gradient-to-r from-cyan-400 to-pink-500 text-black font-bold px-6 py-3 rounded-full shadow hover:scale-105 transition"
          >
            Browse Courses
          </a>
          <a
            href="#"
            className="hero-btn border border-cyan-400 text-cyan-400 px-6 py-3 rounded-full hover:bg-cyan-400 hover:text-black transition"
          >
            Latest Posts
          </a>
        </div>
      )}
    </section>
  );
};

export default BlogHero;
