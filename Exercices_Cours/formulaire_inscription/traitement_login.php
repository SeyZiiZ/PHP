<?php

if($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = trim($_POST['userName']);
    $password = $_POST['password'];
    $passwordChecker = $_POST['passwordChecker'];

    $erreurs = [];

    if($password !== $passwordChecker) {
        $erreurs[] = "Les mots de passes de correspondent pas";
    } else if (strlen($password) <= 5 && strlen($passwordChecker) <= 5) {
        $erreurs[] = "Le mot de passe est trop court (min 5 caracteres)";
    }

    if(!empty($erreurs)) {
        echo "<h2>Erreur :</h2>";
        echo "<ul>";
        foreach ($erreurs as $erreur) {
            echo "<li>" . htmlspecialchars($erreur) . "</li>";
        }
        echo "</ul>";
    } else {
        echo "<p> Votre nom utilisateur : " . htmlspecialchars($username) ."<p>";
        echo "<p> Votre mot de passe : " .htmlspecialchars($password) ."<p>";
    }
}

?>