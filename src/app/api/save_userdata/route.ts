import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import authOptions from "@/authOptions"; // Import your auth options
import connect from "@/utils/db";
import User from "@/models/User";
interface CustomSession {
  user?: {
    email?: string;
  };
}

export async function POST(req: NextRequest) {
  try {
    await connect();

    // Get user session
    const session :CustomSession|null = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json({ error: 'User not authenticated.' }, { status: 401 });
    }

    // Parse the request body as JSON
    const reqPayload = await req.json();
    console.log("Request Payload:", reqPayload);

    // Validate payload
    const { aboutMe, linkedin, github } = reqPayload;
    if (!aboutMe || !linkedin || !github) {
      return NextResponse.json({ error: 'All fields (aboutMe, linkedin, github) are required.' }, { status: 400 });
    }

    // Save data to the database
    const result = await User.updateOne(
      { email: session.user.email }, // Use session.user.email directly
      { $set: { aboutMe, linkedin, github } },
      { upsert: true }
    );

    // Respond with the result
    return NextResponse.json({ message: 'Profile updated successfully.', result }, { status: 200 });
  } catch (error) {
    console.error('Error saving data:', error instanceof Error ? error.message : error);
    return NextResponse.json({ error: 'Failed to save data' }, { status: 500 });
  }
}

// Handle other methods
export async function OPTIONS() {
  return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
}
