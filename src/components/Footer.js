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
    <footer className="bg-black text-white px-6 py-12 relative">
      {/* Newsletter Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-12">
        <p className="text-center md:text-left mb-4 md:mb-0 md:w-2/4">
          Xclusive coupons, extra savings, and tons of EVERYDAY deals delivered
          straight to your inbox.
        </p>
        <div className="flex w-full md:w-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="px-4 py-2 rounded-l-md text-black w-full md:w-64 focus:outline-none"
          />
          <button className="bg-yellow-400 text-black font-bold px-4 py-2 rounded-r-md hover:bg-yellow-300 transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div>
          <h4 className="font-bold mb-4">SUPPORT</h4>
          <ul className="space-y-2 text-sm">
            <li>Track Order</li>
            <li>Returns & Exchange Policy</li>
            <li>FAQ's</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Shipping Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">COMPANY</h4>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Collaboration</li>
            <li>Career</li>
            <li>Media</li>
            <li>Beyoungistan</li>
            <li>Beyoung Blog</li>
            <li>Sitemap</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">STORES NEAR ME</h4>
          <ul className="space-y-2 text-sm">
            <li>Udaipur</li>
            <li>Lucknow</li>
            <li>Ahmedabad</li>
            <li>Kota</li>
            <li>Mirzapur</li>
            <li>Bhilwara</li>
            <li>More</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">LOCATION</h4>
          <p className="text-sm space-y-1">
            support@beyoung.in <br />
            Eklingpura Chouraha, Ahmedabad Main Road <br />
            (NH 8 - Near Mahadev Hotel) Udaipur, India-313002
          </p>
        </div>
      </div>

      {/* Additional Footer Section */}
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left: Why Choose Us */}
          <div className="space-y-2">
            <h4 className="font-bold text-white">WHY CHOOSE US?</h4>
            <h4 className="font-bold text-white">POPULAR CATEGORIES</h4>
          </div>

          {/* Center: Payment Icons */}
          <div>
            <h4 className="text-white font-bold text-center mb-4 text-sm">
              100% SECURE PAYMENT
            </h4>
            <div className=" ">
                <div className=" ">
              <img src="patym.webp"/>
              
            </div>
              
            </div>
          </div>

          {/* Right: Socials */}
          <div className="flex flex-col items-end justify-center">
            <p className="text-sm mb-3">Follow Us To See Our Cooler Side</p>
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
        <p className="text-center text-sm text-gray-500">
          Copyright © 2025 Bigdesign Software technologies. All rights reserved.
        </p>
      </div>

     
    </footer>
  );
}
