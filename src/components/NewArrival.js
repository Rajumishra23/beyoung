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
    { title: "White Artbox Textured Shirt", price: 799, discount: 10, category: "Shirts", image: "A1.webp", tags: ["SALE"] },
    { title: "Black Fit Artbox Textured Shirt", price: 849, discount: 5, category: "Shirts", image: "A2.webp" },
    { title: "Grey Crew – Plain Cotton Shirt", price: 899, discount: 15, category: "Shirts", image: "A3.webp" },
    { title: "Olive Solid Pocket Shirt", price: 749, discount: 8, category: "Shirts", image: "A4.webp", tags: ["NEW ARRIVAL"] },
    { title: "Blue Checkered Shirt", price: 799, discount: 12, category: "Shirts", image: "A5.webp" },
    { title: "Red Slim Fit Shirt", price: 849, discount: 10, category: "Shirts", image: "A6.webp" },
    { title: "Black Casual Shirt", price: 899, discount: 7, category: "Shirts", image: "A7.webp", tags: ["3 FOR ₹999"] },
    { title: "White Formal Shirt", price: 799, discount: 5, category: "Shirts", image: "A8.webp" },
    { title: "Green Polo Shirt", price: 749, discount: 10, category: "Polo T-shirts", image: "A9.webp" },
    { title: "Navy Blue Polo Shirt", price: 849, discount: 15, category: "Polo T-shirts", image: "A10.webp" },
    { title: "Beige Cargo Trousers", price: 999, discount: 20, category: "Cargo Trousers", image: "A11.webp", tags: ["TRENDING", "3 FOR ₹999"] },
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

  const tagStyles = {
    "SALE": "bg-red-600",
    "NEW ARRIVAL": "bg-red-500",
    "TRENDING": "bg-yellow-500",
    "3 FOR ₹999": "bg-green-600",
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
<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {filteredProducts.map((item, index) => {
    const theme = categoryColors[item.category] || categoryColors["View All"];
    return (
      <div
        key={index}
        className="relative group overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 w-full max-w-[400px] mx-auto"
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

        {/* Tag Stickers */}
        {item.tags?.map((tag, i) => (
          <span
            key={i}
            className={`absolute ${i === 0 ? "top-2" : "top-10"} left-3 z-30 ${tagStyles[tag] || "bg-gray-600"} text-white text-[10px] sm:text-xs font-bold px-2 py-1 rounded shadow`}
          >
            {tag}
          </span>
        ))}

       {/* Product Image (Taller & Wider) */}
<div className="relative z-10 w-full max-w-[400px] h-96 sm:h-[28rem] md:h-[30rem] lg:h-[32rem] mx-auto overflow-hidden">
  <img
    src={item.image}
    alt={item.title}
    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
  />
</div>

        {/* Product Info */}
        <div className="relative z-20 px-2 py-2 bg-white text-left space-y-1">
          <h3 className="text-[12px] sm:text-sm font-semibold text-black truncate">
            {item.title}
          </h3>
          <p className="text-[10px] sm:text-xs text-gray-500 font-medium tracking-wide">
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
            <span className="text-[12px] sm:text-sm font-bold text-black">
              ₹{getDiscountedPrice(item.price, item.discount)}
            </span>
            <span className="line-through text-[10px] sm:text-xs text-gray-400">
              ₹{item.price}
            </span>
            <span className="text-[10px] sm:text-xs text-green-600 font-medium">
              {item.discount}% OFF
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