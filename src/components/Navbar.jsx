import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { useTranslation } from "react-i18next";
import {
  IoEarthOutline,
  IoSearchOutline,
  IoChevronDown,
} from "react-icons/io5";
import { FaMobileAlt, FaShoppingCart, FaUser, FaBars } from "react-icons/fa";
const Navbar = () => {
  const [bars, setBars] = useState(false);
  const [t, i18n] = useTranslation("global");

  const handleChangeLanguge = (e) => {
    i18n.changeLanguage(e);
  };
  useEffect(() => {
    if (i18n.language == "en") {
      document.dir = "ltr";
    } else {
      document.dir = "rtl";
    }
  }, [i18n.language]);

  return (
    <>
      <div className="grid grid-cols-3 md:grid-cols-4 md:mx-[150px] z-20 ">
        <div className=" flex justify-end items-center md:justify-start col-span-2 md:col-span-1 ">
          <Link>
            <img
              className="h-[30px] w-[150px]"
              src="./img/astouch.webp"
              alt=""
            />
          </Link>
        </div>

        <div className="col-span-1 md:col-span-3 md:flex justify-end">
          <nav className=" md:flex items-center justify-end hidden">
            <div className="flex flex-row justify-end items-end   text-[14px] pt-3 ">
              <Link className=" hover:text-blue-500 pb-2 mx-2 px-3" to="/">
                {t("home")}
              </Link>

              <div className="z-20" id="navbarNav">
                <ul className="flex flex-row ">
                  <li className="">
                    <span
                      className="relative enter-div"
                      aria-current="page"
                      to="/"
                    >
                      <Link
                        className="chevron-parent hover:text-blue-500 flex justify-center items-center pb-2 px-3"
                        to="/"
                      >
                        {t("products")}
                      </Link>

                      <ul className="bg-white shadow-lg h-[0px] overflow-hidden opacity-0 z-0 top-full translate-x-[-50%] left-[50%] py-2 duration-500 absolute w-[200px] ">
                        <li className="m-2 pl-5 py-2 text-[14px]">
                          {t("product1")}
                        </li>
                        <li className="m-2 pl-5 py-2 text-[14px]">
                          {t("product2")}
                        </li>
                        <li className="m-2 pl-5 py-2 text-[14px]">
                          {t("product3")}
                        </li>
                        <li className="m-2 pl-5 py-2 text-[14px]">
                          {t("product4")}
                        </li>
                        <li className="m-2 pl-5 py-2 text-[14px]">
                          {t("product5")}
                        </li>
                        <li className="m-2 pl-5 py-2 text-[14px]">
                          {t("product6")}
                        </li>
                        <li className="m-2 pl-5 py-2 text-[14px]">
                          {t("product7")}
                        </li>
                        <li className="m-2 pl-5 py-2 text-[14px]">
                          {t("product")}
                        </li>
                      </ul>
                    </span>
                  </li>
                  <li className="">
                    <span className="enter-div relative">
                      <Link
                        className="chevron-parent  hover:text-blue-500 flex justify-center items-center px-3"
                        to="/"
                      >
                        {t("aboutus")}
                      </Link>

                      <ul className="bg-white shadow-lg h-[0px] overflow-hidden opacity-0 z-0 top-full translate-x-[-50%] left-[50%] py-2 duration-500 absolute w-[200px]">
                        <li className="m-2 pl-5 py-2 text-[14px]">
                          {t("about1")}
                        </li>
                        <li className="m-2 pl-5 py-2 text-[14px]">
                          {t("about2")}
                        </li>
                        <li className="m-2 pl-5 py-2 text-[14px]">
                          {t("about3")}
                        </li>
                        <li className="m-2 pl-5 py-2 text-[14px]">
                          {t("about4")}
                        </li>
                      </ul>
                    </span>
                  </li>
                  <li className="">
                    <Link className=" hover:text-blue-500 px-3" to="/">
                      {t("contractus")}
                    </Link>
                  </li>
                  <li className="">
                    <Link className=" hover:text-blue-500 px-3" to="/">
                      {t("news")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="flex justify-center items-center   pt-2 text-[16px]">
            <Link className="md:text-lg md:m-3 p-2 text-[25px]">
              <IoSearchOutline />
            </Link>
            <Link
              onClick={() => {
                setBars(true);
              }}
              className="md:text-lg md:m-3 p-2 md:hidden text-[25px]"
            >
              <FaBars />
            </Link>
            <span
              className="relative enter-div hidden md:inline  "
              aria-current="page"
              to="/"
            >
              <Link
                className="chevron-parent hover:text-blue-500  flex justify-center items-center pb-2 px-3"
                to="/"
              >
                {i18n.language == "en" ? "English" : "العربیه"}
                <IoChevronDown className="chevron text-[15px] mt-1 ml-1" />
              </Link>

              <div className="bg-white shadow-lg h-[0px] overflow-hidden opacity-0 z-10 top-full translate-x-[-50%] left-[50%] py-2 duration-500 absolute w-[130px] ">
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
            <div className="hidden md:inline mx-2 ">
              <button className="bg-orange-400 rounded-2xl px-12 text-white hover:bg-red-500 duration-300 py-[3px] text-[14px] ">
                {t("chatnow")}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* بخش قفسه ها */}

      {bars && <Modal setBars={setBars} bars={bars} />}
    </>
  );
};

export default Navbar;
