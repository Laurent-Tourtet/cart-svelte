-- Création de la table des utilisateurs
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL, -- Pour stocker les mots de passe hachés
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Création de la table des catégories
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Création de la table des produits
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    description TEXT,
    price NUMERIC(10, 2) NOT NULL,
    image_url TEXT,
    category_id INT REFERENCES categories(id) ON DELETE SET NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Création de la table pour gérer les articles dans le panier
CREATE TABLE cart_items (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    product_id INT REFERENCES products(id) ON DELETE CASCADE,
    quantity INT NOT NULL CHECK (quantity > 0),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Ajouter des catégories
INSERT INTO categories (name) VALUES ('clothes'), ('shoes'), ('phone');

-- Ajouter des produits
INSERT INTO products (name, description, price, image_url, category_id)
VALUES 
('T-shirt', 'Un t-shirt en coton bio', 20, '/images/t-shirt.jpg', 1),
('Pantalon', 'Un pantalon en coton bio', 50, '/images/pantalon.jpg', 1),
('Basket', 'Des baskets stylées', 80, '/images/basket.jpg', 2);

-- Ajouter un utilisateur
INSERT INTO users (name, email, password_hash)
VALUES ('John Doe', 'john.doe@example.com', 'hashed_password');

-- Ajouter des articles au panier pour tester
INSERT INTO cart_items (user_id, product_id, quantity)
VALUES (1, 1, 2), (1, 2, 1);

