import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next"; // Import session handler
import authOptions from '@/authOptions';
import connect from "@/utils/db";
import User from "@/models/User";
import { UploadImage } from "@/app/lib/cloudinary";
interface CustomSession {
  user?: {
    email?: string;
  };
}

connect();

export const POST = async (req: NextRequest) => {
  try {
    // Get the session to retrieve the logged-in user's email
    const session : CustomSession|null = await getServerSession({ req, ...authOptions }); // Use the correct options

    if (!session || !session.user?.email) {
      return new NextResponse(
        JSON.stringify({ error: "Unauthorized: No session or email found" }),
        { status: 401 }
      );
    }

    const email = session.user.email;
    const formData = await req.formData();
    console.log('Received form data:', formData);

    const image = formData.get("image") as File;
    const github = formData.get("github")?.toString();
    const linkedin = formData.get("linkedin")?.toString();
    const aboutMe = formData.get("aboutMe")?.toString();

    console.log('Image:', image);
    console.log('Email:', email);

    if (!image) {
      return new NextResponse(
        JSON.stringify({ error: "No image file provided" }),
        { status: 400 }
      );
    }

    // Upload the image to Cloudinary
    const uploadedImageData = await UploadImage(image, "images");

    // Update the user's data in the database
    const updatedUser = await User.findOneAndUpdate(
      { email },
      {
        $set: {
          image_url: uploadedImageData.secure_url,
          public_id: uploadedImageData.public_id,
          github,
          linkedin,
          aboutMe,
        },
      },
      { new: true }
    );

    if (!updatedUser) {
      return new NextResponse(
        JSON.stringify({ error: "User not found" }),
        { status: 404 }
      );
    }

    return new NextResponse(
      JSON.stringify({ message: "Profile updated successfully", user: updatedUser }),
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error processing request:", error);
    return new NextResponse(
      JSON.stringify({ error: "Failed to process request", details: error.message }),
      { status: 500 }
    );
  }
};
