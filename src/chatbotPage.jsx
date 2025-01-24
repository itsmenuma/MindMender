import React, { useState } from 'react';
import './App.css';
import { IoSend } from 'react-icons/io5';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const App = () => {
  const [message, setMessage] = useState('');
  const [isResponseScreen, setIsResponseScreen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isLandingPage, setIsLandingPage] = useState(true);
  const navigate = useNavigate(); // Initialize navigate

  const hitRequest = () => {
    if (message) {
      generateResponse(message);
    } else {
      alert('You must write something...!');
    }
  };

  const generateResponse = async (msg) => {
    if (!msg) return;

    const genAI = new GoogleGenerativeAI('API_KEY');
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const result = await model.generateContent(msg);

    const newMessages = [
      ...messages,
      { type: 'userMsg', text: msg },
      { type: 'responseMsg', text: result.response.text() },
    ];

    setMessages(newMessages);
    setIsResponseScreen(true);
    setMessage('');
  };

  const newChat = () => {
    setIsResponseScreen(false);
    setMessages([]);
  };

  const goHome = () => {
    navigate('/'); // Use navigate to go to the home page
  };

  if (isLandingPage) {
    return (
      <div className="landing-page w-full h-screen flex items-center justify-center bg-gradient-to-r from-teal-400 to-green-500 text-white">
        <div className="text-center p-6 rounded-lg shadow-lg bg-white bg-opacity-50">
          <h1 className="text-5xl font-extrabold mb-4">Welcome to MindMender 💡</h1>
          <p className="text-xl mb-8">Your trusted mental wellness companion. Let’s talk, heal, and grow together. 🌟</p>
          <button
            className="bg-teal-600 text-white py-2 px-8 rounded-full hover:bg-teal-700 transition-all"
            onClick={() => setIsLandingPage(false)}
          >
            Start Now
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container w-full h-screen bg-gradient-to-r from-teal-200 to-teal-500 text-white flex flex-col">
      <div className="header flex items-center justify-between p-4">
        <h2 className="text-3xl font-bold text-teal-700">MindMender</h2>
        <button
          className="bg-teal-700 p-4 rounded-full text-white text-sm hover:bg-teal-800 transition-all"
          onClick={goHome} // Navigate to home when the button is clicked
        >
          Go Home
        </button>
      </div>

      {isResponseScreen ? (
        <div className="messages p-6 flex-1 overflow-auto">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message-bubble ${msg.type === 'userMsg' ? 'user-message' : 'response-message'}`}
            >
              {msg.text.split('\n').map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <div className="middle flex items-center justify-center flex-col h-full p-8">
          <h1 className="text-4xl text-teal-800 font-semibold mb-6">MindMender</h1>
          <div className="boxes grid grid-cols-2 gap-6 w-full max-w-4xl">
            <div className="card p-6 bg-teal-800 text-white rounded-lg shadow-lg hover:bg-teal-700 transition-all cursor-pointer">
              <p className="text-lg">
                "Believe in yourself and all that you are. <br />
                Know that there is something inside you that is greater than any obstacle. 💪✨" <br />
                - Christian D. Larson
              </p>
            </div>
            <div className="card p-6 bg-teal-800 text-white rounded-lg shadow-lg hover:bg-teal-700 transition-all cursor-pointer">
              <p className="text-lg">
                "You are stronger than you think. Keep going. 💫💖" <br />
                - Anonymous
              </p>
            </div>
            <div className="card p-6 bg-teal-800 text-white rounded-lg shadow-lg hover:bg-teal-700 transition-all cursor-pointer">
              <p className="text-lg">
                "It's okay not to be okay. Take your time to heal. 🌱💚" <br />
                - Unknown
              </p>
            </div>
            <div className="card p-6 bg-teal-800 text-white rounded-lg shadow-lg hover:bg-teal-700 transition-all cursor-pointer">
              <p className="text-lg">
                "You are enough just as you are. Don't let anyone make you feel otherwise. 🌸💛" <br />
                - Anonymous
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="inputBox p-4 bg-teal-700 rounded-full mb-4 flex items-center">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          className="bg-transparent flex-1 outline-none text-white placeholder-white pl-4"
          placeholder="How are you feeling today?"
        />
        {message === '' ? (
          ''
        ) : (
          <i className="text-white text-2xl cursor-pointer" onClick={hitRequest}>
            <IoSend />
          </i>
        )}
      </div>
    </div>
  );
};

export default App;
