import { Card } from '@components'

export const ServicesPage = () => {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-on-surface mb-2">Services</h1>
        <p className="text-on-surface-variant">
          Découvrez nos programmes et services d'immigration
        </p>
      </div>

      <Card>
        <div className="text-center py-12">
          <p className="text-on-surface-variant">Services en développement</p>
        </div>
      </Card>
    </div>
  )
}