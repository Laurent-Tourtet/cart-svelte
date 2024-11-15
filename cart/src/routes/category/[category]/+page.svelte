<script>
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import { addToCart } from '$lib/stores/cartStore';
    import ViewCart from '$lib/components/ViewCart.svelte';
    import Return from '$lib/components/Return.svelte';

    let category;
    let filteredProducts = [];

    const products = [
        { id: 1, name: 'T-shirt', description: 'Un t-shirt en coton bio', price: 20, image: "/images/t-shirt.jpg", category: "clothes" },
        { id: 2, name: 'Pantalon', description: 'Un pantalon en coton bio', price: 50, image: "/images/pantalon.jpg", category: "clothes" },
        { id: 3, name: 'Basket', description: 'Des baskets stylées', price: 80, image: "/images/basket.jpg", category: "shoes" }
    ];

    $: {
        category = $page.params.category;
        filteredProducts = products.filter(product => product.category === category);
    }
</script>

<ViewCart/>
<main>
    <Return/>

    {#if filteredProducts.length > 0}
        {#each filteredProducts as product}
            <div class="product">
                <h2>{product.name}</h2>
                <img src={product.image} alt={product.name} />
                <p>{product.description}</p>
                <p>Prix: {product.price} €</p>
                <button class="products-cards--list-item--button" on:click={() => addToCart(product)}>
                    Ajouter au panier
                </button>
            </div>
        {/each}
    {:else}
        <p>Aucun produit trouvé pour cette catégorie.</p>
    {/if}
</main>

<style>
    .product {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 20px;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    .product img {
        width: 100%;
        max-width: 200px;
        margin-bottom: 10px;
    }

    .product button {
        background-color: #4CAF50;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    .product button:hover {
        background-color: #45a049;
    }
</style>