import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import person1 from '../assets/testimonial1.jpeg';
import person2 from '../assets/testimonial2.jpeg';
import person3 from '../assets/person3.jpeg';
import person4 from '../assets/person4.jpeg';

function Testimonials() {
  const testimonials = [
    {
      name: "James T. - New York, NY",
      img: person1,
      desc: "Rento made my apartment search stress-free! I found a fully furnished short-term rental within minutes, and the booking process was seamless. Highly recommend for anyone looking for a hassle-free rental experience!"
    },
    {
      name: "Sarah M. - Los Angeles, CA",
      img: person2,
      desc: "I was struggling to find a reliable rental for my work trip, but Rento connected me with a perfect place in no time. The listings were verified, and the entire process was smooth from start to finish!"
    },
    {
      name: "Emily R. - Miami, FL",
      img: person3,
      desc: "Listing my property on Rento was the best decision! I got multiple bookings within days, and the platform made managing everything super easy. I love the transparency and support they provide!"
    },
    {
      name: "Mark D. - Chicago, IL",
      img: person4,
      desc: "As a first-time host, I was worried about renting out my apartment, but Rento made it effortless. Their verification process and smooth booking system gave me peace of mind, and I've had great renters so far!"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slide, setSlide] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setSlide(true);
      }, 100);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white py-20">
      <div className="relative text-center">
        <h1 className="text-[35px] font-medium text-rental_primary relative z-10">What People Say About Us</h1>
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[6rem] font-bold text-rental_black/25 opacity-30">
          TESTIMONIALS
        </span>
      </div>

      <div className="flex flex-col items-center text-center mt-20 px-6 bg-rental_beige_3 w-[60%] mx-auto py-6 rounded-xl shadow-xl overflow-hidden">
        <div
          className={`transition-transform duration-300 ease-in-out ${
            slide ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        >
          <div className="w-24 h-24 relative overflow-hidden mx-auto rounded-full">
            <Image src={testimonials[currentIndex].img} alt={testimonials[currentIndex].name} layout="fill" objectFit="cover" />
          </div>
          <p className="mt-6 text-lg text-rental_black max-w-2xl">{testimonials[currentIndex].desc}</p>
          <h2 className="mt-4 text-xl font-semibold text-rental_primary">{testimonials[currentIndex].name}</h2>
        </div>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`h-2 rounded-full cursor-pointer transition-all ${
              index === currentIndex ? "bg-black w-8" : "bg-rental_beige_1 w-4"
            }`}
            onClick={() => {
              setSlide(false);
              setTimeout(() => {
                setCurrentIndex(index);
                setSlide(true);
              }, 50);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
