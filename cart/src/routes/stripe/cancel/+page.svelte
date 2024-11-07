<main>
    <div class="products-header">
        <h1 class="products-header--title">Your payment was canceled</h1>
        <p class="products-header--paragraphe">You can try again or continue shopping</p>
    </div>
    <div class="products-cards">
        <ul class="products-cards--list">
            <li class="products-cards--list-item">
                <h2 class="products-cards--list-item--name">Product 1</h2>
                <p class="products-cards--list-item--description">Description of product 1</p>
</main>

<style>
    .products-header {
        display: flex;
        flex-direction: column;
        max-width: 600px;
        margin: 2rem auto;
    }
    .products-header--title {
        text-align: center;
        font-size: 2rem;
        color: rgb(126, 135, 135);
        margin-bottom: 1rem;
    }
    .products-header--paragraphe {
        text-align: center;
        color: rgb(47, 45, 172);
    }
    .products-cards {
        display: flex;
        flex-direction: column;
        max-width: 600px;
        margin: 2rem auto;
    }
    .products-cards--list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0;
    }
    .products-cards--list-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #f9f9f9;
        border-radius: 5px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        margin: 1rem;
        padding: 1rem;
        width: 200px;
    }
    .products-cards--list-item--name {
        color: rgb(47, 45, 172);
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }
    .products-cards--list-item--description {
        color: rgb(126, 135, 135);
        margin-bottom: 0.5rem;
    }

</style>