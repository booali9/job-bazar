import { NextRequest, NextResponse } from "next/server";
import connect from "@/utils/db";
import User from "@/models/User"; // Ensure UserDocument type is imported if you defined it
import { getServerSession } from "next-auth/next";
import authOptions from "@/authOptions";



connect();

// Define the custom session interface
interface CustomSession {
  user?: {
    email?: string;
  };
}

// Define the UserDocument interface if it's not already defined in User model
interface UserDocument {
  email: string;
  image_url?: string;
}

export const GET = async (req: NextRequest) => {
  try {
    // Get the session to retrieve the logged-in user's email
    const session: CustomSession | null = await getServerSession(authOptions);

    if (!session || !session.user?.email) {
      return new NextResponse(
        JSON.stringify({ error: "Unauthorized: No session or email found" }),
        { status: 401 }
      );
    }

    const email = session.user.email;

    // Fetch the user's data based on their email
    const user: UserDocument | null = await User.findOne({ email }).lean();

    if (!user || !user.image_url) {
      return new NextResponse(
        JSON.stringify({ message: "No image found for this user" }),
        { status: 404 }
      );
    }

    return new NextResponse(
      JSON.stringify({ url: user.image_url }),
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error fetching image:", error);
    return new NextResponse(
      JSON.stringify({ error: "Failed to fetch image", details: error.message }),
      { status: 500 }
    );
  }
};
