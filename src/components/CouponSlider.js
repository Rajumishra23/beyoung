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
    <section className="w-full bg-indigo-400 text-white py-3 sm:py-4 md:py-6 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top Text */}
        <div className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide mb-2 text-center">
          SPECIAL COUPON CORNER
        </div>

        {/* Divider Line */}
        <div className="h-[2px] w-full bg-white/20 mb-3 sm:mb-4"></div>

        {/* Full-Width Image Slider */}
        <div className="w-full overflow-hidden rounded-lg">
          <img
            src={images[index]}
            alt={`Coupon ${index + 1}`}
            className="w-full h-28 sm:h-32 md:h-36 lg:h-40 object-cover transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default CouponSlider;
