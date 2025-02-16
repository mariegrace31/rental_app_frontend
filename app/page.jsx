import React from "react";
import Image from "next/image";
import bgImage1 from '../app/assets/hero1.jpg';
import bgImage2 from '../app/assets/hero2.jpg';
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="h-[100vh]">
      <div className="relative h-[100vh] w-full">
        <Image 
          src={bgImage1} 
          alt="Hero Background" 
          layout="fill" 
          objectFit="cover"
          priority
        />

        <div className="absolute inset-0 bg-rental_primary/60">
        <div className="flex flex-col gap-8 justify-center h-full w-[65%] pl-8">
          <h1 className="text-5xl font-semibold text-rental_beige_3">Find Your Perfect Stay, Anywhere!</h1>
          <p className="text-[19px] font-light text-rental_beige_3">Discover cozy apartments, luxury stays, and budget-friendly rentals with ease.
             Whether you're planning a weekend getaway or a long-term stay, find the perfect
             place that feels just like home. Book hassle-free and enjoy a seamless travel
             experience with comfort and convenience at your fingertips.</p>
          <Link href='/properties'>
            <button className="bg-rental_beige_3 p-1 px-4 text-rental_primary text-[19px] flex items-center gap-1 rounded-3xl">Explore Now<FaArrowRight /></button>
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
}
