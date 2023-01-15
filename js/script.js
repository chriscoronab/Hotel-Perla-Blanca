let formulario=document.querySelector("#formulario");
let nombreTitular=document.querySelector("#nombreApellido");
let correoElectronico=document.querySelector("#correoElectronico");
let telefono=document.querySelector("#telefono");
let cantidadPersonas=document.querySelector("#cantidadPersonas");
let tipoHabitacion=document.querySelector("#tipoHabitacion");
let metodoPago=document.querySelector("#metodoPago");
let datosReserva=document.querySelector("#datosReserva");
let numeroReserva=Math.round(Math.random()*5000);
let boton=document.querySelector("#boton");
let alertFecha=document.querySelector("#alertFecha");
let reservaHecha=document.querySelector("#reservaHecha");
let inputsFormulario=document.querySelector("#inputsFormulario");
let botonCancelar=document.querySelector("#botonCancelar");
let reservaCancelada=document.querySelector("#reservaCancelada");

function calcularNoches(){
    let fechaIngreso=new Date(document.querySelector("#fechaIngreso").value);
    let fechaSalida=new Date(document.querySelector("#fechaSalida").value);
    if(fechaSalida>fechaIngreso){
        let cantidadNoches=fechaSalida.getTime()-fechaIngreso.getTime();
        document.querySelector("#cantidadNoches").value=Math.round(cantidadNoches/(1000*60*60*24));
    }
    else if(fechaSalida!=null&&fechaSalida<fechaIngreso){
        alertFecha.innerHTML=`<div class="alert alert-danger" role="alert"><p>
        La fecha de salida debe ser mayor a la fecha de ingreso</p></div>`;
        document.querySelector("#cantidadNoches").value=0;
    }
};

formulario.addEventListener("submit", function (e){
    e.preventDefault();
    alertFecha.innerHTML=`<div class="alert alert-danger d-none" role="alert"><p>
    La fecha de salida debe ser mayor a la fecha de ingreso</p></div>`;
    datosReserva.innerHTML=`
    <div class="alert alert-success" role="alert"><p>¡Gracias por confiar en nosotros! Te enviamos un correo a ${correoElectronico.value} con los datos de tu reserva 😉
    <br>
    <br>
    Datos de tu reserva:
    <br>
    Nombre del titular: ${nombreTitular.value}
    <br>
    Cantidad de personas: ${cantidadPersonas.value}
    <br>
    Tipo de habitación: ${tipoHabitacion.value}
    <br>
    Fecha de ingreso: ${fechaIngreso.value}
    <br>
    Fecha de salida: ${fechaSalida.value}
    <br>
    Cantidad de noches: ${cantidadNoches.value}
    <br>
    Método de pago: ${metodoPago.value}
    <br>
    Número de reserva: ${numeroReserva}
    <br>
    <br>
    No olvides presentarte en recepción al momento de hacer el check-in con los respectivos DNI para validar los datos.</p>
    </div>`;
    inputsFormulario.innerHTML=`<form id="inputsFormulario" class="container d-none">`;
    botonCancelar.innerHTML=`<button type="button" class="btn btn-danger">Cancelar Reserva</button>`;
});

const reservas=[];

boton.addEventListener("click", ()=>{
    const reserva={
        "nombre": nombreTitular.value,
        "email": correoElectronico.value,
        "telefono": telefono.value,
        "personas": parseInt(cantidadPersonas.value),
        "habitacion": tipoHabitacion.value,
        "ingreso": fechaIngreso.value,
        "salida": fechaSalida.value,
        "noches": parseInt(cantidadNoches.value),
        "pago": metodoPago.value,
        "numero reserva": numeroReserva
    }
    reservas.push(reserva);
    localStorage.setItem("reserva", JSON.stringify(reserva));
    sessionStorage.setItem("reserva", JSON.stringify(reserva));
});

function recuperarDatosReserva(storage){
    let datosReservaRecuperados=JSON.parse(storage.getItem("reserva"));
    return datosReservaRecuperados;
};

function yaReservo(reserva){
    if(reserva){
        reservaHecha.innerHTML=`<div class="alert alert-success" role="alert"><p>¡Hola, ${reserva.nombre}! Ya tienes una reserva hecha en el Hotel Perla Blanca desde el ${reserva.ingreso} hasta el ${reserva.salida}.</p></div>`;
        inputsFormulario.innerHTML=`<form id="inputsFormulario" class="container d-none">`;
        botonCancelar.innerHTML=`<button type="button" class="btn btn-danger">Cancelar Reserva</button>`;
    }
};

window.onload=()=>{
    yaReservo(recuperarDatosReserva(localStorage));
};

botonCancelar.addEventListener("click", ()=>{
    localStorage.clear();
    sessionStorage.clear();
    datosReserva.innerHTML=`
    <div class="alert alert-success d-none" role="alert"></div>`;
    reservaHecha.innerHTML=`<div class="alert alert-success d-none" role="alert"></div>`;
    botonCancelar.innerHTML=`<button id="botonCancelar" type="button" class="btn btn-danger d-none"></button>`;
    reservaCancelada.innerHTML=`<div class="alert alert-danger" role="alert"><p>Lamentamos tu decisión 😢 Tu reserva ha sido cancelada con éxito. Si deseas volver a reservar una habitación, recarga la página.</p></div>`;
});

const habitaciones=[{
    id: 1,
    nombre: "Habitación Doble",
    precio: 35
}, {
    id: 2,
    nombre: "Habitación Triple",
    precio: 40
}, {
    id: 3,
    nombre: "Habitación Cuádruple",
    precio: 50
}, {
    id: 4,
    nombre: "Suite",
    precio: 85
}];

const servicios=["Aire acondicionado", "Baño privado", "TV LED con cable", "Cama sommier", "Frigobar", "Pava eléctrica", "Salón desayunador", "Sala de juegos", "Wi-Fi", "Estacionamiento cubierto"];