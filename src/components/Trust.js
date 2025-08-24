import React from "react";

export default function TrustHighlights() {
  const highlights = [
  {
    image: "global.webp", // yaha apni image path de do
    title: "Easy Returns",
    subtitle: "and Refunds",
  },
  {
    image: "global1.webp",
    title: "Global Fashion",
    subtitle: "Made in India",
  },
  {
    image: "global2.webp",
    title: "Trusted by",
    subtitle: "50 Lakh+ Customers",
  },
];


  return (
    <section className="bg-white py-5 px-5">
     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
  {highlights.map((item, index) => (
    <div key={index} className="p-6 bg-white shadow-md rounded-lg">
      {item.image && (
        <img
          src={item.image}
          alt={item.title}
          className="h-100 w-120 mx-auto mb-4 object-contain"
        />
      )}
      <h3 className="text-lg font-bold">{item.title}</h3>
      <p className="text-gray-600">{item.subtitle}</p>
    </div>
  ))}
</div>

    </section>
  );
}