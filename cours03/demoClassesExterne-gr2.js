/*
Auteur  : Maxime Faucher
Date    : 29 janvier 2025
Sujet   : Démos sur les classes JavaScript (fichiers externes)

Références utiles
    https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes

*/

// Importer la classe Personne
<<<<<<< HEAD:cours03/demoClassesExterne-gr2.js
// import Personne from './Personne.js'; // si on a un export default dans le fichier source
import {Personne} from './Personne.js'; // si on n'a pas de export default dans le fichier source


=======
// si on a un export default, on utilise ceci:
import Personne from './Personne.js'
// si on a un export (sans defalut), on utilise
//import {Personne, Bidon}
>>>>>>> 22255147e7fb31cb3dc34c247f74bd43d9ce641d:cours03/demoClassesExterne.js
// Création d'objets avec la classe Personne
const personne1 = new Personne("Maxime", 44);
const personne2 = new Personne("Étienne", 28);
const personne3 = new Personne();
const personne4 = new Personne("Alice", 22);
const personne5 = new Personne("Zoé", 31);
const personne6 = new Personne("Bob", 57);

<<<<<<< HEAD:cours03/demoClassesExterne-gr2.js

// EXERCICE
// a) Mettre les objets Personne dans un tableau
const personnes = [personne1, personne2, personne3, personne4, personne5, personne6];

// b) Boucle for... of sur le tableau pour appeler .afficherDetails() de chacun des objets
for(const personne of personnes) {
    personne.afficherDetails();
}

// c) Trier les personnes du tableau par ordre alphabétique inverse du nom
// Si on souhaite ne pas modifier le tableau original, on peut en faire une copie
// rapidement avec .map()
const copiePersonnes = personnes.map(element => element);
copiePersonnes.sort( (elm1, elm2) => elm1.nom.localeCompare(elm2.nom) );
copiePersonnes.reverse();
console.log(personnes);
console.log(copiePersonnes);
=======
personne1.afficherDetails();
// EXERCICE
// a) Mettre les objets Personne dans un tableau
const personne = [personne1, personne2, personne3, personne4, personne5, personne6];

// b) Boucle for... of sur le tableau pour appeler .afficherDetails() de chacun des objets
for(const personne of personnes){
    personne.afficherDetails();
}

// c) Trier les personnes du tableau par ordre alphabétique inverse
// Pour ne pas affecter le tableau original, faisons une copie (si nécessaire)
const copiePersonne = personne.map(element => element); // pour dupliquer

copiePersonne.sort((element1, element2) => element1.localeCompare(element2));
copiePersonne.reverse();
console.log(copiePersonne);
>>>>>>> 22255147e7fb31cb3dc34c247f74bd43d9ce641d:cours03/demoClassesExterne.js
