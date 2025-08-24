import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";

export default function NewArrival() {
  const categories = ["View All", "Shirts", "T-shirts", "Polo T-shirts", "Jeans", "Cargo Trousers"];

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

  const [selectedCategory, setSelectedCategory] = useState("View All");

  // Function to calculate discounted price
  const getDiscountedPrice = (price, discount) => {
    return Math.round(price - (price * discount) / 100);
  };

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "View All"
      ? products
      : products.filter((item) => item.category === selectedCategory);

  return (
    <section className="bg-white py-12 px-4 sm:px-6">
      {/* Heading */}
      <h2 className="text-center text-2xl font-bold mb-2">NEW ARRIVALS</h2>
      <p className="text-center text-sm text-gray-600 mb-6">
        Get them before everyone else does
      </p>

      {/* Category Filters */}
      <div className="flex justify-center flex-wrap gap-3 mb-8">
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1 text-sm font-medium rounded-full border ${
              selectedCategory === cat ? "bg-black text-white" : "bg-gray-100 text-black"
            } hover:bg-black hover:text-white transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filteredProducts.map((item, index) => (
          <div key={index} className="relative group">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto object-cover rounded-lg shadow-md group-hover:scale-[1.02] transition-transform duration-300"
            />
            <div className="mt-2">
              <h3 className="text-sm font-semibold text-black">{item.title}</h3>
              <p className="text-sm text-gray-600">
                <span className="line-through mr-2">₹{item.price}</span>
                <span className="font-bold text-black">
                  ₹{getDiscountedPrice(item.price, item.discount)}
                </span>
                <span className="text-green-500 ml-2">{item.discount}% OFF</span>
              </p>
            </div>
            <button className="absolute top-3 right-3 text-gray-500 hover:text-red-500">
              <FaHeart />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
