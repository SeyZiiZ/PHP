<?php require __DIR__ . '/layout/header.php'; ?>

<h1>Ajouter un message</h1>

<?php if (!empty($erreurs)): ?>
    <ul>
    <?php foreach ($erreurs as $erreur): ?>
        <li><?php echo htmlspecialchars($erreur); ?></li>
    <?php endforeach; ?>
    </ul>
<?php endif; ?>

<form method="POST">
    <div>
        <label for="contenu">Message :</label>
        <textarea id="contenu" name="contenu"></textarea>
    </div>
    <button type="submit">Envoyer</button>
</form>

<?php require __DIR__ . '/layout/footer.php'; ?>
