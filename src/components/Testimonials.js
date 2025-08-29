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
    review:
      "Bought polo t-shirt, the quality is decent and it feels good.",
    rating: 3.9,
    avatar: "T4.webp",
    post: "Polo Shirt",
  },
];

const Testimonials = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;

    const slideInterval = setInterval(() => {
      if (slider) {
        scrollAmount += slider.offsetWidth;
        if (scrollAmount >= slider.scrollWidth) {
          scrollAmount = 0;
        }
        slider.scrollTo({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }, 4000);

    return () => clearInterval(slideInterval);
  }, []);

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

        {/* Slider */}
        <div
          ref={sliderRef}
          className="w-full flex overflow-x-hidden overflow-y-hidden scroll-smooth"
        >
          {reviews.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-full flex items-center justify-center px-4"
            >
              {/* Card with Background */}
             <div
                className="relative bg-white p-6 max-w-md rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition duration-300 text-center"
                style={{
                  backgroundImage: `url('bg.webp')`, // ✅ Replace with your actual image path
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-white/80 rounded-lg z-0"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div
                    className="w-24 h-24 mx-auto rounded-full bg-cover bg-center mb-4 border border-gray-300"
                    style={{
                      backgroundImage: `url(${testimonial.avatar})`,
                    }}
                  ></div>
                  <p className="text-gray-700 italic mb-4">
                    "{testimonial.review}"
                  </p>
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