"use client";
import * as React from 'react'; 
import { useEffect, useState } from 'react';
import ImageSlider from '@/component/ImageSlider';
import axios from 'axios';
import { Avatar } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

// Updated User interface
interface User {
  _id: string;
  name: string;
  image: string;
  aboutMe: string;
  avatar_url?: string; // Add avatar_url property
}

const Home = () => {
  const images = [
    '/l.png',
    '/j.png',
    '/k.png',
  ];

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/get_newuser');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
        setError('Failed to fetch users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  const animateText = (text: string) => {
    return text.split('').map((char, index) => (
      <span
        key={index}
        className="inline-block"
        style={{
          animation: `bounceIn 1s forwards`,
          animationDelay: `${index * 0.1}s`,
        }}
      >
        {char}
      </span>
    ));
  };

  return (
    <div className="min-h-screen w-full p-6 bg-slate-800 flex flex-col items-center p-4">
      {/* Image Slider Section */}
      <div className="w-full max-w-screen-lg py-20 mb-4">
        <ImageSlider images={images} />
      </div>

      {/* Promotional Text Section */}
      <div className="w-full max-w-screen-lg mb-8 text-center">
        <h2 className="text-white text-2xl font-bold">
          {animateText("Hire Your Dream Employee")}
        </h2>
        <p className="text-gray-300 mt-2">Just in Job Bazar</p>
      </div>

      {/* User Profile Section */}
      <div className="w-full max-w-screen-lg">
        {users.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-center">
            {users.map((user) => (
              <Link key={user._id} href={`/profile/${user._id}`}>
                <div
                  className="bg-slate-700 p-4 rounded-lg shadow-lg text-white flex flex-col items-center cursor-pointer"
                  style={{ width: '180px', height: '300px', margin: '0 auto' }} // Center the card on mobile
                >
                  <Avatar
                    src={user.avatar_url || '/static/images/default-avatar.jpg'}
                    alt={user.name}
                    sx={{ width: 70, height: 70, mb: 2 }} // Adjust avatar size
                  />
                  <h3 className="text-md font-semibold mb-2 text-center">{user.name}</h3>
                  <p className="text-sm text-gray-300 text-center">{user.aboutMe}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-white">No users found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
