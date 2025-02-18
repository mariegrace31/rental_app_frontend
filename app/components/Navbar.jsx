import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { SiHomebridge } from "react-icons/si";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-20 flex justify-between p-8 items-center transition-all duration-300 ${scrolled ? 'bg-rental_beige_3 shadow-md' : 'bg-transparent'}`}>
      <div className='flex gap-1 items-center cursor-default'>
        <SiHomebridge className={`text-3xl transition-all duration-300 ${scrolled ? 'text-rental_primary' : 'text-rental_beige_3'}`} />
        <h4 className={`text-3xl font-semibold tracking-widest transition-all duration-300 ${scrolled ? 'text-rental_primary' : 'text-rental_beige_3'}`}>RENTORA</h4>
      </div>

      <div className='flex gap-4'>
        {['/', '/About', '/Reservations', '/Apartments'].map((href, index) => (
          <Link key={index} href={href} className={`text-[19px] cursor-pointer font-extralight py-1 px-4 hover:bg-rental_primary hover:text-rental_beige_3 hover:rounded-3xl transition-all duration-300 ${scrolled ? 'text-rental_black' : 'text-rental_beige_3'}`}>
            {href === '/' ? 'Home' : href.slice(1).replace('-', ' ')}
          </Link>
        ))}
        <a href="#contact" className={`text-[18px] font-extralight cursor-pointer py-1 px-4 hover:bg-rental_primary hover:text-rental_beige_3 hover:rounded-3xl transition-all duration-300 ${scrolled ? 'text-rental_black' : 'text-rental_beige_3'}`}>
          Contact Us
        </a>
      </div>

      <div className='flex gap-3'>
        <Link href='/login'>
          <button className={`text-[18px] font-medium py-1 px-7 border-2 cursor-pointer rounded-3xl transition-all duration-300 ${scrolled ? 'bg-rental_primary text-rental_beige_3 border-rental_primary hover:bg-rental_beige_3 hover:text-rental_primary' : 'bg-rental_beige_3 text-rental_primary border-rental_beige_3 hover:bg-transparent hover:text-rental_beige_3'}`}>
            Login
          </button>
        </Link>
        <Link href='/register'>
          <button className={`text-[18px] font-medium py-1 px-4 cursor-pointer rounded-3xl border-2 transition-all duration-300 ${scrolled ? 'bg-rental_beige_3 text-rental_primary border-rental_primary hover:bg-rental_primary hover:text-rental_beige_3' : 'bg-transparent text-rental_beige_3 border-rental_beige_3 hover:bg-rental_beige_3 hover:text-rental_primary'}`}>
            Register
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
