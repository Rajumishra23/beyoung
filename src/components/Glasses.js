import React, { useRef } from "react";
import { motion } from "framer-motion";

const glasses = [
  {
    name: "SmartBuy Collection",
    subName: "Noam CP110",
    image: "glasses.webp",
    price: "₹1,750",
    oldPrice: "₹3,500",
    discount: "-50%",
  },
  {
    name: "Vuarnet",
    subName: "VL1918 RACING REGULAR Polarized 0008 1626",
    image: "glasses1.webp",
    price: "₹11,906",
  },
  {
    name: "Ralph by Ralph Lauren",
    subName: "RA7158U 5001",
    image: "glasses2.webp",
    price: "₹8,834",
  },
  {
    name: "Montana Eyewear",
    subName: "MP198 Polarized MP198",
    image: "glasses3.webp",
    price: "₹1,836",
  },
];

export default function GlassSection() {
  const sliderRef = useRef(null);

  const scrollLeft = () =>
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  const scrollRight = () =>
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });

  return (
    <section className="bg-gray-300 py-12 px-4 md:px-12 overflow-hidden">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
        👓 Frame Your Vision
      </h2>

      <div className="relative max-w-7xl mx-auto flex items-center overflow-hidden">
        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-4 sm:gap-6 flex-1 overflow-x-auto scrollbar-hide touch-none"
        >
          {glasses.map((glass, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-1/2 sm:w-[220px] md:w-[260px] 
                         bg-white rounded-md overflow-hidden relative 
                         border border-gray-200 shadow-sm transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              {glass.discount && (
                <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {glass.discount}
                </span>
              )}

              <img
                src={glass.image}
                alt={glass.name}
                className="w-full h-[220px] sm:h-[260px] md:h-[300px] object-contain mx-auto"
              />

              {/* Product Info (compact) */}
              <div className="mt-2 px-3 pb-3 space-y-1 text-left">
                <h3
                  className="text-sm sm:text-base font-semibold text-black truncate"
                  title={glass.name}
                >
                  {glass.name}
                </h3>

                <p className="text-[11px] sm:text-xs text-gray-500 font-medium tracking-wide">
                  {glass.subName}
                </p>

                <div className="flex items-center gap-2 text-xs sm:text-sm">
                  <span className="font-bold text-orange-600">
                    {glass.price}
                  </span>
                  {glass.oldPrice && (
                    <span className="line-through text-gray-400 text-[11px] sm:text-xs">
                      {glass.oldPrice}
                    </span>
                  )}
                  {glass.discount && (
                    <span className="text-green-600 font-medium text-[11px] sm:text-xs">
                      {glass.discount} OFF
                    </span>
                  )}
                </div>

                <div className="text-[11px] sm:text-sm text-yellow-500 font-semibold">
                  ⭐ {(4.2 + (index % 2) * 0.1).toFixed(1)}
                  <span className="text-gray-500 text-[10px] sm:text-xs ml-1">
                    ({50 + index * 30} reviews)
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Left Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 md:-left-5 top-1/2 transform -translate-y-1/2 
                     flex items-center justify-center w-10 h-10 rounded-full bg-white 
                     shadow-md hover:bg-gray-100 transition z-10"
        >
          ◀
        </button>

        {/* Right Button */}
        <button
          onClick={scrollRight}
          className="absolute right-0 md:-right-5 top-1/2 transform -translate-y-1/2 
                     flex items-center justify-center w-10 h-10 rounded-full bg-white 
                     shadow-md hover:bg-gray-100 transition z-10"
        >
          ▶
        </button>
      </div>
    </section>
  );
}
