import React from "react";
import image1 from "../assets/Category/image1.png";
import image2 from "../assets/Category/image2.png";
import image3 from "../assets/Category/image3.png";

const categories = [
  { name: "Wood Mizer Machines", image: image2 },
  { name: "Bandsaw Machine", image: image1 },
  { name: "Grinding Machines", image: image3 },
  {
    name: "Blade Maintenance Machines",
    image: image3,
  },
  { name: "Spare Parts & Accessories", image: image2 },

];

const Category = () => {
  return (
    <div className="bg-white py-10 px-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-bold text-3xl">Category</h2>
        <button className="bg-[#3e5c4a] text-white px-4 py-2 rounded-lg hover:bg-[#457257] transition">
          View All
        </button>
      </div>

      <div className="flex justify-center flex-wrap gap-16">
        {categories.map((cat, idx) => (
          <div key={idx} className="flex flex-col items-center min-w-[160px]">
            <img
              src={cat.image}
              alt={cat.name}
               className="w-36 h-36 rounded-full object-cover border border-gray-300 shadow-sm"
            />
            <p className="text-center mt-2 text-sm font-medium">{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
