"use client";

import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

function Login() {

  return (
    <div className="w-[40%] bg-rental_beige_3 flex flex-col justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 border border-rental_beige_1 rounded-lg shadow-xl h-[40vh]">
      <h2 className="text-2xl font-semibold mb-4 text-center text-rental_primary">Welcome back to Rento</h2>
      <p className="text-md font-light text-rental_black text-center">We are happy to see you again!</p>
      <div className="mt-4 text-center">
        <button
          onClick={handleGoogleLogin}
          className="bg-rental_beige_1 text-[15px] text-rental_primary flex items-center gap-1 justify-center mx-auto text-center p-2 rounded-xl"
        >
          <FcGoogle />Login With Google
        </button>
        <div className="flex gap-1 justify-center mt-4">
        <p className="text-rental_black text-[16px]">Don't have an account yet? </p>
        <Link href="/register" className="text-rental_primary underline">
        Register
        </Link>
      </div>
        
      </div>
    </div>
  );
}

export default Login;
