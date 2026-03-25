export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

export const TOAST_MESSAGES = {
  LOGIN_SUCCESS: 'Connexion réussie',
  LOGIN_ERROR: 'Erreur de connexion',
  PROJECT_CREATED: 'Projet créé avec succès',
  PROJECT_UPDATED: 'Projet mis à jour',
  DOCUMENT_UPLOADED: 'Document téléchargé',
  ERROR_OCCURRED: 'Une erreur est survenue',
}

export const PROJECT_STATUS = {
  DRAFT: 'draft',
  IN_PROGRESS: 'in-progress',
  SUBMITTED: 'submitted',
  APPROVED: 'approved',
  REJECTED: 'rejected',
}

export const USER_ROLES = {
  CLIENT: 'client',
  PROFESSIONAL: 'professional',
  ADMIN: 'admin',
}
