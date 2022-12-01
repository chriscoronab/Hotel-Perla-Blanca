function bienvenida(){
    alert("Bienvenido/a al sitio web del Hotel Perla Blanca.");
}

bienvenida();

let nombreCompleto=prompt("Por favor, ingresa tu nombre completo para acceder a más información sobre nuestros servicios.");

console.log("Bienvenido/a, "+nombreCompleto);

let cantidadPersonas=parseInt(prompt(nombreCompleto+", ingresa la cantidad de personas a hospedarse en nuestro Hotel:"));
switch(cantidadPersonas){
    case 1:
        console.log("Ingresaste 1 persona. Tenemos habitaciones individuales disponibles.");
        break;
    case 2:
        console.log("Ingresaste 2 personas. Tenemos habitaciones dobles disponibles.");
        break;
    case 3:
    case 4:
        console.log("Ingresaste "+cantidadPersonas+" personas. Tenemos habitaciones disponibles con capacidad para 4 personas.");
        break;
    case 0:
        alert("Error. Ingresa aunque sea 1 persona.");
    default:
        let cantidadHabitaciones=parseInt(prompt("No tenemos habitaciones para más de 4 personas. Te podemos ofrecer varias habitaciones para hospedar a tu grupo. Por favor, ingresa la cantidad de habitaciones deseada."));
        console.log("Seleccionaste la cantidad de "+cantidadHabitaciones+" habitaciones.");
        break;
}

let nochesHospedaje=parseInt(prompt(nombreCompleto+", ingresa la cantidad de noches de hospedaje en el Hotel Perla Blanca:"));

for(let i=1; i<=3;i++){
    if(nochesHospedaje>0){
        console.log("Tu estadía es de "+nochesHospedaje+" noches.");
        break;
    }else{
        alert("Error. Ingresa aunque sea 1 noche.");
        nochesHospedaje=parseInt(prompt(nombreCompleto+", ingresa la cantidad de noches de hospedaje en el Hotel Perla Blanca:"));
    }
}

const IVA=1.21;
let precioNoche=35;
let precioTotal=(precioNoche*nochesHospedaje)*IVA;

function calcularPrecioTotal(precio){
    console.log("El precio por noche es de USD $"+precioNoche+", por lo que el precio total en nuestras instalaciones incluyendo el IVA es de USD $"+precioTotal);
}

calcularPrecioTotal();

let numeroCuotas;

function calcularCuotas(precioPorCuota){
    let valorCuotas=precioTotal/numeroCuotas;
    console.log("Ingresaste "+numeroCuotas+" cuotas. El valor de cada cuota es de USD $"+valorCuotas);
}

let descuentoEfectivo=precioTotal*0.90;

let metodoDePago=prompt("Ingresa el método de pago: efectivo, tarjeta de débito o tarjeta de crédito.");
if((metodoDePago=="efectivo")||(metodoDePago=="Efectivo")){
    console.log("El método de pago ingresado es efectivo. Se aplica un descuento en el valor total realizando el pago en efectivo, lo que quedaría en USD $"+descuentoEfectivo);
}else if((metodoDePago=="debito")||(metodoDePago=="débito")||(metodoDePago=="Debito")||(metodoDePago=="Débito")||(metodoDePago=="tarjeta de debito")||(metodoDePago=="tarjeta de débito")||(metodoDePago=="Tarjeta de débito")){
    console.log("El método de pago ingresado es tarjeta de débito.");
}else if((metodoDePago=="credito")||(metodoDePago=="crédito")||(metodoDePago=="Credito")||(metodoDePago=="Crédito")||(metodoDePago=="tarjeta de credito")||(metodoDePago=="tarjeta de crédito")||(metodoDePago=="Tarjeta de crédito")){
    console.log("El método de pago ingresado es tarjeta de crédito.");
    numeroCuotas=parseInt(prompt("Ingresa el número de cuotas: 1, 3, 6 o 12"));
    calcularCuotas();
}else{
    alert("Error. El método de pago que ingresaste no es válido.");
    metodoDePago=prompt("Ingresa el método de pago: efectivo, tarjeta de débito o tarjeta de crédito.");
}

let nombrePersonas=prompt("Ingresa los nombres completos de cada una de las personas a hospedarse en el Hotel Perla Blanca para el check-in (escribe S para salir cuando hayas ingresado todos los nombres)");
let numeroPersonas=0;

while(nombrePersonas!="S"){
    console.log("Ingresaste: "+nombrePersonas);
    numeroPersonas=numeroPersonas+1;
    nombrePersonas=prompt("Ingresa los nombres completos de cada una de las personas a hospedarse en el Hotel Perla Blanca para el check-in (escribe S cuando hayas ingresado todos los nombres)");
}

console.log("¡Perfecto! Ingresaste los nombres de "+numeroPersonas+" personas. Cada persona deberá presentarse en recepción al momento de hacer el check-in con sus respectivos DNI para validar los datos. Muchas gracias por elegirnos.");

function darNumeroReserva(){
    console.log("Tu número de reserva es: 1724");
}

darNumeroReserva();