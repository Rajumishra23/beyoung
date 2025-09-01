import React from "react";

export default function BackToCollege() {
  const collegeStyles = [
    {
      title: "COLLEGE CORE",
      image: "c1.webp",
      tag: "FITS FOR YOUR VIBE",
    },
    {
      title: "GHAR KE DOOR",
      image: "c2.webp",
      tag: "FITS FOR YOUR VIBE",
    },
    {
      title: "I’M DGAF",
      image: "c3.webp",
      tag: "FITS FOR YOUR VIBE",
    },
    {
      title: "INTROVERT",
      image: "c4.webp",
      tag: "FITS FOR YOUR VIBE",
    },
  ];

  return (
    <section className="bg-white py-8 px-3 sm:px-6">
      {/* Heading */}
      <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold mb-1">
        BACK TO COLLEGE
      </h2>
      <p className="text-center text-xs sm:text-sm text-gray-600 mb-6">
        Styles to Stay This Semester!
      </p>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {collegeStyles.map((item, index) => (
          <div
            key={index}
            className="relative group cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <img
  src={item.image}
  alt={item.title}
  className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover"
/>

            {/* Tag */}
            <div className="absolute bottom-3 left-3 bg-black bg-opacity-70 text-white text-[10px] sm:text-xs font-bold px-2 py-1 rounded">
              {item.tag}
            </div>

            {/* Title */}
            <div className="absolute top-3 left-3 bg-yellow-400 text-black text-[10px] sm:text-xs font-bold px-2 py-1 rounded">
              {item.title}
            </div>

            {/* Arrow */}
            <div className="absolute right-3 bottom-3 text-white text-lg sm:text-xl font-bold">
              →
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
