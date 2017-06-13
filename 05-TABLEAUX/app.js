// addition

var Array_Addition = [];

var Add_Value = function () {

    for (var x = 0; x < 10; x++) {
        Array_Addition[x] = x + 1;
    }

}

var resultat_array = Add_Value();

// Vos meilleurs choix

var Array_Noms = ['Stalone', 'Cruiz', 'schwarzenegger'];

var Add_Actor = function () {

    for (var i = 0; i < 3; i++){

        console.log("Le numero 1 est " + Array_Noms[i]);
    }
}

var resultat_Noms = Add_Actor();

// Bonnus Array

var Array_Noms = ['Stalone', 'Cruiz', 'schwarzenegger'];
var Array_Podium =  ['Le premier', 'Le deuxieme', 'Le troisieme'];

var Add_Actor = function () {

    for (var i = 0; i < 3; i++){

        console.log(Array_Podium[i]  + " est " + Array_Noms[i]);
    }
}

var resultat_Bonnus_Array = Add_Actor();


// clone

var Array_Clone = ['Mario', 'Luigi', 'Peach'];

var Double_Array = function (){

    for (i=0;i<3;i++){

        Array_Clone.push(Array_Clone[i]);
    }
    Array_Clone.push("Bowser");
    console.log(Array_Clone);
}

var resultat_clone = Double_Array();


//aléatoire

var Array_Aleatoire = ['Goro', 'Johnny Cago', 'Kano', 'Liu Kano', 'Raiden', 'Reptil', 'Scorpion', 'Shang Tsun', 'Sonya', 'Sub-Zero'];

var Aleatoire_Array = function(){

    console.log(Array_Aleatoire[Math.floor(10*Math.random())]);
}

var  resultat_aleatoire = Aleatoire_Array();

