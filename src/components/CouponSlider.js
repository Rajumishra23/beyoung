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
    "first6.webp",
  ];

  const [cardWidth, setCardWidth] = useState(0);
  const [visibleCards, setVisibleCards] = useState(2);
  const sliderRef = useRef(null);

  // Calculate card width + gap dynamically
  const updateSizes = () => {
    if (sliderRef.current && sliderRef.current.children.length > 0) {
      const firstCard = sliderRef.current.children[0];
      const style = window.getComputedStyle(firstCard);
      const gap = parseInt(style.marginRight) || 0;
      setCardWidth(firstCard.offsetWidth + gap);
    }
    setVisibleCards(window.innerWidth < 768 ? 1 : 2);
  };

  useEffect(() => {
    const timer = setTimeout(updateSizes, 100);
    window.addEventListener("resize", updateSizes);
    window.addEventListener("load", updateSizes);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateSizes);
      window.removeEventListener("load", updateSizes);
    };
  }, []);

  return (
    <div className="bg-black text-white flex items-center gap-4 md:gap-6 p-4 md:p-6 flex-wrap md:flex-nowrap">
      {/* Left Label */}
      <div className="flex flex-col items-center justify-center text-center px-3 md:px-4 min-w-[100px] md:min-w-[120px]">
        <FaPercentage className="text-yellow-400 text-3xl mb-2" />
        <span className="text-sm md:text-base font-bold tracking-widest">SPECIAL</span>
        <span className="text-base font-bold tracking-widest">COUPON</span>
        <span className="text-sm md:text-base font-bold tracking-widest">CORNER</span>
      </div>

      {/* Coupon Slider */}
      <div className="overflow-hidden w-full">
        <div
          ref={sliderRef}
          className="flex gap-4 md:gap-6"
          style={{ transform: `translateX(0px)` }} // static view, no auto-slide
        >
          {coupons.map((coupon, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0 
                ${visibleCards === 1 ? "w-[280px]" : "w-[380px]"}`}
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