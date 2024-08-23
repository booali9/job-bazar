import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema(
  {
   
   
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: false,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: false,
    },
    verifytoken:{
      type:String,
      
    },
    aboutMe: {
      type: String,
      default: '', // Default empty string if not provided
    },
    linkedin: {
      type: String,
      default: '',
    },
    github: {
      type: String,
      default: '',
    },
    image_url: {
      type: String,
      required: false,
    },
    public_id: {
      type: String,
      required: false,
    },
    avatar_url:{
      type:String,
      required:false,
    },
    
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model('User', userSchema);
