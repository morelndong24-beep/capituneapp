import { Card } from '@components'

export const ShowcasePage = () => {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-on-surface mb-2">Ma Vitrine</h1>
        <p className="text-on-surface-variant">
          Présentez vos services et compétences aux clients
        </p>
      </div>

      <Card>
        <div className="text-center py-12">
          <p className="text-on-surface-variant">Vitrine en développement</p>
        </div>
      </Card>
    </div>
  )
}