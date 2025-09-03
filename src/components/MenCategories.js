import React, { useRef, useEffect } from "react";

const categories = [
  { title: "HAWAIIAN FITS", discount: "Up to 60% off", image: "mens.webp" },
  { title: "BACKSTORY TEES", discount: "Up to 40% off", image: "mens1.webp" },
  { title: "SMART GLASSES", discount: "Up to 75% off", image: "mens3.webp" },
  { title: "KOREAN FITS", discount: "Up to 70% off", image: "mens4.webp" },
  { title: "CUBAN COLLAR GLASSES", discount: "Up to 60% off", image: "mens5.webp" },
];

export default function FashionCategories() {
  const scrollRef = useRef(null);
  const speed = 0.5; // smaller = smoother

  // Preload images
  useEffect(() => {
    categories.forEach((cat) => {
      const img = new Image();
      img.src = cat.image;
    });
  }, []);

  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    let reqId;
    let paused = false;
    const isMobile = window.innerWidth < 768;

    const autoScroll = () => {
      if (!paused) {
        slider.scrollLeft += speed;
        // seamless reset
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft -= slider.scrollWidth / 2;
        }
      }
      reqId = requestAnimationFrame(autoScroll);
    };

    reqId = requestAnimationFrame(autoScroll);

    const handleTouchStart = () => { if (isMobile) paused = true; };
    const handleTouchEnd = () => { if (isMobile) paused = false; };

    slider.addEventListener("touchstart", handleTouchStart);
    slider.addEventListener("touchend", handleTouchEnd);

    return () => {
      cancelAnimationFrame(reqId);
      slider.removeEventListener("touchstart", handleTouchStart);
      slider.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <section className="bg-white py-12 overflow-hidden">
      <div className="text-center mb-10 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
          <span className="text-black">MEN</span>
          <span className="text-red-600">&apos;S </span>
          <span className="text-black">FAVOURITE</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-2 font-medium">
          Style Up Without The Splurge ➝
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto flex">
        <div className="relative flex-1 overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar select-none touch-pan-x"
          >
            {/* duplicate list for seamless loop */}
            {[...categories, ...categories].map((cat, index) => (
              <div
                key={index}
                className="min-w-[160px] sm:min-w-[200px] md:min-w-[250px] bg-white border-2 border-orange-500 rounded-md shadow-sm flex-shrink-0"
              >
                <div className="w-full overflow-hidden h-[250px] sm:h-56 md:h-[300px]">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover"
                    draggable="false"
                  />
                </div>
                <div className="text-center py-3 px-2">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base font-bold text-gray-700 mt-1">
                    {cat.discount}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center w-12 bg-gray-800 text-white font-bold text-sm tracking-wider">
          <span className="transform -rotate-90 whitespace-nowrap">
            UPTO ₹300 OFF
          </span>
        </div>
      </div>
    </section>
  );
}