// /app/api/reset/[token]/route.ts
import * as React from 'react';

import connect from "@/utils/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

interface ResetPasswordRequestBody {
  password: string;
}

export async function POST(req: Request, { params }: { params: { token: string } }) {
  await connect();

  const { token } = params;
  const { password }: ResetPasswordRequestBody = await req.json();

  // Validate the new password (example validation: at least 8 characters)
  if (!password || password.length < 8) {
    return new Response(
      JSON.stringify({ error: "Password must be at least 8 characters long" }),
      { status: 400 }
    );
  }

  // Find the user with the matching verifytoken
  const user = await User.findOne({ verifytoken: token });

  if (!user) {
    return new Response(
      JSON.stringify({ error: "Invalid token or user does not exist" }),
      { status: 400 }
    );
  }

  // Hash the new password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Update the user's password and clear the verifytoken
  user.password = hashedPassword;
  user.verifytoken = null;

  try {
    await user.save();
    return new Response(
      JSON.stringify({ message: "Password reset successful" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to reset password:", error);
    return new Response(
      JSON.stringify({ error: "Failed to reset password" }),
      { status: 500 }
    );
  }
}
