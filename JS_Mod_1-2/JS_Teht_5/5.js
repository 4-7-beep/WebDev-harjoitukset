/* Kirjoita ohjelma, joka pyytää käyttäjää syöttämään vuosiluvun ja ilmoittaa, onko vuosi karkausvuosi. Vuosi on karkausvuosi, jos se on jaollinen neljällä. Sadalla jaolliset vuodet ovat kuitenkin karkausvuosia vain, jos ne ovat jaollisia myös neljälläsadalla. Tulosta tulos HTML-dokumenttiin. */

"use strict";

const vuosi = parseInt(prompt("Anna vuosiluku:"));
let teksti;

if ((vuosi % 4 === 0 && vuosi % 100 !== 0) || vuosi % 400 === 0) {
    teksti = `${vuosi} on karkausvuosi.`;
} else {
    teksti = `${vuosi} ei ole karkausvuosi.`;
}

document.querySelector("#target").innerHTML = teksti;