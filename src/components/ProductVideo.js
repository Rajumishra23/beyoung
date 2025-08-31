import React, { useRef, useEffect } from "react";

const Productdata = [
  { image: "s1.webp",  },
  { image: "s2.webp", },
  { image: "s3.webp", },
  { image: "s4.webp",  },
  { image: "wallet3.webp",  },
  { image: "shirt1.webp",  },
  { image: "watches1.webp",  },
  { image: "glasses2.webp",  },
];

const ProductGallery = () => {
  const scrollRef = useRef(null);
  const speed = 2; // px per frame

  // Train-style continuous auto sliding
  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    let reqId;
    const animate = () => {
      slider.scrollLeft += speed;
      // Reset scroll for infinite effect
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      }
      reqId = requestAnimationFrame(animate);
    };

    reqId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(reqId);
  }, []);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section
      className="py-20 relative bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url('gallery-bg.webp')` }}
    >
      {/* Overlay */}
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

        {/* Scroll Buttons */}
        <button
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black text-white px-3 py-2 rounded-full z-20 hover:bg-gray-800"
        >
          ◀
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white px-3 py-2 rounded-full z-20 hover:bg-gray-800"
        >
          ▶
        </button>

        {/* Gallery */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden scrollbar-hide pb-2"
        >
          {Productdata.concat(Productdata).map((item, idx) => (
            <div
              key={idx}
              className="relative w-56 h-64 flex-shrink-0 rounded-xl overflow-hidden cursor-pointer group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-1 text-sm font-medium">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
