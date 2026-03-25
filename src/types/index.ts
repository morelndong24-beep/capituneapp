// User Types
export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  avatar?: string
  role: 'client' | 'professional' | 'admin'
  createdAt: Date
}

// Auth Types
export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
}

// Immigration Project Types
export interface ImmigrationProject {
  id: string
  userId: string
  title: string
  status: 'draft' | 'in-progress' | 'submitted' | 'approved' | 'rejected'
  progress: number
  category: string
  description?: string
  clientName?: string
  createdAt: Date
  updatedAt: Date
  documents: Document[]
}

// Document Types
export interface Document {
  id: string
  projectId: string
  name: string
  type: string
  status: 'pending' | 'uploaded' | 'validated' | 'rejected'
  uploadedAt: Date
  size: number
  url?: string
}

// Consultation Types
export interface Consultation {
  id: string
  projectId: string
  professionalId: string
  status: 'scheduled' | 'completed' | 'cancelled'
  scheduledAt: Date
  duration: number
  notes?: string
  recording?: string
}

// Payment Types
export interface Payment {
  id: string
  userId: string
  amount: number
  currency: string
  status: 'pending' | 'completed' | 'failed' | 'refunded'
  method: 'card' | 'bank-transfer'
  description: string
  createdAt: Date
  transactionId?: string
}

// Subscription Types
export interface Subscription {
  id: string
  userId: string
  plan: 'basic' | 'professional' | 'enterprise'
  status: 'active' | 'paused' | 'cancelled'
  startDate: Date
  endDate: Date
  price: number
  features: string[]
}

// Message Types
export interface Message {
  id: string
  senderId: string
  recipientId: string
  content: string
  attachments?: string[]
  timestamp: Date
  read: boolean
}

// Dashboard Stats
export interface DashboardStats {
  totalProjects: number
  activeProjects: number
  completedProjects: number
  pendingDocuments: number
  upcomingConsultations: number
}
