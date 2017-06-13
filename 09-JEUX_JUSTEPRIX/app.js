// Exercice : Juste prix
//  var Message;
// var counter = 0;
// var minimun = 20;
// var maximale = 80;
// var juste_prix;

// var Enter_numero = function () {
//     juste_prix = window.prompt("Enter number:");
// }
//
//
// var Get_number = function () {
//     counter++;
//     return  Math.round(Math.floor(Math.random() * (maximale - minimun + 1)) + minimun);
// }
//
// var Tester_Number = function (Get_number) {
//
//  if (  Get_number > juste_prix) {
//   window.alert("Cest moins");
//  }
//  if (Get_number < juste_prix) {
//      window.alert("C'est plus");
//  }
//
//  if (Get_number = juste_prix){
//      window.confirm(" C'est juste tu as trouvé en " + counter + " coups" );
//  }
// }
//
// Tester_Number();


//Le Juste Prix
function jeu() {
    function nb_aleatoire(min, max)
    {
        //var nb = min + (max-min+1)*Math.random();
        var nb = Math.round(Math.floor(Math.random() * (max - min + 1)) + min);
        return nb;
    }

    //Initialisation
    var nb_coup = 0;
    var min = 20;
    var max = 80;
    var nombre;
    var nb = nb_aleatoire(min, max);

    while(nb >= 20 && nb <= 80) {
        var nombre = prompt("Entrer un nombre [nombre de coup(s) : "+ nb_coup +"]" , "Nombre compris entre 20 et 80");

        //alert(nb);

        if(nombre == "Nombre compris entre 20 et 80") {//Si l(utilisateur appuis sur Ok sans toucher à rien
            alert("Entrer un nombre entre 20 est 80");
            continue;
        }
        if(nombre == null) {//Annuller
            alert("Bye !!!");
            break;
        }
        if(isNaN(nombre)) {//Caractere incorrect
            alert("\"" + nombre + "\" n'est pas un nombre");
            continue;
        }
        if(nombre < min) {//Nombre trop petit
            alert(+ nombre + " est trop petit (<20) !");
            nb_coup ++;
            continue;
        }
        if(nombre > max) {//Nombre trop grand
            alert(+ nombre + " est trop grand (>80) !");
            nb_coup ++;
            continue;
        }
        if(nombre < nb) {//C'est plus !
            alert("C'est plus !");
            nb_coup ++;
        }
        if(nombre > nb) {//C'est moins !
            alert("C'est moins !");
            nb_coup ++;
        }
        if(nombre == nb) {//Gagné !
            alert("Bravo le nombre mystère était "+ nb);
            nb_coup ++;
            break;
        }
    }

    if(nombre != null) {//Si l'utilisateur n'a pas clicke sur "Annuller", on lui affiche le nombre de coups qu'il a fait
        alert("Tu as gagné en "+ nb_coup +" coup(s)");
        var image_gagne = document.getElementById("gagne");
        image_gagne.src = "http://m.memegen.com/pdufvo.jpg";
    }
}
