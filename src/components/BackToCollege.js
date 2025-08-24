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
    <section className="bg-white py-12 px-4 sm:px-6">
      <h2 className="text-center text-2xl font-bold mb-2">BACK TO COLLEGE</h2>
      <p className="text-center text-sm text-gray-600 mb-8">Styles to Stay This Semester!</p>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {collegeStyles.map((item, index) => (
          <div key={index} className="relative group cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white text-xs font-bold px-3 py-1 rounded">
              {item.tag}
            </div>
            <div className="absolute top-4 left-4 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
              {item.title}
            </div>
            <div className="absolute right-4 bottom-4 text-white text-xl font-bold">→</div>
          </div>
        ))}
      </div>
    </section>
  );
}