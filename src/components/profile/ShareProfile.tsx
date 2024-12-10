import { FaTwitter, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { SocialShare } from '../../types/profile';

interface ShareProfileProps {
  onShare: (platform: SocialShare['platform']) => void;
}

export default function ShareProfile({ onShare }: ShareProfileProps) {
  const socialPlatforms: { platform: SocialShare['platform']; icon: any; color: string }[] = [
    { platform: 'twitter', icon: FaTwitter, color: 'text-[#1DA1F2]' },
    { platform: 'facebook', icon: FaFacebook, color: 'text-[#4267B2]' },
    { platform: 'instagram', icon: FaInstagram, color: 'text-[#E4405F]' },
    { platform: 'whatsapp', icon: FaWhatsapp, color: 'text-[#25D366]' },
  ];

  return (
    <div className="flex space-x-4">
      {socialPlatforms.map(({ platform, icon: Icon, color }) => (
        <button
          key={platform}
          onClick={() => onShare(platform)}
          className={`${color} hover:opacity-80 transition-opacity`}
        >
          <Icon className="h-6 w-6" />
        </button>
      ))}
    </div>
  );
}