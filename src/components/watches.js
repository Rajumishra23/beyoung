import React from "react";

const watchCategories = [
  {
    title: "Men's Watches",
    image: "c1.png",
  },
  {
    title: "Women's Watches",
    image: "watches1.webp",
  },
  {
    title: "Couple Watches",
    image: "c2.png",
  },
  {
    title: "Smartwatches",
    image: "c3.png",
  },
  {
    title: "Luxury Watches",
    image: "c4.png",
  },
  {
    title: "Sports Watches",
    image: "c5.png",
  },
];

export default function WatchSection() {
  return (
    <section className="py-12 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Timeless Picks for Every Wrist
      </h2>

      {/* Infinite Auto Slider */}
      <div className="overflow-hidden relative max-w-6xl mx-auto">
        <div className="flex gap-6 animate-scroll">
          {watchCategories.concat(watchCategories).map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-lg overflow-hidden shadow hover:shadow-lg transition group min-w-[250px] max-w-[250px]"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Overlay Title */}
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
