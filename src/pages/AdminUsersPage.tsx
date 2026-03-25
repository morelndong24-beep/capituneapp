import { Card } from '../components'

export const AdminUsersPage = () => {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-on-surface mb-2">Gestion Utilisateurs</h1>
        <p className="text-on-surface-variant">
          Gérez les comptes utilisateurs et permissions
        </p>
      </div>

      <Card>
        <div className="text-center py-12">
          <p className="text-on-surface-variant">Gestion utilisateurs en développement</p>
        </div>
      </Card>
    </div>
  )
}