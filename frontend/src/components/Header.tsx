import React, { useState } from 'react';
import axios from 'axios';
import { Search, Menu, X, Leaf, Eye, EyeOff } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const API_BASE_URL = 'http://localhost:5000/api/auth'; 

const Header = ({ activeTab, setActiveTab }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loginErrors, setLoginErrors] = useState<string[]>([]);
  const [signupErrors, setSignupErrors] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Login form state
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });

  // Signup form state
  const [signupForm, setSignupForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Password validation function
  const validatePassword = (password: string): string[] => {
    const errors: string[] = [];
    
    if (password.length < 4) {
      errors.push('Password must be at least 4 characters long');
    }
    
    if (!/[A-Z]/.test(password)) {
      errors.push('Password must contain at least one uppercase letter');
    }
    
    if (!/[a-z]/.test(password)) {
      errors.push('Password must contain at least one lowercase letter');
    }
    
    return errors;
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    alert(`Searching for: ${searchQuery}`);
  };

  const handleLogin = () => {
    setShowLoginModal(true);
  };

  const handleSignUp = () => {
    setShowSignupModal(true);
  };

  // Updated login submit with backend integration
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginErrors([]);
    setIsLoading(true);
    
    // Basic validation
    if (!loginForm.email || !loginForm.password) {
      setLoginErrors(['Please fill in all fields']);
      setIsLoading(false);
      return;
    }

    // Password validation
    const passwordErrors = validatePassword(loginForm.password);
    if (passwordErrors.length > 0) {
      setLoginErrors(passwordErrors);
      setIsLoading(false);
      return;
    }

    try {
      // Make API call to backend
      const response = await axios.post(`${API_BASE_URL}/login`, {
        email: loginForm.email,
        password: loginForm.password
      });

      // Handle successful login
      const { token, userId } = response.data;
      
      // Store token in localStorage
      localStorage.setItem('authToken', token);
      localStorage.setItem('userId', userId);
      
      // Success message
      alert(`Welcome back! Login successful!`);
      
      // Close modal and reset form
      setShowLoginModal(false);
      setLoginForm({ email: '', password: '' });
      setLoginErrors([]);
      
    } catch (error: any) {
      // Handle errors
      if (error.response) {
        // Server responded with error status
        const errorMessage = error.response.data.message || 'Login failed';
        setLoginErrors([errorMessage]);
      } else if (error.request) {
        // Network error
        setLoginErrors(['Network error. Please check your connection.']);
      } else {
        // Other error
        setLoginErrors(['An unexpected error occurred']);
      }
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Updated signup submit with backend integration
  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSignupErrors([]);
    setIsLoading(true);
    
    // Basic validation
    if (!signupForm.name || !signupForm.email || !signupForm.password || !signupForm.confirmPassword) {
      setSignupErrors(['Please fill in all fields']);
      setIsLoading(false);
      return;
    }

    if (signupForm.password !== signupForm.confirmPassword) {
      setSignupErrors(['Passwords do not match']);
      setIsLoading(false);
      return;
    }

    // Password validation
    const passwordErrors = validatePassword(signupForm.password);
    if (passwordErrors.length > 0) {
      setSignupErrors(passwordErrors);
      setIsLoading(false);
      return;
    }

    try {
      // Make API call to backend
      const response = await axios.post(`${API_BASE_URL}/register`, {
        name: signupForm.name,
        email: signupForm.email,
        password: signupForm.password
      });

      
      // Success message
      alert(`Account created successfully! Welcome ${signupForm.name}!`);
      
      // Close modal and reset form
      setShowSignupModal(false);
      setSignupForm({ name: '', email: '', password: '', confirmPassword: '' });
      setSignupErrors([]);
      
      // Optionally redirect to login
      // setShowLoginModal(true);
      
    } catch (error: any) {
      // Handle errors
      if (error.response) {
        // Server responded with error status
        const errorMessage = error.response.data.message || 'Registration failed';
        setSignupErrors([errorMessage]);
      } else if (error.request) {
        // Network error
        setSignupErrors(['Network error. Please check your connection.']);
      } else {
        // Other error
        setSignupErrors(['An unexpected error occurred']);
      }
      console.error('Signup error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const closeModals = () => {
    setShowLoginModal(false);
    setShowSignupModal(false);
    setLoginForm({ email: '', password: '' });
    setSignupForm({ name: '', email: '', password: '', confirmPassword: '' });
    setShowPassword(false);
    setShowConfirmPassword(false);
    setLoginErrors([]);
    setSignupErrors([]);
  };

  const handleNavClick = (tab: string) => {
    setActiveTab(tab);
    setIsMenuOpen(false);
  };

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userId');
    alert('Logged out successfully!');
    // Refresh page or redirect as needed
    window.location.reload();
  };

  // Check if user is logged in
  const isLoggedIn = !!localStorage.getItem('authToken');


  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Omays</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => handleNavClick('home')}
                className={`text-gray-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-violet-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 font-medium ${
                  activeTab === 'home' ? 'bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent' : ''
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => handleNavClick('about')}
                className={`text-gray-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-violet-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 font-medium ${
                  activeTab === 'about' ? 'bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent' : ''
                }`}
              >
                About
              </button>
              <button 
                onClick={() => handleNavClick('services')}
                className={`text-gray-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-violet-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 font-medium ${
                  activeTab === 'services' ? 'bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent' : ''
                }`}
              >
                Services
              </button>
              <button 
                onClick={() => handleNavClick('trainings')}
                className={`text-gray-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-violet-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 font-medium ${
                  activeTab === 'trainings' ? 'bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent' : ''
                }`}
              >
                Trainings
              </button>
              <button 
                onClick={() => handleNavClick('contact')}
                className={`text-gray-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-violet-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 font-medium ${
                  activeTab === 'contact' ? 'bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent' : ''
                }`}
              >
                Contact
              </button>
            </nav>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <form onSubmit={handleSearch} className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </form>
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={handleLogin}
                disabled={isLoading}
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-violet-700 transition-all font-medium"
              >
                {isLoading ? 'Logging in...' : 'Login'}
              </button>
              <button 
                onClick={handleSignUp}
                disabled={isLoading}
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-full hover:from-blue-700 hover:to-violet-700 transition-all font-medium shadow-lg hover:shadow-blue-500/25"
              >
                {isLoading ? 'Creating Account...' : 'Create Account'}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-green-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <form onSubmit={handleSearch} className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </form>
                <button 
                  onClick={() => handleNavClick('home')}
                  className={`block w-full text-left px-3 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-violet-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 ${
                    activeTab === 'home' ? 'bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent' : ''
                  }`}
                >
                  Home
                </button>
                <button 
                  onClick={() => handleNavClick('about')}
                  className={`block w-full text-left px-3 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-violet-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 ${
                    activeTab === 'about' ? 'bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent' : ''
                  }`}
                >
                  About
                </button>
                <button 
                  onClick={() => handleNavClick('services')}
                  className={`block w-full text-left px-3 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-violet-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 ${
                    activeTab === 'services' ? 'bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent' : ''
                  }`}
                >
                  Services
                </button>
                <button 
                  onClick={() => handleNavClick('trainings')}
                  className={`block w-full text-left px-3 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-violet-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 ${
                    activeTab === 'trainings' ? 'bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent' : ''
                  }`}
                >
                  Trainings
                </button>
                <button 
                  onClick={() => handleNavClick('contact')}
                  className={`block w-full text-left px-3 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-violet-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 ${
                    activeTab === 'contact' ? 'bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent' : ''
                  }`}
                >
                  Contact
                </button>
                <div className="flex space-x-4 px-3 py-2">
                  <button 
                    onClick={handleLogin}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-violet-700 transition-all font-medium"
                  >
                    Login
                  </button>
                  <button 
                    onClick={handleSignUp}
                    className="px-6 py-2 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-full hover:from-blue-700 hover:to-violet-700 transition-all font-medium shadow-lg hover:shadow-blue-500/25"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
                <button
                  onClick={closeModals}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <form onSubmit={handleLoginSubmit} className="space-y-4">
                {loginErrors.length > 0 && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    {loginErrors.map((error, index) => (
                      <p key={index} className="text-red-600 text-sm">{error}</p>
                    ))}
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={loginForm.email}
                    onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={loginForm.password}
                      onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                      className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-green-600 focus:ring-green-500" />
                    <span className="ml-2 text-sm text-gray-600">Remember me</span>
                  </label>
                  <a href="#" className="text-sm text-green-600 hover:text-green-700">
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-violet-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                >
                  Sign In
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <button
                    onClick={() => {
                      setShowLoginModal(false);
                      setShowSignupModal(true);
                      setLoginErrors([]);
                    }}
                    className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-violet-700 font-medium"
                  >
                    Sign up here
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {showSignupModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Join Omays</h2>
                <button
                  onClick={closeModals}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <form onSubmit={handleSignupSubmit} className="space-y-4">
                {signupErrors.length > 0 && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    {signupErrors.map((error, index) => (
                      <p key={index} className="text-red-600 text-sm">{error}</p>
                    ))}
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={signupForm.name}
                    onChange={(e) => setSignupForm({ ...signupForm, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={signupForm.email}
                    onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={signupForm.password}
                      onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })}
                      className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Create a password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={signupForm.confirmPassword}
                      onChange={(e) => setSignupForm({ ...signupForm, confirmPassword: e.target.value })}
                      className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Confirm your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label className="ml-2 text-sm text-gray-600">
                    I agree to the{' '}
                    <a href="#" className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-violet-700">Terms of Service</a>
                    {' '}and{' '}
                    <a href="#" className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-violet-700">Privacy Policy</a>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-violet-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                >
                  Create Account
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Already have an account?{' '}
                  <button
                    onClick={() => {
                      setShowSignupModal(false);
                      setShowLoginModal(true);
                      setSignupErrors([]);
                    }}
                    className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-violet-700 font-medium"
                  >
                    Sign in here
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;