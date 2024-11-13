<script>
    import { addToCart, totalItems } from '$lib/stores/cartStore';
    import QuantitySelector from './QuantitySelector.svelte';
    import ViewCart from './ViewCart.svelte';

    let products = [
        { id: 1, name: 'T-shirt', description: 'Un t-shirt en coton bio', price: 20, image: "/images/t-shirt.jpg" },
        { id: 2, name: 'Pantalon', description: 'Un pantalon en coton bio', price: 50, image: "/images/pantalon.jpg" },
        { id: 3, name: 'Basket', description: 'baskets', price: 80, image: "/images/basket.jpg" }
    ];

    // Quantités sélectionnées pour chaque produit
    let selectedQuantities = products.map(() => 1);

    function handleQuantityChange(event, index) {
        selectedQuantities[index] = event.detail.quantity;
        console.log(`Quantité sélectionnée pour ${products[index].name} :`, selectedQuantities[index]);
    }
</script>

<main>
    <ViewCart />

    <section class="products-header">
        <h1 class="products-header--title">Bienvenue dans notre boutique</h1>
        <p class="products-header--paragraphe">Retrouvez tous nos produits actuellement dans notre boutique</p>
    </section>

    <section class="products-cards">
        <ul class="products-cards--list">
            {#each products as product, index}
                <li class="products-cards--list-item">
                    <h2 class="products-cards--list-item--name">{product.name}</h2>
                    <img class="products-cards--img" src={product.image} alt={product.name} />
                    <p class="products-cards--list-item--description">{product.description}</p>
                    <p class="products-cards--list-item--price">Prix unitaire : {product.price} €</p>

                    <!-- Composant QuantitySelector -->
                    <QuantitySelector
                        bind:quantity={selectedQuantities[index]}
                        min={1}
                        max={10}
                        on:quantityChange={(event) => handleQuantityChange(event, index)}
                    />

                    <!-- Calcul du prix total pour chaque produit en fonction de la quantité -->
                    <p class="products-cards--list-item--price">Prix total : {product.price * selectedQuantities[index]} €</p>

                    <button class="products-cards--list-item--button" on:click={() => addToCart({ ...product, quantity: selectedQuantities[index] })}>
                        Ajouter au panier
                    </button>

                    <button class="products-cards--list-item--button"
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

    /* Style des sections */
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
        margin-bottom: 30px;
    }

    .products-cards--list-item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 1rem;
        background-color: #908d8d;
        box-shadow: 1px 4px 8px rgba(55, 20, 230, 0.1);
        border-radius: 4px;
        align-items: center; /* Centre les éléments horizontalement */
    }

    .products-cards--list-item--name {
        font-size: 1.2rem;
        color: rgb(47, 45, 172);
        margin-bottom: 0.5rem;
        text-align: center;
    }

    .products-cards--list-item--description {
        color: rgb(72, 67, 67);
        margin: 1rem;
        text-align: center;
        text-shadow: 0 1px 1px rgb(8, 8, 10);
    }

    .products-cards--list-item--price {
        font-weight: bold;
        color: rgb(47, 45, 172);
        margin-bottom: 0.5rem;
        text-align: center;
    }

    .products-cards--img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 4px;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
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
