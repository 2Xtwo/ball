import { useState } from 'react';
import { PlayerMoment } from '../../types/proPlayer';
import MomentCard from './MomentCard';
import VideoModal from './VideoModal';

interface MomentsGridProps {
  moments: PlayerMoment[];
}

export default function MomentsGrid({ moments }: MomentsGridProps) {
  const [selectedMoment, setSelectedMoment] = useState<PlayerMoment | null>(null);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {moments.map((moment) => (
          <MomentCard
            key={moment.id}
            moment={moment}
            onPlay={() => setSelectedMoment(moment)}
          />
        ))}
      </div>

      <VideoModal
        isOpen={!!selectedMoment}
        onClose={() => setSelectedMoment(null)}
        videoUrl={selectedMoment?.videoUrl || ''}
        title={selectedMoment?.title || ''}
      />
    </div>
  );
}