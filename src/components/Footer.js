import React, { useState } from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-black text-white px-6 py-10">
      {/* Title Section */}
      <div className="text-center md:text-left mb-6">
        <h2 className="text-2xl font-bold tracking-wide">DEMPSEY</h2>
      </div>

      {/* Newsletter */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4">
        <p className="text-center md:text-left text-sm md:text-base md:w-2/4">
          Get exclusive deals, style drops & insider access — straight to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row w-full md:w-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-t-md sm:rounded-l-md sm:rounded-tr-none text-black w-full md:w-64 focus:outline-none"
          />
          <button className="bg-yellow-400 text-black font-bold px-4 py-2 rounded-b-md sm:rounded-r-md sm:rounded-bl-none hover:bg-yellow-300 transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        {/* SHOP */}
        <div>
          <button
            className="md:hidden w-full flex justify-between items-center py-2 font-bold border-b border-gray-700"
            onClick={() => toggleSection("SHOP")}
          >
            SHOP <span>{openSection === "SHOP" ? "−" : "+"}</span>
          </button>
          <h4 className="hidden md:block font-bold mb-4">SHOP</h4>
          <ul className={`space-y-2 text-sm ${openSection === "SHOP" ? "block" : "hidden"} md:block`}>
            <li>Men's Clothing</li>
            <li>Women's Clothing</li>
            <li>Watches</li>
            <li>Bags</li>
            <li>Wallets</li>
            <li>Glasses</li>
            <li>Accessories</li>
          </ul>
        </div>

        {/* CUSTOMER CARE */}
        <div>
          <button
            className="md:hidden w-full flex justify-between items-center py-2 font-bold border-b border-gray-700"
            onClick={() => toggleSection("CUSTOMER")}
          >
            CUSTOMER CARE <span>{openSection === "CUSTOMER" ? "−" : "+"}</span>
          </button>
          <h4 className="hidden md:block font-bold mb-4">CUSTOMER CARE</h4>
          <ul className={`space-y-2 text-sm ${openSection === "CUSTOMER" ? "block" : "hidden"} md:block`}>
            <li>Track Order</li>
            <li>Returns & Exchanges</li>
            <li>Shipping Info</li>
            <li>FAQs</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <button
            className="md:hidden w-full flex justify-between items-center py-2 font-bold border-b border-gray-700"
            onClick={() => toggleSection("COMPANY")}
          >
            COMPANY <span>{openSection === "COMPANY" ? "−" : "+"}</span>
          </button>
          <h4 className="hidden md:block font-bold mb-4">COMPANY</h4>
          <ul className={`space-y-2 text-sm ${openSection === "COMPANY" ? "block" : "hidden"} md:block`}>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Affiliate Program</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* LEGAL */}
        <div>
          <button
            className="md:hidden w-full flex justify-between items-center py-2 font-bold border-b border-gray-700"
            onClick={() => toggleSection("LEGAL")}
          >
            LEGAL <span>{openSection === "LEGAL" ? "−" : "+"}</span>
          </button>
          <h4 className="hidden md:block font-bold mb-4">LEGAL</h4>
          <ul className={`space-y-2 text-sm ${openSection === "LEGAL" ? "block" : "hidden"} md:block`}>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Accessibility</li>
            <li>Sitemap</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-8 text-center md:text-left">
        {/* WHY CHOOSE US */}
        <div className="border-t border-gray-700 pt-6">
          <button
            className="w-full flex justify-between items-center py-2 font-bold text-white"
            onClick={() => toggleSection("WHY")}
          >
            <span className="text-lg">WHY CHOOSE US?</span>
            <span className="text-xl">{openSection === "WHY" ? "−" : "↓"}</span>
          </button>
          <div
            className={`mt-2 space-y-2 text-sm text-gray-400 ${
              openSection === "WHY" ? "block" : "hidden"
            }`}
          >
            <h1>
              Dempsey - An Affordable Online Shopping Site in India
              Online shopping was rapidly gaining popularity, yet affordable and trendy options were limited...
            </h1>
            <p>✔ Premium quality materials</p>
            <p>✔ Fast delivery across India</p>
            <p>✔ 24/7 customer support</p>
            <p>✔ Trusted by 10K+ customers</p>
            <p>✔ Built for creators, students & style rebels</p>
            <h1>Read More +</h1>
          </div>
        </div>

        {/* LOCATION */}
        <div className="border-t border-gray-700 pt-6">
          <button
            className="w-full flex justify-between items-center py-2 font-bold text-white"
            onClick={() => toggleSection("LOCATION")}
          >
            <span className="text-lg">LOCATION</span>
            <span className="text-xl">{openSection === "LOCATION" ? "−" : "↓"}</span>
          </button>
          <div
            className={`mt-2 space-y-2 text-sm text-gray-400 ${
              openSection === "LOCATION" ? "block" : "hidden"
            }`}
          >
            <p>Bigdesign Studio HQ</p>
            <p>New Delhi, India</p>
            <p>Serving PAN India with fast delivery</p>
          </div>
        </div>

        {/* Payment + Social Icons */}
        <div className="flex flex-col items-center md:items-end pt-6 space-y-6">
          {/* Payment Icons */}
          <div className="text-center md:text-right">
            <h4 className="font-bold text-sm mb-2">100% SECURE PAYMENT</h4>
            <img src="patym.webp" alt="Payment Methods" className="mx-auto md:ml-auto h-8" />
          </div>

          {/* Social Icons */}
          <div>
            <p className="text-sm mb-3">Follow Us</p>
            <div className="flex gap-4 text-white text-xl">
              <FaInstagram />
              <FaLinkedin />
              <FaFacebook />
              <FaTwitter />
              <FaPinterest />
              <FaYoutube />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-xs sm:text-sm text-gray-500">
        © 2025 Bigdesign Software technologies. All rights reserved.
      </p>
    </footer>
  );
}