import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ChatBotPage from "./chatbotPage";
import OneOnOneCounseling from "./pages/OneOnOneCounseling";
import CounselorsList from "./pages/CounselorsList"; // Import the new page
import Workshops from './pages/Workshops';
import ResourceHub from './pages/ResourceHub';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/chatbot" element={<ChatBotPage />} />
      <Route path="/one-on-one-counseling" element={<OneOnOneCounseling />} />
      <Route path="/counselors" element={<CounselorsList />} />
      <Route path="/workshops" element={<Workshops />} />
      <Route path="/resourcehub" element={<ResourceHub />} />

    </Routes>
  );
};

export default App;
