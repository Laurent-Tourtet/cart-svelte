<script>
    import { cart, removeFromCart } from '$lib/stores/cartStore';
    import { loadStripe } from '@stripe/stripe-js';
    import Return from './Return.svelte';
    

    const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

    // Fonction pour créer une session de paiement Stripe
    async function checkout() {
        sessionStorage.setItem('cartProducts', JSON.stringify($cart));
        const stripe = await stripePromise;
        const response = await fetch('/api/checkout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                items: $cart.map(item => ({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    quantity: item.quantity,
                    image: item.image
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
    <Return />
    <h2>Vos articles</h2>
    <section class="cart">
        <p class="cart-article">Vous avez {$cart.length} article(s) dans votre panier</p>
        <ul class="cart-list">
            {#each $cart as item (item.id)}
                <li class="cart-list--item">
                    <img src="{item.image}" alt="{item.name}" class="product-image" />
                    {item.name} - {item.quantity} × ${item.price} € 
                    <button class="cart-button" on:click={() => removeFromCart(item.id)} aria-label="button delete article">
                        <i class="fas fa-trash"></i>
                    </button>
                    
                </li>
            {/each}
        </ul>
        
            <p class="cart-article">Total : {$cart.reduce((acc, item) => acc + item.price * item.quantity, 0)} €</p>
            {#if $cart.length > 0}
            <button class="cart-button" on:click={checkout} aria-label="button got ot paiement">Passer au paiement</button>
           
            {:else}
            <p class="cart-button--empty">Votre panier est vide</p>
        {/if}
    </section>
</div>

<style>
    .cart {
        display: flex;
        flex-direction: column;
        max-width: 400px;
        margin: 0 auto;
        padding: 1rem;
        background-color: #908d8d;
        border-radius: 4px;
        box-shadow: 0 1px 5px rgba(34, 12, 177, 0.583);
    }

    h2 {
        margin-bottom: 3rem;
        text-align: center;
        color: rgb(158, 161, 161);
    }

    .cart-article {
        margin-bottom: 3rem;
        font-size: 1.2rem;
        text-align: center;
        color: azure;
    }

    .cart-list {
        list-style: none;
        color: rgb(224, 224, 245);
        font-weight: 700;
        padding: 0;
    }

    .cart-list--item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 0.5rem;
        text-shadow: 0 1px 5px rgba(8, 8, 10, 0.899);
    }

    .product-image {
        width: 70px;
        height: 70px;
        margin-right: 1rem;
        margin-bottom: 1rem;
        object-fit: cover;
    }
    .cart-button{
        background-color: #4307ea;
        color: rgb(249, 241, 241);
        border: none;
        padding: 0.5rem 1rem;
        cursor: pointer;
        border-radius: 4px;
    }
    .cart-button:hover {
        background-color: #faf4f4;
        color: #4307ea;
    }

    .cart-button--empty {
        background-color: #4307ea;
        color: rgb(249, 241, 241);
        border: none;
        padding: 0.5rem 1rem;
        /* cursor: pointer; */
        border-radius: 4px;
        text-align: center;
    }

    /* .cart-button--empty:hover {
        background-color: #faf4f4;
        color: #4307ea;
    } */
</style>
