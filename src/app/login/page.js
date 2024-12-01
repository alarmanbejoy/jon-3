"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(""); // Clear previous error message

    // Simulate an API call for login validation
    setTimeout(() => {
      if (email === "test@example.com" && password === "password123") {
        router.push("/dashboard"); // Redirect to dashboard if credentials are correct
      } else {
        setErrorMessage("Invalid email or password. Please try again.");
      }
      setLoading(false);
    }, 1000); // Simulating network delay
  };

  return (
    <section className="min-h-screen flex justify-center items-center bg-gradient-to-r from-white via-orange-100 to-white">
      <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-md relative">
        <div className="absolute w-40 h-40 bg-orange-200 rounded-full top-[-60px] left-[-60px] opacity-50 animate-pulse"></div>
        <div className="absolute w-32 h-32 bg-yellow-200 rounded-full bottom-[-40px] right-[-40px] opacity-50 animate-bounce"></div>

        <h2 className="text-4xl font-extrabold text-center text-gray-800">
          Welcome to Fitbd Gym!
        </h2>
        <p className="text-center text-gray-500 mt-2">
          Log in to access your personalized fitness dashboard.
        </p>

        {errorMessage && (
          <p className="text-red-500 text-center mt-4">{errorMessage}</p>
        )}

        <form onSubmit={handleLogin} className="mt-8 space-y-6">
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none transition duration-300"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none transition duration-300"
              required
            />
          </div>

          <div className="flex justify-between items-center">
            <a
              href="/forgot-password"
              className="text-orange-500 hover:text-orange-700 text-sm"
            >
              Forgot Password?
            </a>
            <p className="text-gray-500 text-sm">
              New to FitLife?{" "}
              <Link href="/registration" className="text-orange-500 hover:text-orange-700">
                Sign Up
              </Link>
            </p>
          </div>

          <button
            type="submit"
            className={`w-full py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-lg hover:from-red-500 hover:to-orange-500 transition-all duration-300 shadow-lg transform hover:scale-105 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? (
              <div className="flex justify-center items-center">
                <div className="animate-spin w-6 h-6 border-4 border-t-4 border-orange-500 rounded-full"></div>
              </div>
            ) : (
              "Log In"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

export default LoginPage;
