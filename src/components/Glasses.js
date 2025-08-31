import React, { useRef } from "react";

const glasses = [
  { name: "Blue-Light Blockers", image: "glasses.webp", tag: "Screen Warrior" },
  { name: "Retro Round Frames", image: "glasses1.webp", tag: "Vintage Vibe" },
  { name: "Matte Black Readers", image: "glasses2.webp", tag: "Minimalist" },
  { name: "Rhinestone Bling Frames", image: "glasses3.webp", tag: "Bold Personality" },
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
    <section className="bg-gray-50 py-16 px-6 md:px-12 overflow-hidden">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
        👓 Frame Your Vision
      </h2>

      <div className="relative max-w-6xl mx-auto overflow-hidden">
        {/* Slider Row */}
        <div
          ref={sliderRef}
          className="flex gap-6 animate-scroll overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {glasses.concat(glasses).map((glass, index) => (
            <div
              key={index}
              className="group border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition min-w-[250px] max-w-[250px]"
            >
              <img
                src={glass.image}
                alt={glass.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {glass.name}
                </h3>
                <p className="text-sm text-gray-500">{glass.tag}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Left Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black"
        >
          ◀
        </button>

        {/* Right Button */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black"
        >
          ▶
        </button>
      </div>
    </section>
  );
}
