import { create } from 'zustand'
import { ImmigrationProject } from '../types'

interface ProjectStore {
  projects: ImmigrationProject[]
  currentProject: ImmigrationProject | null
  addProject: (project: ImmigrationProject) => void
  setCurrentProject: (project: ImmigrationProject | null) => void
  updateProject: (id: string, project: Partial<ImmigrationProject>) => void
  deleteProject: (id: string) => void
  getProjectById: (id: string) => ImmigrationProject | undefined
}

// Mock projects for development
const mockProjects: ImmigrationProject[] = [
  {
    id: '1',
    userId: '1',
    title: 'Demande de Résidence Permanente',
    status: 'in-progress',
    progress: 65,
    category: 'Résidence permanente',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-03-20'),
    documents: [
      {
        id: 'd1',
        projectId: '1',
        name: 'Passeport',
        type: 'document',
        status: 'validated',
        uploadedAt: new Date('2024-01-16'),
        size: 2048,
      },
      {
        id: 'd2',
        projectId: '1',
        name: 'Preuve de revenus',
        type: 'document',
        status: 'pending',
        uploadedAt: new Date('2024-03-18'),
        size: 3072,
      },
    ],
  },
  {
    id: '2',
    userId: '1',
    title: 'Permis d\'études',
    status: 'draft',
    progress: 20,
    category: 'Étudiant',
    createdAt: new Date('2024-02-20'),
    updatedAt: new Date('2024-03-15'),
    documents: [],
  },
]

export const useProjectStore = create<ProjectStore>((set, get) => ({
  projects: mockProjects,
  currentProject: null,

  addProject: (project) => {
    set((state) => ({
      projects: [...state.projects, project],
    }))
  },

  setCurrentProject: (project) => {
    set({ currentProject: project })
  },

  updateProject: (id, updates) => {
    set((state) => ({
      projects: state.projects.map((p) =>
        p.id === id ? { ...p, ...updates } : p
      ),
      currentProject:
        state.currentProject?.id === id
          ? { ...state.currentProject, ...updates }
          : state.currentProject,
    }))
  },

  deleteProject: (id) => {
    set((state) => ({
      projects: state.projects.filter((p) => p.id !== id),
      currentProject:
        state.currentProject?.id === id ? null : state.currentProject,
    }))
  },

  getProjectById: (id) => {
    return get().projects.find((p) => p.id === id)
  },
}))
