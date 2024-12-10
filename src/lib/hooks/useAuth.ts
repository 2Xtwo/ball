import { useAuthStore } from '../store/authStore';
import { loginUser, registerUser } from '../api/auth';
import { UserRole } from '../../types/auth';

export function useAuth() {
  const { user, isAuthenticated, login: setLogin, logout: setLogout, updateUser } = useAuthStore();

  const getDashboardRoute = (role: UserRole): string => {
    switch (role) {
      case 'admin':
        return '/admin/dashboard';
      case 'scout':
        return '/scout/dashboard';
      case 'club':
        return '/club/dashboard';
      case 'assessor':
        return '/assessor/dashboard';
      case 'player':
      default:
        return '/dashboard';
    }
  };

  const handleLogin = async (email: string, password: string) => {
    try {
      const userData = await loginUser(email, password);
      setLogin(userData);
      return { 
        success: true, 
        redirectTo: getDashboardRoute(userData.role)
      };
    } catch (error) {
      return { success: false, error };
    }
  };

  const handleRegister = async (email: string, password: string, role: UserRole) => {
    try {
      const userData = await registerUser(email, password);
      setLogin({ ...userData, role }); // Ensure role is included
      return { 
        success: true, 
        redirectTo: getDashboardRoute(role)
      };
    } catch (error) {
      return { success: false, error };
    }
  };

  return {
    user,
    isAuthenticated,
    login: handleLogin,
    register: handleRegister,
    logout: setLogout,
    updateUser,
    getDashboardRoute,
  };
}