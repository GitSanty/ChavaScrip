// Pendu
var Array_Pendu = ['B','O','N','J','O','U','R'];

var Count_Letters_IN_Array_Pendu = function (item){
    var Times_Pendu=0;
    for(i = 0; i < Array_Pendu.length; i++){
        if(item == Array_Pendu[i]) {
            Times_Pendu++;
        }
    }
    return Times_Pendu;
}

var Count_Letters_IN_Array_Devinee = function(item){
    var Times_Devinee=0;
    for(x = 0; x < Lettres_devinee.length; x++){
        if(item == Lettres_devinee[x]){
            Times_Devinee++;
        }
    }
    return Times_Devinee;
}

var Lettres_devinee = ['','','','','','',''];
var current;
var Position;
var New_Index;
let Count_Devinee;
let Count_Array;

var Itera_Lettres = function guessLetter() {
    current = document.getElementById("divinee");
    Count_Array = Count_Letters_IN_Array_Pendu(current.value);
    Count_Devinee = Count_Letters_IN_Array_Devinee(current.value);

    if (Count_Devinee < Count_Array) {
        if (Array_Pendu.indexOf(current.value) != -1) {

                if (Lettres_devinee.lastIndexOf(current.value) != -1) {
                New_Index = Lettres_devinee.lastIndexOf(current.value);
                Position = Array_Pendu.indexOf(current.value, New_Index + 1);
            } else {
                Position = Array_Pendu.indexOf(current.value);
            }
            Lettres_devinee.splice(Position, 1, current.value);
            document.getElementById("Letter").innerHTML = current.value;
            document.getElementById("newmot").innerHTML = Lettres_devinee;
        }
    }else {
        console.log("NO more "  + current.value);
    }
}


















