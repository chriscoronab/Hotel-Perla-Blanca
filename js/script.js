// function bienvenida(){
//     alert("Bienvenido/a al sitio web del Hotel Perla Blanca.");
// }

// bienvenida();

// let nombreCompleto=prompt("Por favor, ingresa tu nombre completo para acceder a más información sobre nuestros servicios.");

// alert("Bienvenido/a, "+nombreCompleto);

// let cantidadPersonas=parseInt(prompt(nombreCompleto+", ingresa la cantidad de personas a hospedarse en nuestro Hotel."));
// switch(cantidadPersonas){
//     case 1:
//         alert("Ingresaste 1 persona. \nTenemos habitaciones disponibles.");
//         break;
//     case 2:
//         alert("Ingresaste 2 personas. \nTenemos habitaciones dobles disponibles.");
//         break;
//     case 3:
//         alert("Ingresaste 3 personas. \nTenemos habitaciones triples disponibles.");
//         break;
//     case 4:
//         alert("Ingresaste 4 personas. \nTenemos habitaciones cuádruples disponibles.");
//         break;
//     case 0:
//         alert("Error. Ingresa aunque sea 1 persona.");
//     default:
//         alert("No tenemos habitaciones para más de 4 personas. Te podemos ofrecer varias habitaciones para hospedar a tu grupo.");
//         break;
// }

// const habitaciones=[{
//     id: 1,
//     nombre: "Habitación Doble",
//     precio: "USD $35",
// }, {
//     id: 2,
//     nombre: "Habitación Triple",
//     precio: "USD $40",
// }, {
//     id: 3,
//     nombre: "Habitación Cuádruple",
//     precio: "USD $50",
// }, {
//     id: 4,
//     nombre: "Habitación Suite",
//     precio: "USD $85",
// },
// ]

// const servicios=["Aire acondicionado", "Baño privado", "TV LED con cable", "Cama sommier", "Frigobar", "Pava eléctrica", "Salón desayunador", "Sala de juegos", "Wi-Fi", "Estacionamiento cubierto"];

// alert("Todas las habitaciones cuentan con: "+servicios.join("\n"));

// let nochesHospedaje=parseInt(prompt(nombreCompleto+", ingresa la cantidad de noches de hospedaje en el Hotel Perla Blanca:"));

// for(let i=1; i<=3;i++){
//     if(nochesHospedaje>0){
//         alert("Tu estadía es de "+nochesHospedaje+" noches.");
//         break;
//     }else{
//         alert("Error. Ingresa aunque sea 1 noche.");
//         nochesHospedaje=parseInt(prompt(nombreCompleto+", ingresa la cantidad de noches de hospedaje en el Hotel Perla Blanca:"));
//     }
// }

// const IVA=1.21;
// let precioNoche=35;
// let precioTotal=(precioNoche*nochesHospedaje)*IVA;

// function calcularPrecioTotal(precio){
//     alert("El precio por noche es de USD $"+precioNoche+", por lo que el precio total en nuestras instalaciones incluyendo el IVA es de USD $"+precioTotal);
// }

// calcularPrecioTotal();

// let numeroCuotas;

// function calcularCuotas(precioPorCuota){
//     let valorCuotas=precioTotal/numeroCuotas;
//     alert("Ingresaste "+numeroCuotas+" cuotas. \nEl valor de cada cuota es de USD $"+valorCuotas);
// }

// let descuentoEfectivo=precioTotal*0.90;

// let metodoDePago=prompt("Elige el método de pago: \n1- Efectivo. \n2- Débito. \n3- Crédito.");
// if((metodoDePago.toLowerCase()=="efectivo")||(metodoDePago=="1")){
//     alert("El método de pago ingresado es efectivo. \nSe aplica un descuento en el valor total realizando el pago en efectivo, por lo que quedaría en USD $"+descuentoEfectivo);
// }else if((metodoDePago.toLowerCase()=="debito")||(metodoDePago.toLowerCase()=="débito")||(metodoDePago=="2")){
//     alert("El método de pago ingresado es tarjeta de débito.");
// }else if((metodoDePago.toLowerCase()=="credito")||(metodoDePago.toLowerCase()=="crédito")||(metodoDePago=="3")){
//     numeroCuotas=parseInt(prompt("El método de pago ingresado es tarjeta de crédito. \nIngresa el número de cuotas: 1, 3, 6 o 12"));
//     for(let i=1; i<=3;i++){
//         if((numeroCuotas=="1")||(numeroCuotas=="3")||(numeroCuotas=="6")||(numeroCuotas=="12")){
//             calcularCuotas();
//             break;
//         }else{
//             alert("Error. El número de cuotas permitido son: 1, 3, 6 o 12.");
//             numeroCuotas=parseInt(prompt("Vuelve a ingresar el número de cuotas: 1, 3, 6 o 12."));
//         }
//     }
// }else{
//     alert("Error. El método de pago que ingresaste no es válido.");
//     metodoDePago=prompt("Elige el método de pago: \n1- Efectivo. \n2- Débito. \n3- Crédito.");
// }

// let nombre=prompt("Ingresa el nombre completo de cada una de las personas a hospedarse en el Hotel Perla Blanca para el check-in. \nPresiona X para finalizar cuando hayas ingresado todas las personas.");

// numeroPersonas=0;

// while(nombre!="X"&&nombre!="x"){
//     numeroPersonas=numeroPersonas+1;
//     nombre=prompt("Ingresa el nombre completo de cada una de las personas a hospedarse en el Hotel Perla Blanca para el check-in. \nPresiona X para finalizar cuando hayas ingresado todos los nombres.");
// }

// alert("¡Perfecto! Estas "+numeroPersonas+" personas deberán presentarse en recepción al momento de hacer el check-in con sus respectivos DNI para validar los datos. Muchas gracias por elegirnos.");

// let numeroReserva=Math.random()*5000;

// function darNumeroReserva(){
//     alert("Tu número de reserva es: "+Math.round(numeroReserva));
// }

// darNumeroReserva();