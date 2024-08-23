// src/app/api/get_newuser/route.ts
import * as React from 'react';

import { NextResponse } from 'next/server';
import connect from '@/utils/db';
import User from '@/models/User'; // Ensure this path is correct

export async function GET() {
  try {
    await connect();

    // Fetch all users
    const allUsers = await User.find({})
      .select('name avatar_url aboutMe')
      .lean();

    // Shuffle users and select a random subset
    const shuffledUsers = allUsers.sort(() => 0.5 - Math.random());
    const randomUsers = shuffledUsers.slice(0, 10); // Adjust the number as needed

    return NextResponse.json(randomUsers);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
