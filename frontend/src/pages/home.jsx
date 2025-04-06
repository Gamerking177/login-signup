import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthController from "../controller/authcontroller";

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleExplore = () => {
    // example navigation
    navigate("/explore");
  };

  const handleLogout = async () => {
    const result = await AuthController.logout();
    if (result.success) {
      setIsAuthenticated(false);
      navigate("/signin");
    }
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-700 via-purple-600 to-red-500 flex flex-col items-center justify-center text-white px-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-pulse">Welcome to Your Dashboard 🚀</h1>
      <p className="text-lg md:text-xl text-center max-w-xl mb-8">
        You've successfully logged in. Start exploring the amazing features we have crafted just for you!
      </p>

      <div className="flex gap-4">
        <button
          onClick={handleExplore}
          className="bg-white text-blue-700 font-semibold px-6 py-2 rounded-lg shadow hover:bg-blue-100 transition duration-300"
        >
          Explore
        </button>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-red-700 transition duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
