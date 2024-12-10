import { format } from 'date-fns';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface PendingContentProps {
  filter: string;
}

interface PendingItem {
  id: string;
  type: 'post' | 'comment' | 'video' | 'profile';
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  submittedAt: string;
}

export default function PendingContent({ filter }: PendingContentProps) {
  const pendingItems: PendingItem[] = [
    {
      id: '1',
      type: 'post',
      content: 'Just completed my morning training session! 💪',
      author: {
        name: 'Alan Njenga',
        avatar: 'https://placehold.co/100x100/png?text=AN',
      },
      submittedAt: new Date().toISOString(),
    },
    {
      id: '2',
      type: 'video',
      content: 'Advanced Dribbling Techniques Tutorial',
      author: {
        name: 'Coach Smith',
        avatar: 'https://placehold.co/100x100/png?text=CS',
      },
      submittedAt: new Date(Date.now() - 3600000).toISOString(),
    },
  ];

  const filteredItems = filter === 'all' 
    ? pendingItems 
    : pendingItems.filter(item => item.type === filter.slice(0, -1));

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="divide-y divide-gray-200">
        {filteredItems.map((item) => (
          <div key={item.id} className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src={item.author.avatar}
                  alt={item.author.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-medium text-gray-900">{item.author.name}</p>
                  <p className="text-sm text-gray-500">
                    {format(new Date(item.submittedAt), 'MMM d, HH:mm')}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  className="p-2 text-green-600 hover:bg-green-50 rounded-full"
                  title="Approve"
                >
                  <CheckIcon className="h-5 w-5" />
                </button>
                <button
                  className="p-2 text-red-600 hover:bg-red-50 rounded-full"
                  title="Reject"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="mt-2">
              <p className="text-gray-900">{item.content}</p>
              <span className="mt-1 inline-block px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
                {item.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}