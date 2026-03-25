import { create } from 'zustand'
import { signInWithEmailAndPassword, signInWithPopup, signOut as firebaseSignOut, createUserWithEmailAndPassword, updateProfile as firebaseUpdateProfile, User as FirebaseUser } from 'firebase/auth'
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
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Erreur de connexion'
      set({
        error: message,
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
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Erreur de connexion Google'
      set({
        error: message,
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
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Erreur de connexion Microsoft'
      set({
        error: message,
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
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Erreur de déconnexion'
      set({ error: message })
    }
  },

  register: async (email: string, password: string, firstName: string, lastName: string) => {
    set({ isLoading: true, error: null })
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password)
      // Update display name
      await firebaseUpdateProfile(result.user, {
        displayName: `${firstName} ${lastName}`
      })
      const user = firebaseUserToUser(result.user)
      set({
        user,
        isAuthenticated: true,
        isLoading: false
      })
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Erreur d\'inscription'
      set({
        error: message,
        isLoading: false
      })
    }
  },

  setUser: (user) => set({ user, isAuthenticated: !!user }),

  clearError: () => set({ error: null }),
}))
