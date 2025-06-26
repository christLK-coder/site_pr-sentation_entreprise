# site_pr-sentation_entreprise
## 2. 🔧 Étapes suivies

Voici les étapes exactes que j’ai suivies dans la gestion de mon projet Git nommé `site_pr-sentation_entreprise` :

1. **Création du dépôt distant**  
   - Je suis allé sur [GitHub](https://github.com) et j’ai créé un dépôt vide nommé `site_pr-sentation_entreprise`.

2. **Création d’un dossier sur mon ordinateur**  
   - J’ai créé un dossier local nommé `projet_git` sur mon bureau pour y stocker mon projet.

3. **Clonage du dépôt GitHub dans ce dossier**  
   - J’ai ouvert le terminal et exécuté :
     ```bash
     cd chemin/vers/projet_git
     git clone https://github.com/mon-utilisateur/site_pr-sentation_entreprise.git
     ```
   - Cela a créé un dossier local connecté au dépôt distant.

4. **Création et organisation des branches**  
   - J’ai utilisé une stratégie de branchement structurée :
     - `feature/js-interactions` : scripts JavaScript
     - `feature/css-theme` : stylisation du site
     - `feature/html-structure` : structure de base HTML
     - Toutes les branches `feature/*` ont été fusionnées dans `test/frontend`
     - `test/frontend` est ensuite fusionnée dans `dev`
     - Et enfin `dev` est fusionnée dans `main` pour valider la version stable

5. **Ajout des fichiers du projet**  
   - Dans chaque branche, j’ai ajouté des fichiers liés à la fonctionnalité concernée (images, HTML, CSS, JS…).

6. **Commit des changements**  
   - J’ai commité régulièrement les modifications avec des messages clairs.

7. **Push des branches vers GitHub**  
   - Chaque branche créée localement a été envoyée vers GitHub via :
     ```bash
     git push -u origin nom_branche
     ```

8. **Merge progressifs**  
   - J’ai fusionné les branches fonctionnelles dans `test/frontend`, puis vers `dev`, et enfin vers `main`.

9. **Ajout d’un dossier d’images** depuis ma machine
   - J’ai copié le dossier `image` dans mon dépôt local et l’ai ajouté à la branche concernée avant de le pousser vers GitHub.

10. **Validation des modifications et test final sur la branche `main`**  
   - J’ai vérifié que la version finale sur `main` est fonctionnelle et propre pour la livraison.

