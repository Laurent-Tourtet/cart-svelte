# Boutique en ligne avec SvelteKit et Stripe

Ce projet est une boutique en ligne créée avec SvelteKit, qui permet d'afficher des produits, de les ajouter au panier, et de gérer le paiement via Stripe.

## Fonctionnalités principales
- **Catalogue de produits** : Affichage des produits disponibles avec leurs informations.
- **Panier** : Ajout et gestion de produits dans un panier persistant.
- **Sélection de quantité** : Composant personnalisé pour ajouter ou retirer des produits.
- **Paiement** : Intégration avec Stripe pour gérer les paiements sécurisés.

## Structure du projet

- `src/routes/` : 
  - `+layout.svelte` : Structure principale incluant le menu de navigation.
  - `products/` : Page d'affichage des produits.
  - `cart/` : Page pour afficher le contenu du panier.

- `src/lib/components/` : Contient les composants réutilisables.
  - `Menu.svelte` : Menu latéral avec options de navigation.
  - `ProductItem.svelte` : Composant pour afficher les informations d'un produit.
  - `QuantitySelector.svelte` : Composant pour sélectionner la quantité d'un produit.

- `src/lib/store/cartStore.js` : Store Svelte pour gérer l'état du panier.

## Installation

1. **Cloner le projet**
   ```bash
   git clone https://github.com/votre-utilisateur/boutique-sveltekit.git
   cd boutique-sveltekit

 2. **Installer les dépendances**
   npm install

 3. **Configuration de Stripe**
   - Créer un compte Stripe et obtenir les clés API
   - Créer un fichier **.env** à la racine du projet et ajouter les clés API :
 4. **Lancer le projet**
   npm run dev
 5. **Accéder à l'application**
   Ouvrir http://localhost:5173 pour voir la boutique en ligne.

   ## Utilisation

   - **Ajouter un produit au panier** : Dans la page produit, utiliser le composant QuantitySelector pour ajuster la quantité puis ajouter au panier.
   - **Vérifier le panier** : Cliquer sur "Panier" pour voir les produits ajoutés et le total.
   - **Paiement** : Suivre les instructions pour compléter l'achat via **Stripe**.
  
  ## Structure des composants principaux

  - **Products.svelte** : gestion des produits 
  - **Menu.svelte** : Menu de navigation latéral. Les catégories de produits sont accessibles depuis un sous-menu.
  - **QuantitySelector.svelte** : Composant pour ajuster la quantité de chaque produit.
  - **cartStore.js** : Store pour la gestion du panier. La quantité des produits est gérée dynamiquement et le total du panier est recalculé.

  ## Personnalisation

  - **Ajout de nouvelles catégories** : Modifier le composant Menu.svelte pour ajouter des liens ou sous-menus vers de nouvelles catégories.
  - **Modifier le style** : Tous les styles sont gérés dans chaque composant via un <style> en SCSS/CSS.


**Merci d'utiliser ce modèle de boutique en ligne ! Assurez-vous que Stripe est correctement configuré pour tester les paiements.**
