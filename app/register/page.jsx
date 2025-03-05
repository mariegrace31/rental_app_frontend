"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

function Register() {
  const router = useRouter();

  const handleGoogleRegister = () => {
    window.open("http://localhost:5001/auth/google", "_self");
  };

  // Check if the user is authenticated
  useEffect(() => {
    fetch("http://localhost:5001/auth/user", { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        if (data.email) {
          router.push("/profile");
        }
      })
      .catch((err) => console.error("Error checking authentication", err));
  }, []);

  return (
    <div className="w-[40%] bg-rental_beige_3 flex flex-col justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 border border-rental_beige_1 rounded-lg shadow-xl h-[40vh]">
      <h2 className="text-2xl font-semibold mb-4 text-center text-rental_primary">Welcome to Rento</h2>
      <p className="text-md font-light text-rental_black text-center">We are happy to have you here</p>
      <div className="mt-4 text-center">
        <button
          onClick={handleGoogleRegister}
          className="bg-rental_beige_1 text-[15px] text-rental_primary flex items-center gap-1 justify-center mx-auto text-center p-2 rounded-xl"
        >
         <FcGoogle /> Register With Google
        </button>
      </div>
      <div className="flex gap-1 justify-center mt-4">
        <p className="text-rental_black text-[16px]">Already have an account? </p>
        <Link href="/login" className="text-rental_primary underline">
        Login
        </Link>
      </div>
    </div>
  );
}

export default Register;
