import React from "react";
import { Link } from "react-router-dom";
import { IoChevronDown } from "react-icons/io5";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { GrClose } from "react-icons/gr";
const Modal = ({ bars, setBars }) => {
  const [t, i18n] = useTranslation("global");
  
  if (!bars) {
    return null;
  }
  const handleChangeLanguge = (e) => {
    i18n.changeLanguage(e);
  };
  return (
    <div className="flex justify-center items-center fixed top-0 bottom-0 left-0 right-0  z-20 text-white">
      <div className="w-[100%] h-[100%] backdrop-blur-lg bg-white/30 backdrop-brightness-50 px-5 py-2 flex flex-col justify-start items-center text-[26px] ">
        <button className="text-[50px] m-3 flex justify-start items-start w-full " onClick={() => setBars(false)}>
          <GrClose/>
        </button>
        <Link className="my-1">{t('home')}</Link>
        <Link className="my-1">{t('contractus')}</Link>
        <Link className="my-1">{t('about')}</Link>
        <Link className="my-1">{t('products')}</Link>
        <Link className="my-1">{t("quality")}</Link>
        <Link className="my-1">{t("factory")}</Link>
        <Link className="my-16">{t("news")}</Link>
        <span
              className="relative enter-div w-full "
              
            >
              <Link
                className=" flex justify-center items-center my-3"
                to="/"
              >
                {i18n.language == "en" ? "English" : "العربیه"}
                <IoChevronDown className=" text-[15px] mt-1 ml-1" />
              </Link>

              <div className="div-modal shadow-lg h-[0px] overflow-hidden opacity-0 z-10 top-full translate-x-[-50%] left-[50%] py-2 duration-500 absolute w-full border-[1px] border-gray-700 ">
                <button
                  onClick={() => handleChangeLanguge("ar")}
                  className="m-2 pl-5 py-2 text-[14px] flex"
                >
                  AR - العربیه
                </button>
                <button
                  onClick={() => handleChangeLanguge("en")}
                  className="m-2 pl-5 py-2 text-[14px] flex"
                >
                  EN - English
                </button>
              </div>
            </span>

      </div>
    </div>
  );
};

export default Modal;
