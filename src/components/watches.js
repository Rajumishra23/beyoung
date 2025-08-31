import React, { useRef } from "react";

const watchCategories = [
  { title: "Men's Watches", image: "c1.png" },
  { title: "Women's Watches", image: "watches1.webp" },
  { title: "Couple Watches", image: "c2.png" },
  { title: "Smartwatches", image: "c3.png" },
  { title: "Luxury Watches", image: "c4.png" },
  { title: "Sports Watches", image: "c5.png" },
];

export default function WatchSection() {
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
        Timeless Picks for Every Wrist
      </h2>

      <div className="relative max-w-6xl mx-auto overflow-hidden">
        {/* Slider */}
        <div ref={sliderRef} className="flex gap-6 animate-scroll">
          {watchCategories.concat(watchCategories).map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-lg overflow-hidden shadow hover:shadow-lg transition group min-w-[250px] max-w-[250px]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-lg font-semibold">
                {item.title}
              </div>
            </div>
          ))}
        </div>

        {/* Left Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black z-10"
        >
          ◀
        </button>

        {/* Right Button */}
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
