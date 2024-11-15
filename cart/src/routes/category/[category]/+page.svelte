<script>
  import { page } from '$app/stores';
  import { addToCart, totalItems } from '$lib/stores/cartStore';
  import ViewCart from '$lib/components/ViewCart.svelte';
  import QuantitySelector from '$lib/components/QuantitySelector.svelte';
  import Return from '$lib/components/Return.svelte';

  let category;
  let filteredProducts = [];

  const products = [
      { id: 1, name: 'T-shirt', description: 'Un t-shirt en coton bio', price: 20, image: "/images/t-shirt.jpg", category: "clothes" },
      { id: 2, name: 'Pantalon', description: 'Un pantalon en coton bio', price: 50, image: "/images/pantalon.jpg", category: "clothes" },
      { id: 3, name: 'Basket', description: 'Des baskets stylées', price: 80, image: "/images/basket.jpg", category: "shoes" }
  ];
   // Quantités sélectionnées pour chaque produit
   let selectedQuantities = products.map(() => 1);

function handleQuantityChange(event, index) {
    selectedQuantities[index] = event.detail.quantity;
    console.log(`Quantité sélectionnée pour ${products[index].name} :`, selectedQuantities[index]);
}

  $: {
      category = $page.params.category;
      filteredProducts = products.filter(product => product.category === category);
  }
</script>

<ViewCart />

<Return />
<main class="products-container">
  {#if filteredProducts.length > 0}
      {#each filteredProducts as product, index}
          <div class="product-card">
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p class="price">Prix: {product.price} €</p>

               <!-- Composant QuantitySelector -->
               <QuantitySelector
               bind:quantity={selectedQuantities[index]}
               min={1}
               max={10}
               on:quantityChange={(event) => handleQuantityChange(event, index)}
           />
<!-- Calcul du prix total pour chaque produit en fonction de la quantité -->
<p class="products-cards--list-item--price">Prix total : {product.price * selectedQuantities[index]} €</p>

              <button class="add-to-cart" on:click={() => addToCart({ ...product, quantity: selectedQuantities[index] })}>
                  Ajouter au panier
              </button>
          </div>
      {/each}
  {:else}
      <p>Aucun produit trouvé pour cette catégorie.</p>
  {/if}
</main>

<style>
  /* Conteneur principal pour les produits */
  .products-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      padding: 20px;
      margin-top: 50px;
  }

  /* Style des cartes produits */
  .product-card {
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 16px;
      text-align: center;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      transition: transform 0.2s, box-shadow 0.2s;
  }

  .product-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .product-card img {
      max-width: 100%;
      height: 200px;
      margin-bottom: 10px;
      border-radius: 5px;
  }

  .product-card h2 {
      font-size: 1.2rem;
      margin: 10px 0;
  }

  .product-card p {
      font-size: 1rem;
      margin: 10px 0;
  }

  .products-cards--list-item--price {
        font-weight: bold;
        color: rgb(47, 45, 172);
        margin-bottom: 0.5rem;
        text-align: center;
    }
  .product-card .price {
      font-weight: bold;
      color: #333;
  }

  .add-to-cart {
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      padding: 10px 20px;
      cursor: pointer;
      font-size: 1rem;
  }

  .add-to-cart:hover {
      background-color: #0056b3;
  }
</style>
