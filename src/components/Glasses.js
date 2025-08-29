// GlassSection.jsx
import React from "react";

const glasses = [
  {
    name: "Blue-Light Blockers",
    image: "glasses.webp",
    tag: "Screen Warrior",
  },
  {
    name: "Retro Round Frames",
    image: "glasses1.webp",
    tag: "Vintage Vibe",
  },
  {
    name: "Matte Black Readers",
    image: "glasses2.webp",
    tag: "Minimalist",
  },
  {
    name: "Rhinestone Bling Frames",
    image: "glasses3.webp",
    tag: "Bold Personality",
  },
];

export default function GlassSection() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
        👓 Frame Your Vision
      </h2>

      {/* Infinite Auto Slider */}
      <div className="overflow-hidden relative max-w-6xl mx-auto">
        <div className="flex gap-6 animate-scroll">
          {glasses.concat(glasses).map((glass, index) => (
            <div
              key={index}
              className="group border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition min-w-[250px] max-w-[250px]"
            >
              <img
                src={glass.image}
                alt={glass.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {glass.name}
                </h3>
                <p className="text-sm text-gray-500">{glass.tag}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
