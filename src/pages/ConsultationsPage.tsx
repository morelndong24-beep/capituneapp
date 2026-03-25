import { Card } from '@components'

export const ConsultationsPage = () => {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-on-surface mb-2">Consultations</h1>
        <p className="text-on-surface-variant">
          Planifiez et gérez vos consultations avec nos experts
        </p>
      </div>

      <Card>
        <div className="text-center py-12">
          <p className="text-on-surface-variant">Consultations en développement</p>
        </div>
      </Card>
    </div>
  )
}