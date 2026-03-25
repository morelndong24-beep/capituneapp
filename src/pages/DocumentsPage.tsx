import { useState } from 'react'
import { Card, Button, Progress } from '@components'
import { useProjectStore } from '@store/projectStore'
import { Upload, Download, FileText, Check, X, Clock } from 'lucide-react'

export const DocumentsPage = () => {
  const { projects } = useProjectStore()

  // Flatten all documents from all projects
  const allDocuments = projects.flatMap((project) =>
    project.documents.map((doc) => ({
      ...doc,
      projectTitle: project.title,
      projectId: project.id,
    }))
  )

  const stats = {
    total: allDocuments.length,
    validated: allDocuments.filter((d) => d.status === 'validated').length,
    pending: allDocuments.filter((d) => d.status === 'pending').length,
    rejected: allDocuments.filter((d) => d.status === 'rejected').length,
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'validated':
        return <Check size={16} className="text-emerald-600" />
      case 'rejected':
        return <X size={16} className="text-error" />
      case 'pending':
        return <Clock size={16} className="text-orange-600" />
      default:
        return <FileText size={16} />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'validated':
        return 'bg-emerald-50 text-emerald-700'
      case 'rejected':
        return 'bg-red-50 text-error'
      case 'pending':
        return 'bg-orange-50 text-orange-700'
      case 'uploaded':
        return 'bg-blue-50 text-blue-700'
      default:
        return 'bg-gray-50'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-on-surface">Documents</h1>
          <p className="text-on-surface-variant">
            Gérez tous vos documents d'immigration
          </p>
        </div>
        <Button variant="primary" className="gap-2">
          <Upload size={20} />
          Télécharger
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <div className="text-center">
            <p className="text-2xl font-bold text-primary">{stats.total}</p>
            <p className="text-xs text-on-surface-variant">Total</p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-2xl font-bold text-emerald-600">
              {stats.validated}
            </p>
            <p className="text-xs text-on-surface-variant">Validés</p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-2xl font-bold text-orange-600">{stats.pending}</p>
            <p className="text-xs text-on-surface-variant">En attente</p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-2xl font-bold text-error">{stats.rejected}</p>
            <p className="text-xs text-on-surface-variant">Rejetés</p>
          </div>
        </Card>
      </div>

      {/* Documents List */}
      <Card>
        <h2 className="text-xl font-bold mb-4">Liste des Documents</h2>
        {allDocuments.length === 0 ? (
          <p className="text-on-surface-variant text-center py-8">
            Aucun document téléchargé
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-outline-variant">
                <tr>
                  <th className="text-left py-3 px-4 font-semibold text-sm">
                    Nom
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-sm">
                    Type
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-sm">
                    Projet
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-sm">
                    Taille
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-sm">
                    Statut
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-sm">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {allDocuments.map((doc) => (
                  <tr
                    key={doc.id}
                    className="border-b border-outline-variant hover:bg-surface-container/50 transition-colors"
                  >
                    <td className="py-3 px-4 text-sm font-medium flex items-center gap-2">
                      <FileText size={16} className="text-primary" />
                      {doc.name}
                    </td>
                    <td className="py-3 px-4 text-sm text-on-surface-variant">
                      {doc.type}
                    </td>
                    <td className="py-3 px-4 text-sm text-on-surface-variant">
                      {doc.projectTitle}
                    </td>
                    <td className="py-3 px-4 text-sm text-on-surface-variant">
                      {(doc.size / 1024).toFixed(2)} KB
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(doc.status)}
                        <span
                          className={`text-xs px-2 py-1 rounded-full font-semibold ${getStatusColor(
                            doc.status
                          )}`}
                        >
                          {doc.status === 'validated'
                            ? 'Validé'
                            : doc.status === 'pending'
                            ? 'En attente'
                            : doc.status === 'rejected'
                            ? 'Rejeté'
                            : 'Téléchargé'}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <button className="text-primary hover:underline text-sm font-semibold flex items-center gap-1">
                        <Download size={14} />
                        Télécharger
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </div>
  )
}
