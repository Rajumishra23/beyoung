import React, { useState, useEffect } from "react";
import { FaPercentage } from "react-icons/fa";

export default function CouponSection() {
  const coupons = ["first.webp", "first1.webp", "first2.webp", "first3.webp", "first4.webp", "first5.webp"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = right, -1 = left

  const cardWidth = 380;
  const visibleCards = 2;
  const maxIndex = coupons.length - visibleCards;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (direction === 1 && prevIndex >= maxIndex) {
          setDirection(-1);
          return prevIndex - 1;
        }
        if (direction === -1 && prevIndex <= 0) {
          setDirection(1);
          return prevIndex + 1;
        }
        return prevIndex + direction;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [direction, maxIndex]);

  return (
    <div className="bg-black text-white flex items-center gap-6 p-6">
      {/* Left Sidebar */}
      <div className="flex flex-col items-center justify-center text-center px-4 min-w-[120px]">
        <FaPercentage className="text-yellow-400 text-3xl mb-2" />
        <span className="text-base font-bold tracking-widest">SPECIAL</span>
        <span className="text-base font-bold tracking-widest">COUPON</span>
        <span className="text-base font-bold tracking-widest">CORNER</span>
        
      </div>

      {/* Coupon Slider */}
      <div className="overflow-hidden w-[780px]">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}
        >
          {coupons.map((coupon, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0 w-[380px] 
                ${index >= currentIndex && index < currentIndex + visibleCards ? "border-4 border-white" : ""}`}
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

     
    </div>
  );
}
