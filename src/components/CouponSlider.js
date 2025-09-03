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
    <section className="w-full bg-black text-white py-2 px-2">
      <div className="max-w-6xl mx-auto flex items-center h-[140px] rounded-lg overflow-hidden">
      {/* Left Box */}
<div className="bg-gradient-to-b from-purple-700 to-indigo-900 h-full w-[200px] flex flex-col items-center justify-center text-center px-4 py-6">
  <h3 className="text-lg sm:text-xl font-extrabold tracking-wide text-white leading-tight">
    SPECIAL
  </h3>
  <h3 className="text-lg sm:text-xl font-extrabold tracking-wide text-white leading-tight">
    COUPON
  </h3>
  <p className="mt-2 text-yellow-300 text-sm sm:text-base font-medium">
    CORNER
  </p>
  <div className="mt-3 w-10 h-1 bg-yellow-400 rounded-full"></div>
</div>

        {/* Divider */}
        <div className="w-[2px] bg-white/20 h-full"></div>

        {/* Slider Box */}
        <div className="flex-1 relative overflow-hidden">
          <img
            src={images[index]}
            alt={`Coupon ${index + 1}`}
            className="w-full h-full object-contain transition-all duration-500 mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default CouponSlider;
