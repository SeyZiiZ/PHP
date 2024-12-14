<?php

function inscrireUtilisateur($pdo, $username, $password) {
    $passwordHash = password_hash($password, PASSWORD_BCRYPT);

    $stmt = $pdo->prepare("INSERT INTO utilisateurs (username, password) VALUES (:username, :password)");
    return $stmt->execute(['username' => $username, 'password' => $passwordHash]);
}

function getUtilisateurParUsername($pdo, $username) {
    $stmt = $pdo->prepare("SELECT * FROM utilisateurs WHERE username = :username");
    $stmt->execute(['username' => $username]);
    return $stmt->fetch();
}

function verifierIdentifiants($pdo, $username, $password) {
    $utilisateur = getUtilisateurParUsername($pdo, $username);
    if ($utilisateur && password_verify($password, $utilisateur['password'])) {
        return $utilisateur;
    }
    return false;
}
