import { format } from 'date-fns';
import { CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline';

interface Match {
  id: string;
  homeTeam: string;
  awayTeam: string;
  date: string;
  venue: string;
  competition: string;
  trackedPlayers: number;
}

interface UpcomingMatchesProps {
  matches: Match[];
  onViewMatch: (matchId: string) => void;
}

export default function UpcomingMatches({ matches, onViewMatch }: UpcomingMatchesProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Matches</h2>
      <div className="space-y-4">
        {matches.map((match) => (
          <div
            key={match.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            onClick={() => onViewMatch(match.id)}
          >
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <CalendarIcon className="h-5 w-5 text-gray-400" />
                <span className="font-medium">
                  {format(new Date(match.date), 'MMM d, HH:mm')}
                </span>
              </div>
              <h3 className="font-medium mt-1">
                {match.homeTeam} vs {match.awayTeam}
              </h3>
              <div className="flex items-center space-x-2 mt-1 text-sm text-gray-500">
                <MapPinIcon className="h-4 w-4" />
                <span>{match.venue}</span>
                <span>•</span>
                <span>{match.competition}</span>
              </div>
            </div>
            {match.trackedPlayers > 0 && (
              <div className="ml-4 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
                {match.trackedPlayers} tracked players
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}