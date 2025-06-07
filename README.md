## Recommander

Recommander est une application web moderne de recommandation de films et de livres, développée avec React, Redux Toolkit et TypeScript. Elle permet aux utilisateurs de s'inscrire, de se connecter, de gérer leur profil, et d'ajouter, modifier ou supprimer des films et des livres. Le projet est conçu pour être facilement extensible et personnalisable.

## Fonctionnalités principales

### Gestion des utilisateurs
- **Inscription** : création d'un compte utilisateur avec email, nom d'utilisateur, mot de passe et préférences.
- **Authentification** : connexion et déconnexion sécurisées.
- **Profil utilisateur** : modification des informations personnelles et des préférences.

### Gestion des films et livres
- **Ajout** : formulaire pour ajouter un film ou un livre à la base de données.
- **Suppression** : possibilité de supprimer un film ou un livre existant.
- **Modification** : édition des informations d'un film ou d'un livre via un formulaire inline.
- **Affichage** : listes dynamiques des films et des livres avec recherche et filtres par préférences.

### Recommandations
- **Système de recommandations** basé sur les préférences de l'utilisateur (genres, créateurs, note minimale, etc.).
- **Affichage personnalisé** des suggestions de films et de livres.

## Technologies utilisées
- **React** (avec hooks)
- **Redux Toolkit** (gestion d'état)
- **TypeScript** (typage statique)
- **Tailwind CSS** (design moderne et responsive)
- **API REST** (pour la gestion des utilisateurs et des médias)

## Structure du projet

```
src/
  components/         # Composants React (UI)
  store/              # Slices Redux, thunks et store principal
  data/               # Données statiques (exemples de films/livres)
  App.tsx             # Composant principal
  index.tsx           # Point d'entrée React
  logo.svg|png        # Logo de l'application
```

## Installation et démarrage

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/votre-utilisateur/recommander.git
   cd recommander
   ```
2. **Installer les dépendances**
   ```bash
   npm install
   ```
3. **Lancer l'application**
   ```bash
   npm start
   ```
4. **Accéder à l'application**
   Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.


## Licence

Ce projet est sous licence [MIT](LICENSE). Vous êtes libre de l'utiliser, le modifier et le distribuer.

---

**Développé avec ❤️ pour la communauté open source.**
