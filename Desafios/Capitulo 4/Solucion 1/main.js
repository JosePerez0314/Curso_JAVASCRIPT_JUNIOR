//Funciones para las ooperaciones


class Calculadora {
    constructor(){}
    sumar(num1, num2) {
        return parseInt(num1) + parseInt(num2);
    };
    restar(num1, num2) {
        return parseInt(num1) - parseInt(num2);
    };
    multiplicar(num1, num2) {
        return parseInt(num1) * parseInt(num2);
    };
    dividir(num1, num2) {
        return parseInt(num1) / parseInt(num2);
    };
    potenciar(num, exp) {
        return parseInt(num) ** parseInt(exp);
    }
    raizCuadrada(num) {
        return parseInt(Math.sqrt(num));
    }
    raizCubica(num) {
        return parseInt(Math.cbrt(num));
    }

}

const calculadora = new Calculadora();

//Calculadora

alert("Elige la operacion");
let op = prompt("1: Sumar 2: Restar 3: Multiplicar 4: Dividir 5: Potenciar 6: Raiz Cuadrada 7: Raiz Cubica");

if (op == "1" || op == "2" || op == "3" || op == "4" || op == "5" || op == "6" || op == "7") {
    let numero1;
    let numero2;
    let resultado;
    let numero;
    let exponente;

    if (op == "1") {
        numero1 = prompt("Ingresa el primer numero");
        numero2 = prompt("Ingresa el segundo numero");
        resultado = calculadora.sumar(numero1, numero2);
    } else if (op == "2") {
        numero1 = prompt("Ingresa el primer numero");
        numero2 = prompt("Ingresa el segundo numero");
        resultado = calculadora.restar(numero1, numero2);
    } else if (op == "3") {
        numero1 = prompt("Ingresa el primer numero");
        numero2 = prompt("Ingresa el segundo numero");
        resultado = calculadora.multiplicar(numero1, numero2);
    } else if (op == "4") {
        numero1 = prompt("Ingresa el primer numero");
        numero2 = prompt("Ingresa el segundo numero");
        resultado = calculadora.dividir(numero1, numero2);
    } else if (op == "5") {
        numero = prompt("Ingresa el numero");
        exponente = prompt("Ingresa el numero para exponenciar");
        resultado = calculadora.potenciar(numero,exponente);
    } else if (op == "6") {
        numero = prompt("Ingresa el numero");
        resultado = calculadora.raizCuadrada(numero);
    } else if (op == "7") {
        numero = prompt("Ingresa el numero");
        resultado = calculadora.raizCubica(numero);
    } 

    alert(`El resultado es ${resultado}`)
} else { 
    alert("Ingresa un valor que sea valido");
}