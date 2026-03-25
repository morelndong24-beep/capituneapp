# 🚀 Guide de Démarrage Rapide - Capitune React App

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir :
- **Node.js 18+** → [Télécharger](https://nodejs.org/)
- **npm 9+** (inclus avec Node.js)
- **Git** (optionnel)

Vérifiez votre installation :
```bash
node --version
npm --version
```

## 📥 Installation

### Étape 1 : Naviguer vers le dossier du projet
```bash
cd c:\Capituneprox\capitune-app
```

### Étape 2 : Installer les dépendances
```bash
npm install
```

Cela va télécharger et installer tous les packages (React, Vite, Tailwind, etc.) - cela peut prendre quelques minutes.

## ▶️ Lancer l'Application

### Mode Développement
```bash
npm run dev
```

Vous devriez voir :
```
VITE v5.0.0  ready in 234 ms

➜  Local:   http://localhost:5173/
```

L'application s'ouvrira automatiquement dans votre navigateur. Si non, allez manuellement à `http://localhost:5173/`

### Mode Production
```bash
npm run build
npm run preview
```

## 🔐 Credentials de Démo

Une fois l'app lancée, vous pouvez vous connecter avec :

| Rôle | Email | Mot de passe |
|------|-------|-------------|
| Client | `user@example.com` | `password` |
| Professionnel | `pro@example.com` | `password` |

## 📸 Pages Disponibles Après Connexion

1. **Dashboard** - Vue d'ensemble avec statistiques
2. **Mes Projets** - Gestion des demandes d'immigration
3. **Documents** - Upload et suivi des fichiers
4. **Paiements** - Factures et abonnements

## 🎨 Personnalisation

### Thème
- Le thème par défaut est **clair** (light)
- Cliquez sur l'icône Lune/Soleil en haut à droite pour basculer le mode sombre

### Couleurs
Pour modifier les couleurs, éditez [tailwind.config.js](tailwind.config.js) :
```javascript
theme: {
  extend: {
    colors: {
      primary: '#0047AB', // Couleur bleue des boutons
      // ... autres couleurs
    }
  }
}
```

## 🔧 Fichiers de Configuration

| Fichier | Description |
|---------|------------|
| `package.json` | Dépendances et scripts npm |
| `vite.config.ts` | Configuration du builder Vite |
| `tsconfig.json` | Configuration TypeScript |
| `tailwind.config.js` | Configuration du CSS framework |
| `.env.example` | Variables d'environnement exemple |

## 📚 Structure du Projet

```
capitune-app/
├── src/
│   ├── components/    # Composants réutilisables
│   ├── pages/         # Pages (Login, Dashboard, etc.)
│   ├── store/         # State management (Zustand)
│   ├── types/         # Types TypeScript
│   ├── hooks/         # Custom React hooks
│   ├── utils/         # Utilitaires
│   ├── App.tsx        # Routeur principal
│   └── index.css      # Styles globaux
├── public/            # Assets statiques
└── index.html         # HTML d'entrée
```

Pour plus de détails → [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)

## 🆘 Dépannage

### Port 5173 Déjà Utilisé
```bash
# Utiliser un port différent
npm run dev -- --port 3000
```

### Erreur "Cannot find module"
```bash
# Réinstaller les dépendances
rm -r node_modules package-lock.json
npm install
```

### L'App ne Démarre Pas
```bash
# Vérifier la version Node.js
node --version  # Doit être 18+

# Vérifier les erreurs
npm run build   # Voir les erreurs de compilation
```

## 🔌 Intégrer une API Backend

### Exemple avec Fetch
```typescript
// Remplacer les mock data par des appels API
const response = await fetch('https://votre-api.com/projects')
const data = await response.json()
```

### Configuration API
Créez un fichier `.env` :
```
VITE_API_URL=https://votre-api.com/api
```

Utilisez-le dans le code :
```typescript
const url = `${import.meta.env.VITE_API_URL}/projects`
```

## 📦 Déployer sur Vercel

### Étape 1 : Push sur GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/votre-user/capitune-app.git
git push -u origin main
```

### Étape 2 : Déployer sur Vercel
1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez "New Project"
3. Importez votre repo GitHub
4. Cliquez "Deploy"

## 📈 Prochaines Étapes

- [ ] Connecter à un backend API
- [ ] Ajouter authentification OAuth
- [ ] Implémenter upload de fichiers
- [ ] Ajouter tests unitaires
- [ ] Configurer CI/CD

## 📞 Support

Pour des questions :
1. Consultez [README.md](README.md)
2. Vérifiez [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)
3. Explorez les commentaires dans le code

## ✨ Bon Développement ! 🚀

---

**Dernière mise à jour :** Mars 2024
