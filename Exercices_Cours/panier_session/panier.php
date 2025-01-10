<?php
session_start();

// Initialiser le panier s'il n'existe pas
if (!isset($_SESSION['panier'])) {
    $_SESSION['panier'] = [];
}

// Gérer l'ajout d'articles au panier
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['article'])) {
    $article = [
        'nom' => $_POST['article'],
        'prix' => $_POST['prix']
    ];

    // Ajouter l'article au panier
    $_SESSION['panier'][] = $article;
}

?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Panier</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .article {
            border: 1px solid #ddd;
            border-radius: 5px;
            padding: 15px;
            margin: 10px;
            max-width: 300px;
        }
        .article h2 {
            font-size: 18px;
        }
        .article p {
            font-size: 16px;
            margin: 5px 0;
        }
        .btn-ajouter {
            background-color: #28a745;
            color: #fff;
            border: none;
            padding: 10px;
            cursor: pointer;
            border-radius: 3px;
        }
        .btn-ajouter:hover {
            background-color: #218838;
        }
    </style>
</head>
<body>
    <h1>Articles</h1>

    <div class="article">
        <h2>Article 1</h2>
        <p>Prix : 10 €</p>
        <button class="btn-ajouter" onclick="ajouterAuPanier('Article 1', 10)">Ajouter au panier</button>
    </div>
    <div class="article">
        <h2>Article 2</h2>
        <p>Prix : 20 €</p>
        <button class="btn-ajouter" onclick="ajouterAuPanier('Article 2', 20)">Ajouter au panier</button>
    </div>
    <div class="article">
        <h2>Article 3</h2>
        <p>Prix : 30 €</p>
        <button class="btn-ajouter" onclick="ajouterAuPanier('Article 3', 30)">Ajouter au panier</button>
    </div>
</body>
</html>

<script>
async function ajouterAuPanier(article, prix) {
    const response = await fetch('panier.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            action: 'ajouter',
            article: article,
        prix: prix,
        }),
    });

    const result = await response.json();
    console.log(result.message);
    mettreAJourPanier();
}
</script>
