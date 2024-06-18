
let producto = "";
let cantidad = 0;
let precio = 0;
let seguirComprando = false;
let precioTotal = 0;
let cantidadTotal = 0;
let nombre = ""

function solicitarNombre() {
  let nombre = prompt("Ingrese su nombre");
  alert("Hola " + nombre + "bienvenido a PadelCompras");
}

solicitarNombre();

do {
  producto = prompt("Elija uno de nuestros productos \n 1: paleta ataque \n 2: paleta defensiva \n 3: paleta mixta").toLowerCase();
  cantidad = parseInt(prompt("¿Cuántas paletas desea comprar?"));

  while (isNaN(cantidad) || cantidad <= 0) {
  alert("Debe agregar un numero valido.");
  cantidad = parseInt(prompt("¿Cuántas paletas desea comprar?"));
  }

  switch (producto) {
    case "1":
      precio = 200000;
      break;
    case "2":
      precio = 100000;
      break;
    case "3":
      precio = 150000;
      break;
    default:
      alert("Opción inválida.");
      continue; // Si la opción no es válida, reinicia el ciclo.
  }

  precioTotal += (precio * cantidad);
  cantidadTotal += cantidad;

  seguirComprando = confirm("¿Desea seguir comprando?");

} while (seguirComprando);

alert("Ha comprado"  +cantidadTotal+" productos y el precio final es de $"+precioTotal);