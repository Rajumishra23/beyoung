import React, { useRef } from "react";

const Productdata = [
  { image: "s1.webp", title: "Comfy Casual fashion", oldPrice: "2799", price: "899" },
  { image: "s2.webp", title: "Deodorants", oldPrice: "549", price: "199" },
  { image: "s3.webp", title: "Breezy Flip Flops", oldPrice: "1399", price: "499" },
  { image: "s4.webp", title: "Sharp Formal Shoes", oldPrice: "2799", price: "899" },
  { image: "wallet3.webp", title: "Trendy Jeans", oldPrice: "1799", price: "649" },
  { image: "shirt1.webp", title: "Enticing Perfumes", oldPrice: "1249", price: "449" },
];

const ProductGallery = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -250, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 250, behavior: "smooth" });
  };

  return (
    <section className="py-12 relative bg-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-2">
            ONE LOOK. ONE LEGACY
          </h2>
          <div className="w-20 sm:w-32 h-1 bg-green-600 mx-auto"></div>
        </div>

        {/* Gallery with Buttons */}
        <div className="relative">
          {/* Left Button */}
          <button
            onClick={scrollLeft}
            className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 z-20 
                       bg-white shadow-md p-2 sm:p-3 rounded-full hover:bg-gray-100 text-xs sm:text-base"
          >
            ◀
          </button>

          {/* Scrollable Gallery */}
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-2 scroll-smooth"
          >
            {Productdata.concat(Productdata).map((item, idx) => (
              <div
                key={idx}
                className="w-40 sm:w-48 md:w-56 flex-shrink-0 cursor-pointer group"
              >
                {/* Image */}
                <div className="w-full h-48 sm:h-60 md:h-[300px] overflow-hidden rounded-md">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Text below image */}
                <div className="bg-white border border-gray-200 text-center py-2 sm:py-3 mt-2 sm:mt-3 rounded-md shadow-sm">
                  <p className="text-xs sm:text-sm font-medium text-gray-800">
                    {item.title}
                  </p>
                  <p className="text-sm sm:text-base font-bold text-gray-900 mt-1">
                    UNDER ₹
                    <span className="line-through text-gray-500 text-xs sm:text-sm mx-1">
                      {item.oldPrice}
                    </span>
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={scrollRight}
            className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 z-20 
                       bg-white shadow-md p-2 sm:p-3 rounded-full hover:bg-gray-100 text-xs sm:text-base"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
