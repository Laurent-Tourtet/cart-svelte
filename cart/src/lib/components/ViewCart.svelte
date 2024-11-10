<script>
    
    import {addToCart, totalItems} from '$lib/stores/cartStore';
</script>

<main>
    <div class="header">
        <button class="cart-btn">
            <a href="/cart" class="view-cart-link">Voir mon panier({$totalItems})</a>
        </button>
    </div>
</main>
    <style>
        main {
        position: relative;
        padding-top: 2rem;
    }
    .header {
       
        position: absolute;
        top: 1rem;
        right: 1rem;
    }
    .view-cart-link {
        color: white;
        text-decoration: none;
    }
    .cart-btn {
        width: 200px;
        background-color: #333;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        cursor: pointer;
    }
    .cart-btn:hover {
        background-color: #555;
    }
</style>