class Celular {
    constructor(color, peso, resolucionPantalla, resolucionCamara, ram) {
        this.color = color;
        this.peso = peso;
        this.resolucionPantalla = resolucionPantalla;
        this.resolucionCamara = resolucionCamara;
        this.ram = ram;
        this.encendido = false;
    }

    botonEncendido() {
        if (this.encendido === false) {
            alert("Celular Prendido");
            this.encendido = true;
        } else {
            alert("Celular Apagado");
        }
    }

    reiniciar() {
        if (this.encendido === true) {
            alert("Reiniciando Celular");
        } else {
            alert("No se puede reinciar porque el telefono está encendido");
        }
    }

    tomarFoto() {
        alert(`Foto tomada a una resolución de ${this.resolucionCamara}`);
    }

    tomarVideo() {
        alert(`Video grabado a resolución de ${this.resolucionCamara}`);
    }

    mobileinfo() {
        return `
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Resolucion de Cámara: <b>${this.resolucionCamara}</b><br>
        Resolucion de Video: <b>${this.resolucionCamara}</b><br>
        Ram: <b>${this.ram}</b><br>
        <br>
        `
    }
}

class celularAltaGama extends Celular {
    constructor(color, peso, resolucionPantalla, resolucionCamara, ram, camaraExtra) {
        super(color, peso, resolucionPantalla, resolucionCamara, ram)
        this.camamento = camaraExtra;
    }

    videoLento() {
        alert("Estas Grabando un video lento");
    }

    reconocimientoFacil() {
        alert("Vamos a iniciar un reconocimiento facial");
    }

    mobileinfo() {
        return `
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Resolucion de Cámara: <b>${this.resolucionCamara}</b><br>
        Resolucion de Video: <b>${this.resolucionCamara}</b><br>
        Ram: <b>${this.ram}</b><br>
        <br>
        `
    }
}

// Celular standar

const iphone = new Celular("Negro", "200 gramos", "2532 x 1170", "640 x 480", "8GB");

const android = new Celular("Blanco", "220 gramos", "2532 x 1170", "640 x 480", "8GB");

const huawei = new Celular("Rojo", "210 gramos", "2532 x 1170", "640 x 480", "8GB");

//Celular alta gama

const celularAltaGama1 = new celularAltaGama("Negro", "200 gramos", "2532 x 1170", "640 x 480", "8GB");

const celularAltaGama2 = new celularAltaGama("Negro", "200 gramos", "2532 x 1170", "640 x 480", "8GB");

const celularAltaGama3 = new celularAltaGama("Negro", "200 gramos", "2532 x 1170", "640 x 480", "8GB");


// document.write(
//     iphone.mobileinfo(),
//     android.mobileinfo(),
//     huawei.mobileinfo()
// );

document.write(
    celularAltaGama1.mobileinfo(),
    celularAltaGama2.mobileinfo(),
    celularAltaGama3.mobileinfo(),
);

// iphone.botonEncendido();
// iphone.reiniciar();
// iphone.tomarFoto();
// iphone.tomarVideo();

// android.botonEncendido();
// android.reiniciar();
// android.tomarFoto();
// android.tomarVideo();

// huawei.botonEncendido();
// huawei.reiniciar();
// huawei.tomarFoto();
// huawei.tomarVideo();