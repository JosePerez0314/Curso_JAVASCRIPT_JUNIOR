const materias = {
    fisica: [90 ,6, 3, "Fisica"],
    Programacion: [70 ,7, 4, "Programacion"],
    quimica: [93 ,5, 2, "quimica"],
    logica: [89 ,8, 4, "logica"],
    calculo: [93 ,7, 4, "calculo"]
}

const aprobado = ()=> {
   for(let materia in  materias) {
    let asistencias = materias[materia][0];
    let indice = materias[materia][1];
    let trabajosEntregados = materias[materia][2];
    console.log(materias[materia][3]);
    if (asistencias >= 90) {
        console.log("%c Asistencias en orden", "color:green");
    } else {
        console.log("%c Desaprobado por inasistencias", "color:red");
    }if(indice >= 7) {
        console.log("%c indice en orden", "color:green");
    }else {
        console.log("%c Desaprobado por tener mal indice", "color:red");
    } if (trabajosEntregados >= 3) {
        console.log("%c Trabajos Entregados en orden", "color:green");
    } else {
        console.log("%c Trabajos Entregados en orden", "color:red");
    }
   }
}

aprobado();
