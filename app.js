// Variables
let numeroSecreto = 6;
let numeroUsuario = 0;
let intentos = 1;
let maximoIntentos = 2;
// let palabraVeces = "vez";
while(numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt("Me indicas un número por favor:");
    console.log(numeroUsuario);
    /* Este código realiza la comparación */
    if (numeroUsuario == numeroSecreto) {
        // Acertamos, fue verdadera la condición.
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? "vez": "veces"}`);
    } else {
        if (numeroUsuario > numeroSecreto){
            alert(`El número secreto es menor`);
        } else{
            alert(`El número secreto es mayor`);
        }
        // Incrementamos el contador cuando no acierta
        // intentos = intentos + 1;
        // intentos += 1;
        intentos++;

        // palabraVeces = "veces";
        if (intentos > maximoIntentos) {
            alert(`Llegaste al número máximo de ${intentos} intentos`);
            break
        }
        // No acertamos, fue falsa la condición.
        // alert("Lo siento, no acertaste el número");
    }
}
    