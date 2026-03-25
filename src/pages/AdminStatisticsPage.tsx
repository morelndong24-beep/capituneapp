import { Card } from '@components'

export const AdminStatisticsPage = () => {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-on-surface mb-2">Statistiques</h1>
        <p className="text-on-surface-variant">
          Analysez les métriques de la plateforme
        </p>
      </div>

      <Card>
        <div className="text-center py-12">
          <p className="text-on-surface-variant">Statistiques en développement</p>
        </div>
      </Card>
    </div>
  )
}