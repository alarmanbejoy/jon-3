function page() {
    return (
      <>
        <section className="bg-blue-800 mt-[80px]">
          {/* registration */}
          <div className="registration grid grid-cols-2 items-center gap-10 p-3">
            <div className="registration-form flex flex-col items-end">
              <div className="w-[70%]">
                <h2 className="text-[36px] font-bold leading-[1.2] text-white">
                  Register Now and Start Your Fitness Journey!
                </h2>
                <p className="text-[16px] text-[#D1D1D1] font-medium my-[40px]">
                  Join Gymate today to kick-start your personalized fitness journey. Our expert trainers will guide you every step of the way towards achieving your goals!
                </p>
                <div>
                  <h1 className="text-white">Mumbai Maharashtra</h1>
                  <p className="text-[#D1D1D1]">85 Briston Mint Street, Mumbai, E1 8LG, Maharashtra</p>
                </div>
              </div>
            </div>
  
            <div className="flex items-start w-[70%] h-full py-5">
              <form className="text-black flex flex-col gap-4 w-full p-2">
                <input
                  type="text"
                  required
                  placeholder="Full Name *"
                  className="p-3 rounded-md"
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address *"
                  className="p-3 rounded-md"
                />
                <input
                  type="text"
                  required
                  placeholder="Phone Number *"
                  className="p-3 rounded-md"
                />
                <select name="Select" className="p-3 rounded-md">
                  <option>Choose Your Training Goal</option>
                  <option>Weight Loss</option>
                  <option>Muscle Gain</option>
                  <option>General Fitness</option>
                </select>
                <select name="Experience Level" className="p-3 rounded-md">
                  <option>Experience Level</option>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
                <textarea
                  type="text"
                  required
                  placeholder="Why do you want to join?"
                  cols={5}
                  rows={5}
                  className="p-3 rounded-md"
                />
                <button
                  type="submit"
                  className="bg-yellow-500 text-white p-3 rounded-sm hover:bg-yellow-600"
                >
                  Register Now
                </button>
              </form>
            </div>
          </div>
        </section>
      </>
    );
  }
  
  export default page;
  