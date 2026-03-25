import { Card } from '@components'

export const MessagesPage = () => {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-on-surface mb-2">Messages</h1>
        <p className="text-on-surface-variant">
          Communiquez avec vos experts et consultez vos conversations
        </p>
      </div>

      <Card>
        <div className="text-center py-12">
          <p className="text-on-surface-variant">Messages en développement</p>
        </div>
      </Card>
    </div>
  )
}