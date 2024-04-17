import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { useTranslation } from "react-i18next";
const ProductCard = ({}) => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className=" flex flex-col justify-center items-center bg-white rounded-lg border-[1px] border-gray-300 hover:shadow-xl duration-300">
      <Link>
        <img className=" rounded-t-lg " src="/img/newcard.webp" alt="" />
      </Link>
      <div className="p-3 text-[10px] md:text-[16px]">
        <p>{t('p-head-product')} </p>
        <p className="p-product">{t("p-p-product")}</p>
        <Link className="my-2 border-[1px] border-orange-400 rounded-lg w-full py-2 flex justify-center items-center text-orange-400 hover:text-white hover:bg-orange-400 duration-300">
          <MdOutlineLocalPostOffice className="text-[20px] mx-1 " />
          <button className="mx-1">{t("get-price")}</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
