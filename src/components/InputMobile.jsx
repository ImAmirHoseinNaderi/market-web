import React from 'react'
import { useTranslation } from "react-i18next";

const InputMobile = () => {
  const [t, i18n] = useTranslation("global");

    function handleSubmit(e) {
        e.preventDefault()
    }
  return (
    <form onSubmit={handleSubmit} >
        <div className='flex flex-col justify-around items-center m-2 my-4 shadow-lg rounded-lg bg-white p-3' >
      <div className='flex flex-col justify-center items-center py-2'>
        <h1 className='font-bold text-xl'>{t("massage")}</h1>
        <p className='text-[17px]'>{t("call")}</p>
      </div>
      <textarea name="text"  cols="30" rows="5" className='w-full h-[100px] m-2 bg-gray-200 p-2 border-none' placeholder='Learn more product details'></textarea>
      <div className='flex w-full py-2'>
        <input className='w-full p-2 bg-gray-200 border-none' type="email" placeholder='Enter your Email' />
        <button className='bg-blue-500 text-white rounded-md px-3 py-1 text-lg'>{t("continue")}</button>
      </div>
    </div>
    </form>
  )
}

export default InputMobile
