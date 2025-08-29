// WalletSection.jsx
import React from "react";

const wallets = [
  {
    name: "RFID Bifold Wallet",
    image: "wallet.webp",
    tag: "Tech-Savvy",
  },
  {
    name: "Slim Leather Wallet",
    image: "wallet1.webp",
    tag: "Minimalist",
  },
  {
    name: "Trifold ID Wallet",
    image: "wallet2.webp",
    tag: "Professional",
  },
  {
    name: "Vintage Handmade Wallet",
    image: "wallet3.webp",
    tag: "Heritage",
  },
  {
    name: "Vegan Leather Wallet",
    image: "wallet4.webp",
    tag: "Eco-Friendly",
  },
];

export default function WalletSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <h2 className="text-3xl font-bold  text-center text-gray-900 mb-4">
       Wallets That Speak Style
      </h2>
      <br></br>
      

      {/* Infinite Auto Slider */}
      <div className="overflow-hidden relative max-w-6xl mx-auto">
        <div className="flex gap-6 animate-scroll">
          {wallets.concat(wallets).map((wallet, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow hover:shadow-lg transition group min-w-[250px] max-w-[250px]"
            >
              {/* Wallet Image */}
              <img
                src={wallet.image}
                alt={wallet.name}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Overlay for text */}
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center p-3">
                <h3 className="text-lg font-semibold">{wallet.name}</h3>
                <p className="text-sm opacity-80">{wallet.tag}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
