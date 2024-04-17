import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ProductGallery from "./ProductGallery";
import SliderSimilier from "./SliderSimilier";

const ProductDetail = () => {
  const [information, setInformation] = useState(true);
  const [describtion, setDescribtion] = useState(false);
  function handleinformation() {
    if (!information) {
      setInformation(true);
      setDescribtion(false);
    }
  }
  function handledescribtion() {
    if (!describtion) {
      setInformation(false);
      setDescribtion(true);
    }
  }

  return (
    <div className="md:mt-[80px] md:mx-[150px] mx-2 overflow-hidden ">
      <div className="md:grid grid-cols-2 md:shadow-lg flex flex-col justify-center ">
        <div className="order-2 md:order-2 w-full">
          <ProductGallery />
        </div>
        <div className="col-span-1 order-1 md:order-2 md:p-2">
          <h2 className="font-bold text-lg my-8 text-center">
            Interactive Smartboard A Grade Panel for and 50000 Hours Life Span
            with and Efficiency
          </h2>
          <table className="w-full flex flex-col justify-start">
            <tr className="my-3 hidden md:inline">
              <th>Product Details:</th>
            </tr>
            <tr className="flex gap-x-10 my-1 ">
              <th>Place of Origin:</th>
              <td>China</td>
            </tr>
            <tr className="flex gap-x-[57px] my-1">
              <th>Brand Name:</th>
              <td>JCVISION</td>
            </tr>
            <tr className="flex gap-x-[35px] my-1">
              <th>Model Number:</th>
              <td>JC T86K-IR</td>
            </tr>
          </table>
          <div className="w-[100%] md:grid grid-cols-2 justify-items-center my-8">
            <button className="rounded-3xl py-2 w-[100%] md:w-[90%] bg-blue-500 hover:bg-blue-600 duration-300 text-white">
              Get best price
            </button>
            <button className="rounded-3xl py-2 w-[90%] bg-orange-500 text-white hover:bg-orange-600 duration-300 hidden md:inline">
              Chat now
            </button>
          </div>
        </div>
      </div>
      <div className="my-8 md:shadow-lg p-2">
        <div className="md:my-6 my-3 md:mx-10 grid grid-cols-2 text-[12px] md:text-xl md:flex">
          <button
            className={`${
              information
                ? "text-blue-500 font-bold border-b-[3px]"
                : "text-black"
            } p-2 border-blue-500 md:mx-7`}
            onClick={handleinformation}
          >
            Detail Information
          </button>
          <button
            className={`${
              describtion
                ? "text-blue-500 font-bold border-b-[3px]"
                : "text-black"
            } p-2 border-blue-500 md:mx-7`}
            onClick={handledescribtion}
          >
            Product Description
          </button>
        </div>
        {information && (
          <table className=" grid grid-rows-3 border-[1px] border-gray-300 rounded-md text-[10px] md:text-lg md:mx-[75px] ">
            <tr className="grid grid-cols-4   py-2 bg-gray-100">
              <th>Applications:</th>
              <td>Classroom Teaching, Conference</td>
              <th>Ram And Rom:</th>
              <td>4+32G, 8+64G Optional</td>
            </tr>
            <tr className="grid grid-cols-4   py-2 ">
              <th>Function:</th>
              <td>Multifunctional, education</td>
              <th>Screen Size:</th>
              <td> 75 Inches</td>
            </tr>
            <tr className="grid grid-cols-4  py-2 bg-gray-100">
              <th>Panel Brand:</th>
              <td>A+ Grade Panel</td>
              <th>Life Span:</th>
              <td>50000 Hours</td>
            </tr>
          </table>
        )}
        {describtion && (
          <div className="">
            <h2 className="font-bold text-2xl my-2 md:mx-[75px]">Futuers:</h2>
            <ul className=" list-disc md:mx-[90px] mx-3 text-[12px] md:text-[16px]">
              <li>Product Name: Smart Interactive Whiteboard</li>
              <li>Panel Brand: A+ Grade Panel</li>
              <li>Life Span: 50000 Hours</li>
              <li>Applications: Classroom Teaching, Conference</li>
              <li>Ram And Rom: 4+32G, 8+64G Optional</li>
              <li>Screen Size: 75 Inches</li>
              <li>4K display</li>
              <li>IR touch</li>
              <li>Interactive Smartboard</li>
            </ul>
          </div>
        )}
        <div className="my-10 md:mx-[75px]">
          <h2 className="font-bold text-2xl my-3 ">TechnicalParametrs:</h2>
          <table className="w-full border-[1px] border-black md:text-lg text-[13px]">
            <tr className="border-[1px] border-black ">
              <th className="border-[1px] border-black text-start p-1">
                Attribute
              </th>
              <td className="p-1"> Value</td>
            </tr>
            <tr className="border-[1px] border-black">
              <th className="border-[1px] border-black text-start p-1">
                Product Name
              </th>
              <td className="p-1"> Smart Interactive Whiteboard</td>
            </tr>
            <tr className="border-[1px] border-black">
              <th className="border-[1px] border-black text-start p-1">
                Panel Brand
              </th>
              <td className="p-1"> A+ Grade Panel</td>
            </tr>
            <tr className="border-[1px] border-black">
              <th className="border-[1px] border-black text-start p-1">
                Function
              </th>
              <td className="p-1"> Multifunctional, education</td>
            </tr>
            <tr className="border-[1px] border-black">
              <th className="border-[1px] border-black text-start p-1">
                Screen Size
              </th>
              <td className="p-1"> 75 Inches</td>
            </tr>
            <tr className="border-[1px] border-black">
              <th className="border-[1px] border-black text-start p-1">
                Ram And Rom
              </th>
              <td className="p-1">4+32G, 8+64G Optional</td>
            </tr>
            <tr className="border-[1px] border-black">
              <th className="border-[1px] border-black text-start p-1">
                Applications
              </th>
              <td className="p-1"> Classroom Teaching, Conference</td>
            </tr>
            <tr className="border-[1px] border-black">
              <th className="border-[1px] border-black text-start p-1">
                Life Span
              </th>
              <td className="p-1">50000 Hours</td>
            </tr>
          </table>
        </div>
        <div className="my-10 md:mx-[75px]">
          <h2 className="font-bold text-2xl my-3">Applacation:</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
            alias dolores saepe, magni vero quisquam fugit numquam doloribus
            esse earum vel, quibusdam officia, mollitia animi modi unde debitis
            nostrum provident! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Illum alias dolores saepe, magni vero quisquam
            fugit numquam doloribus esse earum vel, quibusdam officia, mollitia
            animi modi unde debitis nostrum provident!
          </p>
        </div>
        <div className="my-10 md:mx-[75px]">
          <h2 className="font-bold text-2xl my-3">Customization:</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
            alias dolores saepe, magni vero quisquam fugit numquam doloribus
            esse earum vel, quibusdam officia, mollitia animi modi unde debitis
            nostrum provident! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Illum alias dolores saepe, magni vero quisquam
            fugit numquam doloribus esse earum vel, quibusdam officia, mollitia
            animi modi unde debitis nostrum provident!
          </p>
        </div>
        <div className="my-10 md:mx-[75px]  hidden md:flex flex-col ">
          <p className="text-sm text-gray-600 font-bold my-4">Tag:</p>
          <div className="flex justify-start items-center text-[12px] text-center">
            <Link className="text-gray-600 bg-gray-100 hover:bg-gray-200 duration-200 rounded-3xl py-1 w-[25%] mx-2">LCD Smart Interactive Whiteboard</Link>
            <Link className="text-gray-600 bg-gray-100 hover:bg-gray-200 duration-200 rounded-3xl py-1 w-[25%] mx-2">30000hrs Zoom Interactive Whiteboard</Link>
            <Link className="text-gray-600 bg-gray-100 hover:bg-gray-200 duration-200 rounded-3xl py-1 w-[25%] mx-2">32GB Zoom Interactive Whiteboard</Link>
          </div>
        </div>
      </div>
      <div className="w-full ">
        <span className="font-bold text-[30px] md:text-[40px] text-center my-10 block ">Similar Products</span>
        <SliderSimilier/>
      </div>
    </div>
  );
};

export default ProductDetail;
