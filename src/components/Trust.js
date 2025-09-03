import React from "react";

export default function TrustHighlights() {
  const highlights = [
    { image: "global.webp", title: "Easy Returns", subtitle: "and Refunds" },
    { image: "global1.webp", title: "Global Fashion", subtitle: "Made in India" },
    { image: "global2.webp", title: "Trusted by", subtitle: "50 Lakh+ Customers" },
  ];

  return (
    <section className="bg-white py-10 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Desktop Grid */}
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-md rounded-lg border border-gray-200 hover:border-gray-400 transition-transform duration-300 flex flex-col items-center"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">{item.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 mt-1">{item.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Mobile Row */}
        <div className="sm:hidden flex gap-2 justify-between">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[30%] bg-white shadow-md rounded-lg border border-gray-200 hover:border-gray-400 transition-transform duration-300 flex flex-col items-center p-2"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-28 object-cover rounded-md mb-2"
              />
              <h3 className="text-xs font-bold text-gray-900 text-center">{item.title}</h3>
              <p className="text-[10px] text-gray-600 text-center mt-1">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
