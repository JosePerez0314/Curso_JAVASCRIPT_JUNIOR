class App {
    constructor(cantd, punt, peso) {
        this.cantiadadDescarga = cantd;
        this.puntuacion = punt;
        this.peso = peso;
        this.descargar = false;
        this.iniciar = false;
    }

    instalar() {
        if(this.descargar == false) {
            this.descargar = true;
            alert("La aplicacion se instalo correctamente");
        }
    }

    desinstalar() {
        if(this.descargar == true) {
            this.descargar = false;
            alert("La aplicacion se desisntalo correctamente");
        }
    }

    abrir() {
        if(this.iniciar == false && this.descargar == true) {
            this.iniciar = true;
            alert("La aplicacion se abrio correctamente");
        }
    }
    
    cerrar() {
        if(this.iniciar == true && this.descargar == true) {
            this.iniciar = false;
            alert("La aplicacion se cerro correctamente");
        }
    }

    appinfo() {
        return `
        Descargas: ${this.descargar}<br>
        Puntuacion: ${this.puntuacion}<br>
        Peso: ${this.peso}<br>
        <br>
        `
    }
}

let app1 = new App("1 Millon", "9 de 10", "2GB");
let app2 = new App("2 Millon", "10 de 10", "1GB");
let app3 = new App("500 Mil", "8 de 10", "300MB");

// app1.instalar();
// app1.abrir();
// app1.cerrar();
// app1.desinstalar();

document.write(
    app1.appinfo(),
    app2.appinfo(),
    app3.appinfo()
);

// console.log(app1); 
// console.log(app2); 
// console.log(app3); 