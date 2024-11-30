"use client";

import { useState } from "react";

function AdminDashboard() {
  // Sample trainee data (JSON format)
  const [trainees, setTrainees] = useState([
    { id: 1, name: "arman", email: "arman@example.com", goal: "Weight Loss", level: "Beginner" },
    { id: 2, name: "bejoy", email: "bejoy@example.com", goal: "Muscle Gain", level: "Intermediate" },
  ]);

  const [formData, setFormData] = useState({ name: "", email: "", goal: "", level: "" });

  // Add trainee
  const addTrainee = (e) => {
    e.preventDefault();
    const newTrainee = { id: Date.now(), ...formData };
    setTrainees([...trainees, newTrainee]);
    setFormData({ name: "", email: "", goal: "", level: "" });
  };

  // Delete trainee
  const deleteTrainee = (id) => {
    setTrainees(trainees.filter((trainee) => trainee.id !== id));
  };

  // Update trainee
  const updateTrainee = (id) => {
    const updatedTrainee = trainees.find((trainee) => trainee.id === id);
    setFormData(updatedTrainee);
    deleteTrainee(id);
  };

  return (
    <section className="bg-gray-900 text-white p-10 min-h-screen">
      <h1 className="text-4xl font-bold mb-5">Admin Dashboard</h1>

      {/* Trainee List */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Trainee Information</h2>
        <table className="w-full text-left bg-gray-800 rounded-md overflow-hidden">
          <thead>
            <tr className="bg-gray-700 text-yellow-400">
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Goal</th>
              <th className="p-3">Level</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {trainees.map((trainee) => (
              <tr key={trainee.id} className="hover:bg-gray-700">
                <td className="p-3">{trainee.name}</td>
                <td className="p-3">{trainee.email}</td>
                <td className="p-3">{trainee.goal}</td>
                <td className="p-3">{trainee.level}</td>
                <td className="p-3">
                  <button
                    onClick={() => updateTrainee(trainee.id)}
                    className="bg-blue-500 px-3 py-1 mr-2 rounded-md hover:bg-blue-600"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => deleteTrainee(trainee.id)}
                    className="bg-red-500 px-3 py-1 rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Trainee Form */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Add New Trainee</h2>
        <form onSubmit={addTrainee} className="bg-gray-800 p-5 rounded-md">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-3 rounded-md bg-gray-700 text-white"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-3 rounded-md bg-gray-700 text-white"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Training Goal"
              value={formData.goal}
              onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
              className="w-full p-3 rounded-md bg-gray-700 text-white"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Experience Level"
              value={formData.level}
              onChange={(e) => setFormData({ ...formData, level: e.target.value })}
              className="w-full p-3 rounded-md bg-gray-700 text-white"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-600"
          >
            Add Trainee
          </button>
        </form>
      </div>
    </section>
  );
}

export default AdminDashboard;
