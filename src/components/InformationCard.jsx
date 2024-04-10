import React from "react";
import { Link } from "react-router-dom";

const InformationCard = () => {
  return (
    <div className="grid grid-row-2 m-[10px] md:grid-cols-7 md:my-[60px] md:mx-[100px] py-8">
      <img className=" col-span-4" src="./img/information.webp" alt="" />
      <div className="flex flex-col bg-white px-3 py-2 col-span-3 justify-between items-start md:p-10">
        <h2 className="font-bold text-center text-lg md:text-xl">Digital Signage</h2>
        <p className="text-gray-500 text-[12px] md:text-[17px]">
          Work at the speed of thought, plug into the possibilities. Adopting 4K
          HDR & High dynamic range display technology, optional infrared touch
          and capacitive touch technology, supporting simultaneous operation by
          multiple people, intelligent cloud platform remote multi terminal
          control.
        </p>
        <button className="my-2"><Link className="text-lg border-[2px] border-black px-3 py-1 hover:bg-blue-900 hover:text-white duration-500 md:text-[28px] md:py-2 md:px-4 ">Learn more</Link></button>
      </div>
    </div>
  );
};

export default InformationCard;
