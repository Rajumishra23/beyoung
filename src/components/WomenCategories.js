import React, { useRef } from "react";

const WomenCategories = [
  { image: "women.webp", title: "Print Paradise", description: "For that extra serving of drama" },
  { image: "women@1.webp", title: "Regal Mustard", description: "The colour of classy" },
  { image: "women2.webp", title: "Fusion Dresses From W", description: "For a look straight out of a Bollywood movie" },
  { image: "women3.webp", title: "Kurta Sets By BIBA", description: "We've found you the perfect match", badge: "BESTSELLER" },
  { image: "women4.webp", title: "Summer-Ready Ethnic", description: "Breezy dresses fit for virtual calls" },
];

export default function WomenClothingSlider() {
  const sliderRef = useRef(null);

  const scrollLeft = () =>
    sliderRef.current.scrollBy({ left: -sliderRef.current.offsetWidth / 2, behavior: "smooth" });
  const scrollRight = () =>
    sliderRef.current.scrollBy({ left: sliderRef.current.offsetWidth / 2, behavior: "smooth" });

  return (
    <section className="py-8 sm:py-10 px-2 sm:px-4 md:px-8 bg-white overflow-hidden">
      <h2 className="text-xl sm:text-2xl font-extrabold text-center mb-6 sm:mb-8 text-gray-900 tracking-wide uppercase">
        Trending WOMEN&apos;S FAVOURITE
      </h2>

      <div className="relative max-w-7xl mx-auto flex items-center">
        {/* Scroll Buttons (desktop only) */}
        <button
          onClick={scrollLeft}
          className="hidden md:flex items-center justify-center w-9 h-9 rounded-full bg-white shadow-md absolute -left-2 lg:-left-4 z-10 hover:bg-gray-100 transition"
        >
          ◀
        </button>

       <div
  ref={sliderRef}
  className="flex gap-2 sm:gap-3 overflow-x-auto scrollbar-hide scroll-smooth flex-1"
>
          {WomenCategories.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[calc(50%-6px)] sm:w-[200px] md:w-[230px] bg-white rounded-md overflow-hidden border border-gray-200 hover:border-gray-400 shadow-sm hover:shadow-md transition"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[260px] sm:h-[280px] md:h-[300px] object-cover"
                />
                {item.badge && (
                  <span className="absolute bottom-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    {item.badge}
                  </span>
                )}
              </div>

              <div className="px-2 sm:px-3 py-2 sm:py-3 text-center">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900">{item.title}</h3>
                <p className="text-xs sm:text-sm mt-1 text-gray-600">{item.description}</p>
                <div className="mt-2">
                  <span className="inline-block px-3 py-1 text-xs sm:text-sm font-medium border border-gray-600 rounded-full hover:bg-gray-100 hover:text-orange-500 transition cursor-pointer">
                    + EXPLORE
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="hidden md:flex items-center justify-center w-9 h-9 rounded-full bg-white shadow-md absolute -right-2 lg:-right-4 z-10 hover:bg-gray-100 transition"
        >
          ▶
        </button>
      </div>
    </section>
  );
}