<script>
    import { cart } from '$lib/stores/cartStore';
    import { onMount } from 'svelte';

    let canceledProducts = [];
    let cartItems = [];

    // Abonnez-vous au store cart pour surveiller les changements
    $: cartItems = $cart;
    console.log("Produits dans cart.svelte :", cartItems);

    // Récupérer les produits depuis sessionStorage lors du chargement de la page
    onMount(() => {
        if (typeof window !== 'undefined') {
            const storedProducts = sessionStorage.getItem('cart');
            canceledProducts = storedProducts ? JSON.parse(storedProducts) : [];
            
            if (canceledProducts.length === 0) {
                // Si aucun produit n'est trouvé dans sessionStorage, utiliser les produits dans cart
                canceledProducts = cartItems;
            }

            console.log("Produits récupérés dans cancel.svelte :", canceledProducts);
        }
    });
</script>

<main>
    <div class="products-header">
        <h1 class="products-header--title">Votre paiement a été annulé</h1>
        <p class="products-header--paragraphe">Vous pouvez réessayer ou continuer vos achats.</p>
    </div>
    <div class="products-cards">
        <ul class="products-cards--list">
            {#each canceledProducts as product}
                <li class="products-cards--list-item">
                    <h2 class="products-cards--list-item--name">{product.name}</h2>
                    <img class="products-cards--img" src={product.image} alt={product.name} />
                    <p class="products-cards--list-item--description">{product.description}</p>
                    <p class="products-cards--list-item--quantity">Quantité : {product.quantity}</p>
                    <p class="products-cards--list-item--price">Prix : {product.price} €</p>
                </li>
            {/each}
        </ul>
    </div>
</main>

<style>
    .products-header {
        display: flex;
        flex-direction: column;
        max-width: 600px;
        margin: 2rem auto;
    }
    .products-header--title {
        text-align: center;
        font-size: 2rem;
        color: rgb(126, 135, 135);
        margin-bottom: 1rem;
    }
    .products-header--paragraphe {
        text-align: center;
        color: rgb(47, 45, 172);
    }
    .products-cards {
        display: flex;
        flex-direction: column;
        max-width: 600px;
        margin: 2rem auto;
    }

    .products-cards--img {
        width: 100%;
        height: auto;
        margin-bottom: 1rem;
    }
    .products-cards--list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0;
    }
    .products-cards--list-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #f9f9f9;
        border-radius: 5px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        margin: 1rem;
        padding: 1rem;
        width: 200px;
    }
    .products-cards--list-item--name {
        color: rgb(47, 45, 172);
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }
    .products-cards--list-item--description,
    .products-cards--list-item--quantity,
    .products-cards--list-item--price {
        color: rgb(126, 135, 135);
        margin-bottom: 0.5rem;
    }
</style>
