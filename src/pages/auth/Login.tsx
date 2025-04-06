import { Eye, EyeOff, Facebook, Instagram, Phone, Shield, Twitter } from "lucide-react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { motion } from 'framer-motion';
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const { setUser, login } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'; 

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    console.log(email, "  ", password);
    
    const resp = await login(email, password);
    if (resp.error) {
      alert("invalid user details");
      return;
    }

    setUser(resp.user);
    localStorage.setItem("user", JSON.stringify(resp.user));
    navigate(from, { replace: true });
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Phone size={16} />
            <span>Emergency: 100</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/dashboard" className="hover:text-blue-200">Dashboard</Link>
            <a href="#" className="hover:text-blue-200"><Facebook size={16} /></a>
            <a href="#" className="hover:text-blue-200"><Twitter size={16} /></a>
            <a href="#" className="hover:text-blue-200"><Instagram size={16} /></a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <Shield className="text-blue-900" size={32} />
              <span className="text-2xl font-bold text-blue-900">AP Police</span>
            </motion.div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-900">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-900">About</a>
              <a href="#features" className="text-gray-700 hover:text-blue-900">Services</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-900">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex justify-center items-center min-h-screen">
        {/* Login Form Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
            <h2 className="text-2xl font-bold mb-6">Log In</h2>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative mt-1">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-gray-400 focus:outline-none"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                  Forgot your password?
                </a>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Log In
            </button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Login