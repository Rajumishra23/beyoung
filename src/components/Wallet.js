import React, { useRef } from "react";

const wallets = [
  { name: "RFID Bifold Wallet", image: "wallet.webp", tag: "Tech-Savvy" },
  { name: "Slim Leather Wallet", image: "wallet1.webp", tag: "Minimalist" },
  { name: "Trifold ID Wallet", image: "wallet2.webp", tag: "Professional" },
  { name: "Vintage Handmade Wallet", image: "wallet3.webp", tag: "Heritage" },
  { name: "Vegan Leather Wallet", image: "wallet4.webp", tag: "Eco-Friendly" },
];

export default function WalletSection() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
        Wallets That Speak Style
      </h2>

      <div className="relative max-w-6xl mx-auto">
        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth animate-scroll"
        >
          {wallets.concat(wallets).map((wallet, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow hover:shadow-lg transition group min-w-[250px] max-w-[250px]"
            >
              <img
                src={wallet.image}
                alt={wallet.name}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center p-3">
                <h3 className="text-lg font-semibold">{wallet.name}</h3>
                <p className="text-sm opacity-80">{wallet.tag}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Left Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black"
        >
          ◀
        </button>

        {/* Right Button */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black"
        >
          ▶
        </button>
      </div>
    </section>
  );
}
