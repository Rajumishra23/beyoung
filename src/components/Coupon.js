import React from "react";

export default function CouponCorner() {
  const coupons = [
    {
      logo: "50.webp",
      amount: "₹50",
      platform: "Freecharge UPI",
      condition: "Minimum shopping of ₹999",
      bg: "bg-orange-500 ",
    },
    {
      logo: "300.webp",
      amount: "₹300",
      platform: "Snapmint",
      condition: "Cashback on Snapmint",
      bg: "bg-blue-600",
    },
    {
      logo: "200.webp",
      amount: "₹200",
      platform: "Simpl Pay Later",
      condition: "On first transaction",
      bg: "bg-indigo-600",
    },
  ];

  return (
    <section className="bg-gray py-10 px-4 sm:px-6">
      <h2 className="text-black text-xl font-bold mb-6">🎁 SPECIAL COUPON CORNER</h2>
      <div className="flex gap-2 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden scrollbar-hide">
        {coupons.map((item, index) => (
          <div
            key={index}
            className={`min-w-[280px] sm:min-w-[320px] rounded-xl text-white ${item.bg} p-5 flex items-center gap-4 shadow-md`}
          >
            <img src={item.logo} alt={item.platform} className="w-120 h-200 object-contain" />
            <div>
              <p className="text-sm">Get Cashback Up To</p>
              <h3 className="text-2xl font-bold">{item.amount}</h3>
              <p className="text-xs mt-1">{item.condition}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}