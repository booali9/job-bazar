import * as React from 'react'; 
import  { useEffect, useState } from "react";
import axios from "axios";
import Image from 'next/image';


const UploadImage = () => {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<boolean>(false);
  const [storedImageUrl, setStoredImageUrl] = useState<string | null>(null);
  const [storedImagePublicId, setStoredImagePublicId] = useState<string | null>(null); // Track public_id
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async () => {
    if (image) {
      const formData = new FormData();
      formData.append("image", image);

      try {
        const response = await fetch("/api/upload_image", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const result = await response.json();
          setStoredImageUrl(result.url);
          setStoredImagePublicId(result.public_id); // Save public_id
          setViewMode(true);
          setIsEditing(false);
          setImage(null); // Clear selected image after upload
          setPreview(null); // Clear preview after upload
        } else {
          const result = await response.json();
          console.error("Failed to upload image:", result);
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  const fetchStoredImage = async () => {
    try {
      const response = await axios.get("/api/get_imagedata");
      if (response.data.url) {
        setStoredImageUrl(response.data.url);
        setStoredImagePublicId(response.data.public_id); // Fetch and save public_id
        setViewMode(true);
      }
    } catch (error: any) {
      console.error("Error fetching stored image:", error.message);
    }
  };

  const handleRemoveImage = async () => {
    if (storedImagePublicId) {
      try {
        const response = await fetch("/api/remove_image", {
          method: "POST",
          body: JSON.stringify({ public_id: storedImagePublicId }),
          headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
          setStoredImageUrl(null);
          setPreview(null);
          setViewMode(false);
          setStoredImagePublicId(null); // Clear public_id
          setImage(null); // Clear image state
        } else {
          const result = await response.json();
          console.error("Failed to delete image:", result);
        }
      } catch (error) {
        console.error("Error deleting image:", error);
      }
    }
  };

  useEffect(() => {
    fetchStoredImage();
  }, []);

  return (
    <div className="upload-image-component">
      {!viewMode ? (
        <div>
          <input
            type="file"
            onChange={handleImageChange}
            accept="image/*"
            className="text-white"
          />
          {image && (
            <button
              onClick={handleUpload}
              className="bg-green-500 text-white px-4 py-2 rounded mt-2"
            >
              Upload Image
            </button>
          )}
        </div>
      ) : (
        <div className="px-10 flex flex-wrap gap-x-5">
          {storedImageUrl ? (
            <div>
            
              <div className="flex flex-col gap-y-2 mt-2">
                <button
                  onClick={() => window.open(storedImageUrl, "_blank")}
                  className="bg-green-500 text-white px-4 py-2 rounded mb-2"
                >
                  View Resume
                </button>
                {isEditing ? (
                  <div className="flex flex-col gap-y-2">
                    <input
                      type="file"
                      onChange={handleImageChange}
                      accept="image/*"
                      className="text-white"
                    />
                    {preview && (
                      <button
                        onClick={handleUpload}
                        className="bg-green-500 text-white px-4 py-2 rounded mb-2"
                      >
                        Replace Image
                      </button>
                    )}
                    <button
                      onClick={() => setIsEditing(false)}
                      className="bg-green-500 text-white px-4 py-2 rounded mb-2"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-y-2">
                    <button
                      onClick={() => setIsEditing(true)}
                      className="bg-green-500 text-white px-4 py-2 rounded mb-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={handleRemoveImage}
                      className="bg-green-500 text-white px-4 py-2 rounded mb-2"
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            preview && (
              <div>
                <Image src={preview} alt="Uploaded Image" className="w-full h-auto mt-4" />
                <div className="flex flex-col gap-y-2 mt-2">
                  <button
                    onClick={() => setIsEditing(false)}
                    className="bg-green-500 text-white px-4 py-2 rounded mb-2"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleUpload}
                    className="bg-green-500 text-white px-4 py-2 rounded mb-2"
                  >
                    Upload Image
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default UploadImage;
