class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

let producto1 = new Producto("peugeot 208", 23000, 5);
let producto2 = new Producto("toyota corolla", 35000, 10);
let producto3 = new Producto("toyoya yaris", 32000, 15);
let producto4 = new Producto("ford mondeo", 40000, 13);
let producto5 = new Producto("ford bronco", 55000, 9);
let producto6 = new Producto("jeep renegade", 23000, 2);
let producto7 = new Producto("fiat 500", 25000, 5);

let lista = [producto1, producto2, producto3, producto4, producto5, producto6, producto7];

function filtrarProducto() {
    let palabraClave = prompt("Ingresa el coche que buscas");
    let resultado = lista.filter((x) => x.nombre.toUpperCase().includes(palabraClave.toUpperCase()));

    if (resultado.length > 0) {
        console.table(resultado);
    } else {
        alert("No se encontró");
    }
}

function agregarProducto() {
    let nombre = prompt("Ingresa el nombre del coche:");
    let precio = parseFloat(prompt("Ingresa el precio del coche:"));
    let stock = parseInt(prompt("Ingresa el stock del coche:"));

    let nuevoProducto = new Producto(nombre, precio, stock);
    lista.push(nuevoProducto);
    alert("Producto agregado exitosamente");
    console.table(lista);
}

function menu() {
    let opcion;
    do {
        opcion = prompt("Selecciona una opción:\n1. Agregar un coche nuevo\n2. Filtrar coches\n3. Salir");

        switch (opcion) {
            case "1":
                agregarProducto();
                break;
            case "2":
                filtrarProducto();
                break;
            case "3":
                alert("Gracias por usar el sistema.");
                break;
            default:
                alert("Opción no válida. Por favor, elige 1, 2 o 3.");
        }
    } while (opcion !== "3");
}


menu();
