import React, { useEffect, useRef, useState } from "react";

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
  const sliderRef = useRef(null);
  const [startSliding, setStartSliding] = useState(false);

  // ⏳ 5s ke baad sliding start hogi
  useEffect(() => {
    const timer = setTimeout(() => setStartSliding(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  // Auto sliding ek ek card ke hisaab se
  useEffect(() => {
    if (!startSliding) return;

    const slider = sliderRef.current;
    let scrollAmount = 0;

    const slideInterval = setInterval(() => {
      if (slider) {
        scrollAmount += 320; // ek card width approx
        if (scrollAmount >= slider.scrollWidth - slider.offsetWidth) {
          scrollAmount = 0;
        }
        slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
      }
    }, 4000);

    return () => clearInterval(slideInterval);
  }, [startSliding]);

  return (
    <section className="bg-white text-black py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12 px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-wide mb-4">
            BEYOUNGSTERS <span className="text-indigo-500">APPROVED</span>
          </h1>
          <p className="text-[16px] md:text-[22px] italic text-gray-700 max-w-3xl mx-auto leading-relaxed">
            “Real reviews from real people — style that speaks louder than words.”
          </p>
        </div>

        {/* Reviews Wrapper */}
        <div
          ref={sliderRef}
          className={`w-full scroll-smooth scrollbar-hide ${
            startSliding
              ? "flex gap-6 overflow-x-auto" // 👉 Sliding mode
              : "grid grid-cols-1 sm:grid-cols-2 gap-6" // 👉 Static grid frame
          }`}
        >
          {reviews.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-[300px] flex-shrink-0 flex items-center justify-center"
            >
              <div
                className="relative bg-white p-6 w-full max-w-sm rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition text-center"
                style={{
                  backgroundImage: `url('bg.webp')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="absolute inset-0 bg-white/80 rounded-lg z-0"></div>
                <div className="relative z-10">
                  <div
                    className="w-24 h-24 mx-auto rounded-full bg-cover bg-center mb-4 border border-gray-300"
                    style={{ backgroundImage: `url(${testimonial.avatar})` }}
                  ></div>
                  <p className="text-gray-700 italic mb-4">"{testimonial.review}"</p>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-indigo-600">
                    {testimonial.post}
                  </div>
                  <div className="mt-2 text-yellow-500 text-lg">
                    {"⭐".repeat(Math.round(testimonial.rating))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
