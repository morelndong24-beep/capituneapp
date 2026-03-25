# Capitune React MVP

Une application moderne d'immigration construite avec React, TypeScript, et Tailwind CSS.

## 🚀 Démarrage Rapide

### Prerequisites
- Node.js 18+ et npm

### Installation

```bash
cd capitune-app
npm install
```

### Développement

```bash
npm run dev
```

L'application sera disponible sur `http://localhost:5173`

### Build

```bash
npm run build
```

## 📁 Structure du Projet

```
src/
├── components/          # Composants réutilisables (Header, Sidebar, Button, etc.)
├── pages/              # Pages principales (Login, Dashboard, Projects, etc.)
├── store/              # Zustand stores (Auth, Projects, Theme)
├── types/              # Types TypeScript
├── utils/              # Utilitaires (ProtectedRoute, etc.)
├── styles/             # Styles globaux et CSS
├── hooks/              # React Hooks personnalisés
├── App.tsx             # Routeur principal
├── main.tsx            # Point d'entrée
└── index.css           # Styles globaux + Tailwind
```

## 🔐 Authentification

Credentials de démo :
- **Client:** user@example.com / password
- **Pro:** pro@example.com / password

## 📊 Pages Disponibles

1. **Login** - Authentification
2. **Dashboard** - Vue d'ensemble personnalisée
3. **Mes Projets** - Gestion des demandes d'immigration
4. **Documents** - Gestion des fichiers
5. **Paiements** - Facturation et abonnements

## 🎨 Design System

- **Colors:** Basé sur Material Design 3 avec couleur primaire #0047AB
- **Fonts:** Manrope (titres), Inter (corps)
- **Dark Mode:** Mode sombre/clair intégré
- **Responsive:** Mobile-first design avec Tailwind CSS

## 🔧 Stack Technique

- **Frontend:** React 18 + TypeScript
- **Build:** Vite
- **Styling:** Tailwind CSS
- **State:** Zustand
- **Routing:** React Router v6
- **Icons:** Lucide React

## 📝 Prochaines Étapes

- [ ] Intégrer une API backend
- [ ] Ajouter authentification OAuth (Google, Microsoft)
- [ ] Implémenter upload de fichiers
- [ ] Ajouter notifications en temps réel
- [ ] Déployer sur Azure
- [ ] Ajouter tests

## 🚀 Déploiement

La structure est prête pour être déployée sur :
- Vercel
- Netlify
- Azure Static Web Apps
- Firebase Hosting

## 📞 Support

Pour plus de détails, consultez la documentation du projet.
