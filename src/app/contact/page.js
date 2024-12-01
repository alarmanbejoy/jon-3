"use client";

import { useState, useEffect } from "react";

function Page() {
  const [loading, setLoading] = useState(true);

  // Simulate loading effect when component mounts
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // Simulate a 1-second loading
    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  // Handle form submission to simulate loading
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1000); // Simulate loading on form submission
  };

  return (
    <>
      {loading ? (
        // Loading Spinner
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-lg font-medium text-white">Loading...</p>
        </div>
      ) : (
        <section className="bg-black mt-[80px]">
          {/* contact */}
          <div className="contact grid grid-cols-2 items-center gap-10 p-3">
            <div className="contact-form flex flex-col items-end">
              <div className="w-[70%]">
                <h2 className="text-[36px] font-bold leading-[1.2] text-white">
                  We are here to help you shape your body!
                </h2>
                <p className="text-[16px] text-[#646464] font-medium my-[40px]">
                  At Gymate, we are dedicated to helping you achieve the body of your dreams...
                </p>
                <div className="text-white">
                  <h1>Dhaka,Bangladesh </h1>
                  <p>Rampura,block34,road 23 -Dhaka</p>
                </div>
              </div>
            </div>

            <div className="flex items-start w-[70%] h-full py-5">
              <form
                className="text-black flex flex-col gap-2 w-full p-2"
                onSubmit={handleSubmit}
              >
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
                <select name="Select" className="p-3 rounded-md">
                  <option>Cycling</option>
                  <option>Playing</option>
                </select>
                <textarea
                  required
                  placeholder="Comment"
                  cols={5}
                  rows={5}
                  className="p-3 rounded-md"
                />
                <button type="submit" className="bg-red-500 text-white p-3 rounded-sm">
                  Submit
                </button>
              </form>
            </div>
          </div>

          <iframe
            className="my-5"
            src="https://www.google.com/maps/d/embed?mid=1DfFcv3jAM8NAeioBjW_CHwtKL3A&hl=en_US&ehbc=2E312F"
            allowFullScreen=""
            loading="lazy"
            samesite="Strict"
            title="map"
            style={{ width: "100%", height: "35rem", border: "0px" }}
          ></iframe>
        </section>
      )}
    </>
  );
}

export default Page;
