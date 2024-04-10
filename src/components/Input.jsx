import React from 'react'
import { useTranslation } from "react-i18next";

const Input = () => {
  const [t, i18n] = useTranslation("global");
    
    function handleSubmited(e) {
        e.preventDefault()
    }
  return (
    <form onSubmit={handleSubmited} className='grid grid-cols-7 w-full p-4 my-12 bg-white gap-3 rounded-xl  ' style={{boxShadow: '4px 4px 6px 2px rgb(0 0 0 / 0.2)'}}>
        <div className='w-full col-span-3'>
            <input className='w-full h-[50px] bg-gray-200 text-[25px] px-5  rounded-lg' type="text" placeholder='Requirment/Products/MOQ' />
        </div>
        <div className='w-full col-span-3'>
            <input className='w-full h-[50px] bg-gray-200 text-[25px] px-5  rounded-lg' type="email" placeholder='Your Email' />
        </div>
        <button className='w-full bg-orange-500 rounded-lg text-white hover:bg-red-500 font-bold text-lg duration-300'>{t('contractus')}</button>
    </form>
  )
}

export default Input
