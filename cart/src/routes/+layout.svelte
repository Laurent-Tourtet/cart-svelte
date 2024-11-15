<script>
    import { page} from '$app/stores';
    import '../global.css';
    import Menu from '$lib/components/Menu.svelte';
    import Breadcrumb from '$lib/components/Breadcrumb.svelte';
</script>

<header class="top">
    <h1>Votre Boutique</h1>
</header>

<div class="layout-container">
    <div class="menu-container">
        <Menu />
    </div>
    <div class="content">
        <div key={$page.url.pathname}>
            <Breadcrumb />
            <slot />
          </div>
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

    /* Largeur fixe pour le menu pour maintenir la structure */
    .menu-container {
        flex-basis: 200px;
        min-width: 200px;
    }

    .content {
        flex: 1;
        padding: 1rem;
    }
</style>
