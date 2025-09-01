import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10">
      {/* Title Section */}
      <div className="text-center md:text-left mb-2">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10 text-center sm:text-left">
        <div>
          <h4 className="font-bold mb-4">SHOP</h4>
          <ul className="space-y-2 text-sm">
            <li>Men's Clothing</li>
            <li>Women's Clothing</li>
            <li>Watches</li>
            <li>Bags</li>
            <li>Wallets</li>
            <li>Glasses</li>
            <li>Accessories</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">CUSTOMER CARE</h4>
          <ul className="space-y-2 text-sm">
            <li>Track Order</li>
            <li>Returns & Exchanges</li>
            <li>Shipping Info</li>
            <li>FAQs</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">COMPANY</h4>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Affiliate Program</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">LEGAL</h4>
          <ul className="space-y-2 text-sm">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Accessibility</li>
            <li>Sitemap</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-8 text-center md:text-left">
        {/* Why Choose Us */}
        <div className="space-y-2">
          <h4 className="font-bold text-white">WHY SHOP WITH US?</h4>
          <p className="text-sm text-gray-400">
            Premium quality, fast delivery, and 24/7 support. Your style, our mission.
          </p>
        </div>

        {/* Payment Icons */}
        <div className="text-center">
          <h4 className="font-bold text-sm mb-2">100% SECURE PAYMENT</h4>
          <img src="patym.webp" alt="Payment Methods" className="mx-auto h-8" />
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-center md:items-end">
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

      {/* Copyright */}
      <p className="text-center text-xs sm:text-sm text-gray-500">
        © 2025 Bigdesign Software technologies. All rights reserved.
      </p>
    </footer>
  );
}
