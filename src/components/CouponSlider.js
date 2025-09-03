import React, { useEffect, useState } from "react";

const images = [
  "first.webp",
  "front4.webp",
  "first2.webp",
  "first3.webp",
  "first1.webp",
];

const CouponSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-black-500 text-white py-3 px-2 border border-black-500 rounded-lg shadow-md">

      <div
        className="max-w-10xl mx-auto flex items-center rounded-lg overflow-hidden 
        h-[240px] sm:h-[200px] md:h-[180px] lg:h-[180px]"
      >
        {/* Left Box */}
        <div
          className="bg-gradient-to-b from-purple-700 to-indigo-900 h-full 
          w-[160px] sm:w-[180px] md:w-[200px] flex flex-col items-center justify-center 
          text-center px-3 py-4"
        >
          <h3 className="text-base sm:text-lg md:text-xl font-extrabold tracking-wide text-white leading-tight">
            SPECIAL
          </h3>
          <h3 className="text-base sm:text-lg md:text-xl font-extrabold tracking-wide text-white leading-tight">
            COUPON
          </h3>
          <p className="mt-2 text-yellow-300 text-sm sm:text-base font-medium">
            CORNER
          </p>
          <div className="mt-3 w-10 h-1 bg-yellow-400 rounded-full"></div>
        </div>

        {/* Divider */}
        <div className="w-[1px] bg-white/20 h-full"></div>

        {/* Slider Box */}
        <div className="flex-1 relative overflow-hidden bg-white flex items-center justify-center">
          <img
            src={images[index]}
            alt={`Coupon ${index + 1}`}
            className="w-full h-full object-contain transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default CouponSlider;
