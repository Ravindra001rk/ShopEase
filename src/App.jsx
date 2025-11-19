import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import PlaceOrder from "./Pages/PlaceOrder";
import Collection from "./Pages/Collection";
import Product from "./Pages/Product";
import NavBar from "./NavBar/NavBar";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Kids from "./Pages/Kids";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import TopWear from "./CatPages/TopWear";
import Bottom from "./CatPages/Bottom";
import Footwear from "./CatPages/Footwear";
import Casual from "./CatPages/Casual";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import Favourite from "./Pages/Favourite";

const App = () => {
  return (
    <div className="inter md:px-25 px-5 pt-28  bg-[#eff3ed]">
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/collection/men" element={<Men />} />
        <Route path="/collection/women" element={<Women />} />
        <Route path="/collection/kids" element={<Kids />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:ProductId" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/collection/topwear" element={<TopWear />} />
        <Route path="/collection/bottom" element={<Bottom />} />
        <Route path="/collection/footwear" element={<Footwear />} />
        <Route path="/collection/casual" element={<Casual />} />
      </Routes>
      <hr className="text-[#babcbe]" />
      <Footer />
    </div>
  );
};

export default App;
