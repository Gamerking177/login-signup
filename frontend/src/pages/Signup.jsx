import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import AuthController from '../controller/authcontroller';

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await AuthController.signUp(name, email, password);
    
    if (result.success) {
      setSuccess(true);
      setError(false);
      navigate("/");
    } else {
      setSuccess(false);
      setError(true);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#1E409F] to-[#E41C24]">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>

        {success && <p className="mt-4 text-green-600 text-center">Signup successful!</p>}
        {error && <p className="mt-4 text-red-600 text-center">Signup failed. Try again.</p>}

        <p className="mt-4 text-center text-gray-600">
          Already have an account?
          <Link to="/signin" className="text-blue-500 hover:underline ml-1">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
