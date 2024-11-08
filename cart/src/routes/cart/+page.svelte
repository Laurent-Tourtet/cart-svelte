<script>
    import Cart from '$lib/components/Cart.svelte';
    import ViewCart from '$lib/components/ViewCart.svelte';
</script>
<main>

    <div class="header">
        <ViewCart />
    </div>
<Cart />

</main>
<style>
    main {
        position: relative;
        padding-top: 2rem;
    }

    /* Positionner le bouton en haut à droite */
    .header {
        position: absolute;
        top: 1rem;
        right: 1rem;
    }
</style>