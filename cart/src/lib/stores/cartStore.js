import { writable } from 'svelte/store';

export const cart = writable([]);

// Fonction pour récupérer le panier depuis sessionStorage si disponible
function getCartFromSessionStorage() {
    if (typeof window !== 'undefined') { // Assurez-vous que ce code s'exécute uniquement côté client
        const storedCart = sessionStorage.getItem('cart');
        if (storedCart) {
            return JSON.parse(storedCart); // Retourner le panier enregistré
        }
    }
    return []; // Si pas de panier en sessionStorage, retourner un tableau vide
}

// Fonction pour mettre à jour sessionStorage
function updateCartInSessionStorage(newCart) {
    if (typeof window !== 'undefined') { // Assurez-vous que ce code s'exécute uniquement côté client
        sessionStorage.setItem('cart', JSON.stringify(newCart));
    }
}

// Initialisation du panier avec les données de sessionStorage si elles existent
export function initializeCart() {
    const initialCart = getCartFromSessionStorage();
    cart.set(initialCart);
}

// Mettre à jour le panier
export function updateCart(newCart) {
    cart.set(newCart);
    updateCartInSessionStorage(newCart);
}

// Ajouter un article au panier
export function addToCart(product) {
    cart.update(currentCart => {
        const updatedCart = [...currentCart, product];
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
