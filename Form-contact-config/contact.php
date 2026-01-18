<?php
include_once ("connexion.php") ;
$success = false;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nom         = $_POST["nom"];
    $prenom      = $_POST["prenom"] ;
    $suppContact = $_POST["suppContact"] ;
    $message     = $_POST["message"] ;

    if ($nom && $prenom && $suppContact && $message) {
        $insertReq = $conn->prepare(
            "INSERT INTO visitor (LastName, FirstName, contact, `messages`)
             VALUES (:nom, :prenom, :suppContact, :message)"
        );
        $success = $insertReq->execute([
            ":nom"         => $nom,
            ":prenom"      => $prenom,
            ":suppContact" => $suppContact,
            ":message"     => $message
        ]);
    }
}
?>