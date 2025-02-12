// Auteur:  Maxime Faucher
// Date: 2024-02-11
// Sujet: Démo sur les sélecteurs en JavaScript

/*

Références: https://developer.mozilla.org/fr/docs/Web/API/Document/getElementById
            https://developer.mozilla.org/fr/docs/Web/API/Document/getElementsByClassName
            https://developer.mozilla.org/fr/docs/Web/API/Document/getElementsByTagName
            https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector
            https://developer.mozilla.org/fr/docs/Web/API/Document/querySelectorAll

*/

/****************************************************************
getElementById('unID') : 
    retourne l'élément (HTMLElement) ayant l'ID 'unID' si 
    l'élément existe, sinon retourne null
****************************************************************/
console.log("\n1. Sélecteurs par ID : getElementById");

// Sélectionne l'élément ayant l'ID 'pied'
let pied = document.getElementById('pied');
// Affiche l'élément sélectionné
console.log(pied);
// Affiche le type et le nom de noeud et le contenu HTML de l'élément sélectionné
console.log(pied.nodeType,pied.nodeName, pied.innerHTML,pied.textContent);
// Sélectionne l'élément ayant l'ID 'inexistant'
let elmInexistant = document.getElementById('inexistant');
// Affiche null
if (elmInexistant == null)
console.log("Il n'existe pas un eleemnt*inextnt")
console.log=(elmInexistant);

/****************************************************************
getElementsByClassName('uneClasse') :
    retourne une collection d'éléments (HTMLCollection) ayant la 
    classe 'uneClasse' si des éléments existent, sinon retourne 
    une collection vide
****************************************************************/
console.log("\n2. Sélecteurs par classe : getElementsByClassName");

// Sélectionne les éléments ayant la classe 'nav-link'
const elmsClasse1 = document.getElementsByClassName('nav-link');
// Affiche la collection d'éléments sélectionnés
console.log = (elmsClasse1);
// Affiche le nombre d'éléments sélectionnés
console.log = (elmsClasse1.length);
// Affiche le premier élément sélectionné,
console.log = (elmsClasse1.item(0)); // préférable à elmsClasse1[0] pour éviter les erreurs
// Parcourir les éléments d'une HTMLCollection avec boucle for... of
for(const elm of elmsClasse1){
    console.log(elm.textContent);
}
// Autre méthode en convertissant la HTMLCollection en tableau avec Array.from()
Array.elmsClasse1.forEach(elm => console.log(elm));
// Sélectionne les éléments ayant la classe 'inexistant'
const elmsClasse2 = document.getElementsByClassName('inexistant');

// Sélectionne les éléments ayant les classes 'text-info' et 'text-uppercase'
// l'ordre est sans importance, mais la casse est importante
const elmsClasse3 = document.getElementsByClassName('text-info text-uppercase');
// Affiche le premier élément sélectionné
0

/****************************************************************
getElementsByTagName('uneBalise') :
    retourne une collection d'éléments de balise 'uneBalise'
    si des éléments existent, sinon retourne une collection vide
****************************************************************/
console.log("\n3. Sélecteurs par balise : getElementByTagName");

// Sélectionner les éléments <a>

// Sélectionne les éléments <head>
// Affiche le nombre d'éléments <script>


/****************************************************************
querySelector('selecteurCSS') :
    retourne le premier élément correspondant au sélecteur CSS
    si un élément existe, sinon retourne null
****************************************************************/
console.log("\n4. Sélecteur CSS : querySelector");

// Sélectionne le premier élément <p>
// Affiche l'élément sélectionné

// Sélectionne le premier élément <li> du premier <ol>
// Affiche le contenu HTML de l'élément sélectionné
// Donne le même résultat que innerHTML, car le li ne contient pas de balises HTML


/****************************************************************
querySelectorAll('selecteurCSS') :
    retourne tous les éléments correspondant au sélecteur CSS
    si des éléments existent, sinon retourne une collection vide
****************************************************************/
console.log("\n5. Sélecteur CSS : querySelectorAll");

// Sélectionne tous les éléments <p>
// Parcourir les éléments d'une NodeList
// Affiche le texte de chaque élément sélectionné

// Sélectionne tous les éléments <li> de tous les <ul>
// Affiche le nombre d'éléments <li> sélectionnés