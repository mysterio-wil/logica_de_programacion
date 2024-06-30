// Variables
let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un número por favor:");
console.log(numeroUsuario);
/* Este código realiza la comparación */
if (numeroUsuario == numeroSecreto) {
    // Acertamos, fue verdadera la condición.
    alert("Has acertado!");
} else {
    // No acertamos, fue falsa la condición.
    alert("Lo siento, no acertaste el número");
}