import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import './app.css'
import Products from "./components/Products";
import Footer from "./components/Footer";
import ProductDetail from "./components/ProductDetail";
const App = () => {
  return (
    <BrowserRouter>
      <div className=" md:fixed top-0 z-20 left-0 right-0 bg-white"><Navbar/></div>
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<ProductDetail/>}/> 
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
