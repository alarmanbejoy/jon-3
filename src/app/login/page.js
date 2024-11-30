import Link from "next/link"; // Importing Link from Next.js

function page() {
  return (
    <>
      <section className="bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-700 min-h-screen flex justify-center items-center">
        <div className="login-container bg-white p-10 rounded-xl shadow-2xl relative overflow-hidden w-[400px]">
          <div className="absolute w-[300px] h-[300px] bg-pink-400 rounded-full top-[-80px] left-[-80px] opacity-50 animate-pulse"></div>
          <div className="absolute w-[250px] h-[250px] bg-yellow-300 rounded-full bottom-[-70px] right-[-70px] opacity-50 animate-ping"></div>

          <h2 className="text-4xl font-bold text-center text-gray-800">
            Welcome Back!
          </h2>
          <p className="text-center text-gray-600 mt-2">
            Log in to your account to continue.
          </p>

          <form className="flex flex-col gap-5 mt-8">
            {/* Email Field */}
            <input
              type="email"
              required
              placeholder="Email Address *"
              className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
            {/* Password Field */}
            <input
              type="password"
              required
              placeholder="Password *"
              className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
            {/* Forgot Password Link */}
            <div className="flex justify-between items-center text-sm">
              <Link href="/forgot-password" className="text-purple-500 hover:underline">
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-3 rounded-md hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-500 transition-all duration-300"
            >
              Log In
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default page;
