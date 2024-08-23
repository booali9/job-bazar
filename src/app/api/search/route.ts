import * as React from 'react';

import connect  from "@/utils/db";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query')?.trim() || '';

  console.log('Received search query:', query);

  if (!query) {
    return NextResponse.json({ error: 'Query is required' }, { status: 400 });
  }

  try {
    console.log('Attempting to connect to the database...');
    await connect();
    console.log('Database connected successfully');

    const users = await User.find({
      $or: [
        { name: { $regex: query, $options: 'i' } },
        { email: { $regex: query, $options: 'i' } }
      ]
    }).exec();

    console.log('Search results:', users.length, 'users found');
    return NextResponse.json({ results: users });
  } catch (error:any) {
    console.error('Error details:', error);

    // Try extracting more detailed information from the error object
    const errorMessage = error.message || 'An unknown error occurred';
    const errorStack = error.stack || 'No stack trace available';

    return NextResponse.json({
      error: 'Failed to search users',
      details: {
        message: errorMessage,
        stack: errorStack,
        name: error.name || 'UnknownError',
      }
    }, { status: 500 });
  }
}
