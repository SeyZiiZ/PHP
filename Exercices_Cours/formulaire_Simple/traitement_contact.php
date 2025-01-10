<?php
if($_SERVER["REQUEST_METHOD"] === "POST") {
    $nom = trim($_POST['name']);
    $email = trim($_POST['email']);
    $message = trim($_POST['textarea']);

    $erreurs = [];

    if(empty($nom)) {
        $erreurs[] = "Le champ 'Nom' est obligatoire.";
    }

    if (empty($email)) {
        $erreurs[] = "Le champ 'Email' est obligatoire.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $erreurs[] = "L'adresse email est invalide.";
    }

    if (empty($message)) {
        $erreurs[] = "Le champ 'Message' est obligatoire.";
    }
    
    if(!empty($erreurs)) {
        echo "<h2>Erreur :</h2>";
        echo "<ul>";
        foreach ($erreurs as $erreur) {
            echo "<li>" . htmlspecialchars($erreur) . "</li>";
            echo "</ul>";
        }
    } else {
        echo "<h2>Merci pour votre message !</h2>";
        echo "<p><strong>Nom :</strong> " . htmlspecialchars($nom) . "</p>";
        echo "<p><strong>Email :</strong> " . htmlspecialchars($email) . "</p>";
        echo "<p><strong>Message :</strong> " . nl2br(htmlspecialchars($message)) . "</p>";
    }
}

?>