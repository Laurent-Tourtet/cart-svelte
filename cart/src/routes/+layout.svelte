<script>
    import '../global.css';
    import ViewCart from '$lib/components/ViewCart.svelte';
</script>

<header class="top">

    <h1>Votre Panier</h1>
</header>

<slot />
<style>
    .top {
        background-color: #333;
        color: white;
        padding: 1rem;
        text-align: center;
    }
    

   
</style>