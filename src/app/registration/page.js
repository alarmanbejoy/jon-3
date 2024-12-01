"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

function RegistrationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simple validation
    if (!formData.email.includes("@") || formData.password.length < 6) {
      setError("Please enter a valid email and a password with at least 6 characters.");
      setLoading(false);
      return;
    }

    // Mock API call for registration
    setTimeout(() => {
      setMessage("Registration successful! Please log in.");
      setFormData({ name: "", email: "", password: "" }); // Clear the form fields
      setTimeout(() => {
        router.push("/login"); // Redirect to the login page after 2 seconds
      }, 2000);
    }, 1000);
  };

  return (
    <section className="min-h-screen flex justify-center items-center bg-gradient-to-r from-white via-orange-100 to-white">
      <div className="registration flex justify-center items-center p-6 w-full">
        <div className="registration-form flex flex-col items-center w-full max-w-lg mx-auto bg-white p-8 rounded-lg shadow-2xl relative">
          <div className="absolute w-40 h-40 bg-orange-200 rounded-full top-[-60px] left-[-60px] opacity-50 animate-pulse"></div>
          <div className="absolute w-32 h-32 bg-yellow-200 rounded-full bottom-[-40px] right-[-40px] opacity-50 animate-bounce"></div>

          <h2 className="text-4xl font-extrabold text-center text-gray-800">Register Now</h2>
          <p className="text-center text-gray-500 mt-2">
            Join Gymate today and take the first step toward your fitness journey.
            Complete your registration to get started with personalized training plans.
          </p>

          {message && <p className="text-green-500 text-lg font-semibold mt-4">{message}</p>}
          {error && <p className="text-red-500 text-lg font-semibold mt-4">{error}</p>}

          <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Full Name *"
              className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none transition duration-300"
              aria-label="Full Name"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email Address *"
              className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none transition duration-300"
              aria-label="Email Address"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Password *"
              className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none transition duration-300"
              aria-label="Password"
            />

            <button
              type="submit"
              className={`w-full py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-lg hover:from-red-500 hover:to-orange-500 transition-all duration-300 shadow-lg transform hover:scale-105 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {loading ? "Registering..." : "Register Now"}
            </button>
          </form>

          <p className="mt-4 text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-orange-500 hover:text-orange-700">
              Login here
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default RegistrationPage;
