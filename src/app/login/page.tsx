"use client";
import * as React from 'react'; 
import  { useEffect, useState } from "react";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Login: React.FC = () => {
  const router = useRouter();
  const [error, setError] = useState<string>("");
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/Dashboard");
    }
  }, [sessionStatus, router]);

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password is invalid");
      return;
    }

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Invalid email or password");
    } else if (res?.url) {
      router.replace("/Dashboard");
    } else {
      setError("");
    }
  };

  if (sessionStatus === "loading") {
    return <h1>Loading...</h1>;
  }

  return (
    sessionStatus !== "authenticated" && (
      <div className="flex min-h-screen flex-col bg-slate-800 items-center justify-between p-24">
        <div className="bg-slate-900 p-8 rounded shadow-md w-96 animated bounceIn">
          <h1 className="text-4xl text-center font-semibold mb-8">Login</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black animated bounceIn"
              placeholder="Email"
              required
            />
            <input
              type="password"
              name="password"
              className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black animated bounceIn delay-1s"
              placeholder="Password"
              required
            />
            <button
              type="submit"
              className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800 mb-4 animated bounceIn delay-2s"
            >
              Sign In
            </button>
            {error && (
              <p className="text-red-600 text-[16px] mb-4 animated bounceIn delay-2s">
                {error}
              </p>
            )}
          </form>
          <button
            className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800 flex items-center justify-center animated bounceIn delay-2s"
            onClick={() => signIn("github")}
          >
            <Image src="/download.png" alt="GitHub logo" width={48} height={48} className="w-12 h-12 mr-2" />
            Sign In with GitHub
          </button>
          <div className="text-center text-gray-500 mt-4 animated bounceIn delay-3s">
            - OR -
          </div>
          <div className="text-center mt-4">
            <Link href="/register" legacyBehavior>
              <a className="block text-blue-500 hover:underline animated bounceIn delay-3s mb-2">
                Register Here
              </a>
            </Link>
            <Link href="/forgot-password" legacyBehavior>
              <a className="block text-blue-500 hover:underline animated bounceIn delay-3s">
                Forgot Password?
              </a>
            </Link>
          </div>
        </div>
      </div>
    )
  );
};

export default Login;
