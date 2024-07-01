// Variables
let numeroSecreto = 6;
let numeroUsuario = 0;
while(numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt("Me indicas un número por favor:");
    console.log(numeroUsuario);
    /* Este código realiza la comparación */
    if (numeroUsuario == numeroSecreto) {
        // Acertamos, fue verdadera la condición.
        alert(`Acertaste, el número es: ${numeroUsuario}`);
    } else {
        if (numeroUsuario > numeroSecreto){
            alert(`El número secreto es menor`);
        } else{
            alert(`El número secreto es mayor`);
        }
        // No acertamos, fue falsa la condición.
        // alert("Lo siento, no acertaste el número");
    }
}
    