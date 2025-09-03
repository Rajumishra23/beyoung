import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";

export default function NewArrival() {
  const categories = [
    "View All",
    "Shirts",
    "T-shirts",
    "Polo T-shirts",
    "Jeans",
    "Cargo Trousers",
  ];

  const products = [
    { title: "White Artbox Textured Shirt", price: 799, discount: 10, category: "Shirts", image: "A1.webp" },
    { title: "Black Fit Artbox Textured Shirt", price: 849, discount: 5, category: "Shirts", image: "A2.webp" },
    { title: "Grey Crew – Plain Cotton Shirt", price: 899, discount: 15, category: "Shirts", image: "A3.webp" },
    { title: "Olive Solid Pocket Shirt", price: 749, discount: 8, category: "Shirts", image: "A4.webp" },
    { title: "Blue Checkered Shirt", price: 799, discount: 12, category: "Shirts", image: "A5.webp" },
    { title: "Red Slim Fit Shirt", price: 849, discount: 10, category: "Shirts", image: "A6.webp" },
    { title: "Black Casual Shirt", price: 899, discount: 7, category: "Shirts", image: "A7.webp" },
    { title: "White Formal Shirt", price: 799, discount: 5, category: "Shirts", image: "A8.webp" },
    { title: "Green Polo Shirt", price: 749, discount: 10, category: "Polo T-shirts", image: "A9.webp" },
    { title: "Navy Blue Polo Shirt", price: 849, discount: 15, category: "Polo T-shirts", image: "A10.webp" },
    { title: "Beige Cargo Trousers", price: 999, discount: 20, category: "Cargo Trousers", image: "A11.webp" },
    { title: "Denim Jeans", price: 1099, discount: 10, category: "Jeans", image: "A12.webp" },
  ];

  const categoryColors = {
    "Shirts": { stripe: "rgba(59,130,246,0.3)", oval: "bg-blue-300" },
    "T-shirts": { stripe: "rgba(234,179,8,0.3)", oval: "bg-yellow-300" },
    "Polo T-shirts": { stripe: "rgba(34,197,94,0.3)", oval: "bg-green-300" },
    "Jeans": { stripe: "rgba(99,102,241,0.3)", oval: "bg-indigo-300" },
    "Cargo Trousers": { stripe: "rgba(236,72,153,0.3)", oval: "bg-pink-300" },
    "View All": { stripe: "rgba(156,163,175,0.3)", oval: "bg-gray-300" },
  };

  const [selectedCategory, setSelectedCategory] = useState("View All");

  const getDiscountedPrice = (price, discount) =>
    Math.round(price - (price * discount) / 100);

  const filteredProducts =
    selectedCategory === "View All"
      ? products
      : products.filter((item) => item.category === selectedCategory);

  return (
    <section className="bg-white py-12 px-4 sm:px-6">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-wide text-black">
          NEW ARRIVALS
        </h2>
        <p className="mt-2 text-sm font-semibold text-gray-600 uppercase tracking-wide">
          HI-FASHION EXCLUSIVES FOR MOMENTS YOU'LL REPLAY
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex justify-center flex-wrap gap-3 mb-8">
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1 text-xs font-medium rounded-full border ${
              selectedCategory === cat
                ? "bg-black text-white"
                : "bg-gray-100 text-black"
            } hover:bg-black hover:text-white transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((item, index) => {
          const theme = categoryColors[item.category] || categoryColors["View All"];
          return (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 w-full max-w-[320px] mx-auto"
            >
              {/* Background */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `repeating-linear-gradient(90deg, ${theme.stripe} 0px, ${theme.stripe} 10px, transparent 10px, transparent 20px)`,
                }}
              ></div>

              {/* Oval Shape */}
              <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full ${theme.oval} opacity-50`}></div>

              {/* Product Image */}
              <img
                src={item.image}
                alt={item.title}
                className="relative z-10 w-full h-56 sm:h-64 md:h-72 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />

             {/* Product Info (Smaller Box) */}
<div className="relative z-20 px-2 py-1 bg-white text-left space-y-0.5 -mt-2 sm:-mt-3">
  <h3 className="text-[10px] sm:text-xs font-semibold text-black truncate">
    {item.title}
  </h3>

  <p className="text-[8px] sm:text-[10px] text-gray-500 font-medium tracking-wide">
    {item.category === "Shirts"
      ? "Everyday Classic"
      : item.category === "Polo T-shirts"
      ? "Smart Casual"
      : item.category === "Cargo Trousers"
      ? "Utility Fit"
      : item.category === "Jeans"
      ? "Denim Essential"
      : item.category === "T-shirts"
      ? "Relaxed Fit"
      : "Versatile Style"}
  </p>

  <div className="flex items-center gap-1">
    <span className="text-[10px] font-bold text-black">
      ₹{getDiscountedPrice(item.price, item.discount)}
    </span>
    <span className="line-through text-[8px] text-gray-400">
      ₹{item.price}
    </span>
    <span className="text-[8px] text-green-600 font-medium">
      {item.discount}% OFF
    </span>
  </div>

  <div className="text-[8px] text-yellow-500 font-semibold">
    ⭐ {(4 + (index % 2) + (item.discount % 3) * 0.1).toFixed(1)}
    <span className="text-gray-500 text-[7px] ml-1">
      ({100 + index * 17} reviews)
    </span>
  </div>
</div>

              {/* Wishlist */}
              <button className="absolute top-3 right-3 text-gray-500 hover:text-black z-30">
                <FaHeart />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
