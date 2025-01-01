<?php

namespace App\Data;

use PDO;

class Database {
    private $pdo;

    public function __construct() {
        $config = require __DIR__ . '/db_config.php';

        $dsn = "pgsql:host={$config['host']};dbname={$config['dbname']}";
        $this->pdo = new PDO($dsn, $config['username'], $config['password'], [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        ]);
    }

    public function getConnection() {
        return $this->pdo;
    }
}
