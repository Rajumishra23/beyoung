import React, { useEffect, useRef } from "react";

export default function Header() {
  const sliderRef = useRef(null);

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
      {/* Top Black Bar */}
      <div className="bg-black text-white text-xs flex justify-between items-center px-6 py-2">
        <p>Free Shipping Sitewide on Every Order, Don't Miss Out!!</p>
        <div className="space-x-2">
          <a href="#" className="hover:underline">LOG IN</a>
          <span>/</span>
          <a href="#" className="hover:underline">SIGNUP</a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-wide">
            BEYOUNG<span className="relative inline-block w-2 h-2 bg-black rounded-full top-[-2px] ml-[1px]"></span>
          </div>

          {/* Navigation */}
          <ul className="flex gap-6 text-sm font-semibold text-black">
            {/* TOPWEAR Dropdown */}
            <li className="relative group cursor-pointer">
              <div className="flex items-center gap-1 hover:text-[#ff6f61]">
                TOPWEAR
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="absolute left-0 top-full bg-white shadow-xl rounded-md p-3 w-[400px] hidden group-hover:flex gap-5 z-50">
                <div>
                  <h4 className="text-xs font-bold text-gray-500 mb-2">T-shirts</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>Plain T-shirts</li>
                    <li>Oversized Fit</li>
                    <li>Regular Fit</li>
                    <li>Printed T-shirts</li>
                    <li>Striped T-shirts</li>
                    <li>Full Sleeve T-shirts</li>
                    <li className="text-[#ff6f61] font-semibold">View all</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-500 mb-2">Shirts</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>Plain Shirts</li>
                    <li>Satin Shirts</li>
                    <li>Printed Shirts</li>
                    <li>Striped Shirts</li>
                    <li>Cotton Shirts</li>
                    <li>Corduroy Shirts</li>
                    <li className="text-[#ff6f61] font-semibold">View all</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-500 mb-2">Polos</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>Polo T-shirts</li>
                    <li>Oversized Polos</li>
                    <li>Striped Polos</li>
                    <li className="text-[#ff6f61] font-semibold">View all</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-500 mb-2">Shop For Women</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>Topwear</li>
                    <li>Shirts</li>
                    <li>Oversized T-shirts</li>
                    <li>Printed T-shirts</li>
                    <li className="text-[#ff6f61] font-semibold">View all</li>
                  </ul>
                </div>
              </div>
            </li>

            {/* BOTTOMWEAR Dropdown */}
            <li className="relative group cursor-pointer">
              <div className="flex items-center gap-1 hover:text-[#ff6f61]">
                BOTTOMWEAR
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="absolute left-0 top-full bg-white shadow-xl rounded-md p-3 w-[400px] hidden group-hover:flex gap-5 z-50">
                <div>
                  <h4 className="text-xs font-bold text-gray-500 mb-2">Jeans</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>Skinny Fit</li>
                    <li>Relaxed Fit</li>
                    <li>Distressed</li>
                    <li>Baggy Fit</li>
                    <li className="text-[#ff6f61] font-semibold">View all</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-500 mb-2">Joggers</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>Cotton Joggers</li>
                    <li>Printed Joggers</li>
                    <li>Oversized Joggers</li>
                    <li>Zip Joggers</li>
                    <li className="text-[#ff6f61] font-semibold">View all</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-500 mb-2">Shorts</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>Cargo Shorts</li>
                    <li>Denim Shorts</li>
                    <li>Printed Shorts</li>
                    <li>Gym Shorts</li>
                    <li className="text-[#ff6f61] font-semibold">View all</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-500 mb-2">Shop For Women</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>Bottomwear</li>
                    <li>Joggers</li>
                    <li>Shorts</li>
                    <li>Denim</li>
                    <li className="text-[#ff6f61] font-semibold">View all</li>
                  </ul>
                </div>
              </div>
            </li>

            <li className="cursor-pointer hover:text-[#ff6f61]">COMBOS</li>
            <li className="cursor-pointer hover:text-[#ff6f61]">NEW ARRIVALS</li>
          </ul>

          {/* Icons */}
          <div className="flex items-center gap-6 text-black">
            <button className="hover:text-[#ff6f61]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1116.65 2a7.5 7.5 0 010 14.65z" />
              </svg>
            </button>

            <button className="relative hover:text-[#ff6f61]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6h13M9 21a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2z" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs rounded-full px-1">0</span>
            </button>
          </div>
        </div>
      </nav>

      {/* 👇 Auto Sliding Banner */}
      <div ref={sliderRef} className="w-full h-[300px] flex overflow-x-hidden scroll-smooth">
        {["newbanner.webp", "banner2.webp", "banner12.webp"].map((src, index) => (
          <div key={index} className="min-w-full flex items-center justify-center">
            <img src={src} alt={`Banner ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </header>
  );
}
