<script>
    import { addToCart, totalItems } from '$lib/stores/cartStore';
    import ViewCart from './ViewCart.svelte';

    let products = [
        { id: 1, name: 'T-shirt', description: 'Un t-shirt en coton bio', price: 20, quantity: 1, image: "/images/t-shirt.jpg" },
        { id: 2, name: 'Pantalon', description: 'Un pantalon en coton bio', price: 50, quantity: 1, image: "/images/pantalon.jpg" },
        { id: 3, name: 'Basket', description: 'baskets', price: 80, quantity: 1, image: "/images/basket.jpg" }
    ];
</script>

<main>
    <ViewCart />
  
    <section class="products-header">
        <h1 class="products-header--title">Bienvenue dans notre boutique</h1>
        <p class="products-header--paragraphe">Retrouvez tous nos produits actuellement dans notre boutique</p>
    </section>

    <section class="products-cards">
        <ul class="products-cards--list">
            {#each products as product}
                <li class="products-cards--list-item">
                    <h2 class="products-cards--list-item--name">{product.name}</h2>
                    <img class="products-cards--img" src={product.image} alt={product.name} />
                    <p class="products-cards--list-item--description">{product.description}</p>
                    <p class="products-cards--list-item--price">{product.price} €</p>
                    <button class="products-cards--list-item--button" on:click={() => addToCart(product)}>
                        Ajouter au panier
                    </button>
                    <button
                        on:click={() => { window.location.href = `/products/${product.id}` }}
                    >
                        Voir le produit
                    </button>
                </li>
            {/each}
        </ul>
    </section>
</main>


<style>
     main {
        position: relative;
        padding-top: 2rem;
    }

    /* Positionner le bouton en haut à droite */
    
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
        max-width: 1000px;
        margin: 0 auto;
    }

    .products-cards--list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
        list-style: none;
        padding: 0;
    }

    .products-cards--list-item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border: 1px solid #ddd;
        padding: 1rem;
        background-color: #fff;
        box-shadow: 1px 4px 8px rgba(55, 20, 230, 0.1);
        border-radius: 4px;
    }

    .products-cards--list-item--name {
        font-size: 1.2rem;
        color: rgb(47, 45, 172);
        margin-bottom: 0.5rem;
        text-align: center;
    }

    .products-cards--list-item--description {
        color: rgb(72, 67, 67);
        margin-bottom: 0.5rem;
    }

    .products-cards--list-item--price {
        font-weight: bold;
        color: rgb(47, 45, 172);
        margin-bottom: 0.5rem;
        text-align: right;
    }
    .products-cards--img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 4px;
    }

    .products-cards--list-item--button {
        background-color: rgb(47, 45, 172);
        width: 50%;
        color: white;
        border: none;
        border-radius: 4px;
        padding: 0.5rem 1rem;
        cursor: pointer;
        transition: background-color 0.3s;
        margin: 0.7rem auto;
    }

    .products-cards--list-item--button:hover {
        background-color: rgb(53, 52, 79);
    }
</style>
