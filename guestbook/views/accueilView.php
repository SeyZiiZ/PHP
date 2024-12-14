<?php require __DIR__ . '/layout/header.php'; ?>

<h1>Messages</h1>

<?php if (!empty($messages)): ?>
    <?php foreach ($messages as $message): ?>
        <div class="message">
            <p><strong><?php echo htmlspecialchars($message['username']); ?>:</strong> <?php echo nl2br(htmlspecialchars($message['contenu'])); ?></p>
            <p><em><?php echo $message['date_creation']; ?></em></p>
        </div>
    <?php endforeach; ?>
<?php else: ?>
    <p>Aucun message pour le moment.</p>
<?php endif; ?>

<?php require __DIR__ . '/layout/footer.php'; ?>
