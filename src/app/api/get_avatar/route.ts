import { NextRequest, NextResponse } from 'next/server';
import connect from '@/utils/db';
import User from '@/models/User';
import { getServerSession } from 'next-auth/next';
import authOptions from '@/authOptions';

// Define a custom session interface
interface CustomSession {
  user?: {
    email?: string;
  };
}

export const GET = async (req: NextRequest) => {
  try {
    // Ensure database connection
    await connect();

    // Get the session to retrieve the logged-in user's email
    const session: CustomSession | null = await getServerSession(authOptions);

    if (!session || !session.user?.email) {
      return new NextResponse(
        JSON.stringify({ error: 'Unauthorized: No session or email found' }),
        {
          status: 401,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    const email = session.user.email;

    // Find the user by email
    const user = await User.findOne({ email }).lean(); // Use lean() for better performance

    if (!user) {
      return new NextResponse(
        JSON.stringify({ error: 'User not found' }),
        {
          status: 404,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    return new NextResponse(
      JSON.stringify({ user }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error:any) {
    console.error('Error retrieving user data:', error);
    return new NextResponse(
      JSON.stringify({ error: 'Failed to retrieve user data', details: error.message }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
};
