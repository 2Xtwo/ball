export interface Post {
  id: string;
  author: {
    id: string;
    name: string;
    avatar: string;
    role: 'player' | 'coach' | 'club';
  };
  content: string;
  type: 'update' | 'insight' | 'announcement';
  likes: number;
  comments: number;
  createdAt: string;
  image?: string;
}

export type PostFilter = 'all' | 'club' | 'challenge' | 'training';