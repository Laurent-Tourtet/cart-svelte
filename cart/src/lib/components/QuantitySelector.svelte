<script>
    import { createEventDispatcher } from 'svelte';

    export let quantity = 1;
    export let min = 1;
    export let max = 10;

    const dispatch = createEventDispatcher();

    const increment = () => {
        if (quantity < max) {
            quantity += 1;
            dispatch('quantityChange', { quantity });
        }
    };

    const decrement = () => {
        if (quantity > min) {
            quantity -= 1;
            dispatch('quantityChange', { quantity });
        }
    };
</script>

<div class="quantity-selector">
    <button on:click={decrement} disabled={quantity <= min}>-</button>
    <span>{quantity}</span>
    <button on:click={increment} disabled={quantity >= max}>+</button>
</div>

<style>
    .quantity-selector {
        display: flex;
        justify-content: center; /* Centre horizontalement les éléments */
        align-items: center;
        gap: 0.5rem; /* Espace entre les boutons et la quantité */
        margin: 20px 0;
    }

    button {
        padding: 0.5rem;
        border: none;
        background-color: rgb(47, 45, 172);
        color: white;
        font-size: 1rem;
        cursor: pointer;
        border-radius: 4px;
    }

    button:disabled {
        background-color: rgb(170, 170, 170);
        cursor: not-allowed;
    }

    span {
        font-size: 1.2rem;
        width: 2rem;
        text-align: center;
    }
</style>
