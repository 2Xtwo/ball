import { CalendarIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export default function UpcomingEvents() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Upcoming Events</h2>
      </div>
      <div className="p-4 space-y-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-premier-purple/10 rounded-lg">
            <CalendarIcon className="h-6 w-6 text-premier-purple" />
          </div>
          <div>
            <p className="font-medium">Match vs Liverpool U21</p>
            <p className="text-sm text-gray-500">Tomorrow, 15:00</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-premier-purple/10 rounded-lg">
            <UserGroupIcon className="h-6 w-6 text-premier-purple" />
          </div>
          <div>
            <p className="font-medium">Team Training</p>
            <p className="text-sm text-gray-500">Wednesday, 10:00</p>
          </div>
        </div>
      </div>
    </div>
  );
}