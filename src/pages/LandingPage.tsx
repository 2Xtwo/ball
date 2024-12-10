import { Link } from 'react-router-dom';
import { FaFutbol, FaTrophy, FaChartLine, FaVideo, FaUserCheck, FaUsers, FaStar, FaMedal } from 'react-icons/fa';
import TrendGraph from '../components/landing/TrendGraph';
import MobileNav from '../components/layout/MobileNav';

const metrics = [
  { label: 'Active Players', value: '10,000+', icon: FaUsers },
  { label: 'Pro Clubs', value: '50+', icon: FaStar },
  { label: 'Verified Assessors', value: '200+', icon: FaUserCheck },
  { label: 'Success Stories', value: '500+', icon: FaMedal },
];

const features = [
  {
    icon: FaVideo,
    title: 'Training Videos',
    description: 'Share and learn from training videos posted by players worldwide',
  },
  {
    icon: FaChartLine,
    title: 'Performance Tracking',
    description: 'Monitor your progress with detailed performance analytics',
  },
  {
    icon: FaTrophy,
    title: 'Global Rankings',
    description: 'Compete with players worldwide in your age group and region',
  },
  {
    icon: FaUserCheck,
    title: 'Professional Assessment',
    description: 'Get evaluated by verified professional assessors',
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-premier">
      {/* Mobile Navigation */}
      <MobileNav />

      {/* Desktop Navigation */}
      <nav className="relative z-10 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <FaFutbol className="h-8 w-8 text-premier-pink" />
              <span className="ml-2 text-2xl font-bold text-white">SparkoBall</span>
            </div>
            <div className="flex items-center space-x-8">
              <Link to="/leaderboards" className="text-white hover:text-premier-pink transition-colors">
                Leaderboards
              </Link>
              <Link to="/login" className="text-white hover:text-premier-pink transition-colors">
                Sign In
              </Link>
              <Link
                to="/signup"
                className="bg-premier-pink text-white px-4 py-2 rounded-lg hover:bg-premier-pink/90 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden pt-16 md:pt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                Elevate Your Football Career
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Join the premier platform for aspiring footballers. Get discovered, track your progress,
                and connect with professional clubs and scouts.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/signup"
                  className="w-full sm:w-auto px-8 py-3 bg-premier-pink text-white font-medium rounded-lg hover:bg-premier-pink/90 transition-colors text-center"
                >
                  Start Your Journey
                </Link>
                <a
                  href="#features"
                  className="w-full sm:w-auto px-8 py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors text-center"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="bg-premier-navy/30 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-4">Player Growth Trend</h3>
              <TrendGraph />
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Section */}
      <div className="bg-premier-navy/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white/10 rounded-lg p-6 text-center transform hover:scale-105 transition-transform"
              >
                <metric.icon className="h-8 w-8 text-premier-pink mx-auto mb-4" />
                <p className="text-3xl font-bold text-premier-pink mb-2">{metric.value}</p>
                <p className="text-gray-300">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Everything You Need to Succeed
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 rounded-lg p-6 text-center transform hover:scale-105 transition-transform"
              >
                <feature.icon className="h-10 w-10 text-premier-pink mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}