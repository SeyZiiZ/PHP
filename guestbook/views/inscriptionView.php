<?php require __DIR__ . '/layout/header.php'; ?>

<h1>Inscription</h1>

<?php if (!empty($erreurs)): ?>
    <ul>
    <?php foreach ($erreurs as $erreur): ?>
        <li><?php echo htmlspecialchars($erreur); ?></li>
    <?php endforeach; ?>
    </ul>
<?php endif; ?>

<form method="POST">
    <div>
        <label for="username">Nom d'utilisateur :</label>
        <input type="text" id="username" name="username" value="<?php echo isset($username) ? htmlspecialchars($username) : ''; ?>">
    </div>
    <div>
        <label for="password">Mot de passe :</label>
        <input type="password" id="password" name="password">
    </div>
    <button type="submit">S'inscrire</button>
</form>

<?php require __DIR__ . '/layout/footer.php'; ?>
