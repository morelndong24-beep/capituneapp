import { Card } from '@components'

export const ProfilePage = () => {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-on-surface mb-2">Profil</h1>
        <p className="text-on-surface-variant">
          Gérez vos informations personnelles et professionnelles
        </p>
      </div>

      <Card>
        <div className="text-center py-12">
          <p className="text-on-surface-variant">Profil en développement</p>
        </div>
      </Card>
    </div>
  )
}