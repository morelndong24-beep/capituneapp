import { Card, Button, Progress } from '@components'
import { CreditCard, Download, Eye, TrendingUp } from 'lucide-react'

interface Invoice {
  id: string
  amount: number
  date: string
  status: 'paid' | 'pending' | 'overdue'
  description: string
}

const mockInvoices: Invoice[] = [
  {
    id: '1',
    amount: 299,
    date: '2024-03-15',
    status: 'paid',
    description: 'Plan Professional - 3 mois',
  },
  {
    id: '2',
    amount: 99,
    date: '2024-02-15',
    status: 'paid',
    description: 'Plan Basic - 1 mois',
  },
  {
    id: '3',
    amount: 199,
    date: '2024-04-15',
    status: 'pending',
    description: 'Plan Professional - 2 mois',
  },
]

export const PaymentsPage = () => {
  const paidAmount = mockInvoices
    .filter((inv) => inv.status === 'paid')
    .reduce((sum, inv) => sum + inv.amount, 0)

  const pendingAmount = mockInvoices
    .filter((inv) => inv.status === 'pending')
    .reduce((sum, inv) => sum + inv.amount, 0)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid':
        return 'text-emerald-600'
      case 'pending':
        return 'text-orange-600'
      case 'overdue':
        return 'text-error'
      default:
        return 'text-gray-600'
    }
  }

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'paid':
        return 'bg-emerald-50'
      case 'pending':
        return 'bg-orange-50'
      case 'overdue':
        return 'bg-red-50'
      default:
        return 'bg-gray-50'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-on-surface">Paiements</h1>
        <p className="text-on-surface-variant">
          Gérez vos paiements et factures
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-on-surface-variant mb-1">
                Montant Payé
              </p>
              <p className="text-2xl font-bold text-emerald-600">
                ${paidAmount}
              </p>
            </div>
            <div className="p-3 bg-emerald-100 rounded-lg text-emerald-600">
              <CreditCard size={24} />
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-on-surface-variant mb-1">
                En Attente
              </p>
              <p className="text-2xl font-bold text-orange-600">
                ${pendingAmount}
              </p>
            </div>
            <div className="p-3 bg-orange-100 rounded-lg text-orange-600">
              <Eye size={24} />
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-on-surface-variant mb-1">Total</p>
              <p className="text-2xl font-bold text-primary">
                ${paidAmount + pendingAmount}
              </p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg text-primary">
              <TrendingUp size={24} />
            </div>
          </div>
        </Card>
      </div>

      {/* Subscriptions */}
      <Card>
        <h2 className="text-xl font-bold mb-4">Abonnements Actifs</h2>
        <div className="space-y-3">
          <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h3 className="font-semibold">Plan Professional</h3>
                <p className="text-sm text-on-surface-variant">
                  Renouvelable le 15 avril 2024
                </p>
              </div>
              <span className="badge">Actif</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-on-surface-variant">
                $299/mois
              </span>
              <Button variant="secondary" size="sm">
                Gérer
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Invoices */}
      <Card>
        <h2 className="text-xl font-bold mb-4">Factures Récentes</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-outline-variant">
              <tr>
                <th className="text-left py-3 px-4 font-semibold text-sm">
                  ID Facture
                </th>
                <th className="text-left py-3 px-4 font-semibold text-sm">
                  Description
                </th>
                <th className="text-left py-3 px-4 font-semibold text-sm">
                  Montant
                </th>
                <th className="text-left py-3 px-4 font-semibold text-sm">
                  Date
                </th>
                <th className="text-left py-3 px-4 font-semibold text-sm">
                  Statut
                </th>
                <th className="text-left py-3 px-4 font-semibold text-sm">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {mockInvoices.map((invoice) => (
                <tr
                  key={invoice.id}
                  className="border-b border-outline-variant hover:bg-surface-container/50"
                >
                  <td className="py-3 px-4 font-mono text-sm">
                    #{invoice.id}
                  </td>
                  <td className="py-3 px-4 text-sm">{invoice.description}</td>
                  <td className="py-3 px-4 text-sm font-semibold">
                    ${invoice.amount}
                  </td>
                  <td className="py-3 px-4 text-sm text-on-surface-variant">
                    {new Date(invoice.date).toLocaleDateString('fr-FR')}
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`text-xs px-3 py-1 rounded-full font-semibold ${getStatusBg(
                        invoice.status
                      )} ${getStatusColor(invoice.status)}`}
                    >
                      {invoice.status === 'paid'
                        ? 'Payé'
                        : invoice.status === 'pending'
                        ? 'En attente'
                        : 'En retard'}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <button className="text-primary hover:underline text-sm flex items-center gap-1">
                      <Download size={14} />
                      PDF
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
