"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { SiHomebridge } from "react-icons/si";
import { FiX } from "react-icons/fi";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { useAuth } from "../auth/AuthContext";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const { user, setUser, loading } = useAuth();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    fetch("http://localhost:5001/auth/logout", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then(() => {
        setUser(null);
        setProfileMenuOpen(false);
      })
      .catch((error) => console.error("Logout failed", error));
  };

  return (
    <nav
      className={`fixed top-0 w-full z-20 flex justify-between p-3 lg:p-6 items-center transition-all duration-300 ${
        scrolled ? "bg-rental_beige_3 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex gap-1 items-center cursor-default">
        <SiHomebridge
          className={`text-xl lg:text-3xl transition-all duration-300 ${
            scrolled ? "text-rental_primary" : "text-rental_beige_3"
          }`}
        />
        <h4
          className={`text-xl lg:text-3xl font-semibold tracking-widest transition-all duration-300 ${
            scrolled ? "text-rental_primary" : "text-rental_beige_3"
          }`}
        >
          RENTO
        </h4>
      </div>

      <div className="hidden md:flex gap-4">
        {[
          { href: "/", label: "Home" },
          { href: "/About", label: "About" },
          { href: "/Reservations", label: "Reservations" },
          { href: "/Apartments", label: "Apartments" },
        ].map(({ href, label }, index) => (
          <Link
            key={index}
            href={href}
            className={`text-[19px] cursor-pointer font-extralight py-1 px-4 rounded-3xl transition-all duration-300 ${
              pathname === href
                ? "bg-rental_primary text-rental_beige_3"
                : `hover:bg-rental_primary hover:text-rental_beige_3 ${
                    scrolled ? "text-rental_black" : "text-rental_beige_3"
                  }`
            }`}
          >
            {label}
          </Link>
        ))}
        <a
          href="#contact"
          className={`text-[18px] font-extralight cursor-pointer py-1 px-4 rounded-3xl transition-all duration-300 ${
            scrolled ? "text-rental_black" : "text-rental_beige_3"
          } hover:bg-rental_primary hover:text-rental_beige_3`}
        >
          Contact Us
        </a>
      </div>

      <div className="hidden md:flex gap-3">
        {user ? (
          <div className="relative">
            <FaUserCircle
              className="text-3xl text-rental_light_choc cursor-pointer"
              onClick={() => setProfileMenuOpen(!profileMenuOpen)}
            />
            {profileMenuOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-lg">
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-rental_primary hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link href="/login">
              <button
                className={`text-[18px] font-medium py-1 px-7 border-2 cursor-pointer rounded-3xl transition-all duration-300 ${
                  scrolled
                    ? "bg-rental_primary text-rental_beige_3 border-rental_primary hover:bg-rental_beige_3 hover:text-rental_primary"
                    : "bg-rental_beige_3 text-rental_primary border-rental_beige_3 hover:bg-transparent hover:text-rental_beige_3"
                }`}
              >
                Login
              </button>
            </Link>
            <Link href="/register">
              <button
                className={`text-[18px] font-medium py-1 px-4 cursor-pointer rounded-3xl border-2 transition-all duration-300 ${
                  scrolled
                    ? "bg-rental_beige_3 text-rental_primary border-rental_primary hover:bg-rental_primary hover:text-rental_beige_3"
                    : "bg-transparent text-rental_beige_3 border-rental_beige_3 hover:bg-rental_beige_3 hover:text-rental_primary"
                }`}
              >
                Register
              </button>
            </Link>
          </>
        )}
      </div>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-4xl text-black transition-all duration-300 z-20 focus:outline-none md:hidden"
      >
        {menuOpen ? (
          <FiX className="bg-rental_primary p-2 rounded-lg text-rental_beige_3" />
        ) : (
          <FaBarsStaggered className="text-3xl" />
        )}
      </button>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-rental_beige_3 flex flex-col items-center justify-center gap-3 text-2xl transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center gap-2 w-full">
          {[
            { href: "/", label: "Home" },
            { href: "/About", label: "About" },
            { href: "/Reservations", label: "Reservations" },
            { href: "/Apartments", label: "Apartments" },
          ].map(({ href, label }, index) => (
            <Link
              key={index}
              href={href}
              className={`text-rental_black text-[16px] font-light py-2 transition-all duration-300 ${
                pathname === href
                  ? "bg-rental_primary text-rental_beige_3 px-4 rounded-lg"
                  : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <a
            href="#contact"
            className="text-rental_black text-[16px] font-light py-2 transition-all duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </a>
        </div>

        <div className="w-full px-6 flex flex-col gap-2">
          {user ? (
            <button
              className="text-[16px] font-medium py-2 w-full border-2 cursor-pointer rounded-md bg-rental_primary text-rental_beige_3 border-rental_primary hover:bg-rental_beige_3 hover:text-rental_primary transition-all duration-300"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <>
              <Link href="/login">
                <button className="text-[16px] font-medium py-2 w-full border-2 cursor-pointer rounded-md bg-rental_primary text-rental_beige_3 border-rental_primary hover:bg-rental_beige_3 hover:text-rental_primary transition-all duration-300">
                  Login
                </button>
              </Link>
              <Link href="/register">
                <button className="text-[16px] font-medium py-2 w-full cursor-pointer rounded-md border-2 bg-rental_beige_3 text-rental_primary border-rental_primary hover:bg-rental_primary hover:text-rental_beige_3 transition-all duration-300">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
