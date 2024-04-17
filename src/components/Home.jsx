import React from "react";
import Slider from "./Slider";
import ProductCard from "./ProductCard";
import Export from "./Export";
import Aboutus from "./Aboutus";
import Input from "./Input";
import Learnmore from "./Learnmore";
import InputMobile from "./InputMobile";

const Home = () => {
  return (
    <>
      <div className="  ">
       <div className="md:px-[150px]">
       <Slider/>
       </div>
        <span className="flex justify-center items-center text-[20px] border-b-[4px] border-black font-bold my-12 md:text-[40px]">Recommned</span>
        
        <div className="grid md:grid-cols-4 grid-cols-2 gap-1 md:gap-3 md:px-[150px]">
          <div><ProductCard/></div>
          <div><ProductCard/></div>
          <div><ProductCard/></div>
          <div><ProductCard/></div>
          <div><ProductCard/></div>
          <div><ProductCard/></div>
          <div><ProductCard/></div>
          <div><ProductCard/></div>
          <div><ProductCard/></div>
          <div><ProductCard/></div>
          <div><ProductCard/></div>
          <div><ProductCard/></div>
        </div>
        <div className="my-12 hidden md:block">
          <Export/>
        </div>
        <div className="md:px-[150px]">
          <Aboutus/>
        </div>
        <div className="md:px-[150px] md:block hidden">
          <Input/>
        </div>
        <div className="hidden md:block">
          <Learnmore/>
        </div>
        <div className="md:hidden" >
          <InputMobile/>
        </div>
        
        
       
      </div>
    </>
  );
};

export default Home;
