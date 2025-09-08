import React from "react";

export default function TrustHighlights() {
  const highlights = [
    { image: "global.webp" },
    { image: "global1.webp" },
    { image: "global2.webp" },
  ];

  return (
    <section className="bg-white py-10 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* ✅ Desktop Grid */}
<div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-3 text-center">
  {highlights.map((item, index) => (
    <div
      key={index}
      className="bg-white shadow-md rounded-lg border border-gray-200 hover:border-gray-400 transition-transform duration-300 flex flex-col items-center p-5"
    >
      <img
        src={item.image}
        alt=""
        className="w-full h-auto object-contain rounded-md"
      />
    </div>
  ))}
</div>

        {/* ✅ Mobile Row (unchanged) */}
        <div className="sm:hidden flex gap-1 justify-between">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[34%] bg-white shadow-md rounded-lg border border-gray-200 hover:border-gray-400 transition-transform duration-300 flex flex-col items-center p-2"
            >
              <img
                src={item.image}
                alt=""
                className="w-full h-28 object-cover rounded-md mb-2"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}