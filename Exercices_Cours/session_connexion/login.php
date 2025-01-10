<?php
session_start();

if(isset($_SESSION['username'])) {
    header('Location: dashboard.php');
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    if ($username === 'admin' && $password === '1234') {
        $_SESSION['username'] = $username;
        header('Location: dashboard.php');
        exit();
    } else {
        $error = 'Nom d\'utilisateur ou mot de passe incorrect.';
    }
}

?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Connexion</h1>
    <form action="login.php" method="POST">
        <input type="text" name="username" placeholder="Entrez votre nom utilisateur" required>
        <input type="text" name="password" placeholder="Entrez votre mot de passe" required>
        <button type="submit">Connexion</button>
    </form>
</body>
</html>