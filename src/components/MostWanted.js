import React from "react";
import { motion } from "framer-motion";

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
    <section className="bg-white py-10 px-2 sm:px-4 lg:px-6">
      {/* Heading */}
      <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold mb-6 uppercase tracking-wide">
        MOST Popular Collection
      </h2>

      {/* Responsive Grid with tighter gaps */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
        {categories.map((item, index) => (
          <motion.div
            key={index}
            className="group relative cursor-pointer overflow-hidden rounded-md shadow-sm flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 sm:h-60 md:h-72 lg:h-[460px] object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Title below image */}
            {item.title && (
              <div className="w-full bg-white text-black text-center text-sm sm:text-base font-semibold py-1.5 border border-gray-300 rounded-md">
                {item.title}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}