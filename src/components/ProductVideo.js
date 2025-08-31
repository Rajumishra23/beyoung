import React from "react";
import { FaInstagram } from "react-icons/fa";

// ✅ Updated Instagram link for all items
const Productdata = [
  { image: "s1.webp", title: "Look 1", link: "https://www.instagram.com/himanshu_anand_08/" },
  { image: "s2.webp", title: "Look 2", link: "https://www.instagram.com/himanshu_anand_08/" },
  { image: "s3.webp", title: "Look 3", link: "https://www.instagram.com/himanshu_anand_08/" },
  { image: "s4.webp", title: "Look 4", link: "https://www.instagram.com/himanshu_anand_08/" },
  { image: "wallet3.webp", title: "Look 5", link: "https://www.instagram.com/himanshu_anand_08/" },
  { image: "shirt1.webp", title: "Look 6", link: "https://www.instagram.com/himanshu_anand_08/" },
  { image: "watches1.webp", title: "Look 7", link: "https://www.instagram.com/himanshu_anand_08/" },
  { image: "glasses2.webp", title: "Look 10", link: "https://www.instagram.com/himanshu_anand_08/" },
];

const ProductGallery = () => {
  return (
    <section
      className="py-20 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('gallery-bg.webp')`,
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/80 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-2 animate-fade-in">
            One Look. One Legacy.
          </h2>
          <p className="text-base text-gray-700 italic animate-fade-in delay-200">
            From wallets to wonders — your style, your story.
          </p>
        </div>

        {/* 🔄 Auto Scrolling Container */}
        <div className="overflow-hidden">
          <div className="flex gap-6 animate-scroll">
            {Productdata.concat(Productdata).map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-56 h-64 flex-shrink-0 rounded-xl overflow-hidden cursor-pointer group"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
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
      </div>
    </section>
  );
};

export default ProductGallery;