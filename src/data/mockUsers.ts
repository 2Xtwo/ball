import { User, Club, Scout } from '../types/auth';

export const mockUsers: (User | Club | Scout)[] = [
  {
    id: '1',
    email: 'alan.njenga@example.com',
    password: 'player123', // In a real app, passwords would be hashed
    name: 'Alan Njenga',
    role: 'player',
    position: 'Forward',
    club: 'Kariobangi Sharks',
    birthDate: '2004-05-15',
    nationality: 'Kenyan',
    isVerified: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    profileImage: 'https://placehold.co/200x200/png?text=AN',
  },
  {
    id: '2',
    email: 'assessor@example.com',
    password: 'assessor123',
    name: 'Mike Coach',
    role: 'assessor',
    isVerified: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '3',
    email: 'admin@example.com',
    password: 'admin123',
    name: 'Admin User',
    role: 'admin',
    isVerified: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '4',
    email: 'club@example.com',
    password: 'club123',
    name: 'Manchester City FC',
    role: 'club',
    isVerified: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    clubInfo: {
      name: 'Manchester City FC',
      crest: 'https://placehold.co/200x200/png?text=MCFC',
      founded: '1894',
      league: 'Premier League',
      country: 'England',
      website: 'https://www.mancity.com',
    },
    licenses: [
      {
        id: 'l1',
        name: 'Professional Club License',
        issuedBy: 'The FA',
        issuedDate: '2023-01-01',
        expiryDate: '2024-12-31',
        licenseNumber: 'PCL-2023-001',
      }
    ]
  },
  {
    id: '5',
    email: 'scout@example.com',
    password: 'scout123',
    name: 'James Scout',
    role: 'scout',
    isVerified: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    scoutInfo: {
      organization: 'Elite Football Scouting',
      licenseNumber: 'SCT-2023-001',
      experience: 10,
      specialization: ['Youth Development', 'Technical Analysis'],
    },
    licenses: [
      {
        id: 'l2',
        name: 'Professional Scout License',
        issuedBy: 'UEFA',
        issuedDate: '2023-01-01',
        expiryDate: '2024-12-31',
        licenseNumber: 'PSL-2023-001',
      }
    ]
  }
];