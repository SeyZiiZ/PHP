<!DOCTYPE html>
<html lang="fr" dir="ltr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Connexion</title>
</head>
<body>
    <h1>Connexion</h1>
    <div>
        <form action="register_image.php" method="POST" enctype="multipart/form-data">
            <input type="text" name="userName" placeholder="Entrez votre nom utilisateur" required>
            <input type="text" name="password" placeholder="Entrez votre mot de passe" required>
            <input type="text" name="passwordChecker" placeholder="Confirmer le mot de passe" required>
            <input type="file" name="photo" accept="image/*" required>
            <button type="submit">Connexion</button>
        </form>
    </div>
</body>
</html>