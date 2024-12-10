import { FaGoogle, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function SocialLogin() {
  const handleGoogleLogin = () => {
    // Implement Google login
    console.log('Google login clicked');
  };

  const handleFacebookLogin = () => {
    // Implement Facebook login
    console.log('Facebook login clicked');
  };

  const handleInstagramLogin = () => {
    // Implement Instagram login
    console.log('Instagram login clicked');
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300/30" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-premier-purple text-gray-300">Or continue with</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center px-4 py-2 border border-gray-300/30 rounded-md shadow-sm text-sm font-medium text-white bg-premier-purple/50 hover:bg-premier-purple/70 transition-colors"
        >
          <FaGoogle className="h-5 w-5 text-white" />
        </button>
        <button
          onClick={handleFacebookLogin}
          className="flex items-center justify-center px-4 py-2 border border-gray-300/30 rounded-md shadow-sm text-sm font-medium text-white bg-premier-purple/50 hover:bg-premier-purple/70 transition-colors"
        >
          <FaFacebook className="h-5 w-5 text-white" />
        </button>
        <button
          onClick={handleInstagramLogin}
          className="flex items-center justify-center px-4 py-2 border border-gray-300/30 rounded-md shadow-sm text-sm font-medium text-white bg-premier-purple/50 hover:bg-premier-purple/70 transition-colors"
        >
          <FaInstagram className="h-5 w-5 text-white" />
        </button>
      </div>
    </div>
  );
}