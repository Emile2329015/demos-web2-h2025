/*
Auteur  : Maxime Faucher
Date    : 29 janvier 2025
Sujet   : Démos sur les classes JavaScript

Références utiles
    https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes
    https://www.programiz.com/javascript/classes

*/

// Reprenons notre modèle de personne pour en faire une classe.
class Personne {
    constructor(nom="inconnu", age=0) {
        this.nom = nom;
        this.age = age;
    }

    afficherDetails() {
<<<<<<< HEAD
        console.log(`Bonjour, je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
=======
        console.log(`Bonjour, je m'appelle  ${this.nom} et j'ai ${this.age} ans.`);
>>>>>>> 22255147e7fb31cb3dc34c247f74bd43d9ce641d
    }
}

// Créer un objet de la classe
const personne1 = new Personne("Bob", 57);
<<<<<<< HEAD
console.log("personne1 est un Object", personne1 instanceof Object); // true
console.log("personne1 est une Personne", personne1 instanceof Personne); // true
console.log("typeof personne1 =", typeof personne1); // 'object' (tous les objets donnent ceci, peu importe la classe)
//const personne1 = new Personne("Maxime", 44);
=======
console.log("personne1 est un object,", personne1 instanceof Object);
console.log("personne1 est une persoone,", personne1 instanceof Personne);
console.log("typeof personne1 =,", typeof personne1 );
>>>>>>> 22255147e7fb31cb3dc34c247f74bd43d9ce641d

// Appeler la méthode afficherDetails()
personne1.afficherDetails();

// Modifier et afficher le nom avec la notation .
personne1.nom = "Ginette";
<<<<<<< HEAD
personne1.afficherDetails();
=======
console.log("personne1.nom = ", personne1.nom);
>>>>>>> 22255147e7fb31cb3dc34c247f74bd43d9ce641d

// Modifier l'âge et l'afficher avec la notation []
personne1['age'] = 47;
personne1.afficherDetails();
<<<<<<< HEAD

// Modifier l'âge et l'afficher avec la notation []
personne1['age'] = 45;
personne1.afficherDetails();

=======
>>>>>>> 22255147e7fb31cb3dc34c247f74bd43d9ce641d
