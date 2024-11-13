<script>
    let showCategories = false;

    function toggleCategories() {
        showCategories = !showCategories;
    }
</script>

<main class="menu">
    <nav class="menu-nav">
        <ul class="menu-nav--list">
            <li class="menu-nav--list-a"><a href="/">Accueil</a></li>
            <li class="menu-nav--list-a"><a href="/products">Produits</a></li>
            <li class="menu-nav--list-a">
                <button  class="link-button" on:click|preventDefault={toggleCategories}>Catégories</button>
                {#if showCategories}
                    <ul class="submenu">
                        <li class="submenu-item"><a href="/category/all">Tous les produits</a></li>
                        <li class="submenu-item"><a href="/category/food">Alimentation</a></li>
                        <li class="submenu-item"><a href="/category/clothes">Vêtements</a></li>
                        <li class="submenu-item"><a href="/category/electronics">Électronique</a></li>
                    </ul>
                {/if}
            </li>
            <li class="menu-nav--list-a"><a href="/promos">Promos</a></li>
        </ul>
    </nav>
</main>

<style>
    .menu {
        width: 200px;
        height: 100vh;
        background-color: #f4f4f4;
        padding: 40px 20px;
        box-sizing: border-box;
        
    }
    .menu-nav {
        display: flex;
        flex-direction: column;
        padding: 1rem;
        background-color: #6c40e630;
        border-radius: 5px;
    }

    .menu-nav--list {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    .menu-nav--list-a {
        margin-bottom: 1rem;
    }

    .menu-nav a {
        text-decoration: none;
        color: #333;
        font-weight: 700;
    }

    /* Styles pour le sous-menu */
    .submenu {
        list-style-type: none;
        padding: 10px;
        margin-left: 5px;
        margin-top: 0.5rem;
        /* background-color: #f4f4f4; */
    }

    .submenu-item a {
        text-decoration: none;
        color: #180ae4;
        padding: 0.4rem 0;
        display: block;
        font-size: 0.8rem;
    }

    /* Supprimer les bordures et le fond */
    .submenu-item a:hover {
        /* background-color: #ddd; */
        color: #333;
    }
    .link-button {
        background: none;
        border: none;
        color: #333;
        text-decoration: none;
        cursor: pointer;
        padding: 0;
        font: inherit;
        font-weight: 700;
    }
</style>
