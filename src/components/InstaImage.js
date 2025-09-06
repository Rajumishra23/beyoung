import React, { useRef, useEffect } from "react";
import { FaInstagram } from "react-icons/fa";

const InstaImages = [
  { image: "A5.webp", title: "Blue Checkered Shirt", link: "https://www.instagram.com/himanshu_anand_08/" },
  { image: "women@.webp", title: "Womens Look 2", link: "https://www.instagram.com/himanshu_anand_08/" },
  { image: "women@1.webp", title: "Womens Look 3", link: "https://www.instagram.com/himanshu_anand_08/" },
  { image: "watches.webp", title: "Watches Look 4", link: "https://www.instagram.com/himanshu_anand_08/" },
  { image: "wallet@.webp", title: "Bags Look 5", link: "https://www.instagram.com/himanshu_anand_08/" },
];

const InstaImage = () => {
  const sliderRef = useRef(null);
  const speed = 0.5; // px per frame (~30px/sec)

  // Auto sliding
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let reqId;
    const animate = () => {
      slider.scrollLeft += speed;
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0; // infinite loop reset
      }
      reqId = requestAnimationFrame(animate);
    };

    reqId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(reqId);
  }, []);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -250, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 250, behavior: "smooth" });
  };

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight mb-2">
            Instagram Gallery 📸
          </h2>
          <p className="text-sm md:text-base text-gray-700 italic">
            Swipe-worthy looks that speak your vibe.
          </p>
        </div>

       {/* Slider Row */}
<div
  ref={sliderRef}
  className="flex gap-2 md:gap-3 overflow-x-hidden no-scrollbar py-4"
>
  {InstaImages.concat(InstaImages).map((item, idx) => (
    <a
      key={idx}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-56 sm:w-56 md:w-64 flex-shrink-0 rounded-xl overflow-hidden group cursor-pointer 
      border border-gray-200 shadow-md hover:shadow-xl transition"
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full max-w-[500px] h-[250px] sm:h-64 md:h-80 lg:h-[400px] object-cover transition-transform duration-300 group-hover:scale-110 mx-auto"
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition">
        <FaInstagram className="text-white text-2xl md:text-3xl mb-2" />
        <span className="text-white text-sm md:text-base font-medium">
          {item.title}
        </span>
      </div>
    </a>
  ))}
</div>
      </div>
    </section>
  );
};

export default InstaImage;
