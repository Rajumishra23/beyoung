import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const categories = [
  { title: "HAWAIIAN FITS", discount: "Up to 60% off", image: "mens.webp" },
  { title: "BACKSTORY TEES", discount: "Up to 40% off", image: "mens1.webp" },
  { title: "SMART GLASSES", discount: "Up to 75% off", image: "mens3.webp" },
  { title: "KOREAN FITS", discount: "Up to 70% off", image: "mens4.webp" },
  { title: "CUBAN COLLAR GLASSES", discount: "Up to 60% off", image: "mens5.webp" },
];

export default function FashionCategories() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const card = scrollRef.current.querySelector("div > div"); // ek card select karo
    if (!card) return;

    const cardWidth = card.offsetWidth + 16; // card width + gap (16px = gap-4)
    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white py-12 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-8 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
          <span className="text-black">MEN</span>
          <span className="text-red-600">&apos;S </span>
          <span className="text-black">FAVOURITE</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-2 font-medium">
          Style Up Without The Splurge ➝
        </p>
      </div>

      {/* Scrollable Cards */}
      <div className="relative max-w-7xl mx-auto flex items-center">
        {/* Left Button - Desktop only */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-0 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
        >
          <FaChevronLeft className="text-xl text-gray-800" />
        </button>

        <div className="relative flex-1 overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto overflow-y-hidden no-scrollbar touch-pan-x px-2"
          >
            {categories.map((cat, index) => (
              <div
                key={index}
                className="min-w-[160px] sm:min-w-[200px] md:min-w-[240px] bg-white border border-orange-400 rounded-md shadow-sm flex-shrink-0"
              >
                {/* Image */}
                <div className="w-full h-[220px] sm:h-[260px] md:h-[300px] overflow-hidden rounded-t-md">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover"
                    draggable="false"
                  />
                </div>

                {/* Text */}
                <div className="text-center py-2 px-2">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 truncate">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base font-bold text-gray-700 mt-1">
                    {cat.discount}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Button - Desktop only */}
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-0 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
        >
          <FaChevronRight className="text-xl text-gray-800" />
        </button>
      </div>
    </section>
  );
}
