<script>
    import '../global.css';
    import ViewCart from '$lib/components/ViewCart.svelte';
</script>

<header class="top">

    <h1>Votre Panier</h1>
</header>
<main>
<div class="header">
    <ViewCart />
</div>
</main>
<slot />
<style>
    .top {
        background-color: #333;
        color: white;
        padding: 1rem;
        text-align: center;
    }
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