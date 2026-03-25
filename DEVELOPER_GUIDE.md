# 🛠️ Guide du Développeur - Capitune App

## 🎯 Commandes NPM Essentielles

### Démarrage
```bash
npm install              # Installer les dépendances (1ère fois)
npm run dev             # Lancer en mode développement
npm run build           # Compiler pour production
npm run preview         # Tester le build en local
```

### Qualité du Code
```bash
npm run lint            # Vérifier ESLint
npm run type-check      # Vérifier TypeScript
```

### Nettoyage
```bash
# Réinstaller complètement
rm -r node_modules package-lock.json
npm install
```

## 📝 Patterns Courants

### Créer une Page

```typescript
// src/pages/NewPage.tsx
import { Card, Button } from '@components'
import { useAuthStore } from '@store/authStore'

export const NewPage = () => {
  const { user } = useAuthStore()

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Ma Nouvelle Page</h1>
      <Card>Contenu ici</Card>
    </div>
  )
}
```

Puis exporter dans `src/pages/index.ts` et ajouter la route dans `src/App.tsx`.

### Créer un Composant

```typescript
// src/components/MyComponent.tsx
interface MyComponentProps {
  title: string
  onClick?: () => void
}

export const MyComponent = ({ title, onClick }: MyComponentProps) => {
  return (
    <div className="card" onClick={onClick}>
      <h2 className="font-bold">{title}</h2>
    </div>
  )
}
```

### Ajouter un Store

```typescript
// src/store/myStore.ts
import { create } from 'zustand'

interface MyStore {
  items: string[]
  addItem: (item: string) => void
  removeItem: (id: string) => void
}

export const useMyStore = create<MyStore>((set) => ({
  items: [],
  addItem: (item) => set((state) => ({
    items: [...state.items, item]
  })),
  removeItem: (id) => set((state) => ({
    items: state.items.filter(item => item !== id)
  })),
}))
```

### Utiliser un Store

```typescript
import { useMyStore } from '@store/myStore'

export const MyComponent = () => {
  const { items, addItem } = useMyStore()
  
  return (
    <div>
      {items.map(item => <div key={item}>{item}</div>)}
      <button onClick={() => addItem('Nouveau')}>Ajouter</button>
    </div>
  )
}
```

## 🎨 Classe Tailwind Courantes

### Layout
```html
<!-- Grille responsive -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<!-- Flexbox -->
<div class="flex items-center justify-between">

<!-- Espacements -->
<div class="space-y-4">  <!-- Espace vertical -->
<div class="space-x-4">  <!-- Espace horizontal -->
```

### Texte
```html
<!-- Tailles -->
<h1 class="text-4xl">Extra Large</h1>
<p class="text-sm">Small</p>

<!-- Couleurs -->
<p class="text-primary">Primaire</p>
<p class="text-on-surface-variant">Secondaire</p>

<!-- Poids -->
<span class="font-bold">Bold</span>
<span class="font-semibold">Semibold</span>
```

### Composants
```html
<!-- Cards -->
<div class="card"></div>             <!-- Normale -->
<div class="card-interactive"></div> <!-- Avec hover -->

<!-- Boutons -->
<button class="btn-primary">Primary</button>
<button class="btn-secondary">Secondary</button>

<!-- Input -->
<input class="input" />

<!-- Badge -->
<span class="badge">Label</span>
```

## 🔍 Debug & Troubleshooting

### VSCode Extensions Recommandées
- **ES7+ React/Redux/React-Native snippets**
- **Tailwind CSS IntelliSense**
- **TypeScript Vue Plugin**
- **ESLint**
- **Prettier**

### Common Issues

#### "Module not found"
```bash
# Vérifier le chemin d'import
# Ou réinstaller les dépendances
npm install
```

#### Port déjà utilisé
```bash
npm run dev -- --port 3000  # Utiliser un autre port
```

