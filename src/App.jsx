import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import Category from "./components/Category.jsx";
import Product from "./components/Products.jsx";
import Offer from "./components/Offers.jsx";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <HeroSection/>
        <Category/>
        <Product/>
        <Offer/>
      </div>
    </>
  );
}

export default App;
