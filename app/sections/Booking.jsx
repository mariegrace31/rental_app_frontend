import React from 'react';
import { IoSearch } from "react-icons/io5";

function Booking() {
  return (
    <div className='bg-[#F0EFEF] py-12 lg:py-20'>
      <div className="relative text-center cursor-default">
        <h1 className="text-[19px] lg:text-[35px] font-medium text-rental_primary relative z-10">Reserve an Apartment</h1>
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[3rem] lg:text-[6rem] font-bold text-rental_black/25 opacity-30">RESERVE</span>
      </div>

      <div className='flex flex-col lg:flex-row gap-5 lg:gap-24 justify-center px-2 lg:px-0  py-3 lg:py-5 bg-rental_primary w-[90%] lg:w-[60%] items-center mx-auto mt-10 lg:mt-14 rounded-xl'>
        
        <div className="flex flex-col gap-2 w-full lg:w-auto">
          <h4 className='text-[13px] lg:text-[16px] text-rental_beige_3'>Check-In Date</h4>
          <input type="date" placeholder='Check in' required className='px-2 lg:px-3 py-1 lg:py-2 placeholder:text-[10px] lg:placeholder:text-[13px] outline-none text-rental_dark_choc rounded-lg bg-rental_beige_3' />
        </div>

        <div className="flex flex-col gap-2 w-full lg:w-auto">
          <h4 className='text-[13px] lg:text-[16px] text-rental_beige_3'>Check-Out Date</h4>
          <input type="date" placeholder='Check out' required className='px-2 lg:px-3 py-1 lg:py-2 placeholder:text-[10px] lg:placeholder:text-[13px] outline-none text-rental_dark_choc rounded-lg bg-rental_beige_3' />
        </div>

        <div className="flex flex-col gap-2 w-full lg:w-auto">
          <h4 className='text-[13px] lg:text-[16px] text-rental_beige_3'>Guests</h4>
          <input type="number" placeholder='Guests' min="1" max="4" required className='px-2 lg:px-3 py-1 lg:py-2 placeholder:text-[12px] lg:placeholder:text-[13px] outline-none text-rental_dark_choc rounded-lg bg-rental_beige_3 w-full lg:w-[170%]' />
        </div>
        <button className='text-rental_beige_3 text-3xl'><IoSearch /></button>
      </div>
    </div>
  )
}

export default Booking