import React from 'react'

export const withErrorBoundary = (Component: React.ComponentType<any>) => {
  return class ErrorBoundary extends React.Component<any, { hasError: boolean }> {
    constructor(props: any) {
      super(props)
      this.state = { hasError: false }
    }

    static getDerivedStateFromError() {
      return { hasError: true }
    }

    componentDidCatch(error: any, errorInfo: any) {
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
