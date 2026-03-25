import { create } from 'zustand'
import { signInWithEmailAndPassword, signInWithPopup, signOut as firebaseSignOut, createUserWithEmailAndPassword, User as FirebaseUser } from 'firebase/auth'
import { auth, googleProvider, microsoftProvider } from '../firebase'
import { AuthState, User } from '../types'

interface AuthStore extends AuthState {
  login: (email: string, password: string) => Promise<void>
  loginWithGoogle: () => Promise<void>
  loginWithMicrosoft: () => Promise<void>
  logout: () => void
  register: (email: string, password: string, firstName: string, lastName: string) => Promise<void>
  setUser: (user: User | null) => void
  clearError: () => void
}

// Convert Firebase user to our User type
const firebaseUserToUser = (firebaseUser: FirebaseUser): User => {
  // Extract role from display name or custom claims (simplified)
  const role = firebaseUser.displayName?.includes('Pro') ? 'professional' : 
               firebaseUser.displayName?.includes('Admin') ? 'admin' : 'client'
  
  return {
    id: firebaseUser.uid,
    email: firebaseUser.email || '',
    firstName: firebaseUser.displayName?.split(' ')[0] || '',
    lastName: firebaseUser.displayName?.split(' ').slice(1).join(' ') || '',
    role,
    createdAt: new Date(firebaseUser.metadata.creationTime || Date.now()),
  }
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,

  login: async (email: string, password: string) => {
    set({ isLoading: true, error: null })
    try {
      const result = await signInWithEmailAndPassword(auth, email, password)
      const user = firebaseUserToUser(result.user)
      set({
        user,
        isAuthenticated: true,
        isLoading: false
      })
    } catch (error: any) {
      set({
        error: error.message || 'Erreur de connexion',
        isLoading: false
      })
    }
  },

  loginWithGoogle: async () => {
    set({ isLoading: true, error: null })
    try {
      const result = await signInWithPopup(auth, googleProvider)
      const user = firebaseUserToUser(result.user)
      set({
        user,
        isAuthenticated: true,
        isLoading: false
      })
    } catch (error: any) {
      set({
        error: error.message || 'Erreur de connexion Google',
        isLoading: false
      })
    }
  },

  loginWithMicrosoft: async () => {
    set({ isLoading: true, error: null })
    try {
      const result = await signInWithPopup(auth, microsoftProvider)
      const user = firebaseUserToUser(result.user)
      set({
        user,
        isAuthenticated: true,
        isLoading: false
      })
    } catch (error: any) {
      set({
        error: error.message || 'Erreur de connexion Microsoft',
        isLoading: false
      })
    }
  },

  logout: async () => {
    try {
      await firebaseSignOut(auth)
      set({
        user: null,
        isAuthenticated: false,
        error: null
      })
    } catch (error: any) {
      set({ error: error.message || 'Erreur de déconnexion' })
    }
  },

  register: async (email: string, password: string, firstName: string, lastName: string) => {
    set({ isLoading: true, error: null })
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password)
      // Update display name
      await result.user.updateProfile({
        displayName: `${firstName} ${lastName}`
      })
      const user = firebaseUserToUser(result.user)
      set({
        user,
        isAuthenticated: true,
        isLoading: false
      })
    } catch (error: any) {
      set({
        error: error.message || 'Erreur d\'inscription',
        isLoading: false
      })
    }
  },

  setUser: (user) => set({ user, isAuthenticated: !!user }),

  clearError: () => set({ error: null }),
}))
