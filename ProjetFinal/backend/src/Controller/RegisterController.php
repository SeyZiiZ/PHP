<?php

namespace App\Controller;

use App\Composables\EmailVerification;
use App\Composables\PasswordVerification;
use App\Data\Database;

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
        if (empty($data['confirmPassword']) || $data['confirmPassword'] !== $data['password']) {
            return [
                "Message" => "Les mots de passe ne correspondent pas.",
            ];
        }

        $hashedPassword = password_hash($data['password'], PASSWORD_BCRYPT);

        try {
            $db = new Database();
            $pdo = $db->getConnection();

            $stmt = $pdo->prepare("
                INSERT INTO users (email, password, created_at)
                VALUES (:email, :password, NOW())
            ");
            $stmt->execute([
                ':email' => $data['email'],
                ':password' => $hashedPassword,
            ]);

            return [
                "Message" => "Inscription réussie, vous allez être redirigé vers la page de connexion.",
                "Status" => true,
            ];
        } catch (\PDOException $e) {
            return [
                "Message" => "Erreur lors de l'inscription",
            ];
        }
    }
}
