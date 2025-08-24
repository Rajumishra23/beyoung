import React from "react";

export default function Testimonials() {
  const reviews = [
    { image: "T1.webp" },
    { image: "T2.webp" },
    { image: "T3.webp" },
    { image: "T4.webp" },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 bg-white">
      <h2 className="text-center text-2xl font-bold mb-2">
        BEYOUNGSTERS APPROVED
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Real reviews from real people
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-[1.02] transition-transform duration-300"
          >
            <img
              src={item.image}
              alt={`review-${index + 1}`}
              className="w-full h-[500px] object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
