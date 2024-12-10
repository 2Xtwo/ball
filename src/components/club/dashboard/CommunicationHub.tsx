import { useState } from 'react';
import { format } from 'date-fns';
import ChatInterface from '../../chat/ChatInterface';

interface Contact {
  id: string;
  name: string;
  avatar: string;
  role: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
}

export default function CommunicationHub() {
  const [contacts] = useState<Contact[]>([
    {
      id: '1',
      name: 'Alan Njenga',
      avatar: 'https://placehold.co/100x100/png?text=AN',
      role: 'player',
      lastMessage: 'Thank you for the trial opportunity',
      timestamp: new Date().toISOString(),
      unread: 2,
    },
    {
      id: '2',
      name: 'Coach Smith',
      avatar: 'https://placehold.co/100x100/png?text=CS',
      role: 'assessor',
      lastMessage: 'Player evaluation report attached',
      timestamp: new Date(Date.now() - 3600000).toISOString(),
      unread: 0,
    },
  ]);

  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  return (
    <div className="flex h-[600px] bg-white rounded-lg shadow overflow-hidden">
      <div className="w-1/3 border-r">
        <div className="p-4 border-b">
          <input
            type="text"
            placeholder="Search contacts..."
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
        <div className="overflow-y-auto h-[calc(100%-73px)]">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              onClick={() => setSelectedContact(contact)}
              className={`p-4 hover:bg-gray-50 cursor-pointer ${
                selectedContact?.id === contact.id ? 'bg-gray-50' : ''
              }`}
            >
              <div className="flex items-center space-x-3">
                <img
                  src={contact.avatar}
                  alt={contact.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-sm font-medium text-gray-900 truncate">
                      {contact.name}
                    </h3>
                    <span className="text-xs text-gray-500">
                      {format(new Date(contact.timestamp), 'HH:mm')}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 truncate">{contact.lastMessage}</p>
                </div>
                {contact.unread > 0 && (
                  <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-indigo-600 rounded-full">
                    {contact.unread}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1">
        {selectedContact ? (
          <ChatInterface
            recipient={selectedContact}
            onClose={() => setSelectedContact(null)}
          />
        ) : (
          <div className="h-full flex items-center justify-center text-gray-500">
            Select a contact to start chatting
          </div>
        )}
      </div>
    </div>
  );
}