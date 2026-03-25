📦 capitune-app/
│
├── 📄 index.html              # Fichier HTML d'entrée
├── 📄 package.json            # Dépendances et scripts
├── 📄 vite.config.ts          # Configuration Vite
├── 📄 tsconfig.json           # Configuration TypeScript
├── 📄 tailwind.config.js      # Configuration Tailwind CSS
├── 📄 postcss.config.js       # Configuration PostCSS
├── 📄 .eslintrc.cjs           # Configuration ESLint
├── 📄 .gitignore              # Git ignore
├── 📄 .env.example            # Exemple de variables d'environnement
├── 📄 README.md               # Documentation
│
└── 📁 src/
    ├── 📄 main.tsx            # Point d'entrée React
    ├── 📄 App.tsx             # Composant racine + Routeur
    ├── 📄 index.css           # Styles globaux (Tailwind)
    ├── 📄 constants.ts        # Constantes de l'application
    │
    ├── 📁 components/
    │   ├── 📄 Header.tsx      # Header avec nav et user menu
    │   ├── 📄 Sidebar.tsx     # Sidebar de navigation
    │   ├── 📄 Layout.tsx      # Layout main (Header + Sidebar + Main)
    │   ├── 📄 Button.tsx      # Bouton réutilisable
    │   ├── 📄 Card.tsx        # Carte réutilisable
    │   ├── 📄 Input.tsx       # Input avec label et erreur
    │   ├── 📄 Alert.tsx       # Alerte (success, error, info, warning)
    │   ├── 📄 Progress.tsx    # Barre de progression
    │   └── 📄 index.ts        # Exports
    │
    ├── 📁 pages/
    │   ├── 📄 LoginPage.tsx         # Page de connexion
    │   ├── 📄 DashboardPage.tsx     # Tableau de bord
    │   ├── 📄 ProjectsPage.tsx      # Gestion des projets
    │   ├── 📄 DocumentsPage.tsx     # Gestion des documents
    │   ├── 📄 PaymentsPage.tsx      # Paiements et facturation
    │   └── 📄 index.ts              # Exports
    │
    ├── 📁 store/
    │   ├── 📄 authStore.ts    # Store Zustand pour l'auth
    │   ├── 📄 projectStore.ts # Store Zustand pour les projets
    │   └── 📄 themeStore.ts   # Store Zustand pour le thème
    │
    ├── 📁 hooks/
    │   ├── 📄 useNavigation.ts      # Hook pour naviguer
    │   └── 📄 index.ts              # Exports
    │
    ├── 📁 types/
    │   └── 📄 index.ts        # Types TypeScript
    │
    ├── 📁 utils/
    │   ├── 📄 ProtectedRoute.tsx    # Wrapper pour routes protégées
    │   ├── 📄 withErrorBoundary.tsx # HOC pour Error Boundary
    │   └── 📄 index.ts              # Exports (si créé)
    │
    ├── 📁 styles/
    │   └── (styles supplémentaires si besoin)
    │
    └── 📁 public/
        └── (assets statiques)

## 🎯 Structure de Fichiers Expliquée

### Components
Composants réutilisables et UI-focused. Chaque composant est indépendant et peut être utilisé dans plusieurs pages.

### Pages
Composants au niveau de la page qui composent l'application. Chaque page peut utiliser plusieurs composants.

### Store
Gestion d'état avec Zustand. Trois stores principaux :
- `authStore` : Authentification et utilisateur
- `projectStore` : Projets d'immigration
- `themeStore` : Préférences de thème

### Types
Définitions TypeScript pour assurer la sécurité des types.

### Hooks
Hooks React personnalisés pour partager la logique.

### Utils
Fonctions utilitaires et HOCs.

## 🔄 Flux de Données

```
User Login
   ↓
useAuthStore (login action)
   ↓
Store updated
   ↓
Components re-render
   ↓
ProtectedRoute allows access
   ↓
Dashboard/Pages loaded
```

## 📦 Dépendances Principales

- **react** : Framework UI
- **react-dom** : Rendu DOM
- **react-router-dom** : Routage
- **zustand** : State management
- **tailwindcss** : Styling
- **lucide-react** : Icons
- **typescript** : Type safety
- **vite** : Build tool

## 🚀 Prochaines Étapes d'Implémentation

1. **Backend Integration**
   - Remplacer les mock data par des appels API réels
   - Configurer axios/fetch pour les requêtes

2. **Authentification Complète**
   - JWT tokens
   - OAuth (Google, Microsoft)
   - Refresh tokens

3. **Features Avancées**
   - Upload de fichiers (Multer/AWS S3)
   - Notifications en temps réel (Socket.io)
   - Chat en direct
   - Paiements (Stripe/PayPal)

4. **Testing**
   - Jest pour les tests unitaires
   - React Testing Library
   - Cypress pour les tests E2E

5. **DevOps**
   - CI/CD pipeline (GitHub Actions)
   - Docker containers
   - Déploiement (Vercel, Azure)

