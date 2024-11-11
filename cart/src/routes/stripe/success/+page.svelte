<script>
    let purchasedProducts = [];

    // Récupérer les produits achetés depuis sessionStorage
    if (typeof window !== 'undefined') {
        const storedProducts = sessionStorage.getItem('cartProducts');
        purchasedProducts = storedProducts ? JSON.parse(storedProducts) : [];
    }
</script>

<main>
    <div class="products-header">
        <h1 class="products-header--title">Merci pour votre achat !</h1>
        <p class="products-header--paragraphe">Voici les produits que vous avez achetés :</p>
    </div>
    <div class="products-cards">
        <ul class="products-cards--list">
            {#each purchasedProducts as product}
                <li class="products-cards--list-item">
                    <h2 class="products-cards--list-item--name">{product.name}</h2>
                    <p class="products-cards--list-item--description">{product.description}</p>
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
    .products-cards--list-item--description {
        color: rgb(126, 135, 135);
        margin-bottom: 0.5rem;
    }
    .products-cards--list-item--price {
        color: rgb(47, 45, 172);
        font-size: 1.25rem;
        margin-bottom: 0.5rem;
    }
    .products-cards--list-item--button {
        background-color: rgb(47, 45, 172);
        border: none;
        border-radius: 5px;
        color: white;
        cursor: pointer;
        font-size: 1rem;
        padding: 0.5rem;
    }
    .products-cards--list-item--button:hover {
        background-color: rgb(126, 135, 135);
    }
</style>