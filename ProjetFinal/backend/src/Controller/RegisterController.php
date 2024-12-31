<?php

namespace App\Controller;
use App\Composables\EmailVerification;
use App\Composables\PasswordVerification;

class RegisterController {
    public function register($data) {

        if (empty($data['email']) || !EmailVerification::isValidEmail($data['email'])) {
            return [
                "Message" => "Veuillez fournir un email valide.",
            ];
        }
        if (empty($data['password']) || !PasswordVerification::isValidPassword($data['password'])) {
            return [
                "Message" => "Le mot de passe saisie n'est pas valide.",
            ];
        }
        if(empty($data['confirmPassword']) || $data['confirmPassword'] !== $data['password']) {
            return [
                "Message" => "Les mots de passe ne correspondent pas.",
            ];
        }

        return [
            "Message" => "Inscription réussie PHP.",
        ];
    }
}

?>