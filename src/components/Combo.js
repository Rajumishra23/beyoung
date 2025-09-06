import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ComboSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const combos = [
    { image: "combo1.webp" },
    { image: "combo2.webp" },
    { image: "combo3.webp" },
    { image: "combo4.webp" },
    { image: "combo5.webp" },
    { image: "combo7.webp" },
    { image: "combo8.webp" },
    { image: "combo9.webp" },
    { image: "combo10.webp" },
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleScroll = (dir) => {
    if (isMobile) {
      if (dir === "left" && currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1);
      }
      if (dir === "right" && currentIndex < combos.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      }
    } else {
      if (dir === "left" && currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1);
      }
      if (dir === "right" && currentIndex < combos.length - 5) {
        setCurrentIndex((prev) => prev + 1);
      }
    }
  };

  return (
    <section className="bg-white py-10 px-3 sm:px-6 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-wide text-gray-900">
          SUPER SAVING COMBOS
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">
          Loved by 4+ millions
        </p>
      </div>

      {/* Mobile View */}
      {isMobile ? (
        <div className="relative w-full h-[500px] sm:hidden overflow-hidden">
          <motion.div
            key={currentIndex}
            className="w-full h-full rounded-xl overflow-hidden border-2 border-yellow-500 bg-[#fdf8f2]" // ✅ Golden border
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={combos[currentIndex].image}
              alt={`combo-${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Controls */}
          <button
            onClick={() => handleScroll("left")}
            disabled={currentIndex === 0}
            className="absolute top-1/2 left-2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/70 shadow hover:bg-white transition disabled:opacity-40"
          >
            ◀
          </button>
          <button
            onClick={() => handleScroll("right")}
            disabled={currentIndex === combos.length - 1}
            className="absolute top-1/2 right-2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/70 shadow hover:bg-white transition disabled:opacity-40"
          >
            ▶
          </button>
        </div>
      ) : (
        // Desktop View
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-4 sm:gap-6"
            animate={{ x: `-${currentIndex * 22}%` }}
            transition={{ type: "spring", stiffness: 70, damping: 20 }}
          >
            {combos.map((combo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[30%] md:w-[22%] lg:w-[18%] bg-white rounded-xl shadow-md border-2 border-yellow-500 bg-[#fdf8f2] overflow-hidden" // ✅ Golden border
              >
                <img
                  src={combo.image}
                  alt={`combo-${index + 1}`}
                  className="w-full h-[240px] md:h-[320px] lg:h-[360px] object-cover"
                />
              </div>
            ))}
          </motion.div>

          {/* Controls */}
          <button
            onClick={() => handleScroll("left")}
            disabled={currentIndex === 0}
            className="flex absolute -left-3 sm:-left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 items-center justify-center rounded-full backdrop-blur-md bg-white/70 shadow-lg hover:bg-white transition disabled:opacity-40"
          >
            ◀
          </button>
          <button
            onClick={() => handleScroll("right")}
            disabled={currentIndex >= combos.length - 5}
            className="flex absolute -right-3 sm:-right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 items-center justify-center rounded-full backdrop-blur-md bg-white/70 shadow-lg hover:bg-white transition disabled:opacity-40"
          >
            ▶
          </button>
        </div>
      )}

      {/* Footer Note */}
      <p className="text-center text-[10px] sm:text-xs text-gray-500 mt-5 tracking-wide">
        NO COST | EASY EMIs | Activate at Checkout
      </p>
    </section>
  );
}