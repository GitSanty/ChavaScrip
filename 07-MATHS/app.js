//Exercice : Minimum et maximum
// La valeur est égal au chiffre le plus petit dans l'enssemble suivant :
console.log(Math.min( 7, 5, -12, 6, 32, 18, 14, -2));


//La valeur est égal au chiffre le plus grand dans l'enssemble suivant : -3, 9, 21, 36, 27, 54, 17, 35
console.log(Math.max(-3, 9, 21, 36, 27, 54, 17, 35));

//La valeur est égal a l'addition des deux précédentes variables
var min = Math.min( 7, 5, -12, 6, 32, 18, 14, -2);
var max = Math.max(-3, 9, 21, 36, 27, 54, 17, 35);
console.log(min+max);

//  Exercice : Aléatoire

var floatBateau = 10.4;
var couleBateau =  Math.floor(floatBateau);
console.log("arrondie vers le bas " + couleBateau);
var voleBateau = Math.ceil(floatBateau);
console.log("arrondies vers le haut " + voleBateau);

// Exercice : Aléatoire
var min = 50;
var max = 100;
var Resultat =  Math.floor(Math.random() * (max - min + 1)) + min;
console.log("Entre 50 - 100 ==> " + Resultat);

// La valeur aléatoire peut être seulement 0 ou 1
var min = 0;
var max = 1;
var Resultat_cero =  Math.floor(Math.random() * (max - min + 1)) + min;
console.log("0 ou 1 ==> " + Resultat_cero);

//La valeur aléatoire peut aller de 0 à 10 inclu
var min = 0;
var max = 10;
var Resultat_inclu =  Math.floor(Math.random() * (max - min + 1)) + min;
console.log("0-10 inclu  ==>" + Resultat_inclu);