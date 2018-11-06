// -- Déclarer un tableau indexé
var monTableau  = [];
var myArray     = new Array;

monTableau[0] = "Hugo";
monTableau[1] = "Malika";
monTableau[2] = "Lasad";
monTableau[3] = "Mélodie";

console.log(monTableau); // -- Affiche toutes les données
console.log(monTableau[2]); // -- Lasad
console.log(monTableau[3]); // -- Mélodie

var nosPrenoms = [
    "Momo",
    "Sébastien",
    "Hocine",
    "Vincent",
    "Olivier"
];

console.log(nosPrenoms);

var Coordonnee = {
    // INDICE : VALEUR
    prenom  :   "Hugo",
    nom     :   "LIEGEARD",
    age     :   28
};

console.log(Coordonnee);
console.log(Coordonnee['prenom']);
console.log(Coordonnee.prenom);

var annuaireDesApprenants = [
    [ "Hugo", "LIEGEARD", "0783 97 15 15" ],
    [ "Lasad", "BEN SALEM", "0645 89 78 95"],
    {
        prenom: "Stéphane",
        nom:    "GUIBERTEAU",
        tel:    "0678 10 12 56"
    },
    {
        prenom: "Momo",
        nom:    "AISSA",
        tel:    "0645 95 18 75"
    }
];

console.clear();
console.log(annuaireDesApprenants);
console.log(annuaireDesApprenants[1][0]);
console.log(annuaireDesApprenants[1][1]);
// -- Ce n'est pas très pratique !!!

console.log(annuaireDesApprenants[3].prenom);
console.log(annuaireDesApprenants[3].nom);

console.clear();

var Contacts = [
    {
        prenom: "Hugo",
        nom: "LIEGEARD",
        coordonnees : {
            email: "wf3@hl-media.fr",
            tel: {
                fixe: "0596 108 328",
                fax: "0596 108 632",
                port: "0783 97 15 15"
            },
            adresse: {
                rue: "2 Rue Eugène Pottier",
                cp: "78190",
                ville: "Trappes",
                pays: {
                    code: "FR",
                    nom: "France"
                }
            }
        }
    },
    {
        prenom: "Mohamed",
        nom: "AISSA",
        coordonnees : {
            email: "momo.aissa@hl-media.fr",
            tel: {
                fixe: "0135 45 78 89",
                fax: "",
                port: "0670 564578"
            },
            adresse: {
                rue: "20 Square Paul Langevin",
                cp: "78190",
                ville: "Trappes",
                pays: {
                    code: "FR",
                    nom: "France"
                }
            }
        }
    }
];

console.log(Contacts);
console.log( Contacts[0].prenom );
console.log( Contacts[0].coordonnees.adresse.pays.nom );

console.log( Contacts[1].prenom );
console.log( Contacts[1].coordonnees.adresse.pays.nom );

// -- C'est ce qu'on appel le format JSON

/* -----------------------------------
            ~ ~ CONSIGNE ~ ~
    
        Réaliser une structure JSON
        permettant de stocker des
        recettes de cuisine.
----------------------------------- */

var recipes = [
    {
        name: 'Tiramisu',
        category: 'Desserts',
        subCategory: 'Gateaux',
        origin: 'Italien',
        cost: 'Abordable',
        difficulty: 'Facile',
        starRating: 4.564956,
        plate: 8,
        photoUrl: 'https://monlien.fr/verslaphoto.jpg',
        videoUrl: 'https://monlien.fr/verslaphoto.jpg',
        cooking: {
            preparation: 30,
            preparationUnit: 'minutes',
            time: '',
            temp: '',
            rest: '',
            chill: '02h',
            total: '02h30'
        },
        ingredients: [
            {
                name: 'Sucre',
                quantity: 80,
                unit: 'g',
                photoUrl: 'https://monlien.fr/versingredient.jpg'
            },
            {
                name: 'Mascarpone',
                quantity: 250,
                unit: 'g',
                photoUrl: 'https://monlien.fr/versingredient.jpg'
            },
            {
                name: 'Café Expresso',
                quantity: 15,
                unit: 'cl',
                photoUrl: 'https://monlien.fr/versingredient.jpg'
            }
        ],
        tools: [
            '1 Plat Rectangulaire',
            '1 Spatule',
            '1 Saladier'
        ],
        instructions: [
            {
                name: 'Séparer les blancs des jaunes...',
                photoUrl: 'https://monlien.fr/versetape.jpg'
            },
            {
                name: 'Mélanger les jaunes avec le sucre roux...',
                photoUrl: 'https://monlien.fr/versetape.jpg'
            },
            {
                name: 'Ajouter le mascarpone au Fouet',
                photoUrl: 'https://monlien.fr/versetape.jpg'
            },
        ]
    },
];

console.log( recipes );
console.log( recipes[0].instructions[0].name );

/* -----------------------------
        AJOUTER UN ELEMENT
------------------------------ */

console.clear();
var couleurs = ['Rouge', 'Jaune', 'Vert'];
console.log(couleurs);

// -- push me permet d'ajouter un élément à la fin du tableau.
couleurs.push('Orange');
// couleurs.push(['Hugo', 'LIEGEARD']);
// couleurs.push({
//     firstname: "Hugo",
//     lastname: "LIEGEARD"
// });
// couleurs.push(15);
// couleurs.push(false);

// -- unshift le rajoute au début
couleurs.unshift('Bleu');
console.log(couleurs);

/* -------------------------------------------
    RECUPERER ET SORTIR LE DERNIER ELEMENT
------------------------------------------- */

/**
 * La fonction pop() La méthode pop() supprime le dernier 
 * élément d'un tableau et retourne cet élément. 
 */

var monDernierElement = couleurs.pop();
console.log(couleurs);
console.log(monDernierElement);

/**
 * La même chose est possible avec le premier élément
 * en utilisant : shift().
 * 
 * La fonction splice() vous permet de faire sortir un
 * ou plusieurs éléments du tableau.
 * 
 * cf: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array
 */