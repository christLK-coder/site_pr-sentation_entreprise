# site_pr-sentation_entreprise
# README - Projet de gestion versionnée avec Git

Ce projet decrit la mise en application d'un travaille sur un site web avec git , pour pouvoir gerer le versioning dans le cadre de mon evaluation de SN
réaliser par l'eleve keumeze

 1.  Stratégie de branchement Git

Le projet utilise une stratégie claire et modulaire basée sur des branches fonctionnelles, de test, de développement, et de production:


feature/*         ← branches pour les fonctionnalités spécifiques
     feature/js-interactions
     feature/css-theme
     feature/html-structure
        ↓
test/frontend      ← regroupe les fonctionnalités front pour tests
        ↓
dev                ← branche principale de développement
        ↓
main               ← branche stable finale (production)

 2.  Étapes suivies

Voici les étapes exactes que j’ai suivies dans la gestion de mon projet Git nommé `site_pr-sentation_entreprise` :

1. Création du dépôt distant  
   - Je suis allé sur [GitHub](https://github.com) et j’ai créé un dépôt vide nommé `site_pr-sentation_entreprise`.

2. Création d’un dossier sur mon ordinateur 
   - J’ai créé un dossier local nommé `projet_git` sur mon bureau pour y stocker mon projet.

3. Clonage du dépôt GitHub dans ce dossier 
   - J’ai ouvert le terminal et exécuté :
     
     cd chemin/vers/projet_git
     git clone https://github.com/christLK-codeur/site_pr-sentation_entreprise.git
     
   - Cela a créé un dossier local connecté au dépôt distant.

4. Création et organisation des branches  
   - J’ai utilisé une stratégie de branchement structurée :
     - feature/js-interactions : scripts JavaScript
     - feature/css-theme : stylisation du site
     - feature/html-structure : structure de base HTML
     - Toutes les branches feature/* ont été fusionnées dans `test/frontend`
     - test/frontend est ensuite fusionnée dans `dev`
     - Et enfin dev est fusionnée dans `main` pour valider la version stable

5. Ajout des fichiers du projet
   - Dans chaque branche, j’ai ajouté des fichiers liés à la fonctionnalité concernée (images, HTML, CSS, JS…).

6. Commit des changements
   - J’ai commité régulièrement les modifications avec des messages clairs.

7. Push des branches vers GitHub  
   - Chaque branche créée localement a été envoyée vers GitHub via :
     
     git push -u origin nom_branche
     

8. Merge progressifs 
   - J’ai fusionné les branches fonctionnelles dans `test/frontend`, puis vers `dev`, et enfin vers `main`.

9. Ajout d’un dossier d’images depuis ma machine
   - J’ai copié le dossier `image` dans mon dépôt local et l’ai ajouté à la branche concernée avant de le pousser vers GitHub.

10. Validation des modifications et test final sur la branche `main`
   - J’ai vérifié que la version finale sur `main` est fonctionnelle et propre pour la livraison.

Commande et role                                        
git init : Initialise un dépôt Git local

git status : Affiche l’état actuel du dépôt

git add <fichier> : Ajoute un fichier à l'index (staging)

git commit -m "message" : Crée un commit avec un message

git branch : Liste les branches

git branch <nom> : Crée une nouvelle branche

git checkout <nom> : Change de branche

git checkout -b <nom> : Crée et bascule dans une branche

git merge <branche> : Fusionne une branche dans celle active

git merge --abort : Annule un merge en cours

git remote add origin <url> : Connecte le dépôt local à un dépôt distant (GitHub)

git push -u origin <branche> : Envoie une branche locale vers GitHub et la suit

git pull origin <branche> : Récupère les modifications de GitHub

git log --oneline : Affiche l'historique des commits sous forme condensée

git clone <url> : Copie un dépôt distant dans un dossier local


