import React, { useState } from "react";

const reviews = [
  {
    name: "Amran Singh",
    review:
      "Ordered polo for the first time, the experience was good. Delivery was delayed by a day but the quality was nice. Loved the fabric.",
    rating: 4.7,
    avatar: "T1.webp",
    post: "Polo Shirt",
    date: "2 Sept, 2025",
  },
  {
    name: "Mohit",
    review:
      "Got one shirt and I’m seriously impressed. The color looks great, the fabric feels premium, and the price was totally worth it.",
    rating: 4.7,
    avatar: "T2.webp",
    post: "Denim Shirt",
    date: "28 Aug, 2025",
  },
  {
    name: "Rohit Jain",
    review:
      "Combos are really nice, especially liked that you can select different sizes and combos. Me and my brother got even more excited when we received them.",
    rating: 5.0,
    avatar: "T3.webp",
    post: "Combo T-Shirts",
    date: "15 Aug, 2025",
  },
  {
    name: "Manoj",
    review: "Bought polo t-shirt, the quality is decent and it feels good.",
    rating: 3.9,
    avatar: "T4.webp",
    post: "Polo Shirt",
    date: "10 Aug, 2025",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonial = reviews[currentIndex];

  const nextSlide = () => {
    if (currentIndex < reviews.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="bg-white text-black py-10 sm:py-16">
      <div className="container mx-auto px-4 relative">
        {/* Heading */}
        <div className="text-center mb-10 px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide mb-3">
            BEYOUNGSTERS <span className="text-indigo-500">APPROVED</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg italic max-w-2xl mx-auto leading-relaxed text-gray-700">
            “Real reviews from real people — style that speaks louder than words.”
          </p>
        </div>

        {/* Review Card */}
        <div className="overflow-x-auto sm:overflow-visible">
          <div className="relative rounded-xl shadow-lg hover:shadow-2xl transition w-full max-w-[95%] sm:max-w-[80%] md:max-w-xl mx-auto p-5"
            style={{
              background: "linear-gradient(135deg, #6D5BBA 0%, #8D58BF 50%, #DE67E4 100%)",
              color: "white",
            }}
          >
            {/* Mobile Layout */}
            <div className="relative z-10 block sm:hidden text-left flex flex-col gap-3">
              <div className="flex justify-between items-center text-sm text-white/90">
                <span className="text-yellow-400 font-semibold">
                  ⭐ {testimonial.rating.toFixed(1)}
                </span>
                <span className="text-xs">{testimonial.date}</span>
              </div>

              <p className="text-white italic leading-relaxed text-sm">
                "{testimonial.review}"
              </p>

              <div>
                <div className="font-semibold text-white text-base">
                  {testimonial.name}
                </div>
                <div className="text-sm text-yellow-300">{testimonial.post}</div>
              </div>

              <div
                className="w-full h-56 sm:h-48 rounded-md bg-cover bg-center border border-white/50 shadow"
                style={{ backgroundImage: `url(${testimonial.avatar})` }}
              ></div>
            </div>

            {/* Desktop Layout */}
            <div className="relative z-10 hidden sm:block text-center">
              <div
                className="w-16 sm:w-20 h-16 sm:h-20 mx-auto rounded-full bg-cover bg-center mb-4 border border-white/50 shadow"
                style={{ backgroundImage: `url(${testimonial.avatar})` }}
              ></div>
              <p className="text-white italic mb-4 leading-relaxed text-sm sm:text-base">
                "{testimonial.review}"
              </p>
              <div className="font-semibold text-white text-base sm:text-lg">
                {testimonial.name}
              </div>
              <div className="text-sm text-yellow-300 mb-2">{testimonial.post}</div>
              <div className="mt-2 text-yellow-400 text-lg">
                {"⭐".repeat(Math.round(testimonial.rating))}
              </div>
            </div>
          </div>
        </div>
{/* Controls */}
<div className="flex justify-between items-center mt-4 sm:mt-0 sm:absolute sm:top-1/2 sm:left-0 sm:right-0 sm:px-4">
  {/* Mobile buttons */}
  <button
    onClick={prevSlide}
    disabled={currentIndex === 0}
    className="sm:hidden bg-white text-black rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-200 transition disabled:opacity-40 -translate-x-4"
  >
    ◀
  </button>
  <button
    onClick={nextSlide}
    disabled={currentIndex >= reviews.length - 1}
    className="sm:hidden bg-white text-black rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-200 transition disabled:opacity-40 translate-x-4"
  >
    ▶
  </button>

  {/* Desktop buttons */}
  <button
    onClick={prevSlide}
    disabled={currentIndex === 0}
    className="hidden sm:flex bg-white text-black rounded-full w-8 h-8 items-center justify-center hover:bg-gray-200 transition disabled:opacity-40"
  >
    ◀
  </button>
  <button
    onClick={nextSlide}
    disabled={currentIndex >= reviews.length - 1}
    className="hidden sm:flex bg-white text-black rounded-full w-8 h-8 items-center justify-center hover:bg-gray-200 transition disabled:opacity-40"
  >
    ▶
  </button>
</div>

      </div>
    </section>
  );
};

export default Testimonials;
