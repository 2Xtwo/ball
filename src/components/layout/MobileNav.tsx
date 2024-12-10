import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FaFutbol } from 'react-icons/fa';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <div className="flex items-center justify-between p-4">
        <Link to="/" className="flex items-center">
          <FaFutbol className="h-8 w-8 text-premier-pink" />
          <span className="ml-2 text-2xl font-bold text-white">SparkoBall</span>
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white hover:text-premier-pink transition-colors"
        >
          {isOpen ? (
            <XMarkIcon className="h-8 w-8" />
          ) : (
            <Bars3Icon className="h-8 w-8" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-premier-purple z-50">
          <div className="px-4 py-2 space-y-2">
            <Link
              to="/leaderboards"
              className="block py-2 text-white hover:text-premier-pink transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Leaderboards
            </Link>
            <Link
              to="/login"
              className="block py-2 text-white hover:text-premier-pink transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="block py-2 px-4 bg-premier-pink text-white rounded-lg hover:bg-premier-pink/90 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}