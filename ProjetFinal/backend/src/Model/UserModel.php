<?php

namespace App\Model;

use App\Data\Database;
use PDO;

class UserModel {
    private $pdo;

    public function __construct() {
        $db = new Database();
        $this->pdo = $db->getConnection();
    }

    public function getUserByEmail($email) {
        $stmt = $this->pdo->prepare("SELECT * FROM users WHERE email = :email");
        $stmt->execute([':email' => $email]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function getUserById($id) {
        $stmt = $this->pdo->prepare("SELECT email FROM users WHERE id = :id");
        $stmt->execute([':id' => $id]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function getUserIncident($id) {
        $stmt = $this->pdo->prepare
        (
        "SELECT title, description, status, priority, code, created_at 
        FROM incidents 
        WHERE user_id = :id
        AND status = false"
        );
        $stmt->execute([':id' => $id]);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getUserIncidentResolved($id) {
        $stmt = $this->pdo->prepare
        (
        "SELECT title, description, status, priority, code, created_at 
        FROM incidents 
        WHERE user_id = :id
        AND status = true"
        );
        $stmt->execute([':id' => $id]);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}