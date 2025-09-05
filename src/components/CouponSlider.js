import React, { useState, useEffect } from "react";

const couponImages = [
  "first.webp",  // 1st coupon image path
  "first1.webp", // 2nd coupon image path
  "first2.webp", // 3rd coupon image path
  "first3.webp", // 4th coupon image path
];

const SpecialCouponBar = () => {
  const [index, setIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(1); // default desktop

  // Screen size ke hisaab se items per slide set karo
  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(2); // mobile pe 2 images
      } else {
        setItemsPerSlide(1); // desktop/tablet pe 1 image
      }
    };
    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % (couponImages.length - (itemsPerSlide - 1)));
    }, 3000);
    return () => clearInterval(timer);
  }, [itemsPerSlide]);

  return (
    <section className="w-full bg-black">
      <div className="max-w-7xl mx-auto flex items-center h-[120px] sm:h-[140px] md:h-[160px] pl-0 overflow-hidden">
        
        {/* Left Image */}
        <img
          src="super.png" // <-- apna left banner image path
          alt="Special Coupon Corner"
          className="h-full w-auto object-contain"
        />

        {/* Right Side Slider */}
        <div className="flex-1 h-full bg-white overflow-hidden relative">
          <div
            className="flex h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * (100 / itemsPerSlide)}%)` }}
          >
            {couponImages.map((img, i) => (
              <div
                key={i}
                className="flex items-center justify-center border-l border-gray-300 bg-black"
                style={{ flex: `0 0 ${100 / itemsPerSlide}%` }}
              >
                <img
                  src={img}
                  alt={`Coupon ${i + 1}`}
                  className="max-h-[90%] max-w-[90%] object-contain"
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