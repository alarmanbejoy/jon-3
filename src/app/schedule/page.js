"use client";

import Daycard from "@/components/Daycard";
import { useState, useEffect } from "react";

export default function Page() {
  const [day, setDay] = useState(0);
  const [loading, setLoading] = useState(false);

  // Simulate a loading delay when changing the day
  const handleDayChange = (newDay) => {
    setLoading(true);
    setTimeout(() => {
      setDay(newDay);
      setLoading(false);
    }, 500); // Simulated delay (500ms)
  };

  return (
    <div className="min-h-[50vh] mt-[100px]">
      {/* Day Selection Buttons */}
      <div className="flex items-center justify-center mt-10">
        <div className="schedule flex justify-evenly w-[50%]">
          {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(
            (dayName, index) => (
              <button
                key={index}
                className="p-2 rounded-2xl hover:bg-red-500 hover:text-white border-2"
                onClick={() => handleDayChange(index)}
                style={
                  day == index
                    ? { backgroundColor: "red", color: "white" }
                    : { backgroundColor: "white", color: "black" }
                }
              >
                {dayName}
              </button>
            )
          )}
        </div>
      </div>

      {/* Loading Spinner */}
      {loading ? (
        <div className="flex justify-center items-center mt-10">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="ml-4 text-lg font-medium text-gray-700">Loading...</p>
        </div>
      ) : (
        // Show Daycard when not loading
        <div className="mt-10">
          <Daycard day={day} />
        </div>
      )}
    </div>
  );
}
