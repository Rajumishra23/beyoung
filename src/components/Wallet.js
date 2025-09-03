import React, { useRef } from "react";

const wallets = [
  { name: "RFID Bifold Wallet", image: "wallet.webp", tag: "Tech-Savvy", price: "₹579", rating: 4.3, reviews: 188, discount: "20% OFF" },
  { name: "Slim Leather Wallet", image: "wallet1.webp", tag: "Minimalist", price: "₹599", rating: 4.3, reviews: 128, discount: "15% OFF" },
  { name: "Trifold ID Wallet", image: "wallet2.webp", tag: "Professional", price: "₹599", rating: 4.4, reviews: 38, discount: "10% OFF" },
  { name: "Vintage Handmade Wallet", image: "wallet3.webp", tag: "Heritage", price: "₹1499", rating: 4.5, reviews: 379, discount: "25% OFF" },
  { name: "Vegan Leather Wallet", image: "wallet4.webp", tag: "Eco-Friendly", price: "₹1077", rating: 4.3, reviews: 28, discount: "30% OFF" },
];

export default function WalletSection() {
  const sliderRef = useRef(null);

  const getScrollAmount = () => {
    if (window.innerWidth < 640) return 220; // Mobile
    if (window.innerWidth < 1024) return 260; // Tablet
    return 300; // Desktop
  };

  const scrollLeft = () =>
    sliderRef.current.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });

  const scrollRight = () =>
    sliderRef.current.scrollBy({ left: getScrollAmount(), behavior: "smooth" });

  return (
    <section className="bg-gray-300 py-12 px-4 sm:px-6 md:px-12 overflow-hidden">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-6 sm:mb-8">
        Wallets That Speak Style
      </h2>

      <div className="relative w-full max-w-7xl mx-auto flex items-center">
        {/* Left Button */}
        <button
          onClick={scrollLeft}
          className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md absolute -left-4 lg:-left-6 z-10 hover:bg-gray-100 transition"
        >
          ◀
        </button>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto scrollbar-hide scroll-smooth flex-1"
        >
          {wallets.map((wallet, index) => (
            <div
              key={index}
              className="min-w-[180px] sm:min-w-[220px] md:min-w-[260px] lg:min-w-[300px] 
                         bg-white rounded-lg overflow-hidden shadow hover:shadow-lg 
                         transition flex-shrink-0"
            >
              <img
                src={wallet.image}
                alt={wallet.name}
                className="w-full h-[200px] sm:h-[260px] md:h-[300px] lg:h-[340px] object-cover"
              />
              {/* Compact Text Box */}
              <div className="p-2 sm:p-3 border-t text-center">
                <h3 className="text-xs sm:text-sm font-semibold text-gray-900">
                  {wallet.name}
                </h3>
                <p className="text-[10px] sm:text-xs text-gray-500">{wallet.tag}</p>
                <div className="mt-1 flex items-center justify-center gap-2">
                  <span className="text-sm sm:text-base font-bold text-gray-900">
                    {wallet.price}
                  </span>
                  <span className="text-[10px] sm:text-xs font-semibold text-red-500">
                    {wallet.discount}
                  </span>
                </div>
                <div className="mt-0.5 text-[10px] sm:text-xs text-gray-600">
                  ⭐ {wallet.rating} | {wallet.reviews} reviews
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={scrollRight}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md absolute -right-4 lg:-right-6 z-10 hover:bg-gray-100 transition"
        >
          ▶
        </button>
      </div>
    </section>
  );
}
