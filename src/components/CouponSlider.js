import React, { useState, useEffect } from "react";

const couponImages = [
  "first.webp",
  "first1.webp",
  "first2.webp",
  "first3.webp",
];

const SpecialCouponBar = () => {
  const [index, setIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(1);

  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(1);
      }
    };
    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(
        (prev) => (prev + 1) % (couponImages.length - (itemsPerSlide - 1))
      );
    }, 3000);
    return () => clearInterval(timer);
  }, [itemsPerSlide]);

  return (
    <section className="w-full bg-black">
      <div className="max-w-7xl mx-auto flex items-center h-[160px] sm:h-[140px] md:h-[160px] overflow-hidden">

        {/* Left Heading Section */}
        <div className="w-[220px] sm:w-[250px] md:w-[280px] h-full bg-black flex items-center justify-center px-4 border-r border-yellow-400 shadow-[0_0_15px_rgba(255,255,0,0.3)]">
          <div className="text-left">
            <h2 className="font-extrabold text-sm sm:text-base md:text-lg leading-tight text-white tracking-wide">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500">
                SUPER COUPON
              </span>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-white">CORNER</span>
                <span className="text-yellow-400 text-xl animate-bounce">%</span>
              </div>
            </h2>
            <p className="text-gray-400 text-[11px] sm:text-xs mt-2 italic">
              Scroll for exclusive deals →
            </p>
          </div>
        </div>

        {/* Right Side Slider */}
        <div className="flex-1 h-full bg-gradient-to-r from-blue-900 via-gray-800 to-blue-900 overflow-hidden relative">
          <div
            className="flex h-full transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * (100 / itemsPerSlide)}%)`,
            }}
          >
            {couponImages.map((img, i) => (
              <div
                key={i}
                className="flex items-center justify-center border-l border-white-700 h-full"
                style={{ flex: `0 0 ${100 / itemsPerSlide}%` }}
              >
                <img
                  src={img}
                  alt={`Coupon ${i + 1}`}
                  className="max-h-[80%] max-w-[90%] object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SpecialCouponBar;