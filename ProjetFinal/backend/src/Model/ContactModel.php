<?php
namespace App\Model;

use App\Data\Database;

class ContactModel {
    private $pdo;

    public function __construct() {
        $db = new Database();
        $this->pdo = $db->getConnection();
    }

    public function addContact($title, $description, $email) {

        try {
            $stmt = $this->pdo->prepare
            ("
            INSERT INTO contact_form (title, description, email) VALUES (:title, :description, :email)"
            );

            $stmt->execute([
                ':title' => $title,
                ':description' => $description,
                ':email' => $email,
            ]);

            return [
                "Message" => "Votre demande de contacte a été prise en compte",
                "Status" => true,
            ];
        } catch (\PDOException) {
            return [
                "Message" => "Erreur lors de l'ajout de l'envoie du message",
                "Error" => $e->getMessage()
            ];
        }

    }
}

?>