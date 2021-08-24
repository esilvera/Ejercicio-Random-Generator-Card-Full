/* window.onload = function() {
    

};
 */
let numeros = ["2","3","4","5","6","7","8","9","J","Q","K","A"];
let pintas = ["♦", "♥", "♠", "♣"];

function generarnumero(array){
    let x = Math.floor(Math.random() * array.length);
    return x;
}
let indexnumobtenido = generarnumero(numeros);
let indexpintaobtenida = generarnumero(pintas);

let numeroobtenido = numeros[indexnumobtenido];
let pintaobtenida = pintas[indexpintaobtenida];


/*      <a class="superior">♥</a> 
        <a class="numero">7</a>
        <a class="inferior">♥</a> 
*/

if (pintaobtenida === "♦" || pintaobtenida === "♥") {
    color sea rojo
}else {
    color sea negro
}

let list = document.querySelector('div.carta');
let a1 = document.createElement("a");
a1.classList.add("superior");
let figura = document.createTextNode(pintaobtenida);
a1.appendChild(figura);
list.appendChild(a1);

let a2 = document.createElement("a");
a2.classList.add("numero");
let numeroena = document.createTextNode(numeroobtenido);
a2.appendChild(numeroena);
list.appendChild(a2);

let a3 = document.createElement("a");
a3.classList.add("inferior");
figura = document.createTextNode(pintaobtenida);
a3.appendChild(figura);
list.appendChild(a3);    