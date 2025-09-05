import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const menuItems = {
  MEN: [
    { title: "TOPWEAR", links: ["T-Shirts", "Casual Shirts", "Formal Shirts", "Sweatshirts", "Jackets"] },
    { title: "BOTTEMWEAR", links: ["Jeans", "Casual Trousers", "Shorts", "Joggers"] },
    { title: "FOOTWEAR", links: ["Casual Shoes", "Sneakers", "Sports Shoes", "Formal Shoes"] },
  ],
  WOMEN: [
    { title: "INDIAN & FUSIAN WEAR", links: ["Kurtas & Suits", "Sarees", "Lehenga Cholis", "Dupattas"] },
    { title: "WESTERN WEAR", links: ["Dresses", "Tops", "T-Shirts", "Jeans", "Jackets"] },
    { title: "FOOTWARE", links: ["Flats", "Heels", "Boots", "Sports Shoes"] },
    {
      title: "LINGERIE & INNERWEAR",
      links: [
        "Bras", "Panties", "Shapewear", "Sleepwear", "Bridal Lingerie",
        "Thermals", "Maternity Lingerie", "Seamless Wear", "Activewear Bras",
      ],
    },
  ],
  WATCHES: [
    { title: "MEN'S WATCHES", links: ["Analog", "Digital", "Smartwatches"] },
    { title: "WOMEN'S WATCHES", links: ["Analog", "Smartwatches", "Fitness Bands"] },
    { title: "KID'S WATCHES", links: ["Analog", "Smartwatches", "Fitness Bands"] },
  ],
  ACCESSORIES: [{ links: ["Wallets", "Glasses", "Belts", "Bags"] }],
  GIFTHAMPERS: [{ links: ["Gift for couples", "Gift for her"] }],
};

