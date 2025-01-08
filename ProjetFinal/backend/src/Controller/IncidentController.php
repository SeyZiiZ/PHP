<?php
namespace App\Controller;

use App\Model\IncidentModel;

class IncidentController {
    public function incident($data) {
        if(empty($data['title']) || empty($data['description']) || empty($data['priority'])) {
            return [
                "Message" => "Informations manquantes"
            ];
        }

        try {
            $incidentModel = new IncidentModel();

            $response = $incidentModel->addIncident(
                $data['title'],
                $data['description'],
                $data['priority'],
                $data['userId']
            );

            return $response;

        } catch (\PDOException $e) {
            return [
                "Message" => "Erreur lors de l'ajout de l'incident",
                "Error" => $e->getMessage()
            ];
        }
    }

    public function deleteIncident($data) {
        try {
            $incidentModel = new IncidentModel();

            $response = $incidentModel->deleteIncident(
                $data['userId'],
                $data['code']
            );

            return $response;
            
        } catch (\PDOException $e) {
            return [
                "Message" => "Erreur lors de l'ajout de l'incident",
                "Error" => $e->getMessage()
            ];
        }
    }

    public function updateIncident($data) {
        try {
            $incidentModel = new IncidentModel();

            $response = $incidentModel->deleteIncident(
                $data['userId'],
            );

            return $response;

        } catch (\PDOExceptin $e) {
            return [
                "Message" => "Erreur lors de l'ajout de l'incident",
                "Error" => $e->getMessage()
            ];
        }
    }
}

?>