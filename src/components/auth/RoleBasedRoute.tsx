import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { UserRole } from '../../types/auth';
import { useAuthorization } from '../../lib/store/authStore';

interface RoleBasedRouteProps {
  children: ReactNode;
  allowedRoles: UserRole[];
}

export default function RoleBasedRoute({ children, allowedRoles }: RoleBasedRouteProps) {
  const { hasPermission } = useAuthorization();
  const hasAccess = allowedRoles.some(role => hasPermission(role));

  if (!hasAccess) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
}