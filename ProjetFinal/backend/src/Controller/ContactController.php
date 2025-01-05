<?php
namespace App\Controller;

use App\Model\ContactModel;
use App\Composables\EmailVerification;

class ContactController {
    public function contact($data) {

        if(empty($data['title']) || empty($data['description']) || empty($data['email'])) {
            return [
                "Message" => "Informations manquantes"
            ];
        }

        if(!EmailVerification::isValidEmail($data['email'])) {
            return [
                "Message" => "Email Incorrect"
            ];
        }

        try {
            $contactModel = new ContactModel();

            $response = $contactModel->addContact(
                $data['title'],
                $data['description'],
                $data['email']
            );

            return $response;

        } catch (\PDOException $e) {
            return [
                "Message" => "Erreur lors de l'envoie de votre demande",
                "Error" => $e->getMessage()
            ];
        }

    }
}

?>