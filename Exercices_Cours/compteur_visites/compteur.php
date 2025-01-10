<?php
session_start();

if(isset($_SESSION['visites'])) {
    $_SESSION['visites']++;
} else {
    $_SESSION['visites'] = 1;
}

echo "<h1>Bienvenue sur cette page !</h1>";
echo "<p>Vous avez visité cette page " . $_SESSION['visites'] . " fois durant cette session.</p>";
?>