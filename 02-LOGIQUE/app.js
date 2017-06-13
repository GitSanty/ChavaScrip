// Langues
var Lang = "en";

var Message;

if ( Lang === "fr")  {

    Message = "Bonjour tout le monde";
}

if ( Lang === "en")  {

    Message = "Hello world";
}

if ( Lang === "es")  {

    Message = "Hola, Mundo";
}

console.log(Message);

//Affichage des scores
var score = 67;
var resultat;

if ( score >= 90){
    resultat = "A";
}

if (score < 90){

    resultat = "B"
}

if (score <= 50) {
resultat ="C"

}

console.log("Vous avez le rang " + " " + resultat);


//Mettre au pluriel

var mot_Sing = "Banna";
var nombre = 1;
var resultat;

if (nombre > 1){

    mot_Sing = mot_Sing + "s";

}

console.log("Je possede " + " " + nombre + " " + mot_Sing);