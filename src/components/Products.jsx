import React from "react";
import { useState } from "react";
import axios from "axios";

import ProductCard from "./ProductCard";

import Category from "./Category";
import Contacts from "./Contacts";
import InputMobile from "./InputMobile";
import Paginate from "./Paginate";
const Products = () => {
  return (
    <div className=" relative flex flex-col md:grid grid-cols-4 md:mt-[80px] md:mx-[150px]">
      <div className=" md:col-span-1 md:mr-10">
        <Category />
        <div className="my-3 w-full sticky top-[64px] hidden md:inline">
          <Contacts />
        </div>
      </div>
      <div className="grid grid-cols-2 md:col-span-3 md:grid-cols-3  mb-3">
        <div className="col-span-3 grid grid-cols-2 md:grid-cols-3 gap-3">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div className="hidden md:block col-span-2 md:col-span-3">
          <Paginate />
        </div>
      </div>

      <div className="md:hidden">
        <InputMobile />
      </div>
    </div>
  );
};

export default Products;
