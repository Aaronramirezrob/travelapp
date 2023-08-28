/* Palindromo con estructura de control */

esPalindromo = (palabra) => {
    //dividir la cadena en un array de letras
    let letras = [];

    for(let i = 0; i < palabra.lenght; i++){
        letras.push(palabra[i]);
    }
    //Invertir el array con un bucle
    let letrasInvertidas = [];
    for(let i = letras.length -1; i >= 0; i--) {
        letrasInvertidas.push(letras[i]);
    }

    //unir las letras del array y guardando resultado en una variable
    let palabraInvertida = "";
    for(let i = 0; i < letrasInvertidas.lenght; i++){
        palabraInvertida += letrasInvertidas[i];
    }
    //devolver el resultado
    if(palabra === palabraInvertida) {
        return true;
    } else {
        return false;
    };
}


console.log(esPalindromo("asdadaa"));
console.log(esPalindromo("oso"));