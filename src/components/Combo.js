import React, { useRef, useState } from "react";

export default function ComboSection() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const combos = [
    { image: "combo1.webp" },
    { image: "combo2.webp" },
    { image: "combo3.webp" },
    { image: "combo4.webp" },
    { image: "combo5.webp" },
    { image: "combo6.webp" },
    { image: "combo7.webp" },
    { image: "combo8.webp" },
    { image: "combo9.webp" },
    { image: "combo10.webp" },
  ];

  // 🔁 Duplicate array taaki infinite loop effect mile
  const loopCombos = [...combos, ...combos];

  const handleScroll = (dir) => {
    const container = scrollRef.current;
    if (!container) return;

    setIsPaused(true); // button press → pause auto slide
    container.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });

    // 2s baad wapas chalu ho jaye
    setTimeout(() => setIsPaused(false), 2000);
  };

  return (
    <section className="bg-white py-12 px-6 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold tracking-wide">
          SUPER SAVING COMBOS
        </h2>
        <p className="text-sm text-gray-600">Loved by 4+ millions</p>
      </div>

      {/* 🔄 Infinite Auto Sliding Train with Buttons */}
      <div className="relative w-full overflow-hidden">
        {/* Left Button */}
        <button
          onClick={() => handleScroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-gray-200 rounded-full hover:bg-gray-300 shadow-md"
        >
          ◀
        </button>

        {/* Train Container */}
        <div
          ref={scrollRef}
          className={`flex gap-6 ${isPaused ? "" : "animate-scroll"}`}
        >
          {loopCombos.map((combo, index) => (
            <div
              key={index}
              className="min-w-[220px] bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={combo.image}
                alt={`combo-${index + 1}`}
                className="w-full h-[300px] object-cover"
              />
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => handleScroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-gray-200 rounded-full hover:bg-gray-300 shadow-md"
        >
          ▶
        </button>
      </div>

      {/* Footer Note */}
      <p className="text-center text-xs text-gray-500 mt-4">
        NO COST | EASY EMIs | Activate at Checkout
      </p>
    </section>
  );
}
