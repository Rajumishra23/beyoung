import React, { useRef } from "react";

const categories = [
  {
    title: "HAWAIIAN FITS",
    discount: "Up to 60% off",
    image: "mens.webp",
  },
  {
    title: "BACKSTORY TEES",
    discount: "Up to 40% off",
    image: "mens1.webp",
  },
  {
    title: "SMART GLASSES",
    discount: "Up to 75% off",
    image: "mens3.webp",
  },
  {
    title: "KOREAN FITS",
    discount: "Up to 70% off",
    image: "mens4.webp",
  },
  {
    title: "CUBAN COLLAR GLASSES",
    discount: "Up to 60% off",
    image: "mens5.webp",
  },
];

export default function FashionCategories() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    const container = scrollRef.current;
    if (container) {
      container.scrollBy({
        left: dir === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white py-12 px-6 overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        MEN&apos;s Favourites
      </h2>

      {/* Slider with Auto + Buttons */}
      <div className="relative max-w-6xl mx-auto overflow-hidden">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-gray-200 rounded-full hover:bg-gray-300 shadow-md"
        >
          ◀
        </button>

        {/* Auto Sliding Train */}
        <div
          ref={scrollRef}
          className="flex gap-6 animate-scroll overflow-x-auto scroll-smooth pb-4 [&::-webkit-scrollbar]:hidden scrollbar-hide"
        >
          {categories.concat(categories).map((cat, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow hover:shadow-lg transition group min-w-[250px] max-w-[250px]"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />

              <div className="absolute left-0 bottom-0 w-full p-3 bg-gradient-to-t from-black/70 to-transparent text-white">
                <h3 className="text-lg font-semibold">{cat.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-gray-200 rounded-full hover:bg-gray-300 shadow-md"
        >
          ▶
        </button>
      </div>
    </section>
  );
}