export default function Header() {
  const sliderRef = useRef(null);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(null); // ✅ new state

  const placeholders = [
    "Search for shirts...", "Search for watches...", "Search for jeans...",
    "Search for kurtas...", "Search for smartwatches...", "Search for wallets...",
    "Search for belts...", "Search for bags...", "Search for bras...", "Search for panties...",
  ];

  // Rotating placeholders
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Auto sliding banner
  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;
    const slideInterval = setInterval(() => {
      if (slider) {
        scrollAmount += slider.offsetWidth;
        if (scrollAmount >= slider.scrollWidth) {
          scrollAmount = 0;
          slider.scrollTo({ left: 0, behavior: "auto" });
        } else {
          slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
        }
      }
    }, 3000);
    return () => clearInterval(slideInterval);
  }, []);

  // ✅ Toggle function (only one open at a time)
  const toggleMobileDropdown = (category) => {
    setOpenCategory((prev) => (prev === category ? null : category));
  };

  return (
    <>
      {/* PROMO BAR */}
      <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 text-white text-[11px] flex justify-between items-center px-4 py-2">
        <p className="truncate w-[70%] md:w-auto">
          Free Shipping Sitewide on Every Order, Don't Miss Out!!
        </p>

        {/* Desktop Search Bar */}
        <div className="hidden md:flex items-center gap-3 flex-1 max-w-xl mx-6">
          <div className="flex items-center bg-white text-black rounded-md flex-1 max-w-md border border-gray-400 shadow-sm">
            <input
              type="text"
              placeholder={placeholders[placeholderIndex]}
              className="w-full px-3 py-2 rounded-md outline-none placeholder-black placeholder-opacity-70 placeholder:font-semibold"
            />
            🔍
          </div>
        </div>

        {/* Desktop Blog + Auth */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#"
            className="bg-white text-pink-600 font-semibold text-sm px-4 py-2 rounded-md border border-pink-500 hover:bg-pink-600 hover:text-white transition"
          >
            Blog
          </a>
          <div className="space-x-1 md:space-x-2">
            <a href="#" className="hover:underline font-bold">LOG IN</a>
            <span>/</span>
            <a href="#" className="hover:underline font-bold">SIGNUP</a>
          </div>
        </div>
      </div>

      {/* HEADER NAV */}
      <header className="w-full sticky top-0 z-50 bg-white shadow">
        {/* Desktop Navbar */}
        <nav className="hidden md:flex h-16 w-full items-center justify-between px-12">
          {/* Logo */}
          <div className="text-3xl font-bold tracking-wide cursor-pointer flex items-center">
            DEMPSEY <span className="w-2 h-2 bg-black rounded-full ml-1"></span>
          </div>

          {/* Menu */}
          <ul className="flex gap-8 text-sm font-bold tracking-wide text-gray-800">
            {Object.keys(menuItems).map((category) => (
              <li key={category} className="group relative cursor-pointer hover:text-pink-600">
                {category}
                {/* WOMEN → Mega Dropdown */}
                {category === "WOMEN" ? (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:grid grid-cols-2 lg:grid-cols-4 gap-6 bg-white shadow-lg border mt-1 px-6 py-4 w-[700px] z-50">
                    {menuItems[category].map((section, idx) => (
                      <div key={idx} className="min-w-[150px]">
                        <h4 className="font-semibold text-black">{section.title}</h4>
                        <ul className="mt-1 space-y-1 text-sm">
                          {section.links.map((link, i) => (
                            <li key={i} className="text-black hover:text-pink-600 cursor-pointer font-normal">{link}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  /* Others → Simple dropdown */
                  <div className="absolute top-full left-0 hidden group-hover:flex flex-col bg-white shadow-lg border mt-1 w-56 z-50">
                    {menuItems[category].map((section, idx) => (
                      <div key={idx} className="p-3 border-b last:border-b-0">
                        <h4 className="font-semibold text-black">{section.title}</h4>
                        <ul className="mt-1 space-y-1 text-sm">
                          {section.links.map((link, i) => (
                            <li key={i} className="text-black hover:text-pink-600 cursor-pointer font-normal">{link}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
            {["NEW ARRIVALS", "COMBOS"].map((cat) => (
              <li key={cat} className="cursor-pointer hover:text-pink-600">{cat}</li>
            ))}
          </ul>

          {/* Desktop Icons */}
          <div className="flex items-center gap-6">
            <span className="flex flex-col items-center text-xs cursor-pointer hover:text-pink-600">👤 Profile</span>
            <span className="flex flex-col items-center text-xs cursor-pointer hover:text-pink-600">❤️ Wishlist</span>
            <span className="flex flex-col items-center text-xs cursor-pointer hover:text-pink-600 relative">
              🛒 Bag{" "}
              <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-[10px] px-1.5 rounded-full">2</span>
            </span>
          </div>
        </nav>

        {/* Mobile Navbar */}
        <nav className="md:hidden flex items-center justify-between px-4 py-3 relative">
          {/* Hamburger Left */}
          <button
            className="text-3xl font-bold absolute left-4 top-1/2 -translate-y-1/2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? "×" : "☰"}
          </button>

          {/* Logo Center */}
          <div className="mx-auto text-4xl font-bold cursor-pointer">DEMPSEY</div>

          {/* Cart Right */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <div className="relative">
              🛒
              <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold px-1.5 py-0.5 rounded-full">
                0
              </span>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow px-4 py-4 space-y-4">
            {/* Search */}
            <div className="flex items-center bg-gray-100 rounded-md border px-2">
              <input
                type="text"
                placeholder={placeholders[placeholderIndex]}
                className="w-full px-2 py-2 bg-transparent outline-none"
              />
              🔍
            </div>

            {/* Dropdown Categories */}
{Object.keys(menuItems).map((category) => (
  <div key={category}>
    <button
      className="w-full flex justify-between items-center text-black font-bold hover:text-pink-600"
      onClick={() => toggleMobileDropdown(category)}
    >
      {category} <span>{openCategory === category ? "−" : "+"}</span>
    </button>

    {openCategory === category && (
      <div
        className={`pl-4 mt-2 ${
          category === "WOMEN"
            ? "grid grid-cols-2 gap-4 max-h-64 overflow-y-auto pr-2"
            : "space-y-2"
        }`}
      >
        {menuItems[category].map((section, idx) => (
          <div key={idx}>
            {section.title && (
              <h4 className="font-semibold text-black">{section.title}</h4>
            )}
            <ul className="mt-1 space-y-1 text-sm">
              {section.links.map((link, i) => (
                <li
                  key={i}
                  className="text-black hover:text-pink-600 cursor-pointer font-normal"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    )}
  </div>
))}

            {/* Static Links */}
            {["NEW ARRIVALS", "COMBOS", "GIFT HAMPERS"].map((cat) => (
              <a key={cat} href="#" className="block text-gray-700 font-medium hover:text-pink-600">{cat}</a>
            ))}

            {/* Blog + Auth */}
            <a href="#" className="block bg-pink-600 text-white text-center py-2 rounded-md font-semibold">Blog</a>
            <div className="flex justify-center gap-2">
              <a href="#" className="hover:underline font-bold">LOG IN</a>
              <span>/</span>
              <a href="#" className="hover:underline font-bold">SIGNUP</a>
            </div>
          </div>
        )}
      </header>

      {/* Banner */}
      <section className="relative w-full overflow-hidden">
        <motion.div ref={sliderRef} className="flex w-full overflow-hidden">
          {[ 
            { src: "tatas.webp", subtitle: "New Arrivals", title: "Upgrade Your Style Today", btn: "Shop Now" },
            { src: "tatas2.webp", subtitle: "Limited Time", title: "Exclusive Deals Inside", btn: "Shop Now" },
            { src: "tatas3.webp", subtitle: "Fresh Trends", title: "Trendy Collections Now", btn: "Shop Now" }
          ].map((banner, i) => (
            <motion.div key={i} className="w-full flex-shrink-0 relative">
              <img
                src={banner.src}
                alt=""
                className="w-full h-[300px] sm:h-[280px] md:h-[400px] lg:h-[500px] object-cover"
              />
              {/* Mobile Overlay */}
              <div className="absolute left-5 md:hidden top-[70%] -translate-y-1/2 text-white space-y-2">
                <span className="bg-black/40 px-2 py-1 rounded text-sm">{banner.subtitle}</span>
                <h2 className="text-2xl font-semibold drop-shadow-lg">{banner.title}</h2>
                <button className="bg-white text-black px-4 py-2 rounded-full shadow-md font-semibold hover:bg-gray-100 transition">
                  {banner.btn} →
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
