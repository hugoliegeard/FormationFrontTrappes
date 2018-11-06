/* -------------------------------------------------------
                LES EVENEMENTS 🤯🤢😈🤕

    Les évènements vont me permettre de déclencher une
    fonction, c'est à dire, une série d'instructions ;
    suite à une action de mon utilisateur.

    OBJECTIF : Être en mesure de capturer ces évènements
    afin d'executer une fonction.

    Les Evenements : MOUSE ( Souris )

        click       : au clic sur un élément ;
        dblclick    : au double clic ;
        mouseenter  : la souris passe au dessus d'un élément ;
        mouseleave  : la souris sors de l'élément ;
        mouseover   : au passage de la souris.

        cf: https://developer.mozilla.org/fr/docs/Web/API/MouseEvent

    Les Evenements : KEYBOARD ( Clavier )

        keyup       : une touche du clavier a été relachée ;
        keydown     : une touche est enfoncée.

        cf: https://developer.mozilla.org/fr/docs/Web/API/KeyboardEvent

    Les Evenements : WINDOW ( Fenêtre )

        scroll      : défilement de la fenêtre ;
        resize      : redimentionnement de la fenêtre .

    Les Evenements FORM ( Formulaire )

        change      : pour les éléments <input>, <select> et <textarea>
        submit      : à l'envoi ( soumission ) du formulaire ;
        input       : pour capter la saisir d'un utilisateur sur un champ <input>.

    ############## LES ECOUTEURS D'EVENEMENTS ##############

    Pour attacher un évènement à un élément, ou autrement dit,
    pour déclarer un écouteur d'évènements qui se chargera de
    déclencher une fonction, je vais utiliser la syntaxe suivante :

------------------------------------------------------------ */

const p = document.getElementById('monParagraphe');

function changerLaCouleurEnRouge() {
    p.style.color = "red"
}

function changerLaCouleurEnNoir() {
    p.style.color = "black"
}

p.addEventListener('mouseenter', changerLaCouleurEnRouge);
p.addEventListener('mouseleave', changerLaCouleurEnNoir);

/* -------------------------------------------------------------\
|                       EXERCICE PRATIQUE                       |
| A l'aide de javascript, créez un champ "input" type text avec |
| un ID unique. Affichez ensuite dans une alerte, la saisie de  |
| l'utilisateur.                                                |
|______________________________________________________________*/

// -- Création du champ input
const input = document.createElement('input');
input.type = "text";
input.id = "monID";
input.placeholder = "Saisissez un contenu...";

// -- Ajout dans la page
document.body.appendChild(input);

/**
 * On écoute l'évènement "change" sur le champ "input"
 * et on execute la fonction "displayUserInput"
 */
function displayUserInput() {
    alert(input.value);
}

input.addEventListener('change', displayUserInput);