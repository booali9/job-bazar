import connect from '@/utils/db';
import { ObjectId } from 'mongodb';
import Avatar from '@mui/material/Avatar';
import User from '@/models/User';
import * as React from 'react';

interface UserProfileProps {
  params: {
    id: string;
  };
}

const UserProfile = async ({ params }: UserProfileProps) => {
  const { id } = params;

  try {
    await connect();
    const user = await User.findById(new ObjectId(id)).lean();
    console.log('Fetched user:', user);

    if (!user) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-slate-800 text-white">
          <p>User not found.</p>
        </div>
      );
    }

    const userWithAvatar = user as any; 

    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-slate-800 text-white">
        <Avatar
          sx={{
            height: { xs: 80, sm: 100 }, // Responsive size for avatar
            width: { xs: 80, sm: 100 },
            marginBottom: 2,
          }}
          src={userWithAvatar.avatar_url || '/static/images/default-avatar.jpg'}
          alt={`Avatar of ${userWithAvatar.name}`}
        />
        <h1 className="text-2xl sm:text-4xl mb-4 text-center">{userWithAvatar.name}</h1>

        {userWithAvatar.image_url && (
          <div className="mt-4">
            <a href={userWithAvatar.image_url} target="_blank" rel="noopener noreferrer">
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">
                View Resume
              </button>
            </a>
          </div>
        )}

        <div className="w-full max-w-lg text-center mt-4">
          <p className="mb-2">About Me: {userWithAvatar.aboutMe || 'No information provided.'}</p>
          <p className="mb-2">LinkedIn: {userWithAvatar.linkedin || 'No information provided.'}</p>
          <p className="mb-2">GitHub: {userWithAvatar.github || 'No information provided.'}</p>
        </div>
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
