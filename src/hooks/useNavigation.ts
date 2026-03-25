import { useNavigate } from 'react-router-dom'

export const useNavigation = () => {
  const navigate = useNavigate()

  return {
    goToDashboard: () => navigate('/dashboard'),
    goToProjects: () => navigate('/projects'),
    goToDocuments: () => navigate('/documents'),
    goToPayments: () => navigate('/payments'),
    goToProject: (id: string) => navigate(`/projects/${id}`),
    goToLogin: () => navigate('/login'),
    goBack: () => navigate(-1),
  }
}
