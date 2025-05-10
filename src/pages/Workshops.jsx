import React from 'react';

const Workshops = () => {
  return (
    <div className="min-h-screen w-screen bg-[#F1F8FC] flex flex-col items-center justify-center">
      <h1 className="text-4xl font-semibold text-[#2A9D8F] mb-8">Workshops</h1>
      <p className="text-lg text-[#607D8B] max-w-3xl text-center">
        Our workshops focus on building resilience, managing stress, and promoting personal growth. Join us for interactive sessions that help you thrive!
      </p>
      <div className="mt-8 max-w-4xl text-center">
        <h2 className="text-3xl font-semibold text-[#2A9D8F] mb-4">Upcoming Workshops</h2>
        <ul className="list-disc list-inside text-lg text-[#607D8B] space-y-4">
          <li><strong>Stress Management 101:</strong> Learn techniques to reduce stress and boost productivity. <span className="text-[#2A9D8F]">Date: March 5, 2025</span></li>
          <li><strong>Building Resilience:</strong> Develop strategies to bounce back from setbacks and stay strong. <span className="text-[#2A9D8F]">Date: March 12, 2025</span></li>
          <li><strong>Mindfulness for Personal Growth:</strong> Practice mindfulness exercises to enhance self-awareness and emotional health. <span className="text-[#2A9D8F]">Date: March 19, 2025</span></li>
        </ul>
      </div>
      <p className="text-lg text-[#607D8B] max-w-3xl text-center mt-6">
        Ready to make a positive change? Our workshops are designed to empower you with the tools to lead a healthier and more fulfilling life. Don't miss out!
      </p>
      <a href="/">
        <button className="mt-6 bg-[#2A9D8F] text-white py-4 px-8 rounded-lg shadow hover:bg-[#26A69A] transition-all">
          Home Page
        </button>
      </a>
    </div>
  );
};

export default Workshops;
