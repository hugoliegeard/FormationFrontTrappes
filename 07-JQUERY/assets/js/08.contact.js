$(function() {

    // -- Déclaration d'un tableau pour stocker les contacts
    var collectionDeContacts = [];

    /**
     * Valider son email
     */
    function validateEmail(email) {
        var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    }

    /**
     * Valider son numéro de téléphone en FR
     */
        function validateTel(tel) {
        var telReg = new RegExp("(0|\\+33|0033)[1-9][0-9]{8}");
        return telReg.test(tel);
    }

    // on écoute l'événement submit ou la soumission du formulaire de contact
    $('#contact').submit(function(e){

        // on désactive la redirection par défaut
        e.preventDefault();

        // on déclare les variables des champs à vérifier
        const nom       = $('#nom');
        const prenom    = $('#prenom');
        const email     = $('#email');
        const tel       = $('#tel');

        let mesInformationsSontCorrectes = true;

        if(nom.val().length === 0) {
            mesInformationsSontCorrectes = false;
        }
        if(prenom.val().length === 0) {
            mesInformationsSontCorrectes = false;
        }
        if(!validateEmail(email.val()))  {
            mesInformationsSontCorrectes = false;
        }
        if(!validateTel(tel.val())) {
            mesInformationsSontCorrectes = false;
        }
        // si mes champs sont tous valides
        if(mesInformationsSontCorrectes) {
            // alors je continue mon programme
            // on créer un contact
            let contact = {
                nom     : nom.val(), 
                prenom  : prenom.val(), 
                email   : email.val(), 
                tel     : tel.val()
            };
            // on vérifie s'il existe déjà 
            let monEmailEstPresent = false;
            
            // on parcours le tableau de contact pour vérifier si l'email saisi n'existe pas
            for ( let i = 0 ; i < collectionDeContacts.length ; i++){
                // console.log(collectionDeContacts[i].email);
                if ( contact.email === collectionDeContacts[i].email ){
                    // si il ya une correspondance, l'email est présent
                    monEmailEstPresent = true; 
                    // je force la sortie de la boucle pour ne pas écraser l'information à chaque passage
                    break;
                } 
            }
            
            // je notifie l'utilisateur si l'email est présent
            if (monEmailEstPresent){
                alert('Cet email existe déjà'); 
            } else {
                // tout va bien et on push le "contact" dans la collection 
                collectionDeContacts.push(contact);

                // Afficher notre contact dans la page HTML
                $('.aucuncontact').hide();
                $(`
                    <tr>
                        <td> `+ contact.nom +` </td>
                        <td> ${contact.prenom} </td>
                        <td> ${contact.email}</td>
                        <td> ${contact.tel} </td> 
                    </tr>  
                `).appendTo('#LesContacts > tbody'); // syntaxe ECMA6 : ${contact.tel}

                // $('.alert-contact').show(10).delay(4000).hide(2000);
                $('.alert-contact').fadeIn().delay(4000).fadeOut();

                // -- Réinitialiser le formulaire
                document.getElementById('contact').reset(); // En JS
                $('#contact').get(0).reset(); // En JQ
                $('#contact')[0].reset();
                $('#contact .form-control').val('');
                $('#contact').trigger('reset');

            }

        }else{
            // sinon je notifie l'utilisateur qu'une erreur est survenue 
            alert('Attention, veuillez renseigner tous les champs');
        }

    });

    

});
