import { create } from 'zustand';
import { User, AuthState } from '../../types/auth';

interface AuthStore extends AuthState {
  login: (user: User) => void;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
  setError: (error: string | null) => void;
  clearError: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  login: (user) => set({ user, isAuthenticated: true, error: null }),
  logout: () => set({ user: null, isAuthenticated: false, error: null }),
  updateUser: (userData) =>
    set((state) => ({
      user: state.user ? { ...state.user, ...userData } : null,
    })),
  setError: (error) => set({ error }),
  clearError: () => set({ error: null }),
}));

// Role-based authorization hook
export const useAuthorization = () => {
  const user = useAuthStore((state) => state.user);

  const hasPermission = (requiredRole: User['role']) => {
    if (!user) return false;
    if (user.role === 'admin') return true;
    return user.role === requiredRole;
  };

  const isAdmin = () => user?.role === 'admin';
  const isAssessor = () => user?.role === 'assessor';
  const isPlayer = () => user?.role === 'player';

  return {
    hasPermission,
    isAdmin,
    isAssessor,
    isPlayer,
  };
};