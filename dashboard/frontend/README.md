# Eidynia Dashboard

## Introduction

Eidynia Dashboard est une application web conçue pour permettre aux clients de suivre leurs projets en temps réel. Ce tableau de bord intelligent et sécurisé intègre divers modules pour gérer les livrables, la facturation, les interactions avec l'équipe, et bien plus encore.

## Fonctionnalités

- **Suivi de projet en temps réel** : Visualisez l'avancement de votre projet avec des mises à jour instantanées.
- **Gestion des livrables** : Téléchargez et suivez vos livrables facilement.
- **Facturation** : Consultez vos factures et gérez vos paiements en toute sécurité.
- **Interactions avec l'équipe** : Utilisez le chat d'équipe et le système de tickets pour une communication fluide.
- **Intégration d'APIs** : Connectez facilement toutes les APIs nécessaires selon les services choisis.
- **Assistance** : Bénéficiez d'une assistance admin avec des tickets et des révisions IA + humaines.
- **KPI et actions guidées par IA** : Suivez vos indicateurs clés de performance et recevez des recommandations basées sur l'IA.

## Structure du projet

Le projet est structuré de la manière suivante :

- **frontend/** : Contient le code source de l'application frontend.
  - **public/** : Fichiers statiques, y compris `index.html`.
  - **src/** : Code source de l'application React.
    - **components/** : Composants réutilisables pour différentes fonctionnalités.
    - **hooks/** : Hooks personnalisés pour la gestion de l'état et de l'authentification.
    - **services/** : Services pour gérer les appels API et l'authentification.
    - **styles/** : Fichiers CSS pour le style de l'application.
    - **types/** : Définition des types TypeScript utilisés dans l'application.
  - `package.json` : Dépendances et scripts du frontend.
  - `tsconfig.json` : Configuration TypeScript pour le frontend.
  
- **backend/** : Contient le code source de l'application backend.
  - **src/** : Code source du serveur Express.
    - **controllers/** : Logique métier pour gérer les différentes entités.
    - **routes/** : Routes pour les opérations CRUD.
    - **middlewares/** : Middleware pour la gestion de la sécurité et des erreurs.
    - **services/** : Services pour gérer les intégrations externes.
    - **models/** : Modèles de données pour les entités de l'application.
    - **utils/** : Utilitaires pour des fonctions réutilisables.
  - `package.json` : Dépendances et scripts du backend.
  - `tsconfig.json` : Configuration TypeScript pour le backend.

## Installation

Pour installer le projet, clonez le dépôt et installez les dépendances :

```bash
git clone https://github.com/Dylanmunier/eidynia-dashboard.git
cd eidynia-dashboard/frontend
npm install
```

## Démarrage

Pour démarrer l'application, exécutez :

```bash
npm start
```

L'application sera accessible à l'adresse `http://localhost:3000`.

## Contribuer

Les contributions sont les bienvenues ! Veuillez soumettre une demande de tirage pour toute amélioration ou correction.

## License

Ce projet est sous licence MIT. Veuillez consulter le fichier LICENSE pour plus de détails.