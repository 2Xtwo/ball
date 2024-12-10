import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../lib/hooks/useAuth';
import SocialLogin from '../components/auth/SocialLogin';
import { FaFutbol } from 'react-icons/fa';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(formData.email, formData.password);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-premier flex">
      {/* Left side - Hero Image */}
      <div className="hidden lg:block relative w-1/2">
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: "url('/stadium.jpg')",
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(61, 25, 91, 0.7)'
        }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-8 max-w-xl">
            <h1 className="text-5xl font-bold mb-6">SparkoBall</h1>
            <p className="text-2xl mb-8">Where Future Football Stars Are Made</p>
            <div className="space-y-4 text-lg">
              <p className="flex items-center justify-center">
                <span className="w-2 h-2 bg-premier-pink rounded-full mr-2" />
                Professional Player Development
              </p>
              <p className="flex items-center justify-center">
                <span className="w-2 h-2 bg-premier-pink rounded-full mr-2" />
                Elite Training Programs
              </p>
              <p className="flex items-center justify-center">
                <span className="w-2 h-2 bg-premier-pink rounded-full mr-2" />
                Verified Assessments
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-premier-purple/30">
        <div className="max-w-md w-full space-y-8">
          <div>
            <div className="flex justify-center">
              <FaFutbol className="h-16 w-16 text-premier-pink" />
            </div>
            <h2 className="mt-6 text-center text-4xl font-extrabold text-white">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-300">
              Don't have an account?{' '}
              <Link to="/signup" className="font-medium text-premier-pink hover:text-premier-pink/90">
                Sign up now
              </Link>
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300/30 placeholder-gray-400 text-white bg-premier-purple/30 rounded-t-md focus:outline-none focus:ring-premier-pink focus:border-premier-pink focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300/30 placeholder-gray-400 text-white bg-premier-purple/30 rounded-b-md focus:outline-none focus:ring-premier-pink focus:border-premier-pink focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-premier-pink focus:ring-premier-pink border-gray-300/30 rounded bg-premier-purple/30"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link to="/forgot-password" className="font-medium text-premier-pink hover:text-premier-pink/90">
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-premier-pink hover:bg-premier-pink/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-premier-pink transition-colors"
              >
                Sign in
              </button>
            </div>

            <SocialLogin />
          </form>
        </div>
      </div>
    </div>
  );
}