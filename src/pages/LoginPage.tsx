import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input, Button, Alert } from '@components'
import { useAuthStore } from '@store/authStore'

export const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const { login, loginWithGoogle, loginWithMicrosoft, isLoading, error } = useAuthStore()
  const navigate = useNavigate()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})

    if (!email) {
      setErrors({ email: 'Email est requis' })
      return
    }
    if (!password) {
      setErrors({ password: 'Mot de passe est requis' })
      return
    }

    try {
      await login(email, password)
      navigate('/dashboard')
    } catch {
      // Error is handled by the store
    }
  }

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle()
      navigate('/dashboard')
    } catch {
      // Error handled by store
    }
  }

  const handleMicrosoftLogin = async () => {
    try {
      await loginWithMicrosoft()
      navigate('/dashboard')
    } catch {
      // Error handled by store
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center p-4">
      <div className="card w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
            C
          </div>
          <h1 className="text-3xl font-bold text-on-surface mb-2">Capitune</h1>
          <p className="text-on-surface-variant">
            Plateforme d'Immigration Intelligente
          </p>
        </div>

        {/* Social Logins */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            onClick={handleGoogleLogin}
            disabled={isLoading}
            className="flex items-center justify-center gap-3 py-3 px-4 bg-surface-container-low hover:bg-surface-container-high transition-all rounded-lg text-sm font-semibold text-on-surface disabled:opacity-50"
          >
            <img
              alt="Google"
              className="w-5 h-5"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoJ-jjj1aOcqH8glqPP8bO35-mwMse73uGncBRMwc6K5m9EdJNCyBKQb5EALC1jBP5wlEXAoq5kwMLp6ZTlTG_Pd_kcLzGZkRwr5ivjzIErGU98vVmVOsi3aStY-FfT9CDOCtqS6uS_dr-Tn0WiojuB87Cn_6ppsTRlWfXaqX0hX1ZQkS_9ue0RwjuAJPsRJmwo0o7FxbNjpzUwBTPt1K2GPB_RLi98J23XiQawZ-VuN5-cQGQjvdgQFBEYroNgQi_Kl7zeQ9dTlDB"
            />
            Google
          </button>
          <button
            onClick={handleMicrosoftLogin}
            disabled={isLoading}
            className="flex items-center justify-center gap-3 py-3 px-4 bg-surface-container-low hover:bg-surface-container-high transition-all rounded-lg text-sm font-semibold text-on-surface disabled:opacity-50"
          >
            <img
              alt="Microsoft"
              className="w-5 h-5"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBe_KN8oN7LMwB0webA1n2ik320CoY0UcdiDwtIaQKAYA7XdBqdFfn8m--3pqUwmgTmZ8fG_iKSxVnsvvLJGxKpoZ06ptPZMM_Uqho8GiXV_fUbVGqf8iBeTiK1O_mcBpPa7cOZza_EAhrWg5R0-V9XaS7M97GvWvKAmJVO_WQS7sjaKBtkLFfJqxWAWR8nYS5nX0z2AytOn4eY61rxloi8Z1My_mAWZEl3zAWnAOmA6iNMuuZE2Jv77Kfyax54r9W3UxQFX5u3ls1w"
            />
            Microsoft
          </button>
        </div>

        <div className="relative flex items-center justify-center py-2 mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-outline-variant opacity-30"></div>
          </div>
          <span className="relative px-4 text-xs font-bold uppercase tracking-widest text-outline bg-surface-container-lowest">Ou continuer avec</span>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          {error && (
            <Alert type="error" message={error} />
          )}

          <Input
            label="Adresse Email"
            type="email"
            placeholder="votre@email.com"
            value={email}
            onChange={setEmail}
            error={errors.email}
            required
          />

          <Input
            label="Mot de Passe"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={setPassword}
            error={errors.password}
            required
          />

          <Button
            type="submit"
            variant="primary"
            loading={isLoading}
            className="w-full"
          >
            Connexion
          </Button>
        </form>

        <div className="mt-6 pt-6 border-t border-outline-variant text-center">
          <p className="text-sm text-on-surface-variant">
            Pas encore de compte ?{' '}
            <a href="/register" className="text-primary font-semibold hover:underline">
              S'inscrire
            </a>
          </p>
        </div>

        {/* Demo Credentials */}
        <div className="mt-6 p-4 bg-surface-container-low rounded-lg">
          <p className="text-xs font-semibold mb-2 text-on-surface-variant">
            📝 Credentials démo :
          </p>
          <p className="text-xs text-on-surface-variant">
            <strong>Client :</strong> user@example.com
          </p>
          <p className="text-xs text-on-surface-variant">
            <strong>Pro :</strong> pro@example.com
          </p>
          <p className="text-xs text-on-surface-variant">
            <strong>Pass :</strong> password
          </p>
        </div>
      </div>
    </div>
  )
}
