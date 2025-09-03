import React from "react";

export default function TrustHighlights() {
  const highlights = [
    { image: "global.webp", title: "Easy Returns", subtitle: "and Refunds" },
    { image: "global1.webp", title: "Global Fashion", subtitle: "Made in India" },
    { image: "global2.webp", title: "Trusted by", subtitle: "50 Lakh+ Customers" },
  ];

  return (
    <section className="bg-white py-10 px-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center max-w-6xl mx-auto">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-md rounded-lg border border-gray-200 hover:border-gray-400 transition-transform duration-300 hover:scale-105 flex flex-col items-center"
          >
            {item.image && (
              <div className="w-full flex-1 mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            )}
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-2">
              {item.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mt-1">
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
