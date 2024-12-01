"use client"; // Ensure this component is a Client Component

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Hero from '../components/Hero';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // Simulate loading time
    return () => clearTimeout(timer); // Clean up timeout on unmount
  }, []);

  return (
    <div>
      {loading ? (
        // Loading Spinner
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-lg font-medium text-gray-700">Loading...</p>
        </div>
      ) : (
        // Main Content
        <Hero />
      )}
    </div>
  );
}
