// function solicitarNombre() {
//     alert("Hola , bienvenido a PadelCompras");
// }

// solicitarNombre();


// function solicitarNombre() {
//     let nombre = prompt("Ingrese su nombre");
//     alert("Hola " " "", bienvenido a PadelCompras");
// }

// solicitarNombre();

// function comprarPaleta() {
//     producto = prompt("elija uno de nuestros productos \n 1: paleta ataque \n 2: paleta defensiva \n 3: paleta mixta");
//     if (producto === "1")
//         alert("Elegiste paleta de ataque")
//     else if (producto === "2")
//         alert("Elegiste paleta defensiva")
//     else if (producto === "3")
//         alert("Elegiste paleta mixta")
// }
// // comprarPaleta()

// function preciosFinales() {
//     alert("Gracias por su compra")
// }

// function agregarProducto(idProducto, total) {
//     let precio = 0;
//     switch (idProducto) {
//       case 1:
//         precio = 39.99;
//         total += precio;
//         alert("Seleccionaste Grokking Algorithms. Valor: $39.99\n" + "El total de tu compra hasta el momento es: $" + total);
//         break;
//       case 2:
//         precio = 41.99;
//         total += precio;
//         alert("Seleccionaste Clean Code. Valor: $41.99\n" + "El total de tu compra hasta el momento es: $" + total);
//         break;
//       case 3:
//         precio = 21.99;
//         total += precio;
//         alert("Seleccionaste Eloquent Javascript. Valor: $21.99\n" + "El total de tu compra hasta el momento es: $" + total);
//         break;
//       default:
//         alert("Opción inválida.");
//         break;
//     }
//     console.log(typeof total);
//     return total;
//   }

//   agregarProducto();

// function comprarPaleta() {
//     producto = prompt("elija uno de nuestros productos \n 1: paleta ataque \n 2: paleta defensiva \n 3: paleta mixta");
//     //condicionales: si producto ==="1" {alert que diga "elegiste zapa urbana"}
//     //hago lo mismo con el resto de  opciones con else if
//     //volver a preguntar por opciones: opcion= vuelva a elegir opciones: \n 2: mostrar precios finales |n 3: terminar" ;
// }
// function preciosFinales() {
//     //nesecito condicionales.
//     //SI EL USUARIO INGRESO "1" ,  TENGO QUE SUMAR EL IVA A LA ZAPA URBANA
//     //ELSE IF (EN OTRO CASO QUE EVALUO, SI EL USUARIO INGRESO 2)" SUMO IVA A ZAPA BASQUET
// }

// //declaro variables y asigno valor si lo requiere
// let producto
// let paletaAtaque = 200000;
// let paletaDefensiva = 100000;
// let paletaMixta = 150000;
// let nombre = prompt("ingrese su nombre")
// let opcion;

// //codigo recien empieza aca//

// solicitarNombre()
// opcion=prompt(
//     "ingrese una opcion: \n 1: comprar zapatilla \n 2: finalizar compra \n 3: terminar "
// );

// //bucle while para hacer un ciclo que vaya ejecutando las funciones de acuerdo a lo que ingrese el usuario.

// //agrego bucle while, mientras la opcion no sea 3...
// while (opcion !=="3") {
//     if (opcion ==="1") {
//         comprarPaleta();
//     }
//     if (opcion === "2"){
//         //si ingreso la opcion dos, llamo a la funcion finallizarCompra
//         //y le asigno el "3" a opcion para que corte el bucle
//         preciosFinales();
//         opcion = "3";
//     }
// }
//inicializar nuestras variables
// let producto = "";
// let cantidad = 0;
// let precio = 0;
// let seguirComprando = false
// let precioTotal = 0;
// let cantidadTotal = 0;

// do {
//   producto = prompt("elija uno de nuestros productos \n 1: paleta ataque \n 2: paleta defensiva \n 3: paleta mixta");
//   cantidad = parseInt(prompt("cuantas paletas desea comprar?"));

//   switch (producto) {
//     case "1":
//       precio = 200.000;
//       break;
//     case "2":
//       precio = 100.000;
//       break;
//     case "3":
//       precio = 150.000;
//       break;
//     default:
//       alert("Opción inválida.");
//       cantidad = 0;
//   }

//   precioTotal += (precio * cantidad);
//   cantidadTotal += cantidad;

//   seguirComprando = confirm("¿Desea seguir comprando?");

// } while (seguirComprando);

// console.log(precioTotal);
// console.log(cantidadTotal);

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