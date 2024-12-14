<?php
require_once __DIR__ . '/../models/utilisateurModel.php';

function inscriptionAction($pdo) {
    $erreurs = [];
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $username = trim($_POST['username'] ?? '');
        $password = trim($_POST['password'] ?? '');

        if (empty($username) || empty($password)) {
            $erreurs[] = "Tous les champs sont requis.";
        }

        if (empty($erreurs)) {
            if (inscrireUtilisateur($pdo, $username, $password)) {
                header('Location: index.php?controller=utilisateur&action=connexion');
                exit;
            } else {
                $erreurs[] = "Erreur lors de l'inscription.";
            }
        }
    }

    require __DIR__ . '/../views/inscriptionView.php';
}

function connexionAction($pdo) {
    $erreurs = [];
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $username = trim($_POST['username'] ?? '');
        $password = trim($_POST['password'] ?? '');

        if ($utilisateur = verifierIdentifiants($pdo, $username, $password)) {
            $_SESSION['utilisateur_id'] = $utilisateur['id'];
            $_SESSION['username'] = $utilisateur['username'];
            header('Location: index.php');
            exit;
        } else {
            $erreurs[] = "Identifiants invalides.";
        }
    }

    require __DIR__ . '/../views/connexionView.php';
}

function deconnexionAction($pdo) {
    session_destroy();
    header('Location: index.php');
    exit;
}
