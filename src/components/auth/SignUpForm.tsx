import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFutbol } from 'react-icons/fa';
import SocialLogin from './SocialLogin';
import { UserRole } from '../../types/auth';

const accountTypes: { role: UserRole; title: string; description: string }[] = [
  {
    role: 'player',
    title: 'Player Account',
    description: 'For players looking to showcase their talent and track progress'
  },
  {
    role: 'assessor',
    title: 'Assessor Account',
    description: 'For qualified coaches to evaluate players'
  },
  {
    role: 'club',
    title: 'Club Account',
    description: 'For professional football clubs to scout and recruit players'
  },
  {
    role: 'scout',
    title: 'Scout Account',
    description: 'For independent scouts and talent spotters'
  }
];

export default function SignUpForm() {
  const [selectedRole, setSelectedRole] = useState<UserRole>('player');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', { ...formData, role: selectedRole });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-premier flex">
      {/* Left side - Account Types */}
      <div className="hidden lg:block relative w-1/2">
        <div className="absolute inset-0 flex items-center justify-center bg-premier-purple/30">
          <div className="max-w-lg w-full space-y-8 p-8">
            <div className="text-center">
              <FaFutbol className="h-12 w-12 text-premier-pink mx-auto" />
              <h2 className="mt-6 text-3xl font-extrabold text-white">Choose Your Path</h2>
              <p className="mt-2 text-gray-300">Select the account type that best fits your role</p>
            </div>
            <div className="space-y-4">
              {accountTypes.map((type) => (
                <button
                  key={type.role}
                  onClick={() => setSelectedRole(type.role)}
                  className={`w-full p-4 rounded-lg text-left transition-all ${
                    selectedRole === type.role
                      ? 'bg-premier-pink text-white'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <h3 className="font-semibold">{type.title}</h3>
                  <p className="text-sm mt-1 opacity-80">{type.description}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Sign Up Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
              Create your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-300">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-premier-pink hover:text-premier-pink/90">
                Sign in
              </Link>
            </p>
          </div>

          {/* Mobile account type selector */}
          <div className="lg:hidden">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Account Type
            </label>
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value as UserRole)}
              className="w-full rounded-lg border-gray-300/30 bg-premier-purple/30 text-white focus:border-premier-pink focus:ring-premier-pink"
            >
              {accountTypes.map((type) => (
                <option key={type.role} value={type.role}>
                  {type.title}
                </option>
              ))}
            </select>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name" className="sr-only">Full name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300/30 placeholder-gray-400 text-white bg-premier-purple/30 rounded-t-md focus:outline-none focus:ring-premier-pink focus:border-premier-pink focus:z-10 sm:text-sm"
                  placeholder="Full name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300/30 placeholder-gray-400 text-white bg-premier-purple/30 focus:outline-none focus:ring-premier-pink focus:border-premier-pink focus:z-10 sm:text-sm"
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
                  className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300/30 placeholder-gray-400 text-white bg-premier-purple/30 focus:outline-none focus:ring-premier-pink focus:border-premier-pink focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="sr-only">Confirm password</label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300/30 placeholder-gray-400 text-white bg-premier-purple/30 rounded-b-md focus:outline-none focus:ring-premier-pink focus:border-premier-pink focus:z-10 sm:text-sm"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-premier-pink hover:bg-premier-pink/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-premier-pink transition-colors"
              >
                Create Account
              </button>
            </div>

            <SocialLogin />
          </form>
        </div>
      </div>
    </div>
  );
}