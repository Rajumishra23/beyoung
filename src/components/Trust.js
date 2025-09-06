import React from "react";

export default function TrustHighlights() {
  const highlights = [
    { image: "global.webp",   },
    { image: "global1.webp",   },
    { image: "global2.webp",  },
  ];

  return (
    <section className="bg-white py-10 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* ✅ Desktop Grid */}
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-3 text-center">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-5 bg-white shadow-md rounded-lg border border-gray-200 hover:border-gray-400 transition-transform duration-300 flex flex-col items-center"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-300 sm:h-60 md:h-72 lg:h-80 object-cover rounded-md mb-3 mx-auto"
              />
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">{item.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 mt-1">{item.subtitle}</p>
            </div>
          ))}
        </div>

        {/* ✅ Mobile Row */}
        <div className="sm:hidden flex gap-1 justify-between">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[34%] bg-white shadow-md rounded-lg border border-gray-200 hover:border-gray-400 transition-transform duration-300 flex flex-col items-center p-2"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-28 object-cover rounded-md mb-2"
              />
              <h3 className="text-xs font-semibold text-gray-900 text-center leading-snug">
                {item.title}
              </h3>
              <p className="text-[20px] text-gray-600 text-center mt-1 leading-snug break-words">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}