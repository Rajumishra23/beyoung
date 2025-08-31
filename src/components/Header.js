import React, { useEffect, useRef, useState } from "react";

const menuItems = {
  MEN: [
    { title: "Topwear", links: ["T-Shirts", "Casual Shirts", "Formal Shirts", "Sweatshirts", "Jackets"] },
    { title: "Bottomwear", links: ["Jeans", "Casual Trousers", "Shorts", "Joggers"] },
    { title: "Footwear", links: ["Casual Shoes", "Sneakers", "Sports Shoes", "Formal Shoes"] },
  ],
  WOMEN: [
    { title: "Indian & Fusion Wear", links: ["Kurtas & Suits", "Sarees", "Lehenga Cholis", "Dupattas"] },
    { title: "Western Wear", links: ["Dresses", "Tops", "T-Shirts", "Jeans", "Jackets"] },
    { title: "Footwear", links: ["Flats", "Heels", "Boots", "Sports Shoes"] },
  ],
};

export default function Header() {
  const sliderRef = useRef(null);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  const placeholders = [
    "Search for shirts......",
    "Search for watches......",
    "Search for jeans......",
    "Search for kurtas......",
    "Search for smartwatches......",
    "Search for Glasses......",
    "Search for Wallets......",
    "Search for Belts......",
  ];

  // 🔄 Auto-change placeholder text
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // 🔄 Auto sliding banner
  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;

    const slideInterval = setInterval(() => {
      if (slider) {
        scrollAmount += slider.offsetWidth;
        if (scrollAmount >= slider.scrollWidth) {
          scrollAmount = 0;
          slider.scrollTo({ left: 0, behavior: "auto" });
        } else {
          slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <header className="w-full top-0 z-50">
      {/* 🔝 Promo Bar */}
      <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 text-white text-[11px] flex justify-between items-center px-4 py-2 shadow-md">
        <p className="truncate w-[30%] md:w-auto">
          Free Shipping Sitewide on Every Order, Don't Miss Out!!
        </p>

        {/* 🔍 Search Bar */}
        <div className="hidden md:flex items-center gap-3 flex-1 max-w-xl mx-6">
          <div className="flex items-center bg-white text-black px-3 py-1 rounded-md flex-1 max-w-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1116.65 2a7.5 7.5 0 010 14.65z"
              />
            </svg>
            <input
              type="text"
              placeholder={placeholders[placeholderIndex]}
              className="w-full md:w-72 px-3 py-2 rounded-xl border border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none shadow-sm transition font-bold"
            />
          </div>
        </div>

        {/* 🔗 Blog + Auth Links */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="bg-white text-pink-600 font-semibold text-sm px-4 py-2 rounded-md border border-pink-500 hover:bg-pink-600 hover:text-white transition"
          >
            Blog
          </a>
          <div className="space-x-1 md:space-x-2">
            <a href="#" className="hover:underline font-bold">LOG IN</a>
            <span>/</span>
            <a href="#" className="hover:underline font-bold">SIGNUP</a>
          </div>
        </div>
      </div>

      {/* 🔝 Navbar */}
      <nav className="bg-white sticky top-0 z-50 overflow-visible shadow">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-wide cursor-pointer">
            DEMPSEY
            <span className="relative inline-block w-2 h-2 bg-black rounded-full top-[-2px] ml-[1px]"></span>
          </div>

          {/* Navigation (✅ Updated Order) */}
          <ul className="hidden md:flex gap-8 text-sm font-bold tracking-wide text-gray-800">
            <li className="cursor-pointer hover:text-pink-600">Men</li>
            <li className="cursor-pointer hover:text-pink-600">Women</li>
            <li className="cursor-pointer hover:text-pink-600">Kids</li>
            <li className="cursor-pointer hover:text-pink-600">New Arrivals</li>
            <li className="cursor-pointer hover:text-pink-600">Combos</li>
            <li className="cursor-pointer hover:text-pink-600">Gift Hampers</li>

            {/* Accessories Dropdown */}
            <li className="group relative cursor-pointer hover:text-pink-600">
              Accessories
              <div className="absolute left-0 top-full hidden group-hover:flex bg-white shadow-lg p-6 gap-8 z-50">
                <div className="flex flex-col min-w-[150px]">
                  <a href="#" className="text-gray-700 text-xs py-1 hover:text-pink-500">Watches</a>
                  <a href="#" className="text-gray-700 text-xs py-1 hover:text-pink-500">Bags</a>
                  <a href="#" className="text-gray-700 text-xs py-1 hover:text-pink-500">Belts</a>
                </div>
              </div>
            </li>

            <li className="cursor-pointer hover:text-pink-600">
              Glasses <sup className="text-red-500 text-[10px]">NEW</sup>
            </li>
          </ul>

          {/* Icons */}
          <div className="flex items-center gap-6">
            {/* Profile */}
            <div className="flex flex-col items-center text-xs cursor-pointer hover:text-pink-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A9.005 9.005 0 0112 15c2.21 0 4.21.804 5.879 2.121M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Profile</span>
            </div>

            {/* Wishlist */}
            <div className="flex flex-col items-center text-xs cursor-pointer hover:text-pink-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <span>Wishlist</span>
            </div>

            {/* Bag */}
            <div className="flex flex-col items-center text-xs cursor-pointer hover:text-pink-600 relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6h13M10 21h4a2 2 0 002-2H8a2 2 0 002 2z" />
              </svg>
              <span>Bag</span>
              <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-[10px] px-1.5 py-0.5 rounded-full">2</span>
            </div>
          </div>
        </div>
      </nav>

      {/* ✅ Auto Sliding Banner */}
      <div
        ref={sliderRef}
        className="w-full h-[400px] sm:h-[450px] md:h-[500px] flex overflow-x-hidden scroll-smooth"
      >
        {["tatas.webp", "tatas1.webp", "tatas2.webp", "tatas3.webp"].map(
          (src, index) => (
            <div
              key={index}
              className="min-w-full flex items-center justify-center"
            >
              <img
                src={src}
                alt={`Banner ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          )
        )}
      </div>
    </header>
  );
}
