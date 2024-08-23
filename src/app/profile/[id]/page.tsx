import connect from '@/utils/db';
import { ObjectId } from 'mongodb';
import Avatar from '@mui/material/Avatar';
import User from '@/models/User';
import * as React from 'react';

// Define the UserProfileProps interface
interface UserProfileProps {
  params: {
    id: string;
  };
}

const UserProfile = async ({ params }: UserProfileProps) => {
  const { id } = params;

  try {
    // Establish a database connection
    await connect();

    // Fetch user data from the database
    const user = await User.findById(new ObjectId(id)).lean();

    // Log the user object for debugging
    console.log('Fetched user:', user);

    // Handle cases where the user is not found
    if (!user) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-slate-800 text-white">
          <p>User not found.</p>
        </div>
      );
    }

    // Type assertion to inform TypeScript of the user structure
    const userWithAvatar = user as any; // Use 'any' to bypass type error

    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-slate-800 text-white">
        <Avatar
          sx={{
            height: 100,
            width: 100,
            marginBottom: 2,
          }}
          src={userWithAvatar.avatar_url || '/static/images/default-avatar.jpg'}
          alt={`Avatar of ${userWithAvatar.name}`}
        />
        <h1 className="text-4xl mb-4">{userWithAvatar.name}</h1>

        {/* Display the "View Resume" button */}
        {userWithAvatar.image_url && (
          <div className="mt-4">
            <a href={userWithAvatar.image_url} target="_blank" rel="noopener noreferrer">
              <button className="bg-green-500 text-white px-4 py-2 rounded">
                View Resume
              </button>
            </a>
          </div>
        )}

        <p>About Me: {userWithAvatar.aboutMe || 'No information provided.'}</p>
        <p>LinkedIn: {userWithAvatar.linkedin || 'No information provided.'}</p>
        <p>GitHub: {userWithAvatar.github || 'No information provided.'}</p>
      </div>
    );
  } catch (error) {
    console.error('Error fetching user:', error);
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-slate-800 text-white">
        <p>Failed to load user profile.</p>
      </div>
    );
  }
};

export default UserProfile;
