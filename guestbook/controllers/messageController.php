<?php
require_once __DIR__ . '/../models/messageModel.php';

function ajouterAction($pdo) {
    if (!estConnecte()) {
        header('Location: index.php?controller=utilisateur&action=connexion');
        exit;
    }

    $erreurs = [];
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $contenu = trim($_POST['contenu'] ?? '');
        if (empty($contenu)) {
            $erreurs[] = "Le message ne peut pas être vide.";
        }

        if (empty($erreurs)) {
            if (insererMessage($pdo, $_SESSION['utilisateur_id'], $contenu)) {
                header('Location: index.php');
                exit;
            } else {
                $erreurs[] = "Erreur lors de l'insertion du message.";
            }
        }
    }

    require __DIR__ . '/../views/messageView.php';
}
