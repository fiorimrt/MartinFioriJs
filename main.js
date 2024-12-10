
function obtenerEdad() {
    let edad;
    do {
        edad = prompt("Ingresa tu edad (número):");
        if (edad === "" || isNaN(edad)) {
            alert("Por favor, ingrese un número válido.");
        }
    } while (edad === "" || isNaN(edad));
    return parseInt(edad);
}


function determinarMayorDeEdad(edad) {
    if (edad >= 18) {
        return "Eres mayor de edad.";
    } else {
        return "Eres menor de edad.";
    }
}


let continuar = true;
while (continuar) {
    let edad = obtenerEdad();
    let resultado = determinarMayorDeEdad(edad);
    alert(resultado);
    continuar = confirm("¿Quieres verificar otra edad?");
}

alert("Gracias por usar el verificador de mayoría de edad.");
