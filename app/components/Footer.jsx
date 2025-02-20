import Link from 'next/link';
import React from 'react';
import { FaInstagram, FaLinkedin, FaLocationDot, FaPhone, FaSquareFacebook, FaSquareXTwitter } from 'react-icons/fa6';
import { MdMailOutline } from 'react-icons/md';
import { SiHomebridge } from 'react-icons/si';

function Footer() {
  return (
    <section className='bg-rental_primary p-5 lg:p-10'>
      <div className='flex flex-col gap-3 lg:gap-0 lg:flex-row lg:justify-between'>
      <div>
      <div className='flex gap-1 items-center cursor-default'>
        <SiHomebridge className="text-xl lg:text-3xl transition-all duration-300 text-rental_beige_3" />
        <h4 className="text-xl lg:text-3xl font-semibold tracking-widest duration-300 text-rental_beige_3">RENTO</h4>
      </div>
      </div>
    
      <div>
        <h3 className='font-medium text-rental_beige_3 text-[15px] mt-3 lg:mt-0 lg:text-[18px]'>Useful Links</h3>
        <div className='flex flex-col gap-1 lg:gap-3 mt-1 lg:mt-2'>
          <Link href='/' className='font-light text-rental_beige_3 text-[13px] lg:text-[15px]'>Home</Link>
          <Link href='/about' className='font-light text-rental_beige_3 text-[13px] lg:text-[15px]'>About Us</Link>
          <Link href='/reservations' className='font-light text-rental_beige_3 text-[13px] lg:text-[15px]'>Reservations</Link>
          <Link href='/apartments' className='font-light text-rental_beige_3 text-[13px] lg:text-[15px]'>Apartments</Link>
        </div>
      </div>
      <div className='w-[100%] mt-2 lg:mt-0 lg:w-[30%]'>
        <h3 className='font-medium text-rental_beige_3 text-[15px] lg:text-[18px]'>Subscribe</h3>
        <div className='flex flex-col'>
          <p className='font-light text-rental_beige_3 text-[12px] lg:text-[13px] mt-1 lg:mt-2'>Subscribe to our newsletter for the latest updates, exclusive insights, and valuable information delivered straight to your inbox.</p>
          <input type="text" placeholder='Email Address' className='mt-3 p-2 rounded-lg outline-none bg-rental_beige_3 placeholder:text-[12px] lg:placeholder:text-[13px] ' />
          <button className='bg-rental_beige_3 border border-rental_primary mt-3 w-[26%] text-[13px] lg:text-md lg:w-[25%] hover:bg-rental_beige_2 py-1 rounded-md'>Subscribe</button>
        </div>
      </div>
      <div>
        <h3 className='font-medium mt-3 lg:mt-0 text-rental_beige_3 text-[15px] lg:text-[18px]'>Contact</h3>
        <div className='flex flex-col gap-3 mt-2'>
          <p className='flex gap-1 items-center text-rental_beige_3 font-light text-[13px] lg:text-[15px]'><FaPhone /> 0543276532 </p>
          <p className='flex gap-1 items-center text-rental_beige_3 font-light text-[13px] lg:text-[15px]'><MdMailOutline /> ouremail@gmail.com</p>
          <p className='flex gap-1 items-center text-rental_beige_3 font-light text-[13px] lg:text-[15px]'><FaLocationDot /> London, 5463 St</p>
        </div>
        <div className='flex gap-4 mt-3'>
         <FaSquareFacebook className='text-rental_beige_3 text-lg lg:text-xl cursor-pointer hover:text-rental_beige_2' />
         <FaInstagram  className='text-rental_beige_3 text-lg lg:text-xl cursor-pointer hover:text-rental_beige_2'/>
         <FaLinkedin className='text-rental_beige_3 text-lg lg:text-xl cursor-pointer hover:text-rental_beige_2' />
         <FaSquareXTwitter  className='text-rental_beige_3 text-lg lg:text-xl cursor-pointer hover:text-rental_beige_2'/>
      </div>
      </div>
    </div>
    <hr className='w-[100%] lg:w-[80%] mt-8 mx-auto' />
    <p className='mt-4 text-center text-rental_beige_3 text-[13px] lg:text-[16px]'>&copy; 2025 Rento, All Rigths Reserved</p>
    </section>
    
  )
}

export default Footer