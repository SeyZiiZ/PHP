<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact</title>
</head>
<body>
    <h2>Contact</h2>
    <form action="traitement_contact.php" method="POST">
        <input type="text" name="name" placeholder="votre nom" required>
        <input type="email" name="email" placeholder="votre email" required>
        <textarea name="textarea" id="textarea" required></textarea>
        <button type="submit">Envoyer</button>
    </form>
</body>
</html>