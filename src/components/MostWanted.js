import React from "react";

export default function MostWantedCategories() {
  const categories = [
    { image: "shirt1.webp", title: "Classic Fit" },
    { image: "shirt2.webp", title: "Casual Wear" },
    { image: "shirt3.webp", title: "Street Style" },
    { image: "shirt4.webp", title: "Formal Look" },
    { image: "shirt5.webp", title: "Summer Vibes" },
    { image: "shirt6.webp", title: "Office Wear" },
    { image: "shirt7.webp", title: "Oversized" },
    { image: "shirt8.webp", title: "Trendy Prints" },
    { image: "shirt9.webp", title: "Minimalist" },
    { image: "shirt10.webp", title: "Party Wear" },
  ];

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-10">
      {/* Heading */}
      <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold mb-8 uppercase tracking-wide">
        MOST Popular Collection
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="group relative cursor-pointer overflow-hidden rounded-lg shadow-sm"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Overlay Title (optional) */}
            {item.title && (
              <div className="absolute bottom-3 left-3 bg-black/60 text-white text-xs sm:text-sm font-semibold px-2 py-1 rounded">
                {item.title}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
