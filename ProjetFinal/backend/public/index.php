<?php
require_once __DIR__ . '/../vendor/autoload.php';
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

use App\Router\Router;
use App\Controller\MessageController;
use App\Controller\RegisterController;

$router = new Router();

$router->add('/', function () {
    echo json_encode(["message" => "Bienvenue sur l'API PHP"]);
});

$router->add('/api/message', function () {
    $controller = new MessageController;

    $response = $controller->getMessage();

    header('Content-Type: application/json');
    echo json_encode($response);
});

$router->add('/api/register', function () {
    $data = json_decode(file_get_contents('php://input'), true);

    $controller = new RegisterController();

    $response = $controller->register($data);

    header('Content-Type: application/json');
    echo json_encode($response);
});

$router->dispatch($_SERVER['REQUEST_URI']);
