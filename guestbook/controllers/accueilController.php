<?php
require_once __DIR__ . '/../models/messageModel.php';

function indexAction($pdo) {
    $messages = getTousLesMessages($pdo);
    require __DIR__ . '/../views/accueilView.php';
}
