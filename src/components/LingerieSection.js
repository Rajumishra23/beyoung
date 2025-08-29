// LingerieSection.jsx
import React from "react";

const products = [
  { name: "Wireless T-Shirt Bra", image: "bra2.webp", category: "Bra" },
  { name: "Lace Mid-Waist Briefs", image: "penty.webp", category: "Panty" },
  { name: "Cotton Bikini Pack", image: "bra1.webp", category: "Panty" },

];

export default function LingerieSection() {
  return (
    <section className="bg-white py-12 px-6">
      {/* Infinite Auto Slider */}
      <div className="overflow-hidden relative max-w-6xl mx-auto">
        <div className="flex gap-6 animate-scroll">
          {products.concat(products).map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-lg overflow-hidden shadow hover:shadow-lg transition group min-w-[220px] max-w-[220px] bg-white"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-3">
                <h3 className="text-base font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-sm text-pink-600 font-medium">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
