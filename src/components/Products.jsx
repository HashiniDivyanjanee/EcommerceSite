import React from "react";
import { products } from "./data/data.js";
import { FaStar, FaHeart, FaShoppingCart } from "react-icons/fa";
const Products = () => {
  return (
    <>
      <div className="bg-white px-10 py-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">BEST SELLING PRODUCTS</h2>
          <button className="bg-[#3e5c4a] text-white px-4 py-2 rounded-lg hover:bg-[#457257]">
            View All
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md border relative group transition:"
            >
              {/* Image */}
              <img
                src={item.image}
                alt=""
                className="w-full h-48 object-contain mx-auto"
              />

              {/* Name */}
              <h3 className="text-center mt-4 font-medium text-sm">
                {item.name}
              </h3>

              {/* Rating */}
              <div className="flex justify-center items-center gap-1 mt-2 text-yellow-500 text-sm">
                {Array(item.rating)
                  .fill()
                  .map((_, i) => (
                    <FaStar key={i} />
                  ))}
                <span className="text-gray-600 ml-1">({item.reviews})</span>
              </div>

              {/* Price */}
              <div className="flex justify-center items-center gap-2 mt-2">
                <span className="line-through text-gray-400 text-sm">
                  Rs. {item.oldPrice.toFixed(2)}
                </span>
                <span className="text-[#3e5c4a]">
                  Rs. {item.newPrice.toFixed(2)}
                </span>
                <span className="bg-gray-100 px-2 py-0.5 border rounded text-xs text-gray-500">
                  {item.discount}
                </span>
              </div>

              {/* Hover Action Section */}
              <div className="absolute left-0 bottom-0 w-full bg-white px-4 py-3 rounded-b-xl border-t opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                <div className="flex items-center justify-between">
                  <input
                    type="number"
                    defaultValue={1}
                    className="w-12 border rounded px-2 py-1 text-center text-sm"
                  />
                 <button className="flex items-center gap-2 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 text-sm">
                  <FaShoppingCart className="text-sm" />
                  Add to Cart
                </button>
                <button className="text-gray-500 hover:text-red-500"><FaHeart /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
