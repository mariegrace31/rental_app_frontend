"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

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
    <div className="w-[40%] mt-10 mx-auto p-6 border rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">Welcome to Rento</h2>
      <div className="mt-4 text-center">
        <span className="text-sm">Or </span> <br />
        <button
          onClick={handleGoogleRegister}
          className="bg-rental_primary text-rental_beige_3 p-2 rounded-xl"
        >
          Register With Google
        </button>
      </div>
      <div className="flex gap-1 justify-center mt-4">
        <p>Already have an account? </p>
        <Link href="/login" className="text-rental_primary underline">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Register;
