import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OneOnOneCounseling = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Redirect to counselors list regardless of credentials
    alert(`${isLogin ? "Login" : "Sign-Up"} successful! Redirecting to counselors...`);
    navigate("/counselors");
  };

  return (
    <div className="auth-page w-screen h-screen flex justify-center items-center bg-[#F1F8FC]">
      <form
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
        onSubmit={handleFormSubmit}
      >
        <h2 className="text-2xl font-semibold text-center mb-6 text-[#4A5A6F]">
          {isLogin ? "Login" : "Sign Up"} to One-on-One Counseling
        </h2>

        {!isLogin && (
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-4 mb-4 rounded-lg border border-[#A8DADC] focus:outline-none"
            required
          />
        )}
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleInputChange}
          className="w-full p-4 mb-4 rounded-lg border border-[#A8DADC] focus:outline-none"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          className="w-full p-4 mb-6 rounded-lg border border-[#A8DADC] focus:outline-none"
          required
        />

        <button
          type="submit"
          className="bg-[#2A9D8F] text-white py-4 w-full rounded-lg hover:bg-[#26A69A] transition-all"
        >
          {isLogin ? "Login" : "Sign Up"}
        </button>

        <p className="text-center text-[#607D8B] mt-4">
          {isLogin
            ? "Don't have an account? "
            : "Already have an account? "}
          <button
            type="button"
            className="text-[#2A9D8F] font-semibold underline"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default OneOnOneCounseling;
