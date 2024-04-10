import React from "react";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { useTranslation } from "react-i18next";

const Export = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="export grid grid-cols-2 text-white p-5 px-[150px]">
      <div className="text-2xl font-bold ml-5 flex justify-center items-center">
        {t("p-export")}
      </div>
      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-center items-end">
          <div className="text-3xl font-bold "> {t("head-export")}</div>
          <button className="bg-white rounded-3xl text-blue-500 hover:shadow-2xl text-center mr-[70px] my-3 px-6 py-2 text-lg duration-200">
            {t('chatnow')}
          </button>
        </div>
        <div>
          <div className="flex justify-satrt items-start mx-5">
            <div className=" relative">
              <img className=" rounded-full " src="./img/user.png" alt="" />{" "}
              <MdOutlineLocalPostOffice className=" absolute bottom-2 right-1 bg-white rounded-full p-1 text-blue-500 text-3xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Export;
