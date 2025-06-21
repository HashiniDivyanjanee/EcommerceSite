import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import Category from "./components/Category.jsx";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <HeroSection/>
        <Category/>
      </div>
    </>
  );
}

export default App;
