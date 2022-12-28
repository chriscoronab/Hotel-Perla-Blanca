function bienvenida(){
    alert("Bienvenido/a al sitio web del Hotel Perla Blanca.");
}

bienvenida();

class Reserva{
    constructor(titular, numeroPersonas, noches, fechaIngreso, fechaSalida, numeroReserva){
        this.titular=titular;
        this.numeroPersonas=parseInt(numeroPersonas);
        this.noches=parseInt(noches);
        this.fechaIngreso=fechaIngreso;
        this.fechaSalida=fechaSalida;
        this.numeroReserva=numeroReserva;
    }
    asignarNumeroReserva(reservas){
        this.numeroReserva=reservas.length;
    }
}

const reservas=[];

let ingreso=prompt("Por favor, ingresa los siguientes datos para reservar tu estadía en el Hotel: nombre y apellido del titular, cantidad de personas, cantidad de noches, fecha de ingreso y fecha de salida, separados por una barra diagonal (/).");

let datos=ingreso.split("/");

const reserva=new Reserva(datos[0], datos[1], datos[2], datos[3], datos[4]);
reservas.push(reserva);
reserva.asignarNumeroReserva(reservas);

const habitaciones=[{
    id: 1,
    nombre: "Habitación Doble",
    precio: 35,
}, {
    id: 2,
    nombre: "Habitación Triple",
    precio: 40,
}, {
    id: 3,
    nombre: "Habitación Cuádruple",
    precio: 50,
}, {
    id: 4,
    nombre: "Habitación Suite",
    precio: 85,
},
]

let criterio=prompt("Elige el criterio deseado para ver las habitaciones disponibles: \n1- De menor a mayor precio. \n2- De mayor a menor precio.");

function ordenar(criterio, habitaciones){
    let arrayOrdenado=habitaciones.slice(0);
    switch(criterio){
        case "1":
            return arrayOrdenado.sort((a, b)=>a.precio-b.precio);
        case "2":
            return arrayOrdenado.sort((a, b)=>b.precio-a.precio);
        default:
            alert("Error. No es un criterio válido.");
            criterio=prompt("Elige el criterio deseado para ver las habitaciones disponibles: \n1- De menor a mayor precio. \n2- De mayor a menor precio.");
    }
}

function crearResultado(habitaciones){
    let info=""
    habitaciones.forEach(elemento=>{
        info+="Tipo: "+elemento.nombre+". Precio: USD $"+elemento.precio+".\n\n"
    });
    return info;
}

alert(crearResultado(ordenar(criterio, habitaciones)));

const servicios=["Aire acondicionado", "Baño privado", "TV LED con cable", "Cama sommier", "Frigobar", "Pava eléctrica", "Salón desayunador", "Sala de juegos", "Wi-Fi", "Estacionamiento cubierto"];

alert("Todas las habitaciones cuentan con: \n"+servicios.join("\n"));

let metodoDePago=prompt("Elige el método de pago: \n1- Efectivo. \n2- Débito. \n3- Crédito.");
if((metodoDePago.toLowerCase()=="efectivo")||(metodoDePago=="1")){
    alert("El método de pago ingresado es efectivo.");
}else if((metodoDePago.toLowerCase()=="debito")||(metodoDePago.toLowerCase()=="débito")||(metodoDePago=="2")){
    alert("El método de pago ingresado es tarjeta de débito.");
}else if((metodoDePago.toLowerCase()=="credito")||(metodoDePago.toLowerCase()=="crédito")||(metodoDePago=="3")){
    numeroCuotas=parseInt(prompt("El método de pago ingresado es tarjeta de crédito. \nIngresa el número de cuotas: 3, 6 o 12"));
    for(let i=1; i<=3;i++){
        if((numeroCuotas=="3")||(numeroCuotas=="6")||(numeroCuotas=="12")){
            alert("Elegiste: "+numeroCuotas+" cuotas.");
            break;
        }else{
            alert("Error. El número de cuotas permitido son: 3, 6 o 12.");
            numeroCuotas=parseInt(prompt("Vuelve a ingresar el número de cuotas: 3, 6 o 12."));
        }
    }
}else{
    alert("Error. El método de pago que ingresaste no es válido.");
    metodoDePago=prompt("Elige el método de pago: \n1- Efectivo. \n2- Débito. \n3- Crédito.");
}

let nombre=prompt("Ingresa el nombre completo de cada una de las personas a hospedarse en el Hotel Perla Blanca para el check-in. \nPresiona X para finalizar cuando hayas ingresado todas las personas.");

numeroPersonas=0;

while(nombre.toUpperCase()!="X"){
    numeroPersonas=numeroPersonas+1;
    nombre=prompt("Ingresa el nombre completo de cada una de las personas a hospedarse en el Hotel Perla Blanca para el check-in. \nPresiona X para finalizar cuando hayas ingresado todos los nombres.");
}

alert("¡Perfecto! Estas "+numeroPersonas+" personas deberán presentarse en recepción al momento de hacer el check-in con sus respectivos DNI para validar los datos. Muchas gracias por elegirnos.");

function darDatosReserva(reservas){
    let datosReserva=""
    reservas.forEach(elemento=>{
        datosReserva+="Datos de Reserva: \nNombre del titular: "+elemento.titular+"\nCantidad de personas: "+elemento.numeroPersonas+"\nCantidad de noches: "+elemento.noches+"\nFecha de ingreso: "+elemento.fechaIngreso+"\nFecha de salida: "+elemento.fechaSalida
    });
    return datosReserva;
}

alert(darDatosReserva(reservas));

let numeroReserva=Math.random()*5000;

function darNumeroReserva(){
    alert("Tu número de reserva es: "+Math.round(numeroReserva));
}

darNumeroReserva();