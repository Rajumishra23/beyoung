import React, { useEffect, useRef } from "react";

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
  const cardWidth = 320; // ek card ki width + gap approx

  // Auto slide one by one
  useEffect(() => {
    const slider = sliderRef.current;
    let index = 0;

    const autoSlide = setInterval(() => {
      if (!slider) return;

      index++;
      if (index >= reviews.length) index = 0;

      slider.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }, 4000); // 4 seconds per slide

    return () => clearInterval(autoSlide);
  }, []);

  const scrollLeft = () => {
    const slider = sliderRef.current;
    slider.scrollBy({ left: -cardWidth, behavior: "smooth" });
  };

  const scrollRight = () => {
    const slider = sliderRef.current;
    slider.scrollBy({ left: cardWidth, behavior: "smooth" });
  };

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

        {/* Slider Wrapper */}
        <div className="relative">
          {/* Left Button */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black"
          >
            ◀
          </button>

          {/* Slider Row */}
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
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
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-indigo-600">{testimonial.post}</div>
                    <div className="mt-2 text-yellow-500 text-lg">
                      {"⭐".repeat(Math.round(testimonial.rating))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
