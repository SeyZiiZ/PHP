<?php

require_once __DIR__ . '/config/database.php';
require_once __DIR__ . '/includes/session.php';

$controller = isset($_GET['controller']) ? $_GET['controller'] : 'accueil';
$action = isset($_GET['action']) ? $_GET['action'] : 'index';

$controllerFile = __DIR__ . "/controllers/{$controller}Controller.php";

if (file_exists($controllerFile)) {
    require_once $controllerFile;
    $actionFunction = $action . 'Action';
    if (function_exists($actionFunction)) {
        $actionFunction($pdo);
    } else {
        echo "Action $action introuvable";
    }
} else {
    echo "Contrôleur $controller introuvable";
}
