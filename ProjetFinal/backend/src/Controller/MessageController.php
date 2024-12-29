<?php
namespace App\Controller;

class MessageController {
    public function getMessage() {
        return ["message" => "Bonjour depuis l'API PHP"];
    }
}