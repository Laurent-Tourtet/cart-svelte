<main class="menu">
    <section class="menu-nav">
        <nav>
            <ul>
                <li><a href="/">Accueil</a></li>
                <li><a href="/category">Categories</a></li>
                <li>
                    <select name="category" id="menu-category">
                        <option value="all">Tous les produits</option>
                        <option value="food">Alimentation</option>
                        <option value="clothes">Vêtements</option>
                        <option value="electronics">Électronique</option>
                    </select>
                </li>
                <li><a href="/promos">Promos</a></li>
            </ul>
        </nav>
    </section>
</main>

<style>
    .menu {
        width: 200px;
        height: 100vh;
        background-color: #f4f4f4;
        padding: 20px;
        box-sizing: border-box;
    }

    .menu-nav ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    .menu-nav li {
        margin-bottom: 1rem;
    }

    .menu-nav a {
        text-decoration: none;
        color: #333;
    }

    #menu-category {
        width: 100%;
    }
</style>
