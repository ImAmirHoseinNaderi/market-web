import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
const Footer = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div className=" px-3  md:pt-[30px] md:px-[150px] mt-12 text-gray-600 bg-gray-100">
      <div className=" md:grid grid-cols-4  gap-4 ">
        <div className="flex flex-col justify-start items-start text-[12px] col-span-1">
          <img
            className="w-[70px] h-[20px] m-2"
            src="/img/astouch.webp"
            alt=""
          />
          <p>+86 139-2581-1785</p>
          <Link>
            <p>sales@astouch.net</p>
          </Link>
          <p>+755-3282-3168</p>
          <p className="">
            4F, NORTH BDG 1, MEITAI HI-TECH PARK, GUANLAN STR. 1231, SHENZHEN,
            CHINA
          </p>
        </div>
        <div className="mt-[20px] grid md:grid-cols-3 grid-cols-2 col-span-3 gap-4">
          <nav className=" md:col-span-2 flex flex-col justify-between ">
            <ul className="flex flex-col justify-start items-start text-[15px] md:flex-row md:justify-between ">
              <li>
                <Link>{t("home")}</Link>
              </li>
              <li>
                <Link>{t("products")}</Link>
              </li>
              <li>
                <Link>{t("aboutus")}</Link>
              </li>
              <li>
                <Link>{t("contractus")}</Link>
              </li>
              <li>
                <Link>{t("news")}</Link>
              </li>
            </ul>
          </nav>
          <div>
            <div className="flex justify-around items-start md:justify-end">
              <Link className="bg-blue-900 rounded-full p-1 md:m-3 md:text-[20px] md:p-2 text-white ">
                <FaInstagram />
              </Link>
              <Link className="bg-blue-900 rounded-full p-1 md:m-3 md:text-[20px] md:p-2 text-white">
                <FaFacebookF />
              </Link>
              <Link className="bg-blue-900 rounded-full p-1 md:m-3 md:text-[20px] md:p-2 text-white">
                <FaTwitter />
              </Link>
              <Link className="bg-blue-900 rounded-full p-1 md:m-3 md:text-[20px] md:p-2 text-white">
                <FaYoutube />
              </Link>
              <Link className="bg-blue-900 rounded-full p-1 md:m-3 md:text-[20px] md:p-2 text-white">
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <p className="mx-auto text-[10px] text-gray-400 mt-5 text-center md:text-[13px]">
        ©2005 - 2023 ASTOUCH Technology (Shenzhen) Co., Ltd. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
