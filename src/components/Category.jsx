import React from "react";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { FaArrowRightArrowLeft, FaFilter } from "react-icons/fa6";
const Category = () => {
  return (
    <div>
      <span className=" border-l-4 border-blue-500 text-blue-500 px-3 font-bold hidden md:block ">
        Categories
      </span>
      <button className="filter-open  flex justify-start items-center text-gray-800 text-lg px-3 md:px-0 mt-3 pb-2 border-b-[1px] border-gray-300 md:border-none md:w-full cursor-default ">
        <FaFilter className="text-orange-500 md:hidden" />{" "}
        <span className=" mx-2 md:hidden">Filters</span>
        <div className="filter absolute md:relative left-[-100%] md:left-0 top-[-3.5%] md:top-0 flex-col px-5 py-3 flex justify-start items-start z-10 bg-white duration-500  w-[200px] h-full md:bg-gray-100 md:w-full md:z-0 md:rounded-lg text-[16px]">
          <button className="filter-close text-xl m-3 md:hidden">
            <GrClose />
          </button>
          <Link className="my-2 flex justify-between items-center w-full hover:text-blue-500 duration-300">
            <span className="text-start">Smart Interactive Whiteboard</span> <span>(0)</span>{" "}
          </Link>
          <Link className="my-2 flex justify-between items-center w-full hover:text-blue-500 duration-300">
            <span className="text-start">LCD Video Wall Display</span> <span>(0)</span>{" "}
          </Link>
          <Link className="my-2 flex justify-between items-center w-full hover:text-blue-500 duration-300">
            <span className="text-start">Indoor Digital Signage Displays</span> <span>(0)</span>{" "}
          </Link>
          <Link className="my-2 flex justify-between items-center w-full hover:text-blue-500 duration-300">
            <span className="text-start">LCD Writing Board</span> <span>(0)</span>{" "}
          </Link>
          <Link className="my-2 flex justify-between items-center w-full hover:text-blue-500 duration-300">
            <span className="text-start">Stretched Bar LCD Display</span> <span>(0)</span>{" "}
          </Link>
        </div>
      </button>
    </div>
  );
};

export default Category;
