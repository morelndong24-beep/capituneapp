import { useNavigate } from 'react-router-dom'
import { Card, Button, Progress } from '../components'
import { useProjectStore } from '../store/projectStore'
import { useAuthStore } from '../store/authStore'
import { Plus, Eye, Trash2 } from 'lucide-react'

export const ProjectsPage = () => {
  const { projects, deleteProject, setCurrentProject } = useProjectStore()
  const { user } = useAuthStore()
  const navigate = useNavigate()

  const userProjects = projects.filter((p) => p.userId === user?.id)

  const handleViewProject = (projectId: string) => {
    const project = projects.find((p) => p.id === projectId)
    if (project) {
      setCurrentProject(project)
      navigate(`/projects/${projectId}`)
    }
  }

  const handleDeleteProject = (projectId: string) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce projet ?')) {
      deleteProject(projectId)
    }
  }

  const handleCreateProject = () => {
    navigate('/projects/new')
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-on-surface">Mes Projets</h1>
          <p className="text-on-surface-variant">
            Gérez vos demandes d'immigration
          </p>
        </div>
        <Button
          variant="primary"
          onClick={handleCreateProject}
          className="gap-2"
        >
          <Plus size={20} />
          Nouveau Projet
        </Button>
      </div>

      {/* Projects Grid */}
      {userProjects.length === 0 ? (
        <Card className="text-center py-12">
          <p className="text-on-surface-variant mb-4">
            Aucun projet pour le moment
          </p>
          <Button variant="primary" onClick={handleCreateProject}>
            Créer un Nouveau Projet
          </Button>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {userProjects.map((project) => (
            <Card key={project.id} className="flex flex-col h-full">
              {/* Status Badge */}
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-lg text-on-surface flex-1">
                  {project.title}
                </h3>
                <span className="badge text-xs">{project.status}</span>
              </div>

              {/* Category and Info */}
              <p className="text-sm text-on-surface-variant mb-4">
                {project.category}
              </p>

              {/* Progress */}
              <div className="mb-4">
                <Progress
                  value={project.progress}
                  label={`${project.progress}% Complété`}
                />
              </div>

              {/* Documents Info */}
              <div className="mb-4 p-3 bg-surface-container rounded-lg">
                <p className="text-xs text-on-surface-variant mb-1">
                  Documents: {project.documents.length}
                </p>
                <div className="text-xs space-y-1">
                  <p>
                    ✅ Validés:{' '}
                    {
                      project.documents.filter(
                        (d) => d.status === 'validated'
                      ).length
                    }
                  </p>
                  <p>
                    ⏳ En attente:{' '}
                    {
                      project.documents.filter((d) => d.status === 'pending')
                        .length
                    }
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 mt-auto">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => handleViewProject(project.id)}
                  className="flex-1 gap-1"
                >
                  <Eye size={16} />
                  Voir
                </Button>
                <Button
                  variant="tertiary"
                  size="sm"
                  onClick={() => handleDeleteProject(project.id)}
                  className="gap-1"
                >
                  <Trash2 size={16} />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
