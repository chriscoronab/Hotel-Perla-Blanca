const habitaciones=[];

class Habitacion{
    constructor(id, nombre, precio, imagen, maximo){
        this.id=id;
        this.nombre=nombre;
        this.precio=precio;
        this.imagen=imagen;
        this.maximo=maximo;
    }
    desplegarHabitacion(){
        const article=`<article class="habitacion">
        <img src=${this.imagen}>
        <div>
            <h2>${this.nombre}</h2>
            <p><strong>Precio por noche:</strong> USD $${this.precio}</p>
            <p>Máximo ${this.maximo} personas</p>
        </div>
        </article>`;
    const sectionHabitaciones=document.querySelector("#habitaciones");
    sectionHabitaciones.innerHTML+=article;
    }
};

fetch("./data.json")
.then(response=>response.json())
.then(data=>{
    data.forEach(hab=>{
        let newHabitacion=new Habitacion(hab.id, hab.nombre, hab.precio, hab.imagen, hab.maximo);
        habitaciones.push(newHabitacion);
    })
    habitaciones.forEach(e=>{
        e.desplegarHabitacion();
    })
});

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
let precioNoche=35;

function calcularNoches(){
    let fechaIngreso=new Date(document.querySelector("#fechaIngreso").value);
    let fechaSalida=new Date(document.querySelector("#fechaSalida").value);
    if(fechaSalida>fechaIngreso){
        let cantidadNoches=fechaSalida.getTime()-fechaIngreso.getTime();
        document.querySelector("#cantidadNoches").value=Math.round(cantidadNoches/(1000*60*60*24));
        calcularPrecioTotal();
    }else if(fechaSalida!=null&&fechaSalida<fechaIngreso){
        alertFecha.innerHTML=`<div class="alert alert-danger" role="alert"><p>
        La fecha de salida debe ser mayor a la fecha de ingreso</p></div>`;
        document.querySelector("#cantidadNoches").value=0;
    }
};

function deshabilitarOpciones(value){
	if(value=="3"||value==false){
        document.querySelector("#habitacionDoble").hidden=true;
        document.querySelector("#tipoHabitacion").value=null;
        document.querySelector("#habitacionTriple").hidden=false;
	}else if(value=="4"||value==false){
        document.querySelector("#habitacionDoble").hidden=true;
		document.querySelector("#habitacionTriple").hidden=true;
        document.querySelector("#tipoHabitacion").value=null;
	}else{
        document.querySelector("#habitacionDoble").hidden=false;
		document.querySelector("#habitacionTriple").hidden=false;
    }
};

function cambiarPrecioNoche(value){
    if(value=="Habitación Triple"){
        precioNoche=40;
    }else if(value=="Habitación Cuádruple"){
        precioNoche=50;
    }else if(value=="Suite"){
        precioNoche=85;
    }
};

function calcularPrecioTotal(){
    let precioTotal=precioNoche*(document.querySelector("#cantidadNoches").value);
    document.querySelector("#precioTotal").value=precioTotal;
}

function enviarMail(){
    emailjs.init("XKf7V2J_ZwcECDBKV");
    emailjs.send("service_fy5or3h","template_2jga7o2",{
        numeroReserva: numeroReserva,
        nombreTitular: nombreTitular.value,
        cantidadPersonas: cantidadPersonas.value,
        tipoHabitacion: tipoHabitacion.value,
        fechaIngreso: fechaIngreso.value,
        fechaSalida: fechaSalida.value,
        cantidadNoches: cantidadNoches.value,
        precioTotal: precioTotal.value,
        metodoPago: metodoPago.value
        });
};

formulario.addEventListener("submit", function (e){
    e.preventDefault();
    enviarMail();
    Swal.fire({
        title: "Tu reserva se realizó con éxito",
        icon: "success",
        confirmButtonText: "OK"
    });
    alertFecha.innerHTML=`<div class="alert alert-danger d-none" role="alert"></div>`;
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
    Precio total: USD $${precioTotal.value}
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
        "precio": parseInt(precioTotal.value),
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
    datosReserva.innerHTML=`<div class="alert alert-success d-none" role="alert"></div>`;
    reservaHecha.innerHTML=`<div class="alert alert-success d-none" role="alert"></div>`;
    botonCancelar.innerHTML=`<button id="botonCancelar" type="button" class="btn btn-danger d-none"></button>`;
    reservaCancelada.innerHTML=`<div class="alert alert-danger" role="alert"><p>Lamentamos tu decisión 😢 Tu reserva ha sido cancelada. Si deseas volver a reservar una habitación, recarga la página.</p></div>`;
});