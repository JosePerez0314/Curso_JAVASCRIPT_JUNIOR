let roberto = prompt ("Roberto ingresa tu monto");
let pedro = prompt ("Pedro ingresa tu monto");
let cofla = prompt ("Cofla ingresa tu monto");

cofla = parseInt(cofla);

// Dinero roberto

if (roberto >= 0.6 && roberto <1 ) {
    alert("Roberto comprate el helado de agua");
}

else if (roberto >= 1 && roberto < 1.6){
    alert("Roberto comprate el helado de crema");
}

else if (roberto >= 1.6 && roberto < 1.7){
    alert("Roberto comprate el helado de heladrix");
}

else if (roberto >= 1.7 && roberto < 1.8){
    alert("Roberto comprate el helado de heladovich");
}

else if (roberto >= 1.8 && roberto < 2.9){
    alert("Roberto comprate el helado de helardo");
}

else if (roberto >= 2.9){
    alert("Roberto comprate el helado de confetis o un pote de 1/4 KG");
}

else {
    alert("Roberto, no alcanza el dinero maldito pobre");
}


// Dinero Pedro

if (pedro >= 0.6 && pedro <1 ) {
    alert("Pedro comprate el helado de agua");
}

else if (pedro >= 1 && pedro < 1.6){
    alert("Pedro comprate el helado de crema");
}

else if (pedro >= 1.6 && pedro < 1.7){
    alert("Pedro comprate el helado de heladrix");
}

else if (pedro >= 1.7 && pedro < 1.8){
    alert("Pedro comprate el helado de heladovich");
}

else if (pedro >= 1.8 && pedro < 2.9){
    alert("Pedro comprate el helado de helardo");
}

else if (pedro >= 2.9){
    alert("Pedro comprate el helado de confetis o un pote de 1/4 KG");
}

else {
    alert("Pedro, no alcanza el dinero maldito pobre");
}


// Dinero Cofla

if (cofla >= 0.6 && cofla <1 ) {
    alert("Cofla comprate el helado de agua ");
    alert("Tu cambio es " + (cofla - 0.6));
}

else if (cofla >= 1 && cofla < 1.6){
    alert("Cofla comprate el helado de crema");
    alert("Tu cambio es " + (cofla - 1));
}

else if (cofla >= 1.6 && cofla < 1.7){
    alert("Cofla comprate el helado de heladrix");
    alert("Tu cambio es " + (cofla - 1.6));
}

else if (cofla >= 1.7 && cofla < 1.8){
    alert("Cofla comprate el helado de heladovich");
    alert("Tu cambio es " + (cofla - 1.7));
}

else if (cofla >= 1.8 && cofla < 2.9){
    alert("Cofla comprate el helado de helardo");
    alert("Tu cambio es " + (cofla - 1.8));
}

else if (cofla >= 2.9){
    alert("Cofla comprate el helado de confetis o un pote de 1/4 KG");
    alert("Tu cambio es " + (cofla - 2.9));
}

else {
    alert("Cofla, no alcanza el dinero maldito pobre");
}


