import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import './app.css'
const App = () => {
  return (
    <BrowserRouter>
      <div className=" md:fixed top-0 z-20 left-0 right-0 bg-white"><Navbar/></div>
      <Home/>
      <Routes>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
