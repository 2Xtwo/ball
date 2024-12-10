import { format } from 'date-fns';
import { FlagIcon, ShieldExclamationIcon } from '@heroicons/react/24/outline';

interface ReportedContentProps {
  filter: string;
}

interface Report {
  id: string;
  type: 'post' | 'comment' | 'video' | 'profile';
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  reportedAt: string;
  reportCount: number;
  reason: string;
}

export default function ReportedContent({ filter }: ReportedContentProps) {
  const reports: Report[] = [
    {
      id: '1',
      type: 'comment',
      content: 'Inappropriate comment content',
      author: {
        name: 'John Doe',
        avatar: 'https://placehold.co/100x100/png?text=JD',
      },
      reportedAt: new Date().toISOString(),
      reportCount: 3,
      reason: 'Harassment',
    },
  ];

  const filteredReports = filter === 'all'
    ? reports
    : reports.filter(report => report.type === filter.slice(0, -1));

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="divide-y divide-gray-200">
        {filteredReports.map((report) => (
          <div key={report.id} className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src={report.author.avatar}
                  alt={report.author.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-medium text-gray-900">{report.author.name}</p>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <FlagIcon className="h-4 w-4" />
                    <span>{report.reportCount} reports</span>
                    <span>•</span>
                    <span>{format(new Date(report.reportedAt), 'MMM d, HH:mm')}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700">
                  Remove Content
                </button>
                <button className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200">
                  Dismiss
                </button>
              </div>
            </div>
            <div className="mt-2">
              <p className="text-gray-900">{report.content}</p>
              <div className="mt-2 flex items-center space-x-2">
                <ShieldExclamationIcon className="h-5 w-5 text-red-500" />
                <span className="text-sm font-medium text-red-500">
                  Reported for: {report.reason}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}