/*
 I. Créer un Tableau 3D "premierTrimestre" contenant la moyenne d'un étudiant pour plusieurs matières.
    Nous auront donc pour un étudiant, sa moyenne à plusieurs matières.
    
    Par exemple : Hugo LIEGEARD : [ Francais : 12, Math : 19, Physique 4], ... etc
    
    **** Vous allez créez au minimum 5 étudiants ****
II. Afficher sur la page (à l'aide de document.write) pour chaque étudiant, la liste (ol / ul et li) 
de sa moyenne à chaque matière, puis sa moyenne générale. 
*/

const premierTrimestre = [
    {
        prenom: "Hugo",
        nom: "LIEGEARD",
        moyennes: {
            francais: 4,
            math: 6,
            physique: 18,
            musique: 19
        }
    },
    {
        prenom: "Mohamed",
        nom: "Aïssa",
        moyennes: {
            francais: 14,
            math: 12,
            physique: 10,
            anglais: 15,
            eps: 10
        }
    },
    {
        prenom: "Lasad",
        nom: "Ben Salem",
        // moyennes: [
        //     {
        //         matiere: "Français",
        //         moyenne: 13
        //     },
        // ],
        moyennes: {
            francais: 13,
            math: 4,
            physique: 2,
            histGeo: 19,
            espagnol: 16
        }
    },
    {
        prenom: "Malika",
        nom: "Neggaz",
        moyennes: {
            francais: 13,
            math: 20,
            physique: 20,
            genieCivil: 15,
            anglais: 18
        }
    },
    {
        prenom: "Mélodie",
        nom: "BOUILLOT",
        moyennes: {
            francais: 12,
            math: 9,
            physique: 10,
            svt: 11,
            artPlastique: 18,
            anglais: 14
        }
    }
];

// -- Les Flemards.js
l = p => console.log(p);
w = p => document.write(p);
a = p => alert(p);

// -- 1. Je souhaite afficher la liste de mes étudiants
w('<ol>');
    for ( let i = 0 ; i < premierTrimestre.length ; i++ ) {

        // -- Vérification dans la console
        l(premierTrimestre[i]);

        // -- 2. Afficher mes étudiants sur ma page
        const etudiant = premierTrimestre[i];

        w('<li>');

            w(etudiant.prenom + " " + etudiant.nom);
            w('<ul>');

            var nombreDeMatiere = 0, sommesDesNotes = 0;

            for( let matiere in etudiant.moyennes ) {

                // -- Vérification dans la console
                console.log(matiere);

                nombreDeMatiere++;
                sommesDesNotes += etudiant.moyennes[matiere];

                w('<li>')
                    w(matiere + " : " + etudiant.moyennes[matiere]);
                w('</li>')

            } // -- Fin for() Moyennes
            // console.log("Nb matiere : " + nombreDeMatiere);
            w('<li>')
                    w("<strong>Moyenne Générale :</strong>" + ( sommesDesNotes / nombreDeMatiere ).toFixed(2) );
                w('</li>')


            w('</ul>');
        w('</li><br>');
            
    } // -- Fin for() Etudiants
w('</ol>');
