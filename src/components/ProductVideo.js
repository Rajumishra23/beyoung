import React from "react";

const Productdata = [
  { image: "s1.webp", title: "Look 1" },
  { image: "s2.webp", title: "Look 2" },
  { image: "s3.webp", title: "Look 3" },
  { image: "s4.webp", title: "Look 4" },
  { image: "wallet3.webp", title: "Look 5" },
  { image: "shirt1.webp", title: "Look 6" },
  { image: "watches1.webp", title: "Look 7" },
  { image: "glasses2.webp", title: "Look 10" },
];

const ProductGallery = () => {
  return (
    <section
      className="py-20 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('gallery-bg.webp')`, // Replace with your cloth/watch texture
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

        {/* Infinite Scrolling Container */}
        <div className="overflow-hidden">
          <div className="flex gap-8 animate-scroll">
            {Productdata.concat(Productdata).map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center shrink-0 cursor-pointer transition-transform hover:scale-105"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <div className="rounded-xl overflow-hidden border border-gray-300 hover:border-[#1e3a8a] transition">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-60 object-contain"
                  />
                </div>
                <p className="mt-3 text-sm font-semibold text-[#1e3a8a] uppercase whitespace-nowrap">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;