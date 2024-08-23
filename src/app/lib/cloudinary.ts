import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const UploadImage = async (file: File, folder: string): Promise<any> => {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.v2.uploader.upload_stream(
        {
          resource_type: "auto",
          folder: folder,
        },
        (error, result) => {
          if (error) {
            console.error("Cloudinary upload error:", error);
            return reject(error);
          }
          resolve(result);
        }
      );

      uploadStream.end(buffer);
    });
  } catch (error) {
    console.error("Error in UploadImage function:", error);
    throw new Error("Failed to upload image");
  }
};
export const DeleteImage = async (public_id: string): Promise<any> => {
  try {
    return new Promise((resolve, reject) => {
      cloudinary.v2.uploader.destroy(public_id, (error, result) => {
        if (error) {
          console.error("Cloudinary delete error:", error);
          return reject(error);
        }
        resolve(result);
      });
    });
  } catch (error) {
    console.error("Error in DeleteImage function:", error);
    throw new Error("Failed to delete image");
  }
};