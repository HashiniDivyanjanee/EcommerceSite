import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";

const NavBar = () => {
  return (
    <header className="bg-white w-full shadow-md">
      <div className="max-w-7x1 mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 text-xl font-bold text-black">
          <span className="text-2xl">🌿</span>Liyanage Enginering
        </div>

        {/* Main Nav */}
        <div className="hidden md:flex items-center gap-6">
          {/* Search */}
          <div className="flex items-center border rounded-md overflow-hidden">
            <select className="px-2 py-1 border-r text-sm bg-white">
              <option>Machine</option>
              <option>Wheel</option>
            </select>
            <input
              type="text"
              placeholder="Search..."
              className="px-2 py-1 w-64 outline-none"
            />
            <button className="bg-gray-100 px-3">🔍</button>
          </div>
          {/* Icons + Menu */}
          <nav className="flex items-center gap-6 text-gray-600">
            <a href="#">HOME</a>
            <a href="#">SHOP</a>
            <a href="#">PAGES</a>
            <a href="#">CONTACT</a>
            <MdOutlineShoppingCart />
            <IoPersonCircleOutline />
          </nav>
        </div>
      </div>

      {/* Mobile nav */}

      {open && (
        <div className="md:hidden px-4 pb-4 space-y-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-2 border rounded-md"
          />
          <div className="flex gap-4">
            <a href="#">HOME</a>
            <a href="#">SHOP</a>
            <a href="#">PAGES</a>
            <a href="#">CONTACT</a>
            <MdOutlineShoppingCart />
            <IoPersonCircleOutline />
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
