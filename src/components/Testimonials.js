import React, { useState, useEffect } from "react";

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
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  // Responsive logic
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(1); // mobile
      } else {
        setItemsPerSlide(3); // desktop
      }
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (currentIndex < reviews.length - itemsPerSlide) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="bg-white text-black py-12 sm:py-16">
      <div className="container mx-auto px-4 relative">
        {/* Heading */}
        <div className="text-center mb-10 px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-wide mb-3">
            BEYOUNGSTERS <span className="text-indigo-500">APPROVED</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg italic text-gray-700 max-w-2xl mx-auto leading-relaxed">
            “Real reviews from real people — style that speaks louder than words.”
          </p>
        </div>

        {/* Slider Container */}
        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)`,
              width: `${(reviews.length / itemsPerSlide) * 100}%`,
            }}
          >
            {reviews.map((testimonial, index) => (
              <div
                key={index}
                className={`px-2`}
                style={{ width: `${100 / itemsPerSlide}%` }}
              >
                <div
                  className="relative bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition text-center"
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
                      className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-cover bg-center mb-4 border border-gray-300 shadow"
                      style={{
                        backgroundImage: `url(${testimonial.avatar})`,
                      }}
                    ></div>

                    <p className="text-gray-700 italic mb-4 leading-relaxed text-sm sm:text-base">
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

          {/* Controls on sides */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-black/70 text-white shadow-md absolute top-1/2 -translate-y-1/2 -left-3 lg:-left-5 z-10 hover:bg-black transition disabled:opacity-40"
          >
            ◀
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex >= reviews.length - itemsPerSlide}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-black/70 text-white shadow-md absolute top-1/2 -translate-y-1/2 -right-3 lg:-right-5 z-10 hover:bg-black transition disabled:opacity-40"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
