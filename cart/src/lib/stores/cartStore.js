// cartStore.js
import { writable, derived } from 'svelte/store';

export const cart = writable([]);

// Fonction pour mettre à jour sessionStorage
function updateCartInSessionStorage(newCart) {
    if (typeof window !== 'undefined') { // Vérification côté client
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

// Mettre à jour le panier et sessionStorage
export function updateCart(newCart) {
    cart.set(newCart);
    updateCartInSessionStorage(newCart);
}

// Ajouter un article au panier
export function addToCart(product) {
    cart.update(currentCart => {
        // Vérifie que le produit a bien une image avant d'ajouter
        if (!product.image) {
            console.error('Le produit n\'a pas d\'image:', product);
        }

        // Recherche si l'article est déjà dans le panier
        const existingProduct = currentCart.find(item => item.id === product.id);
        let updatedCart;

        if (existingProduct) {
            // Incrémente la quantité si l'article existe déjà
            updatedCart = currentCart.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        } else {
            // Ajoute le produit avec une quantité initiale de 1 et l'image
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

// Store dérivée pour le nombre total de produits dans le panier
export const totalItems = derived(cart, $cart =>
    $cart.reduce((total, item) => total + item.quantity, 0)
);

// Initialise le panier avec les données de sessionStorage lors de l'import du store
initializeCart();
