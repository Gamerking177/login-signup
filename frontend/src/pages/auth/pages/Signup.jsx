import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AuthController from '../../../controller/authcontroller';

const Signup = ({ setAuth }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState("");
  
  const navigate = useNavigate();

  const validateField = (field, value) => {
    let msg = "";

    if (field === "name") {
      if (!value.trim()) msg = "Name is required";
    } else if (field === "email") {
      if (!value) msg = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(value)) msg = "Invalid email";
    } else if (field === "password") {
      if (!value) msg = "Password is required";
      else if (value.length < 6) msg = "Min 6 characters";
    }

    setErrors((prev) => ({ ...prev, [field]: msg }));
  };

  const validateAll = () => {
    const err = {};

    if (!name.trim()) err.name = "Name is required";
    if (!email) err.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) err.email = "Invalid email";
    if (!password) err.password = "Password is required";
    else if (password.length < 6)
      err.password = "Password must be at least 6 characters";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const checkPasswordStrength = (pass) => {
    let score = 0;
    if (pass.length > 5) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[0-9]/.test(pass)) score++;
    if (/[@$!%*?&]/.test(pass)) score++;

    if (score <= 1) setPasswordStrength("Weak");
    else if (score <= 3) setPasswordStrength("Medium");
    else setPasswordStrength("Strong");
  };

  const getStrengthColor = () => {
    switch (passwordStrength) {
      case "Weak":
        return "bg-red-500 w-1/3";
      case "Medium":
        return "bg-yellow-500 w-2/3";
      case "Strong":
        return "bg-green-500 w-full";
      default:
        return "w-0";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateAll()) return;
    
    setIsLoading(true);
    
    try {
      const res = await AuthController.signUp(name, email, password);
      
      if (res.success) {
        setAuth(true);
        toast.success("Signup successful!");
        navigate("/");
      } else {
        toast.error(res.message || "Signup failed.");
      }
    } catch (err) {
      toast.error("An error occurred during signup. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full animate-fade-in">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            validateField("name", e.target.value);
          }}
          className="form-input h-11"
          aria-invalid={!!errors.name}
        />
        {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="register-email">Email</Label>
        <Input
          id="register-email"
          type="email"
          placeholder="your.email@example.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            validateField("email", e.target.value);
          }}
          className="form-input h-11"
          aria-invalid={!!errors.email}
        />
        {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="register-password">Password</Label>
        <div className="relative">
          <Input
            id="register-password"
            type={showPassword ? "text" : "password"}
            placeholder="Create a strong password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              validateField("password", e.target.value);
              checkPasswordStrength(e.target.value);
            }}
            className="form-input h-11 pr-10"
            aria-invalid={!!errors.password}
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        {errors.password && <p className="text-destructive text-sm mt-1">{errors.password}</p>}
      </div>
      
      {/* Password Strength Meter */}
      {password && (
        <div className="h-2 w-full bg-gray-200 rounded mt-1">
          <div className={`h-2 rounded ${getStrengthColor()} transition-all`}></div>
        </div>
      )}
      {passwordStrength && (
        <p className="text-sm font-medium text-gray-700">
          Strength:{" "}
          <span
            className={`${
              passwordStrength === "Weak"
                ? "text-red-500"
                : passwordStrength === "Medium"
                ? "text-yellow-500"
                : "text-green-600"
            }`}
          >
            {passwordStrength}
          </span>
        </p>
      )}
      
      <Button 
        type="submit" 
        className="w-full h-11 mt-2 btn-primary"
        disabled={isLoading}
      >
        {isLoading ? "Creating account..." : "Sign Up"}
      </Button>
    </form>
  );
};

export default Signup;