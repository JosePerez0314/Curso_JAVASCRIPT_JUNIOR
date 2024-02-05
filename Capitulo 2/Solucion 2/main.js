let cantidadEstudiantes = prompt("¿Cuanto estudiantes son?")
let alumnosTotales = [];

for (let i = 0; i < cantidadEstudiantes; i++) {
    alumnosTotales [i]= [prompt(`nombre del estudiante: ${i + 1}`),0];
}

const tomarAsistencia = (nombre, p)=> {
    let presencia = prompt(nombre)
    if (presencia == "p" || presencia == "P") {
        alumnosTotales[p][1]++;
    }
}

for (let i = 0; i < 30; i++) {
    for (alumno in alumnosTotales) {
        tomarAsistencia(alumnosTotales[alumno][0], alumno);
    }
}

for (alumno in alumnosTotales) {
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    __________Presentes: ${alumnosTotales[alumno][1]} <br>
    __________Ausencias: ${30 - alumnosTotales[alumno][1]} <br>`;

    if (30 - alumnosTotales[alumno][1] < 18) {
        resultado+= "<b style`color: red`>Reprobado por inasistencias</b><br><br>";
    } else {
        resultado+= "<br><br>";
    }   document.write(resultado);2

}