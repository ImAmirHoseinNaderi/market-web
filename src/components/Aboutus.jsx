import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt,FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Aboutus = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="flex flex-col justify-center items-center m-2 md:grid grid-cols-5 shadow-lg ">
      <Link className=" col-span-3 md:order-2">
        <img className="h-[180px] md:h-[65vh] rounded-md md:rounded-l-none object-cover" src="./img/market.webp" alt="" />
      </Link>
      <div className="about-p h-full md:rounded-l-md  flex flex-col justify-center items-center md:justify-around px-4 py-2 col-span-2 md:text-white md:px-7">
        <Link>
          <h1 className="font-bold text-[20px] md:text-[40px] my-1">{t('head-marketcard')}</h1>
        </Link>
        <p className="text-[12px] text-gray-600 md:text-[16px] md:text-white">
        {t('p-marketcard')}
        </p>
        <div className="grid grid-cols-2 md:justify-items-start justify-items-center w-full my-3">
          <button className="hidden md:flex bg-white px-8 py-3 rounded-[50px] text-blue-500 justify-center items-center text-xl hover:shadow-xl duration-300">{t('chat')}<FaWhatsapp className="text-green-500 ml-1"/></button>
          <button className="text-1xl bg-orange-500 text-white rounded-3xl px-[54px] py-[4px] md:hidden"><FaPhoneAlt /></button>
          <button className="text-2xl bg-blue-500 text-white rounded-3xl px-[54px] py-[4px] md:hidden"><FaWhatsapp/></button>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
