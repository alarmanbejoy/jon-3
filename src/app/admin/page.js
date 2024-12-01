"use client";

import { useState } from "react";

function AdminDashboard() {
  const [trainees, setTrainees] = useState([
    { id: 1, name: "Arman", email: "arman@example.com", goal: "Weight Loss", level: "Beginner" },
    { id: 2, name: "Bejoy", email: "bejoy@example.com", goal: "Muscle Gain", level: "Intermediate" },
  ]);

  const [formData, setFormData] = useState({ name: "", email: "", goal: "", level: "" });
  const [loading, setLoading] = useState(false);

  // Add trainee
  const addTrainee = async (e) => {
    e.preventDefault();
    setLoading(true);
    const newTrainee = { id: Date.now(), ...formData };
    setTimeout(() => {
      setTrainees([...trainees, newTrainee]);
      setFormData({ name: "", email: "", goal: "", level: "" });
      setLoading(false);
    }, 1000); // Simulate loading time
  };

  // Delete trainee
  const deleteTrainee = (id) => {
    setLoading(true);
    setTimeout(() => {
      setTrainees(trainees.filter((trainee) => trainee.id !== id));
      setLoading(false);
    }, 1000); // Simulate loading time
  };

  // Update trainee
  const updateTrainee = (id) => {
    setLoading(true);
    setTimeout(() => {
      const updatedTrainee = trainees.find((trainee) => trainee.id === id);
      setFormData(updatedTrainee);
      setTrainees(trainees.filter((trainee) => trainee.id !== id));
      setLoading(false);
    }, 1000); // Simulate loading time
  };

  return (
    <section className="bg-gray-900 text-white p-10 min-h-screen">
      <h1 className="text-4xl font-bold mb-5">Admin Dashboard</h1>

      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-lg font-medium text-white">Loading...</p>
        </div>
      ) : (
        <>
          {/* Trainee List */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Trainee Information</h2>
            <div className="space-y-4">
              {trainees.map((trainee) => (
                <div key={trainee.id} className="bg-gray-800 p-4 rounded-md">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center">
                      <div className="mb-2 sm:mb-0 sm:mr-4">
                        <p className="font-semibold">Name:</p>
                        <p>{trainee.name}</p>
                      </div>
                      <div className="mb-2 sm:mb-0 sm:mr-4">
                        <p className="font-semibold">Email:</p>
                        <p>{trainee.email}</p>
                      </div>
                      <div className="mb-2 sm:mb-0 sm:mr-4">
                        <p className="font-semibold">Goal:</p>
                        <p>{trainee.goal}</p>
                      </div>
                      <div className="mb-2 sm:mb-0 sm:mr-4">
                        <p className="font-semibold">Level:</p>
                        <p>{trainee.level}</p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 mt-4 sm:mt-0">
                      <button
                        onClick={() => updateTrainee(trainee.id)}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full sm:w-auto"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => deleteTrainee(trainee.id)}
                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 w-full sm:w-auto"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
        </>
      )}
    </section>
  );
}

export default AdminDashboard;
