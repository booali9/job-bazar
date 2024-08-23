"use client";
import * as React from 'react'; 
import  { useState } from 'react'; 
import Image from 'next/image';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="image-slider relative w-full max-w-full overflow-hidden">
      <Image
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        width={800} // Example width, adjust according to your needs
        height={400} // Example height, adjust according to your needs
        className="w-full h-[calc(100vw/2)] object-cover"
      />
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-r"
      >
        &#9664;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-l"
      >
        &#9654;
      </button>
    </div>
  );
};

export default ImageSlider;
