// Las variables

// ¿Que es una variable?

/* Una variable es un lugar donde podemos almacenar informacion del programa */

/* En javascript podemos crear variables de 3 maneras distintas por ejemplo */

/* Var es una forma de crear una variable que una vez definida es conocida en el codigo completo es decir que si la creo dentro de un bloque, dentro y fuera de ese bloque seguira existiendo  */
/* Ejemplo con var */

nombre = "jose";  /* Por defecto todas las variables son var si no la definimos desde un principio */

var nombre = "jose"; /* Como aqui es lo mismo aunque no lo defina es var */

/* let es una forma de crear variables que no es regional a que me refiero con esto? me refiero a que es un tipo forma de crear una variable que solamente funciona en un bloque*/
/* Ejemplo con let */

let apellido = "perez";  /* Es el tipo de forma de crear una variable mas utilizada en javascript ya que este es el que permite tener menos problemas de compatibilidad */

apellido = "calcaño"; /* Se puede modificar mas adelante, esto aplica tanto para var como para let */

/* Const es un tipo de forma de crear una variable, que se diferencia de las otras por la simple razon que es una variable que no se puede modificar con el tiempo es decir una vez definida no la puedes modificar, esta se usa siempre para valores que sean unicos y no se repiten */
/* Ejemplo con const */

const cedula = "402-3477954-4"; /* Este igual que let estan limitados a un bloque */