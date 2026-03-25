# 🌐 Guide de Déploiement - Capitune App

## Déploiement Rapide en 5 Minutes

### Option 1 : Vercel (Recommandé ⭐)

#### Étape 1 : Préparer pour Git
```bash
cd c:\Capituneprox\capitune-app
git init
git add .
git commit -m "Initial commit - Capitune App"
```

#### Étape 2 : Push sur GitHub
```bash
# Sur GitHub.com, créer un repo "capitune-app"
git remote add origin https://github.com/votre-username/capitune-app.git
git branch -M main
git push -u origin main
```

#### Étape 3 : Déployer sur Vercel
1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez "New Project"
3. Sélectionnez votre repo capitune-app
4. Laissez les paramètres par défaut
5. Cliquez "Deploy"

**Voilà !** Votre app est live à une URL unique (ex: `capitune-app-xyz.vercel.app`)

### Option 2 : Azure Static Web Apps

#### Étape 1 : Créer le build
```bash
npm run build
# Génère /dist
```

#### Étape 2 : Créer un Static Web App
```bash
# Via Azure CLI
az staticwebapp create \
  --name capitune-app \
  --resource-group my-group \
  --location westeurope \
  --source https://github.com/votre-username/capitune-app.git \
  --branch main
```

#### Étape 3 : Configurer le déploiement
Azure crée automatiquement une GitHub Actions pour CI/CD

### Option 3 : Netlify

1. Allez sur [netlify.com](https://netlify.com)
2. Connectez votre repo GitHub
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Cliquez "Deploy site"

## Variables d'Environnement en Production

### Créer `.env.production`
```env
VITE_API_URL=https://api.votredomaine.com
VITE_APP_NAME=Capitune
```

### Vercel
1. Allez dans Project Settings
2. Environment Variables
3. Ajoutez vos variables

### Azure
1. Allez dans Configuration
2. Application settings
3. Ajoutez vos variables avec `VITE_` au début

## Checklist de Déploiement

- [ ] Build sans erreurs : `npm run build`
- [ ] Type checking : `npm run type-check`
- [ ] Linting : `npm run lint`
- [ ] Tests passent (si ajoutés)
- [ ] `.env` n'est pas commité
- [ ] README.md est à jour
- [ ] HTTPS activé
- [ ] API endpoint est correct

## Post-Déploiement

### Vérifier le Live
```bash
# Tester l'app en production
curl https://votre-app-url.com

# Vérifier la performance
# Lighthouse: https://web.dev/measure/
```

### Monitoring
- **Vercel Analytics** - Intégré automatiquement
- **Azure Application Insights** - À configurer
- **Sentry** - Pour error tracking (optionnel)

### DNS Custom
```bash
# Ajouter votre domaine
# Dans les Cloud Provider
# (Vercel/Azure/Netlify)
```

## Mise à Jour en Production

### Vercel/Netlify (Automatique)
```bash
# Push sur main branch
git push origin main
# Déploiement auto en ~1-2 min
```

### Azure
Même process - GitHub Actions gère tout

## Optimisation Production

### 1. Réduire la Taille du Bundle
```bash
npm run build --analyze  # Si plugin Rollup installé
```

### 2. Compresser les Images
```bash
# Utiliser des outils comme ImageOptim
# Ou des services: Tinypng.com, Optimizilla
```

### 3. Activer la Cache
```typescript
// Dans vite.config.ts
export default {
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
        }
      }
    }
  }
}
```

## Troubleshooting Déploiement

### Build échoue sur Vercel
```bash
# Vérifier les logs
npm run build  # Localement

# Ajouter log en Build Settings
npm ci && npm run build
```

### Erreur "Cannot find module"
```bash
# S'assurer que package.json a toutes les dépendances
npm install (nouvelle dépendance)
git add package.json package-lock.json
git push
```

### App blanche au lancement
```bash
# Vérifier la console du navigateur (F12)
# Vérifier les erreurs dans Network tab
# Vérifier que l'API URL est correcte
```

## URLs Post-Déploiement

| Service | URL Pattern |
|---------|------------|
| **Vercel** | `https://capitune-app.vercel.app` |
| **Azure** | `https://capitune-app.azurestaticapps.net` |
| **Netlify** | `https://capitune-app.netlify.app` |
| **Custom** | `https://votredomaine.com` |

## Coût Estimé

### Vercel (Gratuit pour starter)
- Déploiement illimité
- 100GB/mois de bande passante
- ~$20/mois pour pro

### Azure Static Web Apps
- $0.50 par GB en production
- Intégration complète Microsoft

### Netlify
- Gratuit jusqu'à 100GB
- $19/mois pour pro

## Rollback en Cas de Problème

### Vercel
1. Goto Deployments
2. Cliquez sur une ancienne version
3. Cliquez "Redeploy"

### Azure
1. Allez dans Deployment history
2. Sélectionnez une version ancienne
3. Cliquez "Redeploy"

## Prochaines Étapes

1. **Monitoring** : Ajouter Sentry pour les erreurs
2. **Analytics** : Google Analytics ou Plausible
3. **Performance** : Utiliser LogRocket
4. **Budget** : Configurer les alertes de coût

## 📞 Support Déploiement

- **Vercel Docs**: https://vercel.com/docs
- **Azure Docs**: https://learn.microsoft.com/en-us/azure/
- **Netlify Docs**: https://docs.netlify.com/

---

**Dernière mise à jour:** Maintenant
**Temps de déploiement estimé:** 5-10 minutes total
