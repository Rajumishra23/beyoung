import React, { useRef } from "react";

const watchCategories = [
  { brand: "Daniel Hechter", image: "c1.png", discountText: "MIN. 50% OFF" },
  { brand: "Daniel Hechter", image: "watches1.webp", discountText: "MIN. 30% OFF" },
  { brand: "EMPERO", image: "c2.png", discountText: "FLAT 50% OFF" },
  { brand: "Sonata", image: "c3.png", discountText: "UP TO 40% OFF" },
  { brand: "Daniel Hechter", image: "c4.png", discountText: "FLAT 35% OFF" },
  { brand: "Rolex", image: "c5.png", discountText: "PREMIUM PICKS" },
];

export default function WatchSection() {
  const sliderRef = useRef(null);

  const scrollLeft = () => sliderRef.current.scrollBy({ left: -200, behavior: "smooth" });
  const scrollRight = () => sliderRef.current.scrollBy({ left: 200, behavior: "smooth" });

  return (
    <section className="py-10 sm:py-12 px-4 sm:px-6 md:px-6 bg-white">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10 text-gray-800 tracking-wide">
        Timeless Picks for Every Wrist
      </h2>

      <div className="relative max-w-7xl mx-auto flex items-center">
        {/* Left Button */}
        <button
          onClick={scrollLeft}
          className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md absolute -left-3 lg:-left-5 z-10 hover:bg-gray-100 transition"
        >
          ◀
        </button>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pb-4"
        >
          {watchCategories.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[160px] sm:w-[200px] md:w-[240px] snap-start cursor-pointer group"
            >
              <div className="relative w-full h-[180px] sm:h-[250px] md:h-[300px] overflow-hidden rounded-md">
                <img
                  src={item.image}
                  alt={item.brand}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="bg-gray-50 border-t border-2 border-white px-3 py-2 text-center">
                <h3 className="text-xs sm:text-sm font-semibold text-gray-900">{item.brand}</h3>
                <p className="text-[10px] sm:text-xs text-gray-600 mt-1 font-medium">{item.discountText}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={scrollRight}
          className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md absolute -right-3 lg:-right-5 z-10 hover:bg-gray-100 transition"
        >
          ▶
        </button>
      </div>
    </section>
  );
}
