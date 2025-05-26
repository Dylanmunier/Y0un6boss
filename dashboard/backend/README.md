# Eidynia Dashboard Backend

## Introduction

Eidynia Dashboard est une application SaaS conçue pour permettre aux clients de suivre leurs projets en temps réel. Ce backend gère les opérations essentielles telles que la gestion des projets, la facturation, les livrables, les tickets, et bien plus encore. Il est construit avec Node.js et Express, et utilise TypeScript pour une meilleure sécurité de type.

## Structure du projet

Le backend est organisé comme suit :

```
backend/
├── src/
│   ├── app.ts                     # Configuration de l'application et des middlewares
│   ├── server.ts                  # Démarrage du serveur Express
│   ├── controllers/               # Contrôleurs pour gérer la logique métier
│   ├── routes/                    # Routes pour les différentes entités
│   ├── middlewares/               # Middlewares pour la gestion des requêtes
│   ├── services/                  # Services pour l'intégration avec des APIs externes
│   ├── models/                    # Modèles de données
│   └── utils/                     # Utilitaires divers
├── package.json                    # Dépendances et scripts du backend
├── tsconfig.json                  # Configuration TypeScript
└── README.md                      # Documentation du projet backend
```

## Installation

1. Clonez le dépôt :
   ```
   git clone https://github.com/Dylanmunier/eidynia-dashboard.git
   ```

2. Accédez au répertoire du backend :
   ```
   cd eidynia-dashboard/backend
   ```

3. Installez les dépendances :
   ```
   npm install
   ```

## Démarrage

Pour démarrer le serveur, exécutez la commande suivante :

```
npm start
```

Le serveur sera accessible à l'adresse `http://localhost:3000`.

## API

L'API est organisée par ressources, avec des routes dédiées pour chaque fonctionnalité. Les principales ressources incluent :

- **Projets** : Gérer les projets des clients.
- **Facturation** : Gérer les factures et les paiements.
- **Livrables** : Gérer les livrables associés aux projets.
- **Tickets** : Gérer les tickets de support et de communication.
- **Modèles** : Gérer les modèles utilisés dans le dashboard.
- **API** : Gérer les intégrations avec des services externes.
- **Administration** : Gérer les utilisateurs et les permissions.

## Sécurité

Le backend intègre plusieurs mesures de sécurité, notamment :

- Authentification JWT pour sécuriser les endpoints.
- Middleware pour gérer les erreurs et ajouter des en-têtes de sécurité.
- Chiffrement des données sensibles.

## Contribuer

Les contributions sont les bienvenues ! Veuillez soumettre une demande de tirage (pull request) pour toute amélioration ou correction.

## License

Ce projet est sous licence MIT. Consultez le fichier LICENSE pour plus de détails.