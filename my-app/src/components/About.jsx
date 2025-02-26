import React from "react";
import { FaGraduationCap, FaLaptopCode, FaUsers } from "react-icons/fa";
// import Footer from "./Footer";

function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Hero Section */}
      <header className="bg-teal-600 text-white py-16 text-center">
        <h1 className="text-5xl font-bold">About Us</h1>
        <p className="text-lg mt-2">Empowering individuals through skills & real-world experience.</p>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-6 py-12">
        {/* Welcome Section */}
        <section className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">Who We Are</h2>
          <p className="text-lg text-gray-600 mt-3">
            We provide hands-on courses in **YouTube Automation, Social Media Marketing, and Internships**, helping learners 
            turn their **passion into careers** with real-world skills.
          </p>
        </section>

        {/* Courses Section */}
        <section className="grid md:grid-cols-3 gap-8 text-center">
          {/* Course 1 */}
          <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition">
            <FaGraduationCap className="text-teal-600 text-5xl mx-auto" />
            <h3 className="text-xl font-semibold mt-4">YouTube Automation</h3>
            <p className="text-gray-600 mt-2">
              Learn how to **automate your YouTube channel**, create content efficiently, and grow your audience.
            </p>
          </div>

          {/* Course 2 */}
          <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition">
            <FaLaptopCode className="text-teal-600 text-5xl mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Social Media Marketing</h3>
            <p className="text-gray-600 mt-2">
              Master **social media strategies** to increase engagement, grow businesses, and build an online presence.
            </p>
          </div>

          {/* Course 3 */}
          <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition">
            <FaUsers className="text-teal-600 text-5xl mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Internship Programs</h3>
            <p className="text-gray-600 mt-2">
              Gain **real-world experience** through internships, working on live projects with industry professionals.
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mt-16 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Why Choose Us?</h2>
          <p className="text-lg text-gray-600 mt-3">
            Our **expert-led courses** provide hands-on learning, real-world case studies, and job-ready skills.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6 mt-6">
            <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/3">
              <h3 className="text-xl font-semibold text-teal-600">Expert Instructors</h3>
              <p className="text-gray-600 mt-2">Learn from industry professionals with real-world experience.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/3">
              <h3 className="text-xl font-semibold text-teal-600">Practical Learning</h3>
              <p className="text-gray-600 mt-2">Hands-on projects and case studies for real-world skills.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/3">
              <h3 className="text-xl font-semibold text-teal-600">Career Support</h3>
              <p className="text-gray-600 mt-2">Internship & career guidance to help you land your dream job.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Get Started Today</h2>
          <p className="text-lg text-gray-600 mt-3">Join thousands of students taking their careers to the next level.</p>
          <button className="mt-6 px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition">
            Enroll Now
          </button>
        </section>
      </main>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
}

export default AboutUs;
