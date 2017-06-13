// Pair et impair

var Pair_Impair  = function Soustractions() {
    var num;

    for (var x = 0; x < 20; x++) {
        num = x % 2;

        if (num == 1 && x > 0) {
            console.log (x + " est impair");
        } else {
            console.log (x + "  est pair");
        }

    }
}
    var resultat_pair = Pair_Impair();


//Multiplication Tables

var Multi  = function Multiplication() {
    for (var x = 0; x < 10; x++) {

        console.log ( x + "*9" + "= " + x*9 );

    }
}
var resultat_multiplication = Multi();


//assigner des grades
var resultat_grade = function (x){

    if (x < 90){
        console.log ( "Pour " + x + " points vous avez le grade A" );
        if ( x < 80) {console.log ( "Pour " + x + " points vous avez le grade B" ); }
        if ( x < 70) {console.log ( "Pour " + x + " points vous avez le grade C" ); }
        if ( x < 65) {console.log ( "Pour " + x + " points vous avez le grade D" ); }
    }else{
        console.log ("Pour " + x + " points vous avez le grade F");
    }


}

var Assig  = function() {

    for (var x = 0; x < 100; x++) {

        resultat_grade(x);

    }

}

var resultat_Assig_Grade = Assig();


//pyramide
var Piramide = function Create_Piramide () {
    var start = "*";
    var sum_starts="";
    for (var x = 0; x < 5; x++) {
        sum_starts = sum_starts + start;
        console.log(sum_starts);
      }
}

var resultat_pyramide = Piramide();
