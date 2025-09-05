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

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonial = reviews[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-white text-black py-10 sm:py-16">
      <div className="container mx-auto px-4 relative">
        {/* Heading */}
        <div className="text-center mb-10 px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide mb-3">
            DEMPSEYS <span className="text-indigo-500">APPROVED</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg italic max-w-2xl mx-auto leading-relaxed text-gray-700">
            “Real reviews from real people — style that speaks louder than words.”
          </p>
        </div>

        {/* ✅ Mobile Scrollable Cards (screenshot जैसा look) */}
        <div className="block sm:hidden overflow-x-auto scroll-smooth snap-x snap-mandatory overflow-y-hidden">
          <div className="flex gap-3 px-2">
            {reviews.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 snap-start w-[90%] rounded-xl shadow-lg hover:shadow-2xl transition p-5 bg-white border"
              >
                {/* Rating + Date */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-black text-yellow-400 px-2 py-1 rounded-full text-sm font-bold">
                    ⭐ {testimonial.rating.toFixed(1)}
                  </span>
                  <span className="text-gray-500 text-sm">{testimonial.date}</span>
                </div>

                {/* Review Text */}
                <p className="text-gray-800 mb-3 leading-relaxed text-sm">
                  "{testimonial.review}"
                </p>

                {/* Reviewer + Image */}
                <div className="font-semibold text-black text-base mb-1">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-600 mb-3">{testimonial.post}</div>
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-full h-40 rounded-lg object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ✅ Desktop View (unchanged) */}
        <div className="hidden sm:flex flex-col sm:flex-row justify-center items-center gap-6 px-4">
          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition mb-4 sm:mb-0"
          >
            ⬅
          </button>

          {/* Review Card */}
          <div className="max-w-md w-full rounded-xl shadow-lg hover:shadow-2xl transition p-5 bg-white border">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="bg-black text-yellow-400 px-2 py-1 rounded-full text-sm font-bold">
                ⭐ {testimonial.rating.toFixed(1)}
              </span>
              <span className="text-gray-500 text-sm">{testimonial.date}</span>
            </div>
            <p className="text-gray-800 italic mb-4 leading-relaxed text-base">
              "{testimonial.review}"
            </p>
            <div className="font-semibold text-black text-lg text-center">
              {testimonial.name}
            </div>
            <div className="text-sm text-gray-600 text-center mb-2">
              {testimonial.post}
            </div>
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-full h-400 rounded-lg object-cover"
            />
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition mt-4 sm:mt-0"
          >
            ➡
          </button>
        </div>
      </div>
    </section>
  );
}
