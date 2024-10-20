import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import About from "./pages/about/about.jsx";
import Shop from "./pages/shop/shop.jsx";
import ShopSingleLayout from "./components/shop-single-layout/shop-single-layout.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="shop" element={<Shop />} />
      <Route path="shop-single/:id" element={<ShopSingleLayout/>} />
    </Routes>
  );
}

export default App;
