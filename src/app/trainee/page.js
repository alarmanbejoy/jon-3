"use client";

import { useState } from "react";

function TraineeDashboard() {
  const [classes, setClasses] = useState([
    {
      id: 1,
      title: "Morning Yoga",
      date: "2024-12-05",
      time: "7:00 AM - 8:00 AM",
      trainer: "arman",
    },
    {
      id: 2,
      title: "Strength Training",
      date: "2024-12-06",
      time: "5:00 PM - 6:00 PM",
      trainer: "bejoy",
    },
  ]);
  
  const [loading, setLoading] = useState(false);

  // Simulate adding a class
  const addClass = () => {
    setLoading(true);
    setTimeout(() => {
      setClasses([
        ...classes,
        {
          id: Date.now(),
          title: "Cardio Blast",
          date: "2024-12-07",
          time: "6:00 AM - 7:00 AM",
          trainer: "Chris",
        },
      ]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="p-5 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-5 text-center sm:text-4xl">
        Trainee Dashboard
      </h1>

      {loading ? (
        <div className="flex justify-center items-center my-10">
          <div className="w-12 h-12 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
          <span className="ml-3 text-lg">Loading...</span>
        </div>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm sm:text-base">
              <thead className="bg-gray-800">
                <tr>
                  <th className="p-3">Class Title</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Time</th>
                  <th className="p-3">Trainer</th>
                </tr>
              </thead>
              <tbody>
                {classes.map((classInfo) => (
                  <tr key={classInfo.id} className="hover:bg-gray-700">
                    <td className="p-3 whitespace-nowrap">{classInfo.title}</td>
                    <td className="p-3 whitespace-nowrap">{classInfo.date}</td>
                    <td className="p-3 whitespace-nowrap">{classInfo.time}</td>
                    <td className="p-3 whitespace-nowrap">{classInfo.trainer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-5 bg-gray-800 rounded-md">
            <h2 className="text-2xl font-semibold mb-3">Class Summary</h2>
            <p className="text-gray-300">
              {classes.length > 0 ? (
                <>
                  You are currently enrolled in{" "}
                  <span className="font-bold">{classes.length}</span> classes.
                  Stay committed and achieve your fitness goals!
                </>
              ) : (
                "No classes enrolled yet. Add a class to get started!"
              )}
            </p>
          </div>

          <div className="mt-5 text-center">
            <button
              onClick={addClass}
              className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-600"
            >
              Add a New Class
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TraineeDashboard;
