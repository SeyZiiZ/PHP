<?php
$config = require 'db_config.php';

try {
    $dsn = "pgsql:host={$config['host']};dbname={$config['dbname']}";
    $pdo = new PDO($dsn, $config['username'], $config['password']);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connexion réussie !";
} catch(PDOException $e) {
    echo "Erreur de connexion : " . $e->getMessage();
}
?>