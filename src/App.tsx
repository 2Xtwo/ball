import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './lib/store/authStore';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignUpForm from './components/auth/SignUpForm';
import PlayerDashboard from './pages/dashboard/PlayerDashboard';
import AdminDashboard from './pages/dashboard/AdminDashboard';
import ScoutDashboard from './pages/dashboard/ScoutDashboard';
import ClubDashboard from './pages/dashboard/ClubDashboard';
import AssessorDashboard from './pages/dashboard/AssessorDashboard';
import TrainingVideos from './pages/TrainingVideos';
import PerformanceTracking from './pages/PerformanceTracking';
import CommunityFeed from './pages/CommunityFeed';
import Leaderboards from './pages/Leaderboards';
import ProPlayer from './pages/ProPlayer';
import Profile from './pages/Profile';
import RoleBasedRoute from './components/auth/RoleBasedRoute';

export default function App() {
  const { isAuthenticated, user } = useAuthStore();

  const getDashboardRoute = () => {
    if (!user) return <Navigate to="/login" replace />;
    
    switch (user.role) {
      case 'admin':
        return <Navigate to="/admin/dashboard" replace />;
      case 'scout':
        return <Navigate to="/scout/dashboard" replace />;
      case 'club':
        return <Navigate to="/club/dashboard" replace />;
      case 'assessor':
        return <Navigate to="/assessor/dashboard" replace />;
      case 'player':
      default:
        return <Navigate to="/dashboard" replace />;
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <div className={isAuthenticated ? "pt-4 px-4 sm:px-6 lg:px-8" : ""}>
          <main className="max-w-7xl mx-auto">
            <Routes>
              <Route path="/" element={
                isAuthenticated ? getDashboardRoute() : <LandingPage />
              } />
              <Route path="/login" element={
                !isAuthenticated ? <LoginPage /> : <Navigate to="/" replace />
              } />
              <Route path="/signup" element={
                !isAuthenticated ? <SignUpForm /> : <Navigate to="/" replace />
              } />

              {/* Role-specific dashboard routes */}
              <Route path="/admin/dashboard" element={
                <RoleBasedRoute allowedRoles={['admin']}>
                  <AdminDashboard />
                </RoleBasedRoute>
              } />
              <Route path="/scout/dashboard" element={
                <RoleBasedRoute allowedRoles={['scout']}>
                  <ScoutDashboard />
                </RoleBasedRoute>
              } />
              <Route path="/club/dashboard" element={
                <RoleBasedRoute allowedRoles={['club']}>
                  <ClubDashboard />
                </RoleBasedRoute>
              } />
              <Route path="/assessor/dashboard" element={
                <RoleBasedRoute allowedRoles={['assessor']}>
                  <AssessorDashboard />
                </RoleBasedRoute>
              } />
              <Route path="/dashboard" element={
                <RoleBasedRoute allowedRoles={['player']}>
                  <PlayerDashboard />
                </RoleBasedRoute>
              } />

              {/* Protected routes */}
              <Route path="/training" element={
                <RoleBasedRoute allowedRoles={['player']}>
                  <TrainingVideos />
                </RoleBasedRoute>
              } />
              <Route path="/performance" element={
                <RoleBasedRoute allowedRoles={['player']}>
                  <PerformanceTracking />
                </RoleBasedRoute>
              } />
              <Route path="/community" element={
                <RoleBasedRoute allowedRoles={['player', 'assessor', 'club', 'scout']}>
                  <CommunityFeed />
                </RoleBasedRoute>
              } />
              <Route path="/leaderboards" element={<Leaderboards />} />
              <Route path="/pro-player" element={
                <RoleBasedRoute allowedRoles={['player', 'assessor', 'club', 'scout']}>
                  <ProPlayer />
                </RoleBasedRoute>
              } />
              <Route path="/profile" element={
                isAuthenticated ? <Profile /> : <Navigate to="/login" replace />
              } />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}