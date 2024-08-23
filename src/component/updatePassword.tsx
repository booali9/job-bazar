"use server";

import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function updatePassword({ password, token }: { password: string; token: string }) {
  try {
    // Ensure password and token are provided
    if (!password || !token) {
      return new NextResponse(JSON.stringify({ error: "Password and token are required." }), { status: 400 });
    }

    await connect();

    // Find the user by the verification token
    const user = await User.findOne({ verifytoken: token });

    if (!user) {
      return new NextResponse(JSON.stringify({ error: "Invalid token or user not found." }), { status: 400 });
    }

    // Generate salt and hash the password
    const salt = await bcrypt.genSalt(10);
    const passwordHashed = await bcrypt.hash(password, salt);

    // Update the user's password
    user.password = passwordHashed;
    user.verifytoken = undefined; // Clear the token after successful password reset
    await user.save();

    // Redirect to the login page
    return NextResponse.redirect("/login");
  } catch (error) {
    console.error("Error updating password:", error);
    return new NextResponse(JSON.stringify({ error: "Password reset failed." }), { status: 500 });
  }
}
