import { User } from '../../types/auth';
import { mockUsers } from '../../data/mockUsers';

export async function loginUser(email: string, password: string): Promise<User> {
  // Simulate API call with mock data
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = mockUsers.find(u => u.email === email);
      if (user && user.password === password) {
        // Remove password from returned user object
        const { password: _, ...userWithoutPassword } = user;
        resolve(userWithoutPassword as User);
      } else {
        reject(new Error('Invalid email or password'));
      }
    }, 1000);
  });
}

export async function registerUser(email: string, password: string): Promise<User> {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: Date.now().toString(),
        email,
        name: 'New User',
        role: 'player',
        isVerified: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
    }, 1000);
  });
}