<?php

namespace App\Controller;

use App\Model\UserModel;

class UserController {

    public function getUserData($userId) {
        try {
            $userModel = new UserModel();
            $user = $userModel->getUserById($userId);

            if (!$user) {
                http_response_code(404);
                return ["Message" => "Utilisateur non trouvé."];
            }

            return [
                "Message" => "Données utilisateur récupérées.",
                "User" => $user,
            ];
        } catch (\Exception $e) {
            http_response_code(500);
            return ["Message" => "Erreur lors de la récupération des données utilisateur."];
        }
    }
}
