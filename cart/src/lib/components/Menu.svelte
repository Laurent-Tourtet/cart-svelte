<script>
    let showCategories = false;
    let isOpen = false;


    function toggleCategories() {
        isOpen = !isOpen;
    }
</script>

<main class="menu">
    <nav class="menu-nav">
  <ul class="menu-nav--list">
    <li class="menu-nav--list-a">
      <a href="/">Accueil</a>
    </li>
    
    <li class="menu-nav--list-a">
      <button class="link-button" on:click|preventDefault={toggleCategories}>
        Catégories
        <!-- Icône flèche vers le bas -->
        <svg 
          class="icon-arrow {isOpen ? 'rotate' : ''}" 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          fill="currentColor" 
          viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
        </svg>
      </button>
      {#if isOpen}
        <!-- Sous-menu -->
        <ul class="submenu">
          <li class="submenu-item"><a href="/category/all">Tous les produits</a></li>
          <li class="submenu-item"><a href="/category/phone">Téléphonie</a></li>
          <li class="submenu-item"><a href="/category/clothes">Vêtements</a></li>
          <li class="submenu-item"><a href="/category/shoes">Chaussures</a></li>
        </ul>
      {/if}
    </li>
    <li class="menu-nav--list-a"><a href="/promos">Promos</a></li>
    <li class="menu-nav--list-a">
        <a href="/contact">Service Clients</a>
      </li>
  </ul>
</nav>
</main>

<style>
    .menu {
        width: 200px;
        height: auto;
        /* background-color: #f4f4f4; */
        padding: 40px 20px;
        box-sizing: border-box;
        
    }
    .menu-nav {
        display: flex;
        flex-direction: column;
        padding: 1rem;
        /* background-color: #6c40e630; */
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
    display: flex;
    align-items: center;
    background: none;
    border: none;
    color: #333;
    font: inherit;
    cursor: pointer;
    font-weight: 700;
  }
  
  .icon-arrow {
    margin-left: 5px;
    transition: transform 0.2s ease;
  }
    /* Classe pour la rotation */
    .rotate {
    transform: rotate(180deg);
  }
    
</style>
