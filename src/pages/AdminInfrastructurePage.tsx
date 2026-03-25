import { Card } from '../components'

export const AdminInfrastructurePage = () => {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-on-surface mb-2">Infrastructure</h1>
        <p className="text-on-surface-variant">
          Gérez les déploiements et l'infrastructure
        </p>
      </div>

      <Card>
        <div className="text-center py-12">
          <p className="text-on-surface-variant">Infrastructure en développement</p>
        </div>
      </Card>
    </div>
  )
}