<script>
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import { addToCart } from '$lib/stores/cartStore';
    import ViewCart from '$lib/components/ViewCart.svelte';
    import Return from '$lib/components/Return.svelte';


    // Utilisation du paramètre `productId` de la route dynamique
    const {productId }= $page.params; // Accès au `productId` depuis l'URL

    let product;

    // Exemple de données produits (vous pouvez les remplacer par une requête API)
    const products = [
        { id: 1, name: 'T-shirt', description: 'Un t-shirt en coton bio', price: 20, image: "/images/t-shirt.jpg" },
        { id: 2, name: 'Pantalon', description: 'Un pantalon en coton bio', price: 50, image: "/images/pantalon.jpg" },
        { id: 3, name: 'Basket', description: 'baskets', price: 80, image: "/images/basket.jpg" }
    ];

    // Chargement du produit en fonction de l'ID
    onMount(() => {
        product = products.find(p => p.id === parseInt(productId));

        // Si le produit n'est pas trouvé, afficher une erreur
        if (!product) {
            throw new Error('Produit non trouvé');
        }
    });
</script>
<ViewCart />
<main>
    
<Return />
    {#if product}
        <h1>{product.name}</h1>
        <img src={product.image} alt={product.name} />
        <p>{product.description}</p>
        <p>Prix: {product.price} €</p>
        <button class="products-cards--list-item--button" on:click={() => addToCart(product)}>
            Ajouter au panier
        </button>
    {:else}
        <p>Produit non trouvé.</p>
    {/if}
</main>

<style>
    main {
        text-align: center;
    }
    h1 {
        margin: 1rem 0;
        color: white;
    }
    img {
        max-width: 20%;
        margin: 1rem 0;
    }
    p {
        margin: 1rem 0;
        color: white;
    }
</style>
