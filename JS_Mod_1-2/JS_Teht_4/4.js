/* Harry Potter -lastenkirjoissa lajitteluhattu sijoittaa Tylypahkan noitien ja velhojen koulun uuden oppilaan yhteen neljästä tuvasta, jotka ovat Rohkelikko, Luihuinen, Puuskupuh ja Korpinkynsi. Kirjoita sähköinen lajitteluhattu, joka kysyy oppilaan nimeä ja arpoo oppilaalle tuvan. Jos annat nimeksi esimerkiksi Anna, ohjelma tulostaa HTML-dokumenttiin ”Anna, sinä olet Korpinkynsi.” (3p)
Käytä metodia Math.random() arvon (1, 2, 3 tai 4) arpomiseen.
Kun luku on arvottu, tarvitset valintarakenteen, jossa on useita vaihtoehtoja (if, else if, …, else tai switch). */

"use strict";

const nimi = prompt("Anna nimesi");

function randomNum(max) {
    return Math.floor(Math.random() * max) + 1;
}

const num = randomNum(4);
let tupa;

if (num === 1) {
    tupa = "Rohkelikko";
} else if (num === 2) {
    tupa = "Luihuinen";
} else if (num === 3) {
    tupa = "Puuskupuh";
} else {
    tupa = "Korpinkynsi";
}

document.querySelector("#target").innerHTML = `${nimi}, tupasi on ${tupa}.`;








