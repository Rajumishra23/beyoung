import React from "react";

const categories = [
  {
    title: "HAWAIIAN FITS",
    discount: "Up to 60% off",
    image: "mens.webp",
  },
  {
    title: "BACKSTORY TEES",
    discount: "Up to 40% off",
    image: "mens1.webp",
  },
  {
    title: "SMART GLASSES",
    discount: "Up to 75% off",
    image: "mens3.webp",
  },
  {
    title: "KOREAN FITS",
    discount: "Up to 70% off",
    image: "mens4.webp",
  },
  {
    title: "CUBAN COLLAR GLASSES",
    discount: "Up to 60% off",
    image: "mens5.webp",
  },
];

export default function FashionCategories() {
  return (
    <section className="bg-white py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        MEN's Favourites 
      </h2>

      {/* Infinite Auto Slider */}
      <div className="overflow-hidden relative max-w-6xl mx-auto">
        <div className="flex gap-6 animate-scroll">
          {categories.concat(categories).map((cat, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow hover:shadow-lg transition group min-w-[250px] max-w-[250px]"
            >
              {/* image */}
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* overlay for left bottom text */}
              <div className="absolute left-0 bottom-0 w-full p-3 bg-gradient-to-t from-black/70 to-transparent text-white">
                <h3 className="text-lg font-semibold">{cat.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
