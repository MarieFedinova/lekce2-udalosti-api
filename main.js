// tady je místo pro náš program

/**
 * Funkce pro ztučnění textu po najetí myši
 * @param {string} udalost 
 */

function ztučni(udalost) {
    udalost.target.style.fontWeight = "bold";
}

function ztenči(udalost) {
    udalost.target.style.fontWeight = "normal";
}

/**
 * Funkce pro přidání css třídy červená a obarvení odstavce
 */

let odstavec = document.querySelector('p')

function změňBarvu() {
    odstavec.classList.toggle("červená");
}

/**
 * Funkce pro zvětšení textu vždy o 1px
 */

function zvětši() {
    let size = parseFloat(odstavec.style.fontSize);
    let plusOne = size + 1;
    odstavec.style.fontSize = plusOne + "px";
}

/**
 * Funkce, která přehraje audio
 * @param {string} element 
 */

function přehraj(element) {
    let zvuk = document.querySelector(element);
    zvuk.play();
}

/**
 * Funkce pro změnu hlasitosti audia
 * @param {number} number
 */

let audio = document.querySelector('#audio');

function změňHlasitost(number) {
    audio.volume = number;
}

/**
 * Funkce, která přehraje audio od začátku
 * @param {string} element 
 */

function přehrajOdZačátku(element) {
    let zvuk = document.querySelector(element);
    zvuk.load();
    zvuk.play();
}