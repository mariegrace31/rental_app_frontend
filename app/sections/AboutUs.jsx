import React from 'react';
import { MdVerified } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { IoIosHelpCircle } from "react-icons/io";
import Link from 'next/link';

function AboutUs() {
  return (
    <div className='bg-white py-20'>
      <div className="relative text-center">
        <h1 className="text-[35px] font-medium text-rental_primary relative z-10">About Us</h1>
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[6rem] font-bold text-rental_black/25 opacity-30">ABOUT</span>
      </div>
      <div className='flex gap-7 p-14 mx-auto justify-center items-center w-[85%]'>
        <div className='flex flex-col gap-5'>
          <h2 className='text-rental_primary font-medium text-[25px]'>Rentora: Your Trusted Platform for Easy and Reliable Apartment Rentals</h2>
          <p className='text-[17px] font-light'>At Rentora, we make finding and booking apartments easy, fast, and reliable. Whether you're looking for a short-term stay or a long-term rental,
             our platform connects you with the best options tailored to your needs. With a user-friendly experience and trusted listings, your perfect home is just a few clicks away.
          </p>
          <p className='text-[17px] font-light'> Hosts can showcase their properties with confidence, while renters enjoy verified listings and smooth bookings.</p>
          <p className='font-normal text-[17px]'>Join us today and experience a smarter way to rent and host!</p>
          <Link href='/about'>
            <button className='text-[18px] font-normal py-1 px-7 border-2 cursor-pointer rounded-3xl border-rental_primary bg-rental_primary text-rental_beige_3'>More about Us</button>
          </Link>
        </div>

        <div className='grid grid-cols-2 gap-5'>
          <div className='p-3 bg-rental_beige_3 rounded-lg flex flex-col gap-[5px] text-center items-center shadow-xl border-l-4 border-rental_primary'>
            <MdVerified className='text-3xl text-rental_dark_choc' />
            <h3 className='font-medium text-[16px] text-rental_primary'>Verified Listings</h3>
            <p className='font-light text-[13px]'> We carefully vet and verify every listing to ensure renters get access to trusted apartments.</p>
          </div>
          <div className='p-3 bg-rental_beige_3 rounded-lg flex flex-col gap-[5px] text-center items-center shadow-xl border-l-4 border-rental_primary'>
            <FaHome className='text-3xl text-rental_dark_choc' />
            <h3 className='font-medium text-[16px] text-rental_primary'>Easy Booking</h3>
            <p className='font-light text-[13px]'> Secure your ideal apartment in just a few clicks. Our user-friendly platform makes reservations fast, and secure.</p>
          </div>
          <div className='p-3 bg-rental_beige_3 rounded-lg flex flex-col gap-[5px] text-center items-center shadow-xl border-l-4 border-rental_primary'>
            <RiMoneyDollarCircleFill className='text-3xl text-rental_dark_choc' />
            <h3 className='font-medium text-[16px] text-rental_primary'>Earn as a Host</h3>
            <p className='font-light text-[13px]'> Turn your extra space into a source of income by listing your apartment. Our platform helps you connect with reliable renters.</p>
          </div>
          <div className='p-3 bg-rental_beige_3 rounded-lg flex flex-col gap-[5px] text-center items-center shadow-xl border-l-4 border-rental_primary'>
            <IoIosHelpCircle className='text-3xl text-rental_dark_choc' />
            <h3 className='font-medium text-[16px] text-rental_primary'>24/7 Support</h3>
            <p className='font-light text-[13px]'> Need help? Our dedicated support team is available around the clock to assist with bookings, payments, and any questions.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutUs