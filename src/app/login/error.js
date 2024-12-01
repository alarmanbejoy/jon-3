"use client";

import { useRouter } from "next/navigation";

export default function ErrorPage() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/login"); // Redirect to the login page
  };

  return (
    <section className="min-h-screen flex justify-center items-center bg-gradient-to-r from-white via-orange-100 to-white">
      <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-md relative">
        <h2 className="text-4xl font-extrabold text-center text-gray-800">
          Oops! Something went wrong.
        </h2>
        <p className="text-center text-gray-500 mt-2">
          We encountered an error while processing your request. Please try again later.
        </p>

        <button
          onClick={handleRedirect}
          className="mt-6 py-2 px-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-lg hover:from-red-500 hover:to-orange-500 transition-all duration-300 shadow-lg transform hover:scale-105"
        >
          Go Back to Login
        </button>
      </div>
    </section>
  );
}
