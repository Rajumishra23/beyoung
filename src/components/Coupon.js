// TrustHighlights.jsx
import React from "react";
import CountUp from "react-countup";

export default function TrustHighlights() {
  const highlights = [
    {
      number: 25,
      suffix: "K+",
      subtitle: "Satisfied Clients",
    },
    {
      number: 36,
      suffix: "K+",
      subtitle: "Products Sold",
    },
    {
      number: 15,
      suffix: "+",
      subtitle: "Years Experience",
    },
    {
      number: 100,
      suffix: "+",
      subtitle: "Awards Winning",
    },
  ];

  return (
    <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-r from-black via-gray-900 to-black">
      {/* Golden waves background animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-gradient-to-r from-yellow-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-l from-yellow-400/20 to-transparent rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center text-white">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center animate-fadeIn"
          >
            <h3 className="text-5xl font-extrabold bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              <CountUp end={item.number} duration={3} />{item.suffix}
            </h3>
            <p className="mt-2 text-lg font-medium text-gray-300">
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
