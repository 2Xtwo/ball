import { ReactNode } from 'react';

interface StatsCardProps {
  icon: ReactNode;
  value: string;
  label: string;
}

export default function StatsCard({ icon, value, label }: StatsCardProps) {
  return (
    <div className="bg-white/10 rounded-lg p-6 text-center transform hover:scale-105 transition-transform">
      <div className="flex items-center justify-center mb-4">
        {icon}
      </div>
      <p className="text-3xl font-bold text-premier-pink mb-2">{value}</p>
      <p className="text-gray-300">{label}</p>
    </div>
  );
}