<?php
session_start();

function estConnecte() {
    return isset($_SESSION['utilisateur_id']);
}
