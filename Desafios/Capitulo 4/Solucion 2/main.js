const obtenerInformacion = (materia) => {
    let materias = {
        fisica: ["Perez", "pedro", "pepito", "cofla", "maria"],
        programacion: ["Dalto", "pepito", "cofla", "maria"],
        logica: ["Hernandez", "pedro", "pepito", "cofla", "maria"],
        quimica: ["Rodriguez", "pedro", "cofla", "maria"],
    };

    if (materias[materia]) {
        return [materias[materia], materia];
    } else {
        return materias;
    }
}

const mostrarMateria = (materia) => {
    let informacion = obtenerInformacion(materia);

    if (informacion != false) {
        let profesor = informacion[0][0];
        let alumnos = informacion[0].slice(1); 
        document.write(`El profesor de ${informacion[1]} es <b>${profesor}</b>  <br> y los alumnos son <b>${alumnos}</b> <br><br>`);
    }
}

const cantidadClases = (alumno) => {
    let informacion = obtenerInformacion();
    let clasesPresentes = [];
    let cantidadTotal = 0;

    for (let info in informacion) {
        if (informacion[info].includes(alumno)) {
            cantidadTotal++;
            clasesPresentes.push(""+ info);
        }
    }

    return `<b style="color: blue">${alumno}</b> está en <b>${cantidadTotal} clases</b> Está cursando las clases: <b style='color: green'>${clasesPresentes}</b> <br><br>`;
}

mostrarMateria("fisica");
mostrarMateria("programacion");
mostrarMateria("logica");
mostrarMateria("quimica");

document.write(cantidadClases("cofla"));
document.write(cantidadClases("pedro "));
