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
        
        {/* Left Image - Fixed Width */}
        <div className="w-[220px] sm:w-[250px] md:w-[280px] h-full bg-black flex items-center justify-center">
          <img
            src="super.png"
            alt="Special Coupon Corner"
            className="max-h-full max-w-full object-contain"
          />
        </div>

        {/* Right Side Slider */}
        <div className="flex-1 h-full bg-white overflow-hidden relative">
          <div
            className="flex h-full transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * (100 / itemsPerSlide)}%)`,
            }}
          >
            {couponImages.map((img, i) => (
              <div
                key={i}
                className="flex items-center justify-center border-l border-gray-300 bg-white h-full"
                style={{ flex: `0 0 ${100 / itemsPerSlide}%` }}
              >
                <img
                  src={img}
                  alt={`Coupon ${i + 1}`}
                  className="max-h-full max-w-full object-contain"
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