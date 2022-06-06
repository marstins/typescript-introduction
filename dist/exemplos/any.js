"use strict";
var valorAny;
valorAny = 3;
valorAny = "ola";
valorAny = true;
var valorString = "teste";
valorString = valorAny;
var valorString2 = "testão";
valorString2 = valorAny;
function somarString(string1, string2) {
    console.log(string1 + string2);
}
somarString(valorString, valorString2);
somarString("Olá", ", como vai?");
