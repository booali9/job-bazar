import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import connect from '@/utils/db';
import User from '@/models/User';
import authOptions from '@/authOptions';  // Adjust this path based on your project structure

interface CustomSession {
  user?: {
    email?: string;
  };
}

interface UserType {
  aboutMe?: string;
  linkedin?: string;
  github?: string;
  avatar_url?: string;
}

export async function GET(req: Request) {
  try {
    // Retrieve session using authOptions
    const session: CustomSession | null = await getServerSession(authOptions);

    if (!session || !session.user?.email) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    await connect();
    const user = await User.findOne({ email: session.user.email }).lean();

    // Ensure `user` is not null and has the expected properties
    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // Use type assertion to ensure `user` has the expected shape
    const { aboutMe, linkedin, github, avatar_url } = user as UserType;
    return NextResponse.json({ aboutMe, linkedin, github, avatar_url }, { status: 200 });
  } catch (error) {
    console.error('Error fetching user data:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
