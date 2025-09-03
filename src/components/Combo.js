import React, { useRef } from "react";
import { motion } from "framer-motion";

export default function ComboSection() {
  const scrollRef = useRef(null);

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

  const handleScroll = (dir) => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth =
      window.innerWidth < 640
        ? container.offsetWidth * 0.9 // slightly narrower on mobile
        : window.innerWidth < 1024
        ? container.offsetWidth * 0.3
        : container.offsetWidth * 0.18;

    container.scrollBy({
      left: dir === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white py-10 px-3 sm:px-6 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-wide text-gray-900">
          SUPER SAVING COMBOS
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">Loved by 4+ millions</p>
      </div>

      {/* Gallery with Buttons */}
      <div className="relative w-full overflow-hidden">
        {/* Scrollable Container */}
        <div ref={scrollRef} className="flex gap-4 sm:gap-6 overflow-hidden pb-2">
          {combos.map((combo, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-md border border-transparent flex-shrink-0
                ${window.innerWidth < 640 ? "w-[85%]" : "min-w-[45%] sm:min-w-[30%] md:min-w-[22%] lg:min-w-[18%]"}
              `}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <div className="relative">
                <img
                  src={combo.image}
                  alt={`combo-${index + 1}`}
                  className={`w-full object-cover
                    ${window.innerWidth < 640 ? "h-[650px]" : "h-[150px] sm:h-[200px] md:h-[240px] lg:h-[260px]"}
                  `}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Left Button */}
        <button
          onClick={() => handleScroll("left")}
          className="flex absolute -left-3 sm:-left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 items-center justify-center rounded-full backdrop-blur-md bg-white/70 shadow-lg hover:bg-white transition"
        >
          ◀
        </button>

        {/* Right Button */}
        <button
          onClick={() => handleScroll("right")}
          className="flex absolute -right-3 sm:-right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 items-center justify-center rounded-full backdrop-blur-md bg-white/70 shadow-lg hover:bg-white transition"
        >
          ▶
        </button>
      </div>

      {/* Footer Note */}
      <p className="text-center text-[10px] sm:text-xs text-gray-500 mt-5 tracking-wide">
        NO COST | EASY EMIs | Activate at Checkout
      </p>
    </section>
  );
}
