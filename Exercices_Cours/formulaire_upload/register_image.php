<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = trim($_POST['userName']);
    $password = $_POST['password'];
    $passwordChecker = $_POST['passwordChecker'];
    $userImage = $_FILES['photo'];

    $erreurs = [];

    if ($password !== $passwordChecker) {
        $erreurs[] = "Les mots de passe ne correspondent pas.";
    } else if (strlen($password) <= 5) {
        $erreurs[] = "Le mot de passe est trop court (min 6 caractères).";
    }

    if (isset($userImage) && $userImage['error'] === UPLOAD_ERR_OK) {
        $fileTmpPath = $userImage['tmp_name'];
        $fileName = $userImage['name'];
        $fileSize = $userImage['size'];
        $imageInfo = getimagesize($fileTmpPath);
    
        if ($imageInfo) {
            $fileType = $imageInfo['mime'];
            $fileExtension = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));
    
            $allowedExtensions = ['jpeg', 'png'];
            $allowedMimeTypes = ['image/jpeg', 'image/png'];
    
            if (!in_array($fileExtension, $allowedExtensions) || !in_array($fileType, $allowedMimeTypes)) {
                $erreurs[] = "Le fichier téléchargé n'est pas une image valide.";
            }
    
            if ($fileSize > 2 * 1024 * 1024) {
                $erreurs[] = "L'image est trop volumineuse (max 2 Mo).";
            }
        } else {
            $erreurs[] = "Le fichier n'est pas une image valide.";
        }
    } else {
        $erreurs[] = "Erreur lors du téléchargement de l'image.";
    }
    

    if (!empty($erreurs)) {
        echo "<h2>Erreur :</h2>";
        echo "<ul>";
        foreach ($erreurs as $erreur) {
            echo "<li>" . htmlspecialchars($erreur) . "</li>";
        }
        echo "</ul>";
    } else {
        echo "<p>Votre nom d'utilisateur : " . htmlspecialchars($username) . "</p>";
        echo "<p>Votre mot de passe : " . htmlspecialchars($password) . "</p>";

        $uploadDir = 'images/';
        $newFileName = $uploadDir . uniqid() . '.' . $fileExtension;

        if (move_uploaded_file($fileTmpPath, $newFileName)) {
            echo "<p>Image téléchargée avec succès : <a href='$newFileName'>Voir l'image</a></p>";
        } else {
            echo "<p>Erreur lors de l'enregistrement de l'image.</p>";
        }
    }
}

?>
