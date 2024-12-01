"use client"; // Mark as Client Component

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import PricingCard from "../../components/PricingCard";

import img4 from "../../../public/images/call/background.jpg";
import img1 from "../../../public/images/classes/fitness.jpg";
import img2 from "../../../public/images/classes/karate.jpg";
import img3 from "../../../public/images/classes/powerlifting.jpg";

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // Simulate loading
    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <div>
      {loading ? (
        // Loading Spinner
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-lg font-medium text-gray-700">Loading...</p>
        </div>
      ) : (
        <div className="pricing pb-5 mt-[80px]">
          <Image src={img4} alt="banner" />
          <div className="flex justify-evenly items-center gap-y-10 m-10 pricing">
            <PricingCard img={img1} price={"49"} type={"Beginner"} />
            <PricingCard img={img2} price={"79"} type={"Intermediate"} />
            <PricingCard img={img3} price={"99"} type={"Advance"} />
          </div>
        </div>
      )}
    </div>
  );
}
