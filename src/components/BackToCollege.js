import React, { useState } from "react";

export default function BackToCollege() {
  const collegeStyles = [
    { title: "COLLEGE CORE", image: "c1.webp", tag: "FITS FOR YOUR VIBE" },
    { title: "GHAR KE DOOR", image: "c2.webp", tag: "FITS FOR YOUR VIBE" },
    { title: "I’M DGAF", image: "c3.webp", tag: "FITS FOR YOUR VIBE" },
    { title: "INTROVERT", image: "c4.webp", tag: "FITS FOR YOUR VIBE" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? collegeStyles.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === collegeStyles.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-white py-8 px-3 sm:px-6">
      {/* Heading */}
      <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold mb-1">
        BACK TO COLLEGE
      </h2>
      <p className="text-center text-xs sm:text-sm text-gray-600 mb-6">
        Styles to Stay This Semester!
      </p>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-4 gap-2 sm:gap-3">
        {collegeStyles.map((item, index) => (
          <div
            key={index}
            className="relative group cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
           {/* Desktop Grid Image */}
<img
  src={item.image}
  alt={item.title}
  className="w-full h-[500px] sm:h-[520px] object-cover"
/>

            <div className="absolute bottom-3 left-3 bg-black bg-opacity-70 text-white text-xs font-bold px-2 py-1 rounded">
              {item.tag}
            </div>
            <div className="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
              {item.title}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="md:hidden relative max-w-md mx-auto">
        <div className="overflow-hidden rounded-lg shadow-md">
          <img
            src={collegeStyles[currentIndex].image}
            alt={collegeStyles[currentIndex].title}
            className="w-full h-80 sm:h-96 object-cover transition-all duration-500"
          />
          <div className="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
            {collegeStyles[currentIndex].title}
          </div>
          <div className="absolute bottom-3 left-3 bg-black bg-opacity-70 text-white text-xs font-bold px-2 py-1 rounded">
            {collegeStyles[currentIndex].tag}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 px-2">
          <button
            onClick={prevSlide}
            className="bg-white text-black px-3 py-1 rounded-full text-lg"
          >
            ←
          </button>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 px-2">
          <button
            onClick={nextSlide}
            className="bg-white text-black px-3 py-1 rounded-full text-lg"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
