import { Card } from '../components'

export const ClientsPage = () => {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-on-surface mb-2">Mes Clients</h1>
        <p className="text-on-surface-variant">
          Gérez vos clients et leurs dossiers
        </p>
      </div>

      <Card>
        <div className="text-center py-12">
          <p className="text-on-surface-variant">Gestion clients en développement</p>
        </div>
      </Card>
    </div>
  )
}