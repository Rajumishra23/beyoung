import React, { useState, useEffect, useRef } from "react";
import { FaPercentage } from "react-icons/fa";

export default function CouponSection() {
  const coupons = [
    "first.webp",
    "first1.webp",
    "first2.webp",
    "first3.webp",
    "first4.webp",
    "first5.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(380);
  const sliderRef = useRef(null);

  // Determine card width based on screen size (mobile vs desktop)
  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth < 768) {
        setCardWidth(280); // mobile card width
      } else {
        setCardWidth(380); // desktop card width
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Auto slide continuously
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % coupons.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [coupons.length]);

  // Determine visible cards count
  const visibleCards = window.innerWidth < 768 ? 1 : 2;

  // Compute visible indices for border highlight
  const getVisibleIndices = () => {
    let indices = [];
    for (let i = 0; i < visibleCards; i++) {
      indices.push((currentIndex + i) % coupons.length);
    }
    return indices;
  };

  const visibleIndices = getVisibleIndices();

  return (
    <div className="bg-black text-white flex items-center gap-4 md:gap-6 p-4 md:p-6 flex-wrap md:flex-nowrap">
      {/* Left Sidebar */}
      <div className="flex flex-col items-center justify-center text-center px-3 md:px-4 min-w-[100px] md:min-w-[120px]">
        <FaPercentage className="text-yellow-400 text-3xl md:text-3xl mb-2" />
        <span className="text-sm md:text-base font-bold tracking-widest">SPECIAL</span>
        <span className="text-base md:text-base font-bold tracking-widest">COUPON</span>
        <span className="text-sm md:text-base font-bold tracking-widest">CORNER</span>
      </div>

      {/* Coupon Slider */}
      <div className="overflow-hidden w-full md:w-[780px]">
        <div
          ref={sliderRef}
          className="flex transition-transform duration-700 ease-in-out gap-4 md:gap-6"
          style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}
        >
          {[...coupons, ...coupons].map((coupon, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0 
                ${window.innerWidth < 768 ? "w-[280px]" : "w-[380px]"} 
                ${visibleIndices.includes(index % coupons.length) ? "border-4 border-white" : ""}`}
            >
              <img
                src={coupon}
                alt={`Coupon ${index + 1}`}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="flex flex-col items-center justify-center text-center px-3 md:px-4 min-w-[100px] md:min-w-[120px]">
        <FaPercentage className="text-yellow-400 text-3xl md:text-3xl mb-2" />
        <span className="text-sm md:text-base font-bold tracking-widest">SPECIAL</span>
        <span className="text-base md:text-base font-bold tracking-widest">COUPON</span>
        <span className="text-sm md:text-base font-bold tracking-widest">CORNER</span>
      </div>
    </div>
  );
}
