import React from "react";
import { Link } from "react-router-dom";

const NewsCard = () => {
  return (
    <div className="bg-white m-3">
      <Link><img src="./img/news.webp" alt="" /></Link>
      <div className="p-2 px-3 md:px-4 md:py-3">
        <h1 className="font-bold text-lg ">Astouch at Indonesia exhibitions 2023</h1>
        <p className="text-[11px] text-gray-500 md:text-[14px]">
          Booth No.: E7 lntegrate Middie East: 2023.09.20~09.22 We will lead you
          to participate in the GESS 2023 exhibition in Indonesia to deeply
          understand the technological innovation frontier of artificial.....
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
