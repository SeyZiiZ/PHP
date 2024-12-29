<?php
namespace App\Router;

class Router {
    private $routes = [];

    public function add($path, $handler) {
        $this->routes[$path] = $handler;
    }

    public function dispatch($uri) {
        if (array_key_exists($uri, $this->routes)) {
            call_user_func($this->routes[$uri]);
        } else {
            http_response_code(404);
            echo json_encode(["error" => "404 Not Found"]);
        }
    }
}

?>