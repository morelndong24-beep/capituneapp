import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  FileText,
  Calendar,
  CreditCard,
  Settings,
  MessageSquare,
  BarChart3,
  Users,
  User,
  Briefcase,
  Globe,
  Shield,
  BookOpen,
  Phone,
  CheckCircle,
  TrendingUp,
  Server,
} from 'lucide-react'
import { useAuthStore } from '@store/authStore'

interface SidebarProps {
  isOpen?: boolean
  onClose?: () => void
}

interface NavItem {
  label: string
  href: string
  icon: ReactNode
  roles: string[]
}

const navItems: NavItem[] = [
  // Common
  {
    label: 'Tableau de Bord',
    href: '/dashboard',
    icon: <LayoutDashboard size={20} />,
    roles: ['client', 'professional', 'admin'],
  },
  {
    label: 'Messages',
    href: '/messages',
    icon: <MessageSquare size={20} />,
    roles: ['client', 'professional'],
  },
  {
    label: 'Paramètres',
    href: '/settings',
    icon: <Settings size={20} />,
    roles: ['client', 'professional', 'admin'],
  },

  // Client specific
  {
    label: 'Mes Projets',
    href: '/projects',
    icon: <FileText size={20} />,
    roles: ['client'],
  },
  {
    label: 'Documents',
    href: '/documents',
    icon: <FileText size={20} />,
    roles: ['client'],
  },
  {
    label: 'Consultations',
    href: '/consultations',
    icon: <Calendar size={20} />,
    roles: ['client'],
  },
  {
    label: 'Paiements',
    href: '/payments',
    icon: <CreditCard size={20} />,
    roles: ['client'],
  },
  {
    label: 'Services',
    href: '/services',
    icon: <Briefcase size={20} />,
    roles: ['client'],
  },
  {
    label: 'Profil',
    href: '/profile',
    icon: <User size={20} />,
    roles: ['client'],
  },

  // Professional specific
  {
    label: 'Mes Clients',
    href: '/clients',
    icon: <Users size={20} />,
    roles: ['professional'],
  },
  {
    label: 'Annuaire',
    href: '/directory',
    icon: <BookOpen size={20} />,
    roles: ['professional'],
  },
  {
    label: 'Consultations',
    href: '/consultations',
    icon: <Calendar size={20} />,
    roles: ['professional'],
  },
  {
    label: 'Documents',
    href: '/documents',
    icon: <FileText size={20} />,
    roles: ['professional'],
  },
  {
    label: 'Vitrine',
    href: '/showcase',
    icon: <Globe size={20} />,
    roles: ['professional'],
  },
  {
    label: 'Profil Pro',
    href: '/profile',
    icon: <User size={20} />,
    roles: ['professional'],
  },

  // Admin specific
  {
    label: 'Console Admin',
    href: '/admin/console',
    icon: <Shield size={20} />,
    roles: ['admin'],
  },
  {
    label: 'Statistiques',
    href: '/admin/statistics',
    icon: <BarChart3 size={20} />,
    roles: ['admin'],
  },
  {
    label: 'Utilisateurs',
    href: '/admin/users',
    icon: <Users size={20} />,
    roles: ['admin'],
  },
  {
    label: 'Trafic',
    href: '/admin/traffic',
    icon: <TrendingUp size={20} />,
    roles: ['admin'],
  },
  {
    label: 'Infrastructure',
    href: '/admin/infrastructure',
    icon: <Server size={20} />,
    roles: ['admin'],
  },
]

export const Sidebar = ({ isOpen = true, onClose }: SidebarProps) => {
  const { user } = useAuthStore()
  const filteredItems = navItems.filter((item) =>
    user ? item.roles.includes(user.role) : false
  )

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-surface dark:bg-slate-900 border-r border-outline-variant overflow-y-auto transition-transform duration-300 z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <nav className="flex flex-col p-4 space-y-2">
          {filteredItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              onClick={onClose}
              className={({ isActive }) =>
                `nav-link group ${isActive ? 'active' : ''}`
              }
            >
              <span className="group-hover:scale-110 transition-transform">
                {item.icon}
              </span>
              <span className="font-medium">{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  )
}
