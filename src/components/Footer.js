import React from "react";
import { FiInstagram, FiYoutube, FiFacebook } from "react-icons/fi";
import { GiWeightLiftingUp } from "react-icons/gi";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Logo and Description */}
        <div className="flex flex-col gap-5">
          <h3 className="flex gap-2 items-center text-3xl font-bold text-red-500">
            fi<span className="text-white">T</span>bd <GiWeightLiftingUp />
          </h3>
          <p className="text-gray-300">
            Take your health and body to the next level with our comprehensive
            program designed to help you reach your fitness goals.
          </p>
          <div className="flex gap-5 text-3xl">
            <FiFacebook className="hover:text-red-500 cursor-pointer transition duration-300" />
            <FiInstagram className="hover:text-red-500 cursor-pointer transition duration-300" />
            <FiYoutube className="hover:text-red-500 cursor-pointer transition duration-300" />
          </div>
          <p className="text-sm text-gray-400">
            Privacy Policy | © 2024 Gymate. Designed by arman
          </p>
        </div>

        {/* Our Classes */}
        <div>
          <h2 className="text-2xl font-bold mb-5">Our Classes</h2>
          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-red-500 cursor-pointer transition duration-300">
              Fitness Classes
            </li>
            <li className="hover:text-red-500 cursor-pointer transition duration-300">
              Aerobics Classes
            </li>
            <li className="hover:text-red-500 cursor-pointer transition duration-300">
              Power Yoga
            </li>
            <li className="hover:text-red-500 cursor-pointer transition duration-300">
              Learn Machines
            </li>
            <li className="hover:text-red-500 cursor-pointer transition duration-300">
              Full-body Strength
            </li>
          </ul>
        </div>

        {/* Working Hours */}
        <div>
          <h2 className="text-2xl font-bold mb-5">Working Hours</h2>
          <ul className="space-y-3 text-gray-400">
            <li className="font-bold">Monday - Friday</li>
            <li>7:00am - 9:00pm</li>
            <li className="font-bold">Saturday</li>
            <li>7:00am - 7:00pm</li>
            <li className="font-bold">Sunday</li>
            <li>Closed</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-5 text-center text-sm text-gray-400">
        © 2024 Gymate. All Rights Reserved.
      </div>
    </footer>
  );
}
