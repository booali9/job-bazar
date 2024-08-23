import * as React from 'react';

import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

// Define a TypeScript interface for the request body
interface RegisterRequestBody {
  name: string;
  email: string;
  password: string;
}

export const POST = async (request: Request) => {
  try {
    // Parse and validate the request body
    const { name, email, password }: RegisterRequestBody = await request.json();

    if (!name || !email || !password) {
      return new NextResponse("All fields are required", { status: 400 });
    }

    await connect();

    // Check if the user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return new NextResponse("Email is already in use", { status: 400 });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); // Increased cost factor for security

    // Create a new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    return new NextResponse("User is registered", { status: 201 }); // Use 201 for created resource

  } catch (err: any) {
    console.error("Error during registration", err);
    return new NextResponse(err.message || "Error registering user", {
      status: 500,
    });
  }
};
