import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const backgrounds = [
  {
    image: `url(${require('../public/h.jpg')})`,
    text: "Discover the Latest Fashion Trends",
  },
  {
    image: `url(${require('../public/h2.jpg')})`,
    text: "Style That Defines You",
  },
  {
    image: `url(${require('../public/h3.jpg')})`,
    text: "Shop Smart, Dress Better, Live Bold",
  },
  {
    image: `url(${require('../public/h4.jpg')})`,
    text: "Shop Smart, Look Sharp",
  },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  // Cycle through slides every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % backgrounds.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[40vh] w-full overflow-hidden md:h-[90vh]">
      {/* Background transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={backgrounds[index].image}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: backgrounds[index].image,
          }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text transition */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
        <AnimatePresence mode="wait">
          <motion.h1
            key={backgrounds[index].text}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            {backgrounds[index].text}
          </motion.h1>
        </AnimatePresence>
          <a href='/shop'>
        <motion.button
          whileHover={{ scale: 1.00 }}
          className="bg-white text-gray-900 px-6 py-3 rounded-full text-lg font-semibold mt-4"
        >
          Shop Now
        </motion.button>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
