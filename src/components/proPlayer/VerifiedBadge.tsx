import { CheckBadgeIcon } from '@heroicons/react/24/solid';

interface VerifiedBadgeProps {
  className?: string;
}

export default function VerifiedBadge({ className = '' }: VerifiedBadgeProps) {
  return (
    <div className={`absolute bottom-0 right-0 ${className}`}>
      <CheckBadgeIcon className="h-8 w-8 text-blue-500 bg-white rounded-full" />
    </div>
  );
}