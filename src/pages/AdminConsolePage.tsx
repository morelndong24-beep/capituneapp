import { Card } from '../components'

export const AdminConsolePage = () => {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-on-surface mb-2">Console d'Administration</h1>
        <p className="text-on-surface-variant">
          Gérez la plateforme et les utilisateurs
        </p>
      </div>

      <Card>
        <div className="text-center py-12">
          <p className="text-on-surface-variant">Console admin en développement</p>
        </div>
      </Card>
    </div>
  )
}