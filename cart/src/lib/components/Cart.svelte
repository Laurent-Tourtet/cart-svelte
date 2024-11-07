<script>
    import { cart, removeFromCart } from '$lib/stores/cartStore';
    import { onMount } from 'svelte';
    import { loadStripe } from '@stripe/stripe-js';
    
    $: console.log($cart);
    
    const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY); // Remplacez par votre clé publique

    // Fonction pour récupérer le panier depuis sessionStorage si disponible
    const getCartFromSessionStorage = () => {
        const storedCart = sessionStorage.getItem('cart');
        if (storedCart) {
            return JSON.parse(storedCart); // Retourner le panier enregistré
        }
        return []; // Si pas de panier en sessionStorage, retourner un tableau vide
    };

    // Mettre à jour sessionStorage quand le panier change
    const updateCartInSessionStorage = (newCart) => {
        sessionStorage.setItem('cart', JSON.stringify(newCart));
    };

    // Initialisation du panier à l'intérieur de onMount
    onMount(() => {
        const initialCart = getCartFromSessionStorage();
        // Mettre à jour le store cart avec les données du sessionStorage
        cart.set(initialCart);
    });

    // Fonction d'ajout au panier (mettre à jour à la fois le store et sessionStorage)
    const addToCart = (product) => {
        const newCart = [...$cart, product];
        cart.set(newCart);
        updateCartInSessionStorage(newCart);
        
    };

    // Fonction pour créer une session de paiement Stripe
    async function checkout() {
        const stripe = await stripePromise;
        const response = await fetch('/api/checkout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                items: $cart.map(item => ({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    quantity: item.quantity
                }))
            })
        });

        if (response.ok) {
            const session = await response.json();
            await stripe.redirectToCheckout({ sessionId: session.id });
        } else {
            console.error('Erreur lors de la création de la session de paiement.');
        }
    }
</script>

<div>
    <h2>Vos articles</h2>
    <section class="cart">
        <p class="cart-article">Vous avez {$cart.length} article dans votre panier</p>
        <ul class="cart-list">
            {#each $cart as item (item.id)}
                <li class="cart-list--item">
                    {item.name} - {item.quantity} × ${item.price} €
                    <button class="cart-button" on:click={() => removeFromCart(item.id)}>Supprimer</button>
                </li>
            {/each}
        </ul>
        <button class="cart-button" on:click={checkout}>Passer à la caisse</button>
    </section>
</div>

<style>
    .cart {
        display: flex;
        flex-direction: column;
        max-width: 400px;
        margin: 0 auto;
        padding: 0.7rem;
        background-color: #555;
        border-radius: 4px;
        box-shadow:     0 1px 5px rgba(34, 12, 177, 0.583);
    }

    h2 {
        margin-bottom: 3rem;
        text-align: center;
        color: azure;
    }

   .cart-article {
        margin-bottom: 3rem;
        font-size: 1.2rem;
        text-align: center;
        color: azure;
    }

    .cart-list {
        list-style: none;
        color: blue;
        padding: 0;
    }

    .cart-list--item {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5rem;
        text-shadow:    0 1px 5px rgba(8, 8, 10, 0.899);
    }

    button {
        background-color: #4307ea;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        cursor: pointer;
    }

    button:hover {
        background-color: #121010;
    }
</style>
