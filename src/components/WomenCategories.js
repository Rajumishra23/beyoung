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
    sliderRef.current.scrollBy({ left: -200, behavior: "smooth" });
  const scrollRight = () =>
    sliderRef.current.scrollBy({ left: 200, behavior: "smooth" });

  return (
    <section className="py-10 sm:py-12 px-4 sm:px-6 md:px-12 bg-white overflow-hidden">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-8 sm:mb-10 text-gray-900 tracking-wide uppercase">
        Trending WOMEN&apos;S FAVOURITE
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
          className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide scroll-smooth flex-1"
        >
          {WomenCategories.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-1/2 sm:w-[220px] md:w-[250px] 
                         bg-white rounded-md overflow-hidden 
                         border border-gray-200 hover:border-gray-400 
                         shadow-sm hover:shadow-md transition"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[200px] sm:h-[300px] md:h-[350px] object-cover"
                />
                {item.badge && (
                  <span className="absolute bottom-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    {item.badge}
                  </span>
                )}
              </div>

              <div className="px-2 sm:px-4 py-3 sm:py-4 text-center">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm mt-1 text-gray-600">{item.description}</p>
                <div className="mt-2 sm:mt-3">
                  <span className="inline-block px-3 py-1 text-xs sm:text-sm font-medium 
                                   border border-gray-600 rounded-full 
                                   hover:bg-gray-100 hover:text-orange-500 transition cursor-pointer">
                    + EXPLORE
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Left Button (mobile) */}
        <button
          onClick={scrollLeft}
          className="flex md:hidden items-center justify-center w-10 h-10 rounded-full bg-white shadow-md absolute -left-3 z-10 hover:bg-gray-100 transition"
        >
          ◀
        </button>

        {/* Right Button */}
        <button
          onClick={scrollRight}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md absolute -right-3 lg:-right-5 z-10 hover:bg-gray-100 transition"
        >
          ▶
        </button>
      </div>
    </section>
  );
}
