#!/bin/bash

# 🚀 Capitune App - Quick Start Script (Linux/Mac)
# Pour Windows, exécutez manuellement les commandes

# Couleurs
RESET='\033[0m'
BLUE='\033[0;34m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'

echo -e "${BLUE}🚀 Capitune App - Setup Rapide${RESET}\n"

# Étape 1 : Installer les dépendances
echo -e "${YELLOW}📦 Installation des dépendances...${RESET}"
npm install

echo -e "${GREEN}✅ Dépendances installées${RESET}\n"

# Étape 2 : Information de démarrage
echo -e "${BLUE}📋 Prochaines étapes:${RESET}"
echo -e "${GREEN}✓${RESET} Lancer l'app: ${YELLOW}npm run dev${RESET}"
echo -e "${GREEN}✓${RESET} Ouvrir: ${YELLOW}http://localhost:5173${RESET}"
echo -e "${GREEN}✓${RESET} Email: ${YELLOW}user@example.com${RESET}"
echo -e "${GREEN}✓${RESTORE} Password: ${YELLOW}password${RESET}\n"

echo -e "${BLUE}📚 Documentation:${RESET}"
echo -e "  - ${YELLOW}README.md${RESET} : Vue d'ensemble"
echo -e "  - ${YELLOW}GETTING_STARTED.md${RESET} : Guide démarrage"
echo -e "  - ${YELLOW}DEVELOPER_GUIDE.md${RESET} : Patterns & tips"
echo -e "  - ${YELLOW}DEPLOYMENT.md${RESET} : Déployer l'app"
echo -e "  - ${YELLOW}PROJECT_STRUCTURE.md${RESET} : Structure"

echo -e "\n${GREEN}Bon développement! 🎉${RESET}\n"
