import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose'; // Import mongoose
import connect from '@/utils/db'; // Import your connect function
import User from '@/models/User'; // Import your User model

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    await connect(); // Ensure the connection is established

    // Convert the id to ObjectId if needed
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return new NextResponse(
        JSON.stringify({ error: 'Invalid user ID' }),
        { status: 400 }
      );
    }

    const user = await User.findById(id).lean(); // Use Mongoose's findById

    if (!user) {
      return new NextResponse(
        JSON.stringify({ error: 'User not found' }),
        { status: 404 }
      );
    }

    return new NextResponse(
      JSON.stringify({ user }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return new NextResponse(
      JSON.stringify({ error: 'Error fetching user profile' }),
      { status: 500 }
    );
  }
}
