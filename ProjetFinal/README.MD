# 📦 Projet Full Stack : Backend, Frontend & Database

Bienvenue dans ce projet full stack qui combine une API REST en PHP, un frontend React et une base de données configurée pour fonctionner ensemble. Suivez les étapes ci-dessous pour initialiser correctement chaque composant.

---

## 📁 Structure du projet

Le projet est organisé en trois dossiers principaux :

1. **Backend** : Une API REST construite avec PHP.
2. **Frontend** : Une interface utilisateur développée avec React.
3. **Database** : Les scripts nécessaires pour configurer la base de données.

---

## 🚀 Initialisation du Projet

### 1️⃣ Backend (API REST en PHP)
- **Localisation** : Dossier `backend`
- **Dépendances** : Utilisez **Composer** pour installer les packages nécessaires.
- **Commandes** :
  ```bash
  cd backend
  composer install

### 2️⃣ Frontend (React)
- **Localisation** : Dossier `frontend`
- **Dépendances** : Utilisez **npm** pour installer les packages nécessaires.
- **Commandes** :
  ```bash
  cd frontend
  npm install
  npm run dev
- **Lancement** : Cette commande démarre le serveur de développement à l'adresse par défaut avec vite

### 3️⃣ Base de Données
- **Localisation** : Dossier `databaseTables`
- **Initialisation** : Importez le fichier PGdatabase.sql dans votre système de gestion de base de données (PostgreSQL, sinon adaptez les tables pour un autre SGBD.).
- **Connexion** : Assurez-vous que les informations de connexion à la base de données sont correctement configurées dans le fichier \backend\src\Data\db_config.php du backend.
