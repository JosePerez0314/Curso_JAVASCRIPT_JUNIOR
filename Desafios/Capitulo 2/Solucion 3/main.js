const sumar = (num1, num2) => {
    return parseInt(num1) + parseInt(num2);
}

const restar = (num1, num2) => {
    return parseInt(num1) - parseInt(num2);
}

const multiplicar = (num1, num2) => {
    return parseInt(num1) * parseInt(num2);
}

const dividir = (num1, num2) => {
    return parseInt(num1) / parseInt(num2);
}

alert("Elige la operacion");
let operacion = prompt("1: Sumar 2: Restar 3: Multiplicar 4: Dividir");

if (operacion == "1" || operacion == "2" || operacion == "3" || operacion == "4") {
    let numero1 = prompt("Introduce el primer numero");
    let numero2 = prompt("Introduce el segundo numero");

    if (operacion == "1") {
        resultado = sumar(numero1, numero2);
    } else if (operacion == "2") {
        resultado = restar(numero1, numero2);
    } else if (operacion == "3") {
        resultado = multiplicar(numero1, numero2);
    } else if (operacion == "4") {
        resultado = dividir(numero1, numero2);
    }

    alert(`Tu respuesta es ${resultado}`);
} else {
    alert("Introduce una operación válida. Operación fallida.");
}
