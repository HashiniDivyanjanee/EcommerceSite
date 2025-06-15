import React, { useState } from "react";
import { FiUser, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="bg-[#3e5c4a] text-white px-6 lg:px-20 py-4 shadow flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold">Liyange Enginering</div>
      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-8 text-sm font-medium">
        <a href="#" className="hover:text-yellow-400">
          Home
        </a>
        <a href="#" className="hover:text-yellow-400">
          Shop
        </a>
        <a href="#" className="hover:text-yellow-400">
          About Us
        </a>
        <a href="#" className="hover:text-yellow-400">
          Service
        </a>
        <a href="#" className="hover:text-yellow-400">
          Contact Us
        </a>
      </nav>

      {/* Icon & Mobile Menu Toggle */}
      <div className="flex items-center gap-4 text-xl md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <div className="hidden md:flex items-center gap-10 text-xl">
        <FiUser className="cursor-pointer hover:text-yellow-400" />
        <FiShoppingCart className="cursor-pointer hover:text-yellow-400" />
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[72px] left-0 w-full bg-[#3e5c4a] text-center py-4 md:hidden z-50">
          <nav className="flex flex-col gap-4 text-base font-medium">
            <a href="#" className="hover:text-yellow-400">
              Home
            </a>
            <a href="#" className="hover:text-yellow-400">
              Shop
            </a>
            <a href="#" className="hover:text-yellow-400">
              About Us
            </a>
            <a href="#" className="hover:text-yellow-400">
              Service
            </a>
            <a href="#" className="hover:text-yellow-400">
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;
