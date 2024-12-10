import { CareerHighlight } from '../../types/proPlayer';
import { format } from 'date-fns';

interface CareerHighlightsProps {
  highlights: CareerHighlight[];
}

export default function CareerHighlights({ highlights }: CareerHighlightsProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Career Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {highlights.map((highlight) => (
          <div
            key={highlight.id}
            className="p-4 border rounded-lg hover:shadow-md transition-shadow"
          >
            <div className="flex items-center space-x-3 mb-2">
              <img
                src={highlight.icon}
                alt=""
                className="w-8 h-8 object-contain"
              />
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                highlight.type === 'trophy' ? 'bg-yellow-100 text-yellow-800' :
                highlight.type === 'award' ? 'bg-purple-100 text-purple-800' :
                'bg-blue-100 text-blue-800'
              }`}>
                {highlight.type.charAt(0).toUpperCase() + highlight.type.slice(1)}
              </span>
            </div>
            <h3 className="font-semibold text-gray-900">{highlight.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{highlight.description}</p>
            <p className="text-sm text-gray-500 mt-2">
              {format(new Date(highlight.date), 'MMM d, yyyy')}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}