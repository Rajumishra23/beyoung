import React, { useRef } from "react";

const watchCategories = [
  { brand: "TITAN", image: "watchd.webp", discountText: "MIN. 50% OFF" },
  { brand: "FASTRACK", image: "watchd1.webp", discountText: "MIN. 30% OFF" },
  { brand: "SONATA", image: "watchd2.webp", discountText: "FLAT 50% OFF" },
  { brand: "TOMMY HILFIGER", image: "watchd3.webp", discountText: "UP TO 40% OFF" },
  { brand: "KENETH COLE", image: "watchd4.webp", discountText: "FLAT 35% OFF" },
  { brand: "POLICE", image: "watchd5.webp", discountText: "PREMIUM PICKS" },
];

export default function WatchSection() {
  const sliderRef = useRef(null);

  const scrollLeft = () => sliderRef.current.scrollBy({ left: -250, behavior: "smooth" });
  const scrollRight = () => sliderRef.current.scrollBy({ left: 250, behavior: "smooth" });

  return (
    <section className="py-10 sm:py-12 px-4 sm:px-6 md:px-6 bg-yellow-50">
      <h2 className="text-2xl sm:text-4xl font-extrabold text-center mb-8 sm:mb-12 
                     text-gray-900 tracking-tight uppercase">
        ⌚Luxury That Lasts a Lifetime
      </h2>

      <div className="relative max-w-7xl mx-auto flex items-center">
        {/* Left Button */}
        <button
          onClick={scrollLeft}
          className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md absolute -left-4 lg:-left-6 z-10 hover:bg-gray-100 transition"
        >
          ◀
        </button>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-5 sm:gap-7 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pb-4"
        >
          {watchCategories.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[200px] sm:w-[240px] md:w-[280px] snap-start cursor-pointer group
                         bg-white rounded-lg overflow-hidden 
                         border border-green-500 hover:border-gray-400 
                         shadow-md hover:shadow-lg transition"
            >
              <div className="relative w-full h-[220px] sm:h-[280px] md:h-[340px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.brand}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="px-4 py-4 text-center">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900">{item.brand}</h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1 font-medium">{item.discountText}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={scrollRight}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md absolute -right-4 lg:-right-6 z-10 hover:bg-gray-100 transition"
        >
          ▶
        </button>
      </div>
    </section>
  );
}
