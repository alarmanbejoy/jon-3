"use client";

import { useState } from "react";

function TraineeDashboard() {
  // Sample class data (JSON format)
  const [classes, setClasses] = useState([
    {
      id: 1,
      title: "Morning Yoga",
      date: "2024-12-05",
      time: "7:00 AM - 8:00 AM",
      trainer: "Alex Johnson",
    },
    {
      id: 2,
      title: "Strength Training",
      date: "2024-12-06",
      time: "5:00 PM - 6:00 PM",
      trainer: "Emily Davis",
    },
  ]);

  return (
    <div className="p-5 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-5 text-center sm:text-4xl">
        Trainee Dashboard
      </h1>

      {/* Responsive Class List */}
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

      {/* Class Summary Section */}
      <div className="mt-8 p-5 bg-gray-800 rounded-md">
        <h2 className="text-2xl font-semibold mb-3">Class Summary</h2>
        <p className="text-gray-300">
          You are currently enrolled in <span className="font-bold">{classes.length}</span>{" "}
          classes. Stay committed and achieve your fitness goals!
        </p>
      </div>
    </div>
  );
}

export default TraineeDashboard;
