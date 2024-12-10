import { VideoCameraIcon } from '@heroicons/react/24/outline';

export default function HighlightsSection() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-900">Recent Highlights</h2>
          <button className="text-premier-purple hover:text-premier-pink">
            View All
          </button>
        </div>
      </div>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer">
          <img
            src="https://placehold.co/800x450/png?text=Match+Highlight"
            alt="Highlight"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <VideoCameraIcon className="h-12 w-12 text-white" />
          </div>
        </div>
        <div className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer">
          <img
            src="https://placehold.co/800x450/png?text=Training+Highlight"
            alt="Highlight"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <VideoCameraIcon className="h-12 w-12 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}