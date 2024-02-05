const container = document.querySelector(".container");
let contador = 0;

function crearLlave(nombre, modelo, precio) {
    img = "<img src = 'img/llave.png'>";
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3 id= '${modelo}'>${modelo}</h3>`;
    precio = `<p>Precio: <b>${precio}</b></p>`;
    return [img, nombre, modelo, precio];
}

let documentFragment = document.createDocumentFragment();

for (var i = 1; i <= 20; i++) {
    let modeloRandom = Math.round(Math.random() * 10000);
    let precioRandom = Math.round(Math.random() * 10 + 30);
    let llave = crearLlave(`llave ${i}`, `modelo ${modeloRandom}`, `${precioRandom}`);
    let div = document.createElement('DIV');
    div.classList.add("flex-item");
    div.classList.add(`item-${i}`, `flex-item`);
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
    document.body.appendChild(div);
}

container.appendChild(documentFragment);