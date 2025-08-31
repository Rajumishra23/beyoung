import React, { useRef } from "react";

const WomenCategories = [
  { image: "women.webp",  },
  { image: "women2.webp", },
  { image: "women3.webp", },
  { image: "women4.webp", },
];

export default function WomenClothingSlider() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="py-12 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Women's Favourites
      </h2>

      <div className="relative max-w-6xl mx-auto overflow-hidden">
        {/* Slider container */}
        <div
          ref={sliderRef}
          className="flex gap-6 animate-scroll"
        >
          {WomenCategories.concat(WomenCategories).map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-lg overflow-hidden shadow hover:shadow-lg transition group min-w-[250px] max-w-[250px]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-lg font-semibold">
                {item.title}
              </div>
            </div>
          ))}
        </div>

        {/* Left button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black z-10"
        >
          ◀
        </button>

        {/* Right button */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black z-10"
        >
          ▶
        </button>
      </div>
    </section>
  );
}
