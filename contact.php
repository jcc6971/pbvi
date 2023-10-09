<?

/* Page: contact.php */
//mettez ici votre adresse mail
$VotreAdresseMail = "pierresbriques@yahoo.com";
// si le bouton "Envoyer" est cliqué
if (isset($_POST['envoyer'])) {
    //on vérifie que le champ mail est correctement rempli
    if (empty($_POST['mail'])) {
        // echo "Le champ mail est vide";

        echo '<script>alert("Champ mail vide!")</script>';
        echo '<script>window.history.back()</script>';
    } else {
        //on vérifie que l'adresse est correcte
        if (!preg_match("#^[a-z0-9_-]+((\.[a-z0-9_-]+){1,})?@[a-z0-9_-]+((\.[a-z0-9_-]+){1,})?\.[a-z]{2,}$#i", $_POST['mail'])) {
            // echo "L'adresse mail entrée est incorrecte";
            echo '<script>alert("Adresse mail entrée incorrecte")</script>';
            echo '<script>window.history.back()</script>';
        } else {
            //on vérifie que le champ sujet est correctement rempli
            if (empty($_POST['sujet'])) {
                // echo "Le champ sujet est vide";
                echo '<script>alert("Champ sujet vide")</script>';
                echo '<script>window.history.back()</script>';
            } else {
                //on vérifie que le champ message n'est pas vide
                if (empty($_POST['message'])) {
                    // echo "Le champ message est vide";
                    echo '<script>alert("Champ message vide")</script>';
                    echo '<script>window.history.back()</script>';
                } else {
                    //tout est correctement renseigné, on envoi le mail
                    //on renseigne les entêtes de la fonction mail de PHP
                    $headers[] = "MIME-Version: 1.0";
                    $headers[] = "Content-type: text/html; charset=UTF-8";
                    $headers[] = "From: pierres-briques.com <" . $_POST['mail'] . ">"; //de préférence une adresse avec le même domaine de là où, vous utilisez ce code, cela permet un envoie quasi certain jusqu'au destinataire
                    // $headers[] = "Cc: pierres-briques.com <" . $_POST['mail'] . ">";
                    $headers[] = "Reply-To: " . $_POST['mail'];
                    //on prépare les champs:
                    $Mail = $_POST['mail'];
                    $Sujet = '=?UTF-8?B?' . base64_encode($_POST['sujet']) . '?='; //Cet encodage (base64_encode) est fait pour permettre aux informations binaires d'être manipulées par les systèmes qui ne gèrent pas correctement les 8 bits (=?UTF-8?B? est une norme afin de transmettre correctement les caractères de la chaine)
                    $Message = htmlentities($_POST['message'], ENT_QUOTES, "UTF-8"); //htmlentities() converti tous les accents en entités HTML, ENT_QUOTES Convertit en + les guillemets doubles et les guillemets simples, en entités HTML
                    //en fin, on envoi le mail
                    if (mail($VotreAdresseMail, $Sujet, nl2br($Message), implode("\r\n", $headers))) { //la fonction nl2br permet de conserver les sauts de ligne et la fonction base64_encode de conserver les accents dans le titre
                        // echo "Le mail à été envoyé avec succès!";

                        // echo '<script>alert("Le mail à été envoyé avec succès!")</script>';
                        echo '<script>alert("Le mail à été envoyé avec succès!")</script>';
                        echo '<script>location.replace("https://pierres-briques.com/contact.html")</script>';
                    } else {
                        // echo "Une erreur est survenue, le mail n'a pas été envoyé";
                    }

                    // echo '<script>alert(Une erreur est survenue, le mail n a pas été envoyé")</script>';
                    echo '<script>alert("Une erreur est survenue, le mail n a pas été envoyé")</script>';
                    echo '<script>window.history.back()</script>';
                }
            }
        }
    }
}
