import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Contacts = () => {
  return (
    <div>
      <span className="border-l-4 border-blue-500 text-blue-500 px-3 font-bold  ">
        Contacts
      </span>
      <div className="bg-gray-100 rounded-lg px-3 py-3 my-3 w-full  ">
        <div className="flex flex-col ">
          <div className="flex justify-between items-center my-2">
            <span>contacts:</span> <p>mr.reymond</p>
          </div>
          <div className="flex justify-between items-center my-2">
            <span>Tel:</span> <p>+8613823689739</p>
          </div>
          <div className="flex justify-between items-center my-2">
            <span>Fax:</span> <p>	86-755-84559138</p>
          </div>
        </div>

        <div className="flex w-full  justify-between items-start">
          <Link className="bg-blue-900 rounded-full  m-3 text-[20px] p-2 text-white ">
            <FaInstagram />
          </Link>
          <Link className="bg-blue-900 rounded-full  m-3 text-[20px] p-2 text-white">
            <FaFacebookF />
          </Link>
          <Link className="bg-blue-900 rounded-full  m-3 text-[20px] p-2 text-white">
            <FaTwitter />
          </Link>
          <Link className="bg-blue-900 rounded-full  m-3 text-[20px] p-2 text-white">
            <FaYoutube />
          </Link>
        </div>

        <button className="w-full bg-blue-500 rounded-lg text-white py-2 my-2 hover:bg-blue-600 duration-300">
          chat now
        </button>
      </div>
    </div>
  );
};

export default Contacts;
