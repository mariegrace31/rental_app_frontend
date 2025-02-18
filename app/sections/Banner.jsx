"use client"
import React, { useState, useEffect, useRef } from 'react';
import banner from '../assets/banner.jpeg';
import Image from 'next/image';

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 7000;
          const step = Math.ceil(target / (duration / 10));

          const interval = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(start);
            }
          }, 10);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target]);

  return <h1 ref={ref} className="text-rental_beige_3 font-semibold text-4xl">{count}+</h1>;
};

function Banner() {
  return (
    <div className="relative w-full flex-shrink-0 h-[20vh]">
      <Image src={banner} alt="banner" layout="fill" objectFit="cover" objectPosition="center" className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-rental_black/85 flex justify-around p-10">
        <div className="flex flex-col gap-1">
          <Counter target={750} />
          <p className="text-rental_beige_1 text-xl">Users</p>
        </div>
        <div className="flex flex-col gap-1">
          <Counter target={450} />
          <p className="text-rental_beige_1 text-xl">Satisfied Renters</p>
        </div>
        <div className="flex flex-col gap-1">
          <Counter target={300} />
          <p className="text-rental_beige_1 text-xl">Satisfied Hosts</p>
        </div>
        <div className="flex flex-col gap-1">
          <Counter target={480} />
          <p className="text-rental_beige_1 text-xl">Five Star Ratings</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
