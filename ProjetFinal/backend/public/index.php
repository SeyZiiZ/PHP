<?php
require_once __DIR__ . '/../vendor/autoload.php';
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

use App\Router\Router;

$router = new Router();

$router->add('/', function () {
    echo json_encode(["message" => "Bienvenue sur l'API PHP"]);
});

$router->add('/api/message', function () {
    echo json_encode(["message" => "Bonjour depuis l'API PHP"]);
});

$router->dispatch($_SERVER['REQUEST_URI']);
