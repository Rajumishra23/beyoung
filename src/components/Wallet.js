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

  const scrollLeft = () => sliderRef.current.scrollBy({ left: -250, behavior: "smooth" });
  const scrollRight = () => sliderRef.current.scrollBy({ left: 250, behavior: "smooth" });

  return (
    <section className="bg-gray-300 py-12 px-4 sm:px-6 md:px-12 overflow-hidden">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-6 sm:mb-8">
        Wallets That Speak Style
      </h2>

      <div className="relative max-w-6xl mx-auto flex items-center">
        {/* Left Button */}
        <button
          onClick={scrollLeft}
          className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md absolute -left-3 lg:-left-5 z-10 hover:bg-gray-100 transition"
        >
          ◀
        </button>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide scroll-smooth flex-1"
        >
          {wallets.map((wallet, index) => (
            <div
              key={index}
              className="min-w-[180px] sm:min-w-[200px] md:min-w-[220px] bg-white rounded-md overflow-hidden shadow hover:shadow-lg transition flex-shrink-0"
            >
              <img
                src={wallet.image}
                alt={wallet.name}
                className="w-full h-[220px] sm:h-[250px] md:h-[300px] object-cover"
              />
              <div className="p-3 border-t text-center">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900">{wallet.name}</h3>
                <p className="text-xs sm:text-sm text-gray-500">{wallet.tag}</p>
                <div className="mt-2 flex items-center justify-center gap-2">
                  <span className="text-base sm:text-lg font-bold text-gray-900">{wallet.price}</span>
                  <span className="text-xs sm:text-sm font-semibold text-red-500">{wallet.discount}</span>
                </div>
                <div className="mt-1 text-xs sm:text-sm text-gray-600">
                  ⭐ {wallet.rating} | {wallet.reviews} reviews
                </div>
              </div>
            </div>
          ))}
        </div>

      {/* Left Button */}
<button
  onClick={scrollLeft}
  className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md absolute -left-3 lg:-left-5 z-10 hover:bg-gray-100 transition"
>
  ◀
</button>

{/* Right Button */}
<button
  onClick={scrollRight}
  className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md absolute -right-3 lg:-right-5 z-10 hover:bg-gray-100 transition"
>
  ▶
</button>

      </div>
    </section>
  );
}
