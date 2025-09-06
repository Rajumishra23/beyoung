import React, { useRef } from "react";

const reviews = [
  {
    name: "Amran Singh",
    review:
      "Ordered polo for the first time, the experience was good. Delivery was delayed by a day but the quality was nice. Loved the fabric.",
    rating: 4.7,
    avatar: "client1.webp",
    post: "Polo Shirt",
    date: "2 Sept, 2025",
  },
  {
    name: "Mohit",
    review:
      "Got one shirt and I’m seriously impressed. The color looks great, the fabric feels premium, and the price was totally worth it.",
    rating: 4.7,
    avatar: "client3.webp",
    post: "Denim Shirt",
    date: "28 Aug, 2025",
  },
  {
    name: "SALONI VERMA",
    review:
      "Combos are really nice, especially liked that you can select different sizes and combos. Me and my brother got even more excited when we received them.",
    rating: 5.0,
    avatar: "client4.webp",
    post: "Combo T-Shirts",
    date: "15 Aug, 2025",
  },
  {
    name: "SNEHA",
    review: "Bought polo t-shirt, the quality is decent and it feels good.",
    rating: 3.9,
    avatar: "girl.webp",
    post: "Polo Shirt",
    date: "10 Aug, 2025",
  },
];

export default function Testimonials() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    const cardWidth = sliderRef.current?.children[0]?.offsetWidth + 24; // card + gap
    sliderRef.current?.scrollBy({ left: -cardWidth, behavior: "smooth" });
  };

  const scrollRight = () => {
    const cardWidth = sliderRef.current?.children[0]?.offsetWidth + 24;
    sliderRef.current?.scrollBy({ left: cardWidth, behavior: "smooth" });
  };

  return (
    <section className="bg-white text-black py-10 sm:py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10 px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide mb-3">
            DEMPSEYSTERS <span className="text-indigo-500">APPROVED</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg italic max-w-2xl mx-auto leading-relaxed text-gray-700">
            “Real reviews from real people — style that speaks louder than words.”
          </p>
        </div>

        {/* ✅ Desktop Scrollable Row with Buttons */}
        <div className="hidden sm:flex items-center relative">
          {/* Prev Button */}
          <button
            onClick={scrollLeft}
            className="absolute -left-6 top-1/2 -translate-y-1/2 bg-indigo-600 text-white rounded-full p-3 shadow-lg hover:bg-indigo-700 z-10"
          >
            ⬅
          </button>

          {/* Slider */}
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar w-full"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {reviews.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[32%] rounded-xl shadow-lg hover:shadow-2xl transition p-5 bg-white border scroll-snap-align-start"
              >
                {/* Rating + Date */}
                <div className="flex justify-between items-center mb-2">
                  <span className="bg-black text-yellow-400 px-3 py-1 rounded-full text-base font-bold">
                    ⭐ {testimonial.rating.toFixed(1)}
                  </span>
                  <span className="text-gray-500 text-sm font-semibold">
                    {testimonial.date}
                  </span>
                </div>

                <p className="text-gray-800 mb-3 leading-relaxed text-sm font-semibold">
                  "{testimonial.review}"
                </p>

                <div className="font-semibold text-black text-base mb-1">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-600 mb-3">{testimonial.post}</div>

                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-full h-56 rounded-lg object-cover"
                />
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={scrollRight}
            className="absolute -right-6 top-1/2 -translate-y-1/2 bg-indigo-600 text-white rounded-full p-3 shadow-lg hover:bg-indigo-700 z-10"
          >
            ➡
          </button>
        </div>

        {/* ✅ Mobile Slider (unchanged) */}
        <div className="sm:hidden overflow-x-auto flex gap-4 scroll-smooth no-scrollbar px-2">
          {reviews.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[80%] rounded-xl shadow-lg hover:shadow-2xl transition p-5 bg-white border"
            >
              {/* Rating + Date */}
              <div className="flex justify-between items-center mb-2">
                <span className="bg-black text-yellow-400 px-3 py-1 rounded-full text-base font-bold">
                  ⭐ {testimonial.rating.toFixed(1)}
                </span>
                <span className="text-gray-500 text-sm font-semibold">
                  {testimonial.date}
                </span>
              </div>

              <p className="text-gray-800 mb-3 leading-relaxed text-sm font-semibold">
                "{testimonial.review}"
              </p>

              <div className="font-semibold text-black text-base mb-1">
                {testimonial.name}
              </div>
              <div className="text-sm text-gray-600 mb-3">{testimonial.post}</div>

              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-full h-52 rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}