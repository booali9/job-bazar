import { NextRequest, NextResponse } from 'next/server';
import { UploadImage } from '@/app/lib/cloudinary';
import connect from '@/utils/db';
import User from '@/models/User';
import { getServerSession } from 'next-auth/next';
import { AuthOptions } from 'next-auth';
import authOptions from '@/authOptions';
interface CustomSession {
  user?: {
    email?: string;
  };
}

connect();

export const POST = async (req: NextRequest) => {
  try {
    // Get the session to retrieve the logged-in user's email
    const session: CustomSession|null = await getServerSession(authOptions); // Ensure you pass authOptions

    if (!session || !session.user?.email) {
      return new NextResponse(JSON.stringify({ error: "Unauthorized: No session or email found" }), {
        status: 401,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    const email = session.user.email;
    const formData = await req.formData();
    const image = formData.get('image') as File;

    if (!image) {
      return new NextResponse(JSON.stringify({ error: "No image file provided" }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    const uploadedImageData = await UploadImage(image, 'images');

    const updatedUser = await User.findOneAndUpdate(
      { email },
      {
        $set: {
          avatar_url: uploadedImageData.secure_url,
          public_id: uploadedImageData.public_id,
        },
      },
      { new: true }
    );

    if (!updatedUser) {
      return new NextResponse(JSON.stringify({ error: "User not found" }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    return new NextResponse(JSON.stringify({ message: "Profile updated successfully", user: updatedUser }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error: any) {
    console.error('Error processing request:', error);
    return new NextResponse(JSON.stringify({ error: "Failed to process request", details: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
