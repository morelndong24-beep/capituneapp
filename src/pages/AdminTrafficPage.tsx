import { Card } from '@components'

export const AdminTrafficPage = () => {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-on-surface mb-2">Trafic Global</h1>
        <p className="text-on-surface-variant">
          Surveillez le trafic et les performances
        </p>
      </div>

      <Card>
        <div className="text-center py-12">
          <p className="text-on-surface-variant">Trafic en développement</p>
        </div>
      </Card>
    </div>
  )
}