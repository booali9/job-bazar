import { Document } from 'mongoose';

export interface UserDocument extends Document {
  email: string;
  image_url?: string;
  // Add any other fields from your User schema that you want to type
}
