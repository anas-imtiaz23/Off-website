import React from "react";

const Services = () => {
  const services = [
    {
      title: "YouTube Automation",
      description:
        "Grow and manage your YouTube channel efficiently with our automation strategies.",
      icon: "🎥",
    },
    {
      title: "Social Media Marketing",
      description:
        "Boost your online presence with our expert social media marketing services.",
      icon: "📱",
    },
    {
      title: "Facebook Marketing",
      description:
        "Increase engagement and reach with targeted Facebook marketing campaigns.",
      icon: "📘",
    },
    {
      title: "Internships for Students",
      description:
        "Gain hands-on experience with our internship programs tailored for students.",
      icon: "🎓",
    },
    {
      title: "Call Center Services",
      description:
        "Enhance your customer support with our professional call center solutions.",
      icon: "☎️",
    },
    {
      title: "Web Development",
      description:
        "Build high-quality websites tailored to your business needs.",
      icon: "💻",
    },
    {
      title: "Frontend Development",
      description:
        "Craft stunning and responsive user interfaces with modern frontend technologies.",
      icon: "🎨",
    },
    {
      title: "Backend Development",
      description:
        "Develop scalable and secure backend systems for web applications.",
      icon: "🛠️",
    },
    {
      title: "UI/UX Design",
      description:
        "Enhance user experience with intuitive and aesthetically pleasing designs.",
      icon: "🖌️",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-700">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
