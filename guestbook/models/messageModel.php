<?php

function insererMessage($pdo, $utilisateur_id, $contenu) {
    $stmt = $pdo->prepare("INSERT INTO messages (utilisateur_id, contenu, date_creation) VALUES (:uid, :contenu, NOW())");
    return $stmt->execute(['uid' => $utilisateur_id, 'contenu' => $contenu]);
}

function getTousLesMessages($pdo) {
    $stmt = $pdo->query("SELECT m.*, u.username FROM messages m
                         JOIN utilisateurs u ON m.utilisateur_id = u.id
                         ORDER BY m.date_creation DESC");
    return $stmt->fetchAll();
}
