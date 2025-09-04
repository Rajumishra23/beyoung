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

  const scrollLeft = () => sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  const scrollRight = () => sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });

  return (
    <section className="py-8 sm:py-10 px-2 sm:px-4 md:px-6 bg-yellow-50">
      <h2 className="text-xl sm:text-3xl font-extrabold text-center mb-6 sm:mb-10 text-gray-900 tracking-tight uppercase">
        ⌚Luxury That Lasts a Lifetime
      </h2>

      <div className="relative max-w-7xl mx-auto flex items-center">
        {/* Left Button (desktop only) */}
        <button
          onClick={scrollLeft}
          className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md absolute -left-3 lg:-left-5 z-10 hover:bg-gray-100 transition"
        >
          ◀
        </button>

        {/* Slider */}
        <div
  ref={sliderRef}
  className="flex gap-2 sm:gap-3 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pb-2"
>
          {watchCategories.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[calc(50%-6px)] sm:w-[220px] md:w-[260px] snap-start cursor-pointer group
                         bg-white rounded-md overflow-hidden 
                         border border-green-500 hover:border-gray-400 
                         shadow-sm hover:shadow-md transition"
            >
              <div className="relative w-full h-[180px] sm:h-[240px] md:h-[300px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.brand}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="px-3 py-3 text-center">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900">{item.brand}</h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1 font-medium">{item.discountText}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Button (desktop only) */}
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