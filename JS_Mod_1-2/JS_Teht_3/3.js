// Kirjoita ohjelma, joka kysyy kolme kokonaislukua. Ohjelma tulostaa lukujen summan, tulon ja keskiarvon HTML-dokumenttiin. (3p)
// Muista muuntaa merkkijonot luvuiksi ennen kuin lasket ne yhteen.

"use strict";
const num1 = prompt("Anna ensimmäinen kokonaisluku")
const num2 = prompt("Anna toinen kokonaisluku")
const num3 = prompt("Anna kolmas kokonaisluku")

const luku1 = parseInt(num1)
const luku2 = parseInt(num2)
const luku3 = parseInt(num3)

const summa = luku1 + luku2 + luku3
const tulo = luku1 * luku2 * luku3
const keskiarvo = (luku1 + luku2 + luku3) / 3

document.querySelector("#target").innerHTML =
        `summa on ${summa}, tulo on ${tulo} ja keskiarvo on ${keskiarvo}`;