import React from 'react'

export const withErrorBoundary = <P extends Record<string, unknown>>(Component: React.ComponentType<P>) => {
  return class ErrorBoundary extends React.Component<P, { hasError: boolean }> {
    constructor(props: P) {
      super(props)
      this.state = { hasError: false }
    }

    static getDerivedStateFromError() {
      return { hasError: true }
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
      console.error('Error caught by boundary:', error, errorInfo)
    }

    render() {
      if (this.state.hasError) {
        return (
          <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-on-surface mb-4">
                Oups ! Une erreur est survenue
              </h1>
              <p className="text-on-surface-variant mb-8">
                Veuillez recharger la page
              </p>
              <button
                onClick={() => window.location.reload()}
                className="btn-primary"
              >
                Recharger
              </button>
            </div>
          </div>
        )
      }

      return <Component {...this.props} />
    }
  }
}
