import Link from 'next/link';
import React from 'react';
import { SiHomebridge } from "react-icons/si";

function Navbar() {
  return (
    <nav className='flex justify-between p-8 items-center'>
      <div className='flex gap-1 items-center cursor-pointer'>
        <SiHomebridge className='text-3xl text-rental_primary' />
        <h4 className='text-3xl font-semibold tracking-widest text-rental_primary'>RENTORA</h4>
      </div>
      <div className='flex gap-5'>
        <Link href='/home' className='text-[18px] font-extralight text-rental_black py-1 px-4 hover:bg-rental_primary hover:text-rental_beige_3 hover:rounded-3xl transition-all duration-300 ease-in-out transform'>Home</Link>
        <Link href='/about' className='text-[18px] font-extralight text-rental_black py-1 px-4 hover:bg-rental_primary hover:text-rental_beige_3 hover:rounded-3xl transition-all duration-300 ease-in-out transform'>About Us</Link>
        <Link href='/reservations' className='text-[18px] font-extralight text-rental_black py-1 px-4 hover:bg-rental_primary hover:text-rental_beige_3 hover:rounded-3xl transition-all duration-300 ease-in-out transform'>Reservations</Link>
        <a href="#contact" className='text-[18px] font-extralight text-rental_black py-1 px-4 hover:bg-rental_primary hover:text-rental_beige_3 hover:rounded-3xl transition-all duration-300 ease-in-out transform'>Contact Us</a>
      </div>
      <div className='flex gap-3'>
        <Link href='/login'>
          <button className='text-[18px] font-medium bg-rental_primary py-1 px-7 border-2 rounded-3xl border-rental_primary text-rental_beige_3 hover:bg-white hover:text-rental_primary cursor-pointer'>Login</button>
        </Link>
        <Link href='/register'>
          <button className='text-[18px] font-medium bg-white py-1 px-4 rounded-3xl text-rental_primary border-2 border-rental_primary hover:bg-rental_primary hover:text-rental_beige_3'>Register</button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar