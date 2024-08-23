"use client";
import * as React from 'react'; 
import  { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Profile = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { data: session, status: sessionStatus } = useSession();

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSignOut = async () => {
    try {
      await signOut({ redirect: false });
      router.push("/login");
    } catch (err) {
      setError("Error signing out, please try again.");
      console.error(err);
    }
  };

 

  
   

  
  return (
    sessionStatus === "authenticated" ? (
      <div className="flex min-h-screen flex-col bg-slate-800 items-center justify-between p-24">
        <div className="bg-slate-900 p-8 rounded shadow-md w-96 text-center">
          <h1 className="text-4xl font-semibold mb-8">Profile</h1>
          <p className="text-yellow-500 mb-4">
            To change your password, please sign out and navigate to the login page to reset it.
          </p>
          <button
            onClick={handleSignOut}
            className="w-full bg-red-700 text-white py-2 rounded hover:bg-red-800"
          >
            Sign Out
          </button>
        </div>
      </div>
    ) : (
      <div className="flex min-h-screen flex-col bg-slate-800 items-center justify-between p-24">
        <div className="bg-slate-900 p-8 rounded shadow-md w-96 text-center">
          <h1 className="text-4xl text-center font-semibold mb-8">Forgot Password</h1>
          <form >
            <input
              type="email"
              className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
              placeholder="Email"
              required
            />
            <button
              type="submit"
              className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800"
            >
              Submit
            </button>
            <p className="text-red-600 text-[16px] mb-4">
              {error && error}
            </p>
            <p className="text-green-600 text-[16px] mb-4">
              {success && success}
            </p>
          </form>
          <div className="text-center text-gray-500 mt-4">
            - OR -
          </div>
          <Link
            className="block text-center text-blue-500 hover:underline mt-2"
            href="/login"
          >
            Login
          </Link>
        </div>
      </div>
    )
  );
};

export default Profile;
