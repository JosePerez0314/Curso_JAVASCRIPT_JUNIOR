//Primer Problema

let free = false;

const validarCliente = (time)=> {
let edad = prompt ("Ingresa tu edad");

if (edad >= 18) {
    alert ("Bienvenido a la fiesta");
        if (time >= 2 && time <= 7  && free == false) {
       alert("Puedes entrar gratis, porque eres la primera persona despues de las 2 Am");
             free = true;
         }

         else {
             alert (`Son las ${time}:00hs puedes entrar, pero debes pagar tu entrada`);
         }

     }
      
    else {
        alert ("No se permiten menores de edad")
     }
}

validarCliente(23);
validarCliente(22);
validarCliente(2);
validarCliente(3);

