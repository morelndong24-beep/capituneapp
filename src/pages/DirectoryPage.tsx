import { Card } from '@components'

export const DirectoryPage = () => {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-on-surface mb-2">Annuaire</h1>
        <p className="text-on-surface-variant">
          Découvrez et contactez d'autres professionnels
        </p>
      </div>

      <Card>
        <div className="text-center py-12">
          <p className="text-on-surface-variant">Annuaire en développement</p>
        </div>
      </Card>
    </div>
  )
}