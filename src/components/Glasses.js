import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
  {
    name: "Vuarnet",
    subName: "VL1918 RACING REGULAR Polarized 0008 1626",
    image: "glasses1.webp",
    price: "₹11,906",
  },
];

export default function GlassSection() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="bg-gray-300 py-10 px-2 sm:px-4 md:px-10 overflow-hidden">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-900 mb-6">
        👓 Frame Your Vision
      </h2>

      <div className="relative max-w-7xl mx-auto">
        {/* Left Button */}
        <button
          onClick={scrollLeft}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-400 text-gray-600 hover:text-black hover:border-black p-2 rounded-full shadow"
        >
          <FaChevronLeft />
        </button>

        {/* Right Button */}
        <button
          onClick={scrollRight}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-400 text-gray-600 hover:text-black hover:border-black p-2 rounded-full shadow"
        >
          <FaChevronRight />
        </button>

        {/* Slider */}
<div
  ref={sliderRef}
  className="flex gap-2 sm:gap-3 overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth snap-x snap-mandatory pb-2"
>
  {glasses.map((glass, index) => (
    <motion.div
      key={index}
      className="flex-shrink-0 w-[calc(33%-4px)] sm:w-[240px] md:w-[30%] snap-start bg-white rounded-md overflow-hidden relative border border-gray-200 shadow-sm transition"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
    >
      <img
        src={glass.image}
        alt={glass.name}
        className="w-full h-[220px] sm:h-[220px] md:h-[240px] object-cover"
      />


              <div className="mt-3 px-3 pb-4 space-y-1 text-left">
                <h3
                  className="text-sm sm:text-base font-semibold text-black truncate"
                  title={glass.name}
                >
                  {glass.name}
                </h3>

                <p className="text-xs text-gray-500 font-medium tracking-wide">
                  {glass.subName}
                </p>

                <div className="flex items-center gap-2 text-sm">
                  <span className="font-bold text-orange-600">{glass.price}</span>
                  {glass.oldPrice && (
                    <span className="line-through text-gray-400 text-xs">
                      {glass.oldPrice}
                    </span>
                  )}
                  {glass.discount && (
                    <span className="text-green-600 font-medium text-xs">
                      {glass.discount} OFF
                    </span>
                  )}
                </div>

                <div className="text-sm text-yellow-500 font-semibold">
                  ⭐ {(4.2 + (index % 2) * 0.1).toFixed(1)}
                  <span className="text-gray-500 text-xs ml-1">
                    ({50 + index * 30} reviews)
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}