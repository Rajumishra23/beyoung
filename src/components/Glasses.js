import React, { useRef } from "react";

const glasses = [
  {
    name: "Blue-Light Blockers",
    image: "glasses.webp",
    tag: "Screen Warrior",
    price: "₹1,299",
    discount: "20% OFF",
  },
  {
    name: "Retro Round Frames",
    image: "glasses1.webp",
    tag: "Vintage Vibe",
    price: "₹1,499",
    discount: "15% OFF",
  },
  {
    name: "Matte Black Readers",
    image: "glasses2.webp",
    tag: "Minimalist",
    price: "₹999",
    discount: "10% OFF",
  },
  {
    name: "Rhinestone Bling Frames",
    image: "glasses3.webp",
    tag: "Bold Personality",
    price: "₹1,799",
    discount: "25% OFF",
  },
];

export default function GlassSection() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="bg-gray-50 py-12 px-4 md:px-12 overflow-hidden">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
        👓 Frame Your Vision
      </h2>

      <div className="relative max-w-6xl mx-auto flex items-center">
        {/* Left Button */}
        <button
          onClick={scrollLeft}
          className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md absolute -left-5 z-10 hover:bg-gray-100 transition"
        >
          ◀
        </button>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth flex-1 no-scrollbar"
        >
          {glasses.map((glass, index) => (
            <div
              key={index}
              className="min-w-[180px] sm:min-w-[200px] md:min-w-[220px] bg-white rounded-md overflow-hidden shadow hover:shadow-lg transition"
            >
              {/* Image */}
              <img
                src={glass.image}
                alt={glass.name}
                className="w-full h-[220px] sm:h-[260px] md:h-[300px] object-cover hover:scale-105 transition-transform duration-300"
              />

              {/* Info Box */}
              <div className="p-3 border-t text-center">
                <h3 className="text-sm font-semibold text-gray-900">
                  {glass.name}
                </h3>
                <p className="text-xs text-gray-500">{glass.tag}</p>

                {/* Price & Discount */}
                <div className="mt-2 flex items-center justify-center gap-2">
                  <span className="text-base font-bold text-gray-900">
                    {glass.price}
                  </span>
                  <span className="text-xs font-semibold text-red-500">
                    {glass.discount}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

     {/* Left Button */}
<button
  onClick={scrollLeft}
  className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md absolute -left-5 z-10 hover:bg-gray-100 transition"
>
  ◀
</button>

{/* Right Button */}
<button
  onClick={scrollRight}
  className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md absolute -right-5 z-10 hover:bg-gray-100 transition"
>
  ▶
</button>
      </div>
    </section>
  );
}
