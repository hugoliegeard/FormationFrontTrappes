/* ---------------------
    LES FONCTIONS 😍
---------------------- */

/**
 * Déclarer une fonction.
 * NB : Cette fonction ne retourne
 * aucune valeur et ne prend pas de
 * paramètres.
 */
function bonjour() {
    alert('Bonjour !');
}

/**
 * J'execute ma fonction, et je déclenche
 * ses instructions.
 */
// bonjour();

// function nomDeMaFonction( argument1, argument2, argumentn ) {
//     Les instructions...
// }

function ditBonjour( prenom, nom ) {
    console.log(prenom + ' ' + nom);
    document.write('Bonjour <strong>' + prenom + ' ' + nom + '</strong> !');
}

ditBonjour('Hugo', 'LIEGEARD');

/* ---------------------------
    EXERCICE :
    Créez une fonction permettant d'effectuer
    l'addition de deux nombres (nb1 et nb2).
---------------------------------------------- */

function addition( nb1, nb2 ) {
    return nb1 + nb2;
}

var resultat = addition(10, 5);
console.log( resultat );