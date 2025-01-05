<?php
namespace App\Model;

use App\Data\Database;
use App\Composables\RandomIncidentCode;

class IncidentModel {
    private $pdo;

    public function __construct() {
        $db = new Database();
        $this->pdo = $db->getConnection();
    }

    public function addIncident($title, $description, $priority, $userId) {
        $randomCode = RandomIncidentCode::generate();

        try {
            $stmt = $this->pdo->prepare
            ("
                INSERT INTO incidents (title, description, priority, code, user_id) 
                VALUES (:title, :description, :priority, :code, :user_id)
            ");

            $stmt->execute([
                ':title' => $title,
                ':description' => $description,
                ':priority' => $priority,
                ':code' => $randomCode,
                ':user_id' => $userId
            ]);

            return [
                "Message" => "Incident ajouté avec succès",
                "Status" => true,
                "Code" => $randomCode
            ];

        } catch (\PDOException $e) {
            return [
                "Message" => "Erreur lors de l'ajout de l'incident",
                "Error" => $e->getMessage()
            ];
        }
    }
}