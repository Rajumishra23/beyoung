import React from "react";

const WomenCategories = [
  {
   
    image: "women.webp",
  },
  {
    
    image: "women2.webp",
  },
  {
   
    image: " women3.webp",
  },
  {
    
    image: "women4.webp",
  },

];

export default function WomenClothingSlider() {
  return (
    <section className="py-12 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Women's Favourites
      </h2>

      {/* Infinite Auto Slider */}
      <div className="overflow-hidden relative max-w-6xl mx-auto">
        <div className="flex gap-6 animate-scroll">
          {WomenCategories.concat(WomenCategories).map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-lg overflow-hidden shadow hover:shadow-lg transition group min-w-[250px] max-w-[250px]"
            >
              {/* image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* overlay title */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-lg font-semibold">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
