"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import bgImage1 from "../app/assets/hero1.jpg";
import bgImage2 from "../app/assets/hero2.jpg";
import { FaArrowRight } from "react-icons/fa6";
import Booking from "./sections/Booking";
import AboutUs from "./sections/AboutUs";
import Aparts from "./sections/Aparts";
import Banner from "./sections/Banner";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";

const slides = [
  { 
    image: bgImage1, 
    title: "Find Your Perfect Stay, Anywhere!", 
    description: "Discover cozy apartments, luxury stays, and budget-friendly rentals with ease. Whether you're planning a weekend getaway or a long-term stay, find the perfect place that feels just like home. Book hassle-free and enjoy a seamless travel experience with comfort and convenience at your fingertips.",
    buttonText: "Explore Now",
    buttonLink: "/apartments",
  },
  { 
    image: bgImage2, 
    title: "Unlock Your Property's Earning Potential!", 
    description: "List your apartment and connect with trusted renters who are looking for short-term and long-term stays. Whether it's a cozy studio, a beachfront villa, or a city loft, maximize your property's potential and earn effortlessly. Enjoy full control over pricing, availability, and house rules while we take care of the rest!",
    buttonText: "Post Your Property",
    buttonLink: "/post-property",
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
       <div className="relative w-full h-[100vh] overflow-hidden">
      <div 
        className="flex transition-transform duration-1000 ease-in-out h-full w-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full flex-shrink-0 h-[100vh]">
            <Image
              src={slide.image}
              alt="Hero background"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="absolute inset-0 w-full h-full"
            />
            <div className="absolute inset-0 bg-rental_black/65 flex items-center">
              <div className="flex flex-col gap-8 lg:gap-10 w-[90%] lg:w-[55%] pl-5 lg:pl-8">
                <h1 className="text-2xl lg:text-5xl font-semibold text-rental_beige_3">{slide.title}</h1>
                <p className="text-[13px] lg:text-[20px] font-light text-rental_beige_3">{slide.description}</p>
                <Link href={slide.buttonLink}>
                  <button className="bg-rental_beige_3 py-2 px-4 lg:px-6 text-rental_primary text-[13px] lg:text-[20px] flex items-center justify-center gap-2 hover:bg-rental_primary hover:text-rental_beige_3 rounded-3xl">
                    {slide.buttonText} <FaArrowRight />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <div
            key={index}
            className={` h-[6px] rounded-full cursor-pointer transition-all duration-300 ${
              index === currentSlide ? "bg-rental_black w-10 lg:w-12" : "bg-white w-3 lg:w-5"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>

    <Booking />
    <AboutUs />
    <Aparts />
    <Banner />
    <Testimonials />
    <Contact />
    </section>
  );
}
