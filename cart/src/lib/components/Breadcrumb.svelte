<script>
    import { page } from '$app/stores';
  
    // Récupère l'URL actuelle
    let pathSegments = [];
  
    $: {
      // Divise le chemin en segments (exclut les chaînes vides)
      pathSegments = $page.url.pathname
        .split('/')
        .filter(Boolean);
    }
  
    function generatePath(index) {
      // Génère le chemin cumulatif pour chaque segment
      return '/' + pathSegments.slice(0, index + 1).join('/');
    }
  </script>
  
  <nav aria-label="Breadcrumb" class="breadcrumb">
    <ul>
      <!-- Lien vers la page d'accueil -->
      <li><a href="/">Accueil</a></li>
  
      {#each pathSegments as segment, index}
        <li>
          {#if index < pathSegments.length - 1}
            <!-- Lien pour les segments intermédiaires -->
            <a href={generatePath(index)}>{segment}</a>
          {:else}
            <!-- Dernier segment (page actuelle) -->
            <span aria-current="page">{segment}</span>
          {/if}
        </li>
      {/each}
    </ul>
  </nav>
  
  <style>
    .breadcrumb ul {
      display: flex;
      list-style: none;
      padding: 0;
      margin: 0;
    }
  
    .breadcrumb li {
      margin-right: 0.5rem;
    }
  
    .breadcrumb li a {
      text-decoration: none;
      color: blue;
    }
  
    .breadcrumb li span {
      font-weight: bold;
      color: #555;
    }
  
    .breadcrumb li::after {
      content: '/';
      margin-left: 0.5rem;
      color: #aaa;
    }
  
    /* Retirer le séparateur après le dernier élément */
    .breadcrumb li:last-child::after {
      content: '';
    }
  </style>
  