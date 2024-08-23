"use client";
import * as React from 'react'; 
import { useState } from "react";
import Link from "next/link";
import { mailAction } from "@/component/mailAction";
import { useRouter } from "next/navigation";

const Forget = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    }

    setIsSubmitting(true);
    try {
      await mailAction({ email });
      router.push("/"); // Redirect to the homepage or another page after submission
    } catch (err) {
      setError("Failed to send reset link. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-800 items-center justify-center p-24">
      <div className="bg-slate-900 p-8 rounded shadow-md w-96 text-center">
        <h1 className="text-2xl font-semibold mb-4">Forgot Password</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className={`w-full bg-green-700 text-white py-2 rounded hover:bg-green-800 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
          <p className="text-red-600 text-center mt-2">{error}</p>
        </form>
        <div className="text-center text-gray-500 mt-4">- OR -</div>
        <div className="text-center mt-4">
          <Link className="text-blue-500 hover:underline" href="/login">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Forget;
