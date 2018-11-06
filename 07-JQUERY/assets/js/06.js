/* ------------------------------------------
        LES SELECTEURS D'ENFANTS JQUERY
-------------------------------------------*/

$(function() {

    l = p => console.log(p);

    // -- Je souhaite sélectionner toutes les divs de ma page
    l( $('div') );

    // -- Je souhaite sélectionner le menu de ma page
    l( $('#menu') );

    // -- En partant, du menu, je souhaite, tous les éléments descendants direct (enfants) qui sont dans "#menu"
    l( $('#menu').children() );

    // -- Parmi ces descendants, uniquement l'élément "ul"
    l( $('#menu').children('ul') );

    // -- En partant du "ul", je souhaite récupérer tous les éléments "li"
    // l( $('#menu').children('ul').children() );
    // l( $('#menu').children('ul').find('li') );
    l( $('#menu').find('li') );

    // -- Je souhaite récupérer UNIQUEMENT le 2ème élément "li"

    // -- Ici, je ne pourrais appeler que des méthodes javascript ; Pas de chainage jQuery possible.
    l( $('#menu').find('li')[1] );
    l( $('#menu').find('li').get(1) );

    // -- Ici, je conserve mes fonctions jQuery, je peux donc continuer mon chainage... (METHODE RECOMMANDEE)
    l( $('#menu').find('li').eq(1) );

    // -- Je souhaite connaitre le voisin immediat de mon "#menu"
    l( $('#menu').next() );
    l( $('#menu').next().next() ); // -- Le voisin du voisin
    l( $('#menu').prev() ); // -- Le voisin d'avant

    l( $('#menu').parent() ); // -- Le parent


});