<?php

// Test api register

require_once __DIR__ . '/../vendor/autoload.php';

use App\Controller\RegisterController;

$controller = new RegisterController();

// Données de test
$data = [
    'email' => 'test@example.com',
    'password' => 'StrongPassword123!',
    'confirmPassword' => 'StrongPassword123!',
];

// Appel de la méthode register
$result = $controller->register($data);

// Affichage du résultat
header('Content-Type: application/json');
echo json_encode($result);

?>