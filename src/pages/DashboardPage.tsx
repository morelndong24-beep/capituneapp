import { Card, Progress } from '../components'
import { useProjectStore } from '../store/projectStore'
import { useAuthStore } from '../store/authStore'
import { ImmigrationProject, User, Document } from '../types'
import {
  BarChart3,
  FileText,
  Calendar,
  TrendingUp,
  CheckCircle,
  Clock,
  Users,
  MessageSquare,
  Settings,
  Globe,
} from 'lucide-react'

export const DashboardPage = () => {
  const { projects } = useProjectStore()
  const { user } = useAuthStore()

  if (!user) return null

  // Render different dashboard based on user role
  switch (user.role) {
    case 'client':
      return <ClientDashboard user={user} projects={projects} />
    case 'professional':
      return <ProfessionalDashboard user={user} projects={projects} />
    case 'admin':
      return <AdminDashboard user={user} />
    default:
      return <ClientDashboard user={user} projects={projects} />
  }
}

const ClientDashboard = ({ user, projects }: { user: User; projects: ImmigrationProject[] }) => {
  // Calculate stats
  const stats = {
    totalProjects: projects.length,
    activeProjects: projects.filter((p: ImmigrationProject) => p.status === 'in-progress').length,
    completedProjects: projects.filter((p: ImmigrationProject) => p.status === 'approved').length,
    pendingDocuments: projects.reduce(
      (sum: number, p: ImmigrationProject) =>
        sum + p.documents.filter((d: Document) => d.status === 'pending').length,
      0
    ),
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-on-surface mb-2">
          Bienvenue, {user.firstName} 👋
        </h1>
        <p className="text-on-surface-variant">
          Voici un aperçu de votre parcours d'immigration
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-on-surface-variant mb-1">
                Total Projets
              </p>
              <p className="text-3xl font-bold text-on-surface">
                {stats.totalProjects}
              </p>
            </div>
            <BarChart3 className="w-8 h-8 text-primary" />
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-on-surface-variant mb-1">
                Projets Actifs
              </p>
              <p className="text-3xl font-bold text-on-surface">
                {stats.activeProjects}
              </p>
            </div>
            <Clock className="w-8 h-8 text-secondary" />
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-on-surface-variant mb-1">
                Projets Terminés
              </p>
              <p className="text-3xl font-bold text-on-surface">
                {stats.completedProjects}
              </p>
            </div>
            <CheckCircle className="w-8 h-8 text-tertiary" />
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-on-surface-variant mb-1">
                Documents en Attente
              </p>
              <p className="text-3xl font-bold text-on-surface">
                {stats.pendingDocuments}
              </p>
            </div>
            <FileText className="w-8 h-8 text-primary" />
          </div>
        </Card>
      </div>

      {/* Recent Projects */}
      <Card>
        <h2 className="text-xl font-semibold mb-4 text-on-surface">
          Projets Récents
        </h2>
        <div className="space-y-4">
          {projects.slice(0, 3).map((project: ImmigrationProject) => (
            <div key={project.id} className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg">
              <div>
                <h3 className="font-medium text-on-surface">{project.title}</h3>
                <p className="text-sm text-on-surface-variant">{project.description}</p>
              </div>
              <div className="text-right">
                <Progress value={project.progress} className="w-20 mb-1" />
                <p className="text-xs text-on-surface-variant">{project.progress}%</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

const ProfessionalDashboard = ({ user, projects }: { user: User; projects: ImmigrationProject[] }) => {
  const stats = {
    totalClients: 25, // Mock data
    activeConsultations: 8,
    completedThisMonth: 12,
    pendingReviews: 3,
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-on-surface mb-2">
          Bonjour, {user.firstName} 👋
        </h1>
        <p className="text-on-surface-variant">
          Gérez vos clients et consultations
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-on-surface-variant mb-1">
                Total Clients
              </p>
              <p className="text-3xl font-bold text-on-surface">
                {stats.totalClients}
              </p>
            </div>
            <Users className="w-8 h-8 text-primary" />
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-on-surface-variant mb-1">
                Consultations Actives
              </p>
              <p className="text-3xl font-bold text-on-surface">
                {stats.activeConsultations}
              </p>
            </div>
            <Calendar className="w-8 h-8 text-secondary" />
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-on-surface-variant mb-1">
                Terminées ce Mois
              </p>
              <p className="text-3xl font-bold text-on-surface">
                {stats.completedThisMonth}
              </p>
            </div>
            <CheckCircle className="w-8 h-8 text-tertiary" />
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-on-surface-variant mb-1">
                Révisions en Attente
              </p>
              <p className="text-3xl font-bold text-on-surface">
                {stats.pendingReviews}
              </p>
            </div>
            <MessageSquare className="w-8 h-8 text-primary" />
          </div>
        </Card>
      </div>

      {/* Recent Consultations */}
      <Card>
        <h2 className="text-xl font-semibold mb-4 text-on-surface">
          Consultations Récentes
        </h2>
        <div className="space-y-4">
          {projects.slice(0, 3).map((project: ImmigrationProject) => (
            <div key={project.id} className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg">
              <div>
                <h3 className="font-medium text-on-surface">{project.title}</h3>
                <p className="text-sm text-on-surface-variant">Client: {project.clientName || 'N/A'}</p>
              </div>
              <div className="text-right">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  project.status === 'in-progress' ? 'bg-secondary-container text-on-secondary-container' :
                  project.status === 'approved' ? 'bg-tertiary-container text-on-tertiary-container' :
                  'bg-surface-container-high text-on-surface-variant'
                }`}>
                  {project.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

const AdminDashboard = ({ user }: { user: User }) => {
  const stats = {
    totalUsers: 1250,
    activeSessions: 89,
    systemHealth: 98,
    pendingIssues: 5,
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-on-surface mb-2">
          Administration, {user.firstName} 👋
        </h1>
        <p className="text-on-surface-variant">
          Surveillance et gestion de la plateforme
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-on-surface-variant mb-1">
                Utilisateurs Totaux
              </p>
              <p className="text-3xl font-bold text-on-surface">
                {stats.totalUsers}
              </p>
            </div>
            <Users className="w-8 h-8 text-primary" />
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-on-surface-variant mb-1">
                Sessions Actives
              </p>
              <p className="text-3xl font-bold text-on-surface">
                {stats.activeSessions}
              </p>
            </div>
            <Globe className="w-8 h-8 text-secondary" />
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-on-surface-variant mb-1">
                Santé Système
              </p>
              <p className="text-3xl font-bold text-on-surface">
                {stats.systemHealth}%
              </p>
            </div>
            <TrendingUp className="w-8 h-8 text-tertiary" />
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-on-surface-variant mb-1">
                Issues en Attente
              </p>
              <p className="text-3xl font-bold text-on-surface">
                {stats.pendingIssues}
              </p>
            </div>
            <Settings className="w-8 h-8 text-primary" />
          </div>
        </Card>
      </div>

      {/* System Overview */}
      <Card>
        <h2 className="text-xl font-semibold mb-4 text-on-surface">
          Aperçu Système
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-surface-container-low rounded-lg">
            <h3 className="font-medium text-on-surface mb-2">Trafic Global</h3>
            <p className="text-2xl font-bold text-primary">+12%</p>
            <p className="text-sm text-on-surface-variant">vs mois dernier</p>
          </div>
          <div className="p-4 bg-surface-container-low rounded-lg">
            <h3 className="font-medium text-on-surface mb-2">Déploiements</h3>
            <p className="text-2xl font-bold text-secondary">3</p>
            <p className="text-sm text-on-surface-variant">en cours</p>
          </div>
          <div className="p-4 bg-surface-container-low rounded-lg">
            <h3 className="font-medium text-on-surface mb-2">Alertes</h3>
            <p className="text-2xl font-bold text-tertiary">2</p>
            <p className="text-sm text-on-surface-variant">critiques</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
