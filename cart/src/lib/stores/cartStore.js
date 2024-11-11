// cartStore.js
import { writable, derived } from 'svelte/store';

export const cart = writable([]);

// Fonction pour mettre à jour sessionStorage
function updateCartInSessionStorage(newCart) {
    if (typeof window !== 'undefined') {
        sessionStorage.setItem('cart', JSON.stringify(newCart));
    }
}

// Initialiser le panier avec les données de sessionStorage si disponibles
function initializeCart() {
    if (typeof window !== 'undefined') {
        const storedCart = sessionStorage.getItem('cart');
        if (storedCart) {
            cart.set(JSON.parse(storedCart));
        }
    }
}

// Appelle la fonction d'initialisation pour charger le panier lors de l'import du store
initializeCart();

// Mettre à jour le panier et sessionStorage
export function updateCart(newCart) {
    cart.set(newCart);
    updateCartInSessionStorage(newCart);
}

// Ajouter un article au panier
export function addToCart(product) {
    cart.update(currentCart => {
        // Vérifie que le produit contient une image, sinon log une erreur
        if (!product.image) {
            console.error('Le produit n\'a pas d\'image:', product);
        }

        // Recherche si l'article existe déjà dans le panier
        const existingProduct = currentCart.find(item => item.id === product.id);
        let updatedCart;

        if (existingProduct) {
            // Incrémente la quantité si l'article est déjà présent
            updatedCart = currentCart.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        } else {
            // Ajoute le produit avec une quantité initiale de 1
            updatedCart = [...currentCart, { ...product, quantity: 1 }];
        }

        // Mise à jour du panier dans le sessionStorage
        updateCartInSessionStorage(updatedCart);
        return updatedCart;
    });
}

// Supprimer un article du panier
export function removeFromCart(productId) {
    cart.update(currentCart => {
        const updatedCart = currentCart.filter(item => item.id !== productId);
        updateCartInSessionStorage(updatedCart);
        return updatedCart;
    });
}

// Store dérivé pour le nombre total de produits dans le panier
export const totalItems = derived(cart, $cart =>
    $cart.reduce((total, item) => total + item.quantity, 0)
);
