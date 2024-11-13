<script>
    import '../global.css';
    import Menu from '$lib/components/Menu.svelte';
</script>

<header class="top">
    <h1>Votre Boutique</h1>
</header>

<div class="layout-container">
    <Menu />
    <div class="content">
        <slot />
    </div>
</div>

<style>
    .top {
        background-color: #333;
        color: white;
        padding: 1rem;
        text-align: center;
    }

    .layout-container {
        display: flex;
    }

    /* Cibler la classe CSS `menu` du composant `Menu.svelte` */
    .layout-container .menu {
        flex-basis: 200px; /* Largeur fixe pour le menu */
    }

    .content {
        flex: 1;
        padding: 1rem;
    }
</style>
