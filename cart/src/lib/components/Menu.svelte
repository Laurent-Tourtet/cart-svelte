<script>
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';

  let isOpen = false;

  function toggleCategories() {
    isOpen = !isOpen;
  }

  function navigateToCategory(category) {
    goto(`/category/${category}`);
    // isOpen = false; 
  }
</script>

<main class="menu">
  <nav class="menu-nav">
    <ul class="menu-nav--list">
      <li class="menu-nav--list-a">
        <a href="/" data-sveltekit-reload>Accueil</a>
      </li>

      <li class="menu-nav--list-a">
        <button class="link-button" on:click|preventDefault={toggleCategories}>
          Catégories
          <svg
            class="icon-arrow {isOpen ? 'rotate' : ''}"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16">
            <path
              fill-rule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
          </svg>
        </button>
        {#if isOpen}
          <ul class="submenu">
            <li class="submenu-item">
              <button on:click={() => navigateToCategory('electromenager')}>Electroménager</button>
            </li>
            <li class="submenu-item">
              <button on:click={() => navigateToCategory('informatique')}>Informatique</button>
            </li>
            <li class="submenu-item">
              <button on:click={() => navigateToCategory('phone')}>Téléphonie</button>
            </li>
            <li class="submenu-item">
              <button on:click={() => navigateToCategory('clothes')}>Vêtements</button>
            </li>
            <li class="submenu-item">
              <button on:click={() => navigateToCategory('shoes')}>Chaussures</button>
            </li>
          </ul>
        {/if}
      </li>
      <li class="menu-nav--list-a">
        <a href="/promos" data-sveltekit-reload>Promos</a>
      </li>
      <li class="menu-nav--list-a">
        <a href="/contact" data-sveltekit-reload>Service Clients</a>
      </li>
    </ul>
  </nav>
</main>

<style>
  .menu {
    width: 200px;
    height: auto;
    padding: 40px 20px;
    box-sizing: border-box;
  }

  .menu-nav {
    display: flex;
    flex-direction: column;
    padding: 1rem;
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

  .submenu {
    list-style-type: none;
    padding: 10px;
    margin-left: 5px;
    margin-top: 0.5rem;
  }

  .submenu-item button {
    background: none;
    border: none;
    color: #180ae4;
    cursor: pointer;
    font-size: 0.8rem;
    text-decoration: none;
    padding: 0.4rem 0;
    display: block;
  }

  .submenu-item button:hover {
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

  .rotate {
    transform: rotate(180deg);
  }
</style>
