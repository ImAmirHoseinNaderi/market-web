import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { useTranslation } from "react-i18next";

const Learnmore = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div className='learn-bg flex flex-col justify-around items-center w-full h-[400px] text-white'>
      <h1 className='text-6xl font-bold'>{t('quality')}</h1>
      <button className='pl-8 pr-6 py-3 bg-white rounded-[50px] text-blue-500 flex justify-center items-center text-[20px] hover:shadow-lg duration-300 font-semibold' >{t('learn')}<IoIosArrowRoundForward className='text-[35px] pt-[5px]'/></button>
    </div>
  )
}

export default Learnmore
