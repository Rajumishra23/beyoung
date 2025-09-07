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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = right, -1 = left
  const [leftSteps, setLeftSteps] = useState(0);
  const sliderRef = useRef(null);

  // ✅ Calculate card width + gap dynamically
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

  const maxIndex = Math.max(coupons.length - visibleCards, 0);

  // ✅ Auto slide with mobile-specific left limit
  useEffect(() => {
    if (cardWidth === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // Mobile: limit left slide to 1 step, Desktop: 3 steps
        const maxLeftSteps = visibleCards === 1 ? 1 : 2;

        // Going right
        if (direction === 1) {
          if (prevIndex >= maxIndex) {
            setDirection(-1);
            setLeftSteps(1); // start left count
            return prevIndex - 1;
          }
          return prevIndex + 1;
        }

        // Going left
        if (direction === -1) {
          if (leftSteps >= maxLeftSteps || prevIndex <= 0) {
            setDirection(1);
            return prevIndex + 1;
          } else {
            setLeftSteps(leftSteps + 1);
            return prevIndex - 1;
          }
        }

        return prevIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [direction, maxIndex, cardWidth, leftSteps, visibleCards]);

  return (
    <div className="bg-black text-white flex flex-row items-center gap-4 md:gap-6 py-2 md:py-3 px-3 md:px-4 w-full">
      {/* Left Label */}
      <div className="flex flex-col items-center justify-center text-center px-3 md:px-4 min-w-[90px] md:min-w-[100px]">
        <FaPercentage className="text-yellow-400 text-2xl mb-2" />
        <span className="text-sm md:text-base font-bold tracking-widest">SPECIAL</span>
        <span className="text-base font-bold tracking-widest">COUPON</span>
        <span className="text-sm md:text-base font-bold tracking-widest">CORNER</span>
      </div>

      {/* Coupon Slider */}
      <div className="overflow-hidden flex-1">
        <div
          ref={sliderRef}
          className="flex gap-4 md:gap-6 transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}
        >
          {coupons.map((coupon, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md overflow-hidden border-4 border-white-900 flex-shrink-0  
                ${visibleCards === 1 ? "w-[280px]" : "w-[380px]"}`}
            >
              <img
                src={coupon}
                alt={`Coupon ${index + 1}`}
                className="w-full h-auto object-contain bg-white"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}