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

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Header />
      <Combo />
      <Trust />
      <MostWanted />
      <BackToCollege />
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
