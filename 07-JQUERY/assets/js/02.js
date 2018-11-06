/* ----------------------------------
        LES SELECTEURS JQUERY
---------------------------------- */

// -- Format : $('selecteur')
// -- En jQuery, tous les sélecteurs CSS sont disponible...

$(function() { // -> DOM IS READY

    // -- Les Flémards JS
    l = p => console.log(p);

    // -- Sélectionner les balises SPAN :

        l( document.getElementsByTagName('span') );
        l( $('span') );

    // -- Sélectionner mon Menu par son ID

        l( document.getElementById('menu') );
        l( $('#menu') );

    // -- Remarquez que jQuery, me permet de sélectionner des éléments de façon beaucoup plus simple que Javascript.

    // -- Sélectionner une classe :

        l( document.getElementsByClassName('maClasse') );
        l( $('.maClasse') );

        l( $('[href="https://google.fr"]') ); // -- Attention aux guillements

        l( $('[href]') );
    
});