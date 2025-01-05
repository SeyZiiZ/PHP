<?php

namespace App\Controller;

use App\Model\UserModel;

class UserController {

    public function getUserData($userId) {
        try {
            $userModel = new UserModel();
            $user = $userModel->getUserById($userId);
            $userIncidents = $userModel->getUserIncident($userId);
            $userIncidentsResolved = $userModel->getUserIncidentResolved($userId);

            if (!$user) {
                http_response_code(404);
                return ["Message" => "Utilisateur non trouvé."];
            }

            return [
                "Message" => "Données utilisateur récupérées.",
                "User" => $user,
                "Incidents" => $userIncidents,
                "IncidentsResolved" => $userIncidentsResolved
            ];
        } catch (\Exception $e) {
            http_response_code(500);
            return ["Message" => "Erreur lors de la récupération des données utilisateur."];
        }
    }
}
