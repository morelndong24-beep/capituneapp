import { Menu, X, Moon, Sun, LogOut } from 'lucide-react'
import { useAuthStore } from '../store/authStore'
import { useThemeStore } from '../store/themeStore'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

interface HeaderProps {
  onMenuClick?: () => void
  showMenu?: boolean
}

export const Header = ({ onMenuClick, showMenu = false }: HeaderProps) => {
  const { user, logout } = useAuthStore()
  const { isDark, toggleTheme } = useThemeStore()
  const navigate = useNavigate()
  const [showDropdown, setShowDropdown] = useState(false)

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <header className="sticky top-0 z-40 bg-surface dark:bg-slate-900 border-b border-outline-variant shadow-elevation-1">
      <div className="flex items-center justify-between h-16 px-4 md:px-8">
        {/* Logo and Menu Button */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="md:hidden p-2 hover:bg-surface-container rounded-lg transition-colors"
            aria-label="Menu"
          >
            {showMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
              C
            </div>
            <span className="font-headline font-bold text-lg text-primary">
              Capitune
            </span>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-surface-container rounded-lg transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* User Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-2 px-3 py-2 hover:bg-surface-container rounded-lg transition-colors"
            >
              <div className="w-8 h-8 bg-secondary-container rounded-full flex items-center justify-center text-primary font-bold text-sm">
                {user?.firstName.charAt(0)}{user?.lastName.charAt(0)}
              </div>
              <span className="hidden sm:inline text-sm font-medium">
                {user?.firstName}
              </span>
            </button>

            {/* Dropdown Menu */}
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-surface dark:bg-slate-800 border border-outline-variant rounded-lg shadow-elevation-3">
                <div className="px-4 py-2 border-b border-outline-variant">
                  <p className="text-sm font-semibold">{user?.firstName} {user?.lastName}</p>
                  <p className="text-xs text-on-surface-variant">{user?.email}</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2 px-4 py-3 text-sm hover:bg-surface-container transition-colors text-error"
                >
                  <LogOut size={16} />
                  Déconnexion
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
