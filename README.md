# TP Noté

***Durée : 1 jour***

---

### **Exercice : Développer une application de gestion de films avec React**

### **Objectif :**

Créer une application React permettant de :

1. Lister des films populaires.
2. Afficher les détails d’un film spécifique.
3. Afficher les acteurs principaux d’un film dans la page de détail.
4. Ajouter un film à une liste de souhaits (wishlist).
5. Afficher et gérer une wishlist.

---

### **Étape 1 : Préparer votre projet**

1. Créez un projet React (si ce n'est pas déjà fait).
2. Lancez le projet

---

### **Étape 2 : Prise en main de l’API**

- **API à utiliser :** [The Movie Database (TMDb)](https://www.themoviedb.org/).
- **Obtenir une clé API :**
    - Inscrivez-vous gratuitement sur TMDb.
    - Accédez à votre compte, puis dans **Settings > API**, générez une clé API.
- **Exemples d’appels API :**
    - **Liste des films :**
        - **Populaires :**
            
            ```bash
            https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY
            ```
            
        - En cours de diffusion :
            
            ```html
            https://api.themoviedb.org/3/movie/now_playing?api_key=YOUR_API_KEY
            ```
            
        - **Les mieux notés** :
            
            ```bash
            https://api.themoviedb.org/3/movie/top_rated?api_key=YOUR_API_KEY
            ```
            
        - À venir :
            
            ```bash
            https://api.themoviedb.org/3/movie/upcoming?api_key=YOUR_API_KEY
            ```
            
    - **Détails d’un film :**
        
        ```bash
        https://api.themoviedb.org/3/movie/{movie_id}?api_key=YOUR_API_KEY
        ```
        
    - **Acteurs d’un film :**
        
        ```bash
        https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=YOUR_API_KEY
        ```
        
    - Rechercher un film :
    
    ```bash
    https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=SEARCH_QUERY
    ```
    
    Le paramètre `query` permet de rechercher dans l’ensemble des films disponibles sur la base de données.
    

---

### **Étape 3 : Fonctionnalités**

1. **Page Liste des films (`MovieList.jsx`)**
    - Utiliser `useEffect` pour appeler l'API et récupérer par défaut les films populaires.
    - Afficher les informations basiques : titre, affiche, note moyenne.
    - Ajouter un bouton "Voir les détails" pour accéder à la page d’un film spécifique.
    - Ajoutez une fonctionnalité permettant aux utilisateurs de basculer dynamiquement entre les catégories suivantes dans la page principale : **Now Playing**, **Popular**, **Top Rated**, et **Upcoming**.
    - Ajouter un champ texte permettant de filtrer et rechercher n’importe quel film.
2. **Page Détail d’un film (`MovieDetail.jsx`)**
    - Afficher les informations détaillées : titre, résumé, date de sortie, note moyenne…
    - Ajouter une section pour afficher les **acteurs principaux** du film (jusqu’à 10).
    - Ajouter un bouton "Ajouter à la Wishlist".
3. **Page Wishlist (`Wishlist.jsx`)**
    - Afficher en temps réel le nombre total de films présents dans la wishlist dans la barre de navigation
    - Lister tous les films ajoutés à la wishlist.
    - Ajouter un bouton "Supprimer" pour retirer un film de la wishlist.
4. **Routage avec React Router**
    - `/` : Affiche la liste des films.
    - `/movie/:id` : Affiche les détails d’un film.
    - `/wishlist` : Affiche la wishlist.
5. **Gestion de l’état global avec Context API**
    - Créer un contexte `WishlistProvider` pour gérer la wishlist :
        - Fonction `addToWishlist` pour ajouter un film.
        - Fonction `removeFromWishlist` pour retirer un film.
6. **Sauvegarde de la wishlist dans le localStorage** :
    - Persistez la wishlist dans le `localStorage` pour qu’elle soit restaurée lorsque l’application est rechargée.
7. **CSS Modules**
    - Ajouter des styles spécifiques à chaque composant via des fichiers `.module.css`.
8. **Affichage des films similaires** :
    - Dans la page des détails d’un film, affichez une section pour lister des **films similaires** en utilisant l’API :
        
        ```bash
        https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key=YOUR_API_KEY
        ```
        

---

### **Bonus (Fonctionnalités supplémentaires)**

1. **Pagination dans la liste des films** :
    - Implémentez la pagination dans la page de liste des films.
    - Affichez 20 films par page et ajoutez des boutons "Précédent" et "Suivant" pour naviguer entre les pages.
2. **Optimisation des appels API avec debounce :**
    - Pour éviter de surcharger l’API avec des appels fréquents à chaque frappe de l’utilisateur, implémentez un mécanisme de **debounce**. Cela retarde l’exécution de la recherche jusqu’à ce que l’utilisateur arrête de taper.

---

# **Critères d’évaluation :**

### A+ :

- Toutes les fonctionnalités principales fonctionnent correctement.
- Une fonctionnalité bonus est implémentée avec succès.
- L’interface est visuellement attrayante et cohérente.

### **A :**

- Toutes les fonctionnalités principales fonctionnent correctement.
- L’interface est visuellement attrayante et cohérente.

### **B :**

- Les fonctionnalités principales fonctionnent avec quelques bugs mineurs.
- L’interface est correcte mais manque de finition.

### **C :**

- Les fonctionnalités principales sont incomplètes ou buggées.
- Aucun bonus n’est implémenté.
- L’interface est rudimentaire.

### **D :**

- L’application est dysfonctionnelle ou très incomplète.
- Aucun effort visible pour améliorer ou finaliser l’application.
