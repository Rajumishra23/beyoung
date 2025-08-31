import React, { useRef, useEffect } from "react";
import { FaInstagram } from "react-icons/fa";

const InstaImages = [
  { image: "A5.webp", title: "Blue Checkered Shirt", link: "https://www.instagram.com/himanshu_anand_08/" },
  { image: "women@.webp", title: "womens Look 2", link: "https://www.instagram.com/himanshu_anand_08/" },
  { image: "women@1.webp", title: "womens Look 3", link: "https://www.instagram.com/himanshu_anand_08/" },
  { image: "watches.webp", title: "watches Look 4", link: "https://www.instagram.com/himanshu_anand_08/" },
  { image: "wallet@.webp", title: "bags Look 5", link: "https://www.instagram.com/himanshu_anand_08/" },
];

const InstaImageSection = () => {
  const sliderRef = useRef(null);
  const speed = 1; // px per frame

  // Train-style continuous auto sliding
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let reqId;
    const animate = () => {
      slider.scrollLeft += speed;
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0; // infinite loop
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
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-2">
            Instagram Gallery📸
          </h2>
          <p className="text-base text-gray-700 italic">
            Swipe-worthy looks that speak your vibe.
          </p>
        </div>

        {/* Buttons */}
        <button
          onClick={scrollLeft}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black"
        >
          ◀
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black"
        >
          ▶
        </button>

        {/* Slider Row */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-hidden scrollbar-hide"
        >
          {InstaImages.concat(InstaImages).map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-64 h-64 flex-shrink-0 rounded-xl overflow-hidden group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[140%] object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <FaInstagram className="text-white text-3xl mb-2" />
                <span className="text-white font-medium">{item.title}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstaImageSection;