#### Compilation échoue
```bash
npm run type-check  # Vérifier les erreurs TypeScript
npm run lint        # Vérifier les erreurs ESLint
```

## 📚 Ressources Utiles

### Documentation Officielle
- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Router](https://reactrouter.com/docs)
- [Zustand](https://github.com/pmndrs/zustand)
- [Vite Guide](https://vitejs.dev/guide/)

### Outils Online
- [Tailwind Play](https://play.tailwindcss.com/) - Tester CSS
- [TypeScript Playground](https://www.typescriptlang.org/play/) - Tester TS
- [React DevTools](https://react-devtools-tutorial.vercel.app/) - Debug React

## 🎯 Best Practices

### Organisation du Code
```
✅ Bonne pratique:
src/
├── components/MyComponent.tsx
├── components/MyComponent.test.tsx
├── pages/MyPage.tsx

❌ À éviter:
src/
└── MyComponent.tsx
└── MyComponent.test.tsx
└── MyComponent.styles.ts
└── MyComponent.utils.ts
```

### Nommage
```typescript
// ✅ Bon
const activeProjects = projects.filter(p => p.status === 'active')
const handleSubmit = () => {}
const UserProfile = () => {}

// ❌ Mauvais
const ap = projects.filter(...)
const submit = () => {}
const userprofile = () => {}
```

### Types
```typescript
// ✅ Bon
interface User {
  id: string
  email: string
  name: string | null
}

// ❌ Mauvais
const user: any = {}
type User = { id: any, email: any }
```

## 🚀 Performance Tips

### Code Splitting
```typescript
// Lazy loading des pages
import { lazy, Suspense } from 'react'

const DashboardPage = lazy(() => import('@pages').then(m => ({ default: m.DashboardPage })))

<Suspense fallback={<Loading />}>
  <DashboardPage />
</Suspense>
```

### Memoization
```typescript
import { memo, useMemo } from 'react'

// Mémoriser un composant
export const Item = memo(({ item }) => <div>{item.name}</div>)

// Mémoriser une valeur
const expensiveValue = useMemo(() => heavyComputation(), [dep])
```

### Bundles
```bash
# Analyser la taille du bundle
npm run build -- --analyze  # Avec plugin Rollup
```

## 🔒 Sécurité

### Variables d'Environnement
```typescript
// ✅ Bon - Variables avec préfixe VITE_
const apiUrl = import.meta.env.VITE_API_URL

// ❌ Mauvais - Hardcoder les secrets
const apiKey = 'sk_live_...'
```

### Sanitization
```typescript
// Éviter XSS
dangerouslySetInnerHTML={{ __html: content }} // ⚠️ Risqué

// À la place
<div>{content}</div> // Plus sûr
```

## 🔄 Git Workflow

```bash
# Initialiser
git init
git add .
git commit -m "Initial commit"

# Feature branch
git checkout -b feature/new-feature
git add .
git commit -m "feat: add new feature"
git push origin feature/new-feature

# Merge
git checkout main
git pull
git merge feature/new-feature
git push
```

## 📊 Structure de Commit

```
feat: Add login page
  - Implement authentication UI
  - Add form validation
  - Integrate with auth store

fix: Fix modal closing issue
docs: Update README

chore: Update dependencies
test: Add login tests
style: Format code
refactor: Simplify auth logic
```

## 🎓 À Approfondir

1. **Testing**
   - Jest pour les tests unitaires
   - React Testing Library
   - Cypress pour E2E

2. **Performance**
   - Code splitting avec lazy()
   - Image optimization
   - Bundle analysis

3. **DevOps**
   - Docker
   - GitHub Actions (CI/CD)
   - Deployment (Vercel, Azure)

4. **Avancé**
   - Custom hooks
   - Context API (si nécessaire avec Zustand)
   - Web Workers
   - Service Workers (PWA)

---

**Dernière mise à jour:** Maintenant
**Version:** 1.0.0

Bonne chance! 🚀
