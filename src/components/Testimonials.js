import React, { useState } from "react";

const reviews = [
  {
    name: "Amran Singh",
    review:
      "Ordered polo for the first time, the experience was good. Delivery was delayed by a day but the quality was nice. Loved the fabric.",
    rating: 4.7,
    avatar: "T1.webp",
    post: "Polo Shirt",
  },
  {
    name: "Mohit",
    review:
      "Got one shirt and I’m seriously impressed. The color looks great, the fabric feels premium, and the price was totally worth it.",
    rating: 4.7,
    avatar: "T2.webp",
    post: "Denim Shirt",
  },
  {
    name: "Rohit Jain",
    review:
      "Combos are really nice, especially liked that you can select different sizes and combos. Me and my brother got even more excited when we received them.",
    rating: 5.0,
    avatar: "T3.webp",
    post: "Combo T-Shirts",
  },
  {
    name: "Manoj",
    review: "Bought polo t-shirt, the quality is decent and it feels good.",
    rating: 3.9,
    avatar: "T4.webp",
    post: "Polo Shirt",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollLeft = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const scrollRight = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-white text-black py-12 sm:py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10 px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-wide mb-3">
            BEYOUNGSTERS <span className="text-indigo-500">APPROVED</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg italic text-gray-700 max-w-2xl mx-auto leading-relaxed">
            “Real reviews from real people — style that speaks louder than words.”
          </p>
        </div>

        {/* Slider + Buttons */}
        <div className="flex items-center justify-center gap-2 sm:gap-4">
          {/* Left Button */}
          <button
            onClick={scrollLeft}
            className="bg-black/50 text-white px-2 py-1 sm:px-3 sm:py-2 rounded-full hover:bg-black text-xs sm:text-base"
          >
            ◀
          </button>

          {/* Review Container */}
          <div className="w-full max-w-sm sm:max-w-md md:max-w-xl mx-auto overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 flex justify-center"
                >
                  <div
                    className="relative bg-white p-6 sm:p-8 w-full rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition text-center"
                    style={{
                      backgroundImage: `url('bg.webp')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-white/85 rounded-xl z-0"></div>

                    {/* Content */}
                    <div className="relative z-10">
                      <div
                        className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-cover bg-center mb-4 border border-gray-300 shadow"
                        style={{ backgroundImage: `url(${testimonial.avatar})` }}
                      ></div>

                      <p className="text-gray-700 italic mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                        "{testimonial.review}"
                      </p>

                      <div className="font-semibold text-gray-900 text-base sm:text-lg">
                        {testimonial.name}
                      </div>
                      <div className="text-xs sm:text-sm text-indigo-600 mb-2">
                        {testimonial.post}
                      </div>
                      <div className="mt-2 text-yellow-500 text-sm sm:text-lg">
                        {"⭐".repeat(Math.round(testimonial.rating))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Button */}
          <button
            onClick={scrollRight}
            className="bg-black/50 text-white px-2 py-1 sm:px-3 sm:py-2 rounded-full hover:bg-black text-xs sm:text-base"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
