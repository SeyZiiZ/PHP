<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Guestbook</title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <header>
        <nav>
            <a href="index.php">Accueil</a>
            <?php if(estConnecte()): ?>
                <a href="index.php?controller=message&action=ajouter">Ajouter un message</a>
                <a href="index.php?controller=utilisateur&action=deconnexion">Déconnexion (<?php echo htmlspecialchars($_SESSION['username']); ?>)</a>
            <?php else: ?>
                <a href="index.php?controller=utilisateur&action=inscription">Inscription</a>
                <a href="index.php?controller=utilisateur&action=connexion">Connexion</a>
            <?php endif; ?>
        </nav>
    </header>
    <main>
