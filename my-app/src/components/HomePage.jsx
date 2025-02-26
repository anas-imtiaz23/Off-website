import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function HomePage() {
  const navigate = useNavigate();

  const newsHeadlines = [
    "Breaking News for Every Pakistani!",
    "Stay Updated with the Latest Trends!",
    "Empowering Pakistan with Digital Skills!",
  ];

  const [breakingNews, setBreakingNews] = useState(newsHeadlines[0]);
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      index = (index + 1) % newsHeadlines.length;
      setBreakingNews(newsHeadlines[index]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const images = [
    "anas.jpg",
    "usman.jpg",
    "jawad.jpg",
    "shoaib.jpg",
    "anas.jpg",
    "usman.jpg",
    "jawad.jpg",
    "shoaib.jpg",
  ];

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat text-center p-4"
      style={{ backgroundImage: "url('/images/store.jpg')" }}
    >
      <div className="w-full mb-8 bg-black bg-opacity-50 p-4 rounded-lg">
        <h2 className="text-red-600 text-3xl font-bold animate-pulse">
          {breakingNews}
        </h2>
      </div>

      <h1 className="text-black text-5xl md:text-7xl font-extrabold mb-8">
        Introducing the Fastest & Best AI and YouTube Automation Course in
        Pakistan
      </h1>

      <div className="bg-blue-950 p-8 rounded-lg shadow-lg text-center mb-6">
        <p className="text-white text-4xl md:text-5xl font-bold mb-4">
          Enroll Now with the Discounted Price
        </p>
        <p className="text-white text-xl md:text-2xl">
          100% Money Back Guaranteed
        </p>
        <button
          onClick={() => navigate("/form")}
          className="mt-4 bg-white text-purple-600 font-bold py-2 px-6 rounded-lg shadow-md hover:bg-gray-200 transition"
        >
          Enroll Now
        </button>
      </div>

      <p className="text-black font-bold text-xl md:text-2xl mb-8">
        If you enroll today February 19, 2025, you will also get FREE Mentorship
      </p>

      {/* Image Container */}
      <div className="w-full overflow-hidden relative mb-8">
        <div className="flex justify-center">
          <div className="flex overflow-hidden w-[calc(5*6rem)]"> {/* Adjust width to fit 5 images */}
            {images.slice(0, 7).map((image, index) => ( // Show 7 images to allow partial visibility
              <div
                key={index}
                className="relative"
                style={{
                  flex: "0 0 auto",
                  width: "6rem", // Adjust image width
                  height: "6rem", // Adjust image height
                  clipPath: index === 0 ? "inset(0 0 0 50%)" : index === 6 ? "inset(0 50% 0 0)" : "none", // Clip first and last images
                }}
              >
                <img
                  src={`/images/${image}`}
                  alt={`Student ${index + 1}`}
                  className="w-full h-full rounded-full object-cover border-2 border-purple-600 shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="text-black font-bold text-2xl md:text-3xl font-bold mb-8">
        1500+ Students Trained With 4.9+ Ratings ⭐⭐⭐⭐⭐
      </p>

      <p className="text-black  text-3xl font-bold whitespace-nowrap animate-scroll-left py-4">
         🚨 PROOF ALERT 🚨 
      </p>
    </div>
  );
}