"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import loginImage from '../assets/signin.jpeg';

function Login() {
  const router = useRouter();

  const handleGoogleLogin = () => {
    window.open("http://localhost:5001/auth/google", "_self");
  };

  // To check if the user is authenticated
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
    <div className="w-[40%] flex flex-col justify-center mt-10 mx-auto p-6 border rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">Welcome back to Rento</h2>
      <div className="mt-4 text-center">
        <button
          onClick={handleGoogleLogin}
          className="bg-rental_primary text-rental_beige_3 p-2 rounded-xl"
        >
          Login With Google
        </button>
      </div>
    </div>
  );
}

export default Login;
