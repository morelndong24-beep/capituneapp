import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthStore } from './store/authStore'
import { useThemeStore } from './store/themeStore'
import { useEffect } from 'react'
import { Layout } from './components/Layout'
import { ProtectedRoute } from './utils/ProtectedRoute'
import {
  LoginPage,
  DashboardPage,
  ProjectsPage,
  DocumentsPage,
  PaymentsPage,
  MessagesPage,
  ServicesPage,
  ProfilePage,
  ConsultationsPage,
  ClientsPage,
  DirectoryPage,
  ShowcasePage,
  AdminConsolePage,
  AdminStatisticsPage,
  AdminUsersPage,
  AdminTrafficPage,
  AdminInfrastructurePage,
  SettingsPage,
} from './pages'

function App() {
  const { isDark } = useThemeStore()
  const { isAuthenticated } = useAuthStore()

  // Initialize dark mode
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <LoginPage />}
        />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Layout>
                <DashboardPage />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/projects"
          element={
            <ProtectedRoute>
              <Layout>
                <ProjectsPage />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/documents"
          element={
            <ProtectedRoute>
              <Layout>
                <DocumentsPage />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/payments"
          element={
            <ProtectedRoute>
              <Layout>
                <PaymentsPage />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/messages"
          element={
            <ProtectedRoute>
              <Layout>
                <MessagesPage />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/services"
          element={
            <ProtectedRoute>
              <Layout>
                <ServicesPage />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Layout>
                <ProfilePage />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/consultations"
          element={
            <ProtectedRoute>
              <Layout>
                <ConsultationsPage />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/clients"
          element={
            <ProtectedRoute>
              <Layout>
                <ClientsPage />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/directory"
          element={
            <ProtectedRoute>
              <Layout>
                <DirectoryPage />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/showcase"
          element={
            <ProtectedRoute>
              <Layout>
                <ShowcasePage />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/console"
          element={
            <ProtectedRoute>
              <Layout>
                <AdminConsolePage />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/statistics"
          element={
            <ProtectedRoute>
              <Layout>
                <AdminStatisticsPage />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <ProtectedRoute>
              <Layout>
                <AdminUsersPage />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/traffic"
          element={
            <ProtectedRoute>
              <Layout>
                <AdminTrafficPage />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/infrastructure"
          element={
            <ProtectedRoute>
              <Layout>
                <AdminInfrastructurePage />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Layout>
                <SettingsPage />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* Catch all - Redirect to dashboard or login */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  )
}

export default App
