import React, { useState } from 'react';

const HomePage = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  const dismissWelcomeMessage = () => {
    setShowWelcome(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon. 😊");
  };

  return (
    <div className="homepage w-screen min-h-screen bg-[#F1F8FC] text-[#4A5A6F] relative">
      {/* Navbar */}
      <header className="navbar flex justify-between items-center px-12 py-6 bg-[#A8DADC] shadow-md z-10 fixed top-0 w-full">
        <h1 className="text-3xl font-semibold text-white tracking-wide">MindMender 💡</h1>
        
        {/* Toolbar */}
        <nav className="flex gap-6 ml-auto">
        <a href="/one-on-one-counseling">
  <button className="bg-[#2A9D8F] text-white py-4 px-8 rounded-lg shadow-lg hover:bg-[#26A69A] transition-all">
    One-on-One Counseling
  </button>
</a>

<a href="/workshops">
  <button className="bg-[#2A9D8F] text-white py-4 px-8 rounded-lg shadow-lg hover:bg-[#26A69A] transition-all">
    Workshops
  </button>
</a>
<a href="/resourcehub">
  <button className="bg-[#2A9D8F] text-white py-4 px-8 rounded-lg shadow-lg hover:bg-[#26A69A] transition-all">
    Resource Hub
  </button>
</a>

        </nav>
      </header>

      {/* Welcome Message */}
      {showWelcome && (
        <div className="welcome-message bg-[#B2DFDB] text-white text-center py-3 px-4 animate-fade-in z-10 mt-20">
          <p className="text-sm md:text-base">
            🎉 Welcome to MindMender! Your journey to mental wellness starts here. 💡
            <button
              className="ml-4 text-[#4A5A6F] bg-white rounded px-2 py-1 hover:bg-[#2A9D8F] transition-colors"
              onClick={dismissWelcomeMessage}
            >
              Dismiss
            </button>
          </p>
        </div>
      )}

      {/* Hero Section */}
      <section
        id="hero"
        className="hero flex items-center justify-center h-[80vh] bg-cover bg-center relative overflow-hidden z-0 mt-32"
        style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080')" }}
      >
        <div className="absolute inset-0 bg-[#2A9D8F] bg-opacity-50 z-0"></div>
        <div className="relative text-center max-w-3xl p-8 md:p-12 bg-white bg-opacity-90 rounded-lg shadow-lg z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white tracking-wide">
            Welcome to MindMender 💡
          </h1>
          <p className="text-lg md:text-xl mb-6 text-white">
            Your trusted mental wellness companion. Let’s talk, heal, and grow together. 🌟
          </p>
          <a href="#about">
            <button className="bg-[#A8DADC] text-white py-4 px-8 rounded-lg shadow-md hover:bg-[#2A9D8F] hover:scale-105 transition-all ease-in-out duration-300">
              Learn More
            </button>
          </a>
        </div>
      </section>

      {/* Welcome Message Box (Before About Us Section) */}
      <section id="welcome" className="welcome-box py-16 px-8 bg-gradient-to-r from-[#B2DFDB] to-[#A8DADC] text-center rounded-lg shadow-xl mt-12 mx-8 md:mx-16">
        <h2 className="text-4xl font-semibold mb-6 text-[#2A9D8F]">
          Welcome to Our Community! 🌿
        </h2>
        <p className="text-lg max-w-2xl mx-auto text-[#607D8B] leading-relaxed mb-8">
        Discover a sanctuary for your mind at MindMender. Together, we’ll nurture resilience, foster self-growth, and unlock the best version of you. Let us walk this journey with you toward clarity, peace, and endless possibilities 🌟
        </p>
        <a href="#about">
          <button className="bg-[#2A9D8F] text-white py-4 px-8 rounded-lg shadow-lg hover:bg-[#26A69A] transition-all ease-in-out duration-300">
            Get Started
          </button>
        </a>
      </section>

      {/* About Us Section */}
      <section id="about" className="about py-32 px-8 md:px-16 text-center bg-[#F1F8FC]">
        <h2 className="text-4xl font-semibold mb-8 text-[#4A5A6F]">About Us</h2>
        <p className="text-lg max-w-3xl mx-auto text-[#607D8B] leading-relaxed">
          MindMender is dedicated to supporting mental health and wellness. We provide resources, tools, and compassionate support to help individuals navigate life’s challenges and achieve their best selves.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="services py-32 px-8 bg-[#E0F7FA] text-center">
        <h2 className="text-4xl font-semibold mb-12 text-[#4A5A6F]">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {[{
            title: "One-on-One Counseling",
            description: "Private and personalized counseling sessions tailored to your needs.",
          },
          {
            title: "Workshops",
            description: "Interactive workshops to build resilience and manage stress effectively.",
          },
          {
            title: "Resource Hub",
            description: "Access to articles, tools, and support for maintaining mental wellness.",
          }].map((service, index) => (
            <div
              key={index}
              className="service-card bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform"
            >
              <h3 className="text-2xl font-semibold mb-6 text-[#2A9D8F]">{service.title}</h3>
              <p className="text-[#607D8B]">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact py-32 px-8 md:px-16 text-center bg-[#A8DADC]">
        <h2 className="text-4xl font-semibold mb-8 text-white">Contact Us</h2>
        <form className="max-w-4xl mx-auto space-y-6" onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-lg bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-[#2A9D8F] placeholder:text-[#607D8B]"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-lg bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-[#2A9D8F] placeholder:text-[#607D8B]"
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-4 rounded-lg bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-[#2A9D8F] placeholder:text-[#607D8B]"
            rows="5"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-[#2A9D8F] text-white py-4 px-8 rounded-lg shadow-md hover:bg-[#26A69A] transition-all ease-in-out duration-300"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Chatbot Button (Fixed on Bottom Right) */}
      <a href="/chatbot">
        <button className="fixed bottom-6 right-6 bg-[#2A9D8F] text-white py-4 px-6 rounded-full shadow-lg hover:bg-[#26A69A] hover:scale-110 transition-transform">
          Chat Now
        </button>
      </a>

      {/* Footer */}
      <footer className="footer py-6 text-center bg-[#E0F7FA]">
        <p className="text-sm text-[#607D8B]">
          © {new Date().getFullYear()} MindMender. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default HomePage; 