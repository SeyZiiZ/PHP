<?php
require_once __DIR__ . '/../vendor/autoload.php';
require_once __DIR__ . '/../src/Middleware/authMiddleware.php';
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Authorization, Content-Type');
header('Access-Control-Allow-Credentials: true');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

use App\Router\Router;
use App\Controller\MessageController;
use App\Controller\RegisterController;
use App\Controller\LoginController;
use App\Controller\UserController;

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

$router->add('/api/login', function() {
    $data = json_decode(file_get_contents('php://input'), true);

    $controller = new LoginController();
    $response = $controller->login($data);

    header('Content-Type: application/json');
    echo json_encode($response);
});

$router->add('/api/user', function ($params) {
    $decoded = authMiddleware();

    $userController = new UserController();
    $response = $userController->getUserData($decoded->userId);

    echo json_encode($response);
});

$router->dispatch($_SERVER['REQUEST_URI']);
