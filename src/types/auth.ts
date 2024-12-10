export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  position?: string;
  club?: string;
  age?: number;
  birthDate?: string;
  nationality?: string;
  profileImage?: string;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}