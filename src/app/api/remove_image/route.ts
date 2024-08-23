import * as React from 'react';

import { NextRequest, NextResponse } from "next/server";
import { DeleteImage } from "@/app/lib/cloudinary";
import connect from "@/utils/db";
import User from "@/models/User";
import { getServerSession } from "next-auth/next";

 // Import session handler
import authOptions from "@/authOptions";
interface CustomSession {
  user?: {
    email?: string;
  };
}
connect();

export const POST = async (req: NextRequest) => {
  try {
    // Get the session to retrieve the logged-in user's email
    const session : CustomSession|null = await getServerSession(authOptions);

    if (!session || !session.user?.email) {
      return new NextResponse(
        JSON.stringify({ error: "Unauthorized: No session or email found" }),
        { status: 401 }
      );
    }

    const { public_id } = await req.json();

    if (!public_id) {
      return new NextResponse(
        JSON.stringify({ error: "No public_id provided" }),
        { status: 400 }
      );
    }

    // Find the user based on the session email
    const user = await User.findOne({ email: session.user.email });

    if (!user || user.public_id !== public_id) {
      return new NextResponse(
        JSON.stringify({ error: "Image not found or not owned by user" }),
        { status: 404 }
      );
    }

    // Delete the image from Cloudinary
    await DeleteImage(public_id);

    // Remove the image record from the database
    await User.updateOne(
      { email: session.user.email },
      { $unset: { image_url: "", public_id: "" } } // Unset the image fields
    );

    return new NextResponse(JSON.stringify({ success: true }), { status: 200 });
  } catch (error: any) {
    console.error("Error processing request:", error);
    return new NextResponse(
      JSON.stringify({ error: "Failed to process request", details: error.message }),
      { status: 500 }
    );
  }
};
