"use client"; // Add this to mark the component as a Client Component

import About from '@/components/About';
import Image from 'next/image';
import React, { useState } from 'react';

import img1 from "../../../public/images/AboutPage/2.jpg";
import img2 from "../../../public/images/AboutPage/3.jpg";
import img3 from "../../../public/images/GalleryPage/9.jpg";
import img4 from "../../../public/images/call/background.jpg";

export default function Page() {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => setLoading(false);

  return (
    <div>
      <About />
      <div className="about-images flex flex-wrap gap-6 justify-center">
        {/* Loading Spinner */}
        {loading && (
          <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {/* Images */}
        <Image
          src={img1}
          alt="imagee"
          className="w-[30%] about-gallary"
          onLoadingComplete={handleImageLoad}
        />
        <Image
          src={img2}
          alt="imagee"
          className="w-[30%] about-gallary"
          onLoadingComplete={handleImageLoad}
        />
        <Image
          src={img3}
          alt="imagee"
          className="w-[30%] about-gallary"
          onLoadingComplete={handleImageLoad}
        />
        <Image
          src={img4}
          alt="imagee"
          className="w-[100%] about-gallary"
          onLoadingComplete={handleImageLoad}
        />
        <Image
          src={img3}
          alt="imagee"
          className="w-[30%] about-gallary"
          onLoadingComplete={handleImageLoad}
        />
        <Image
          src={img1}
          alt="imagee"
          className="w-[30%] about-gallary"
          onLoadingComplete={handleImageLoad}
        />
      </div>
    </div>
  );
}
