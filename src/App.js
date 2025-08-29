import React from "react";

import Header from "./components/Header";
import Combo from "./components/Combo";
import Trust from "./components/Trust";
import MostWanted from "./components/MostWanted";
import BackToCollege from "./components/BackToCollege";
import Coupon from "./components/Coupon";
import Testimonials from "./components/Testimonials";

import NewArrival from "./components/NewArrival"; // ✅ Corrected spelling
import Footer from "./components/Footer";
import ProductVideo from "./components/ProductVideo";
import "./App.css";
import MenCategories from "./components/MenCategories";
import WomenCategories from "./components/WomenCategories";
import Watches from "./components/watches";
import Wallet from "./components/Wallet";
import Glasses from "./components/Glasses";

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Header />
      <ProductVideo />
      <MenCategories/>
      <WomenCategories />
      <Watches/>
      <Wallet/>
      <Glasses/>
      <Combo />
      <MostWanted />
      <BackToCollege />
      <Trust />
      <Coupon />
      <Testimonials />
      <NewArrival />   {/* ✅ Corrected spelling */}
      <Footer />

      {/* Page Content */}
      <main></main>
    </div>
  );
}

export default App;
