import { Region } from '../../types/leaderboard';
import { clsx } from 'clsx';

interface RegionSelectorProps {
  selectedRegion: Region | null;
  onRegionChange: (region: Region) => void;
}

export default function RegionSelector({ selectedRegion, onRegionChange }: RegionSelectorProps) {
  const regions: Region[] = [
    'Europe',
    'Asia',
    'Africa',
    'North America',
    'South America',
    'Oceania'
  ];

  return (
    <div>
      <h3 className="text-sm font-medium text-gray-700 mb-2">Select Region</h3>
      <div className="flex flex-wrap gap-2">
        {regions.map((region) => (
          <button
            key={region}
            onClick={() => onRegionChange(region)}
            className={clsx(
              'px-3 py-1.5 rounded-full text-sm font-medium transition-colors',
              selectedRegion === region
                ? 'bg-premier-purple text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            )}
          >
            {region}
          </button>
        ))}
      </div>
    </div>
  );
}