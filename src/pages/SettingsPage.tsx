import { Card } from '@components'

export const SettingsPage = () => {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-on-surface mb-2">Paramètres</h1>
        <p className="text-on-surface-variant">
          Configurez vos préférences et paramètres
        </p>
      </div>

      <Card>
        <div className="text-center py-12">
          <p className="text-on-surface-variant">Paramètres en développement</p>
        </div>
      </Card>
    </div>
  )
}