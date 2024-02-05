let materias = {
    fisica: ["Perez", "Pedro", "Cofla", "Maria"],
    programacion: ["Dalto", "Pedro", "Cofla", "Pepito", "Maria"],
    logica: ["Hernandez", "Pedro", "Cofla", "Pepito", "Maria"],
    quimica: ["Rodriguez", "Cofla", "Maria"]
}

const inscribir = (alumno, materia)=> {
    let personas = materias[materia];
    if (personas.length >= 21) {
        document.write(`Lo siento ${alumno}, las clases de ${materia} ya estan llenas`);
    } else {
        personas.push(alumno);
        if (materia == "fisica") {
            materias = {
             fisica: alumno,
             programacion: materias['programacion'],
             logica: materias['logica'],
             quimica: materias['quimica']
            } 
        }else if (materia == "programacion") {
            materias = {
                fisica: materias['fisica'],
                programacion: alumno,
                logica: materias['logica'],
                quimica: materias['quimica']
               } 
        } else if (materia == "logica") {
            materias = {
                fisica: materias['fisica'],
                programacion: materias['programacion'],
                logica: alumno,
                quimica: materias['quimica']
               } 
        } else if (materia == "quimica") {
            materias = {
                fisica: materias['fisica'],
                programacion: materias['programacion'],
                logica: materias['logica'],
                quimica: alumno
               } 
        } 
        document.write(`Felicidades ${alumno} te has inscrito a ${materia} correctamente`);
    }
}

document.write(materias['fisica'] + "<br><br>");

inscribir("pedrito,", "fisica");