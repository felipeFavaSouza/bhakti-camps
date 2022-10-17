// Pagina de confirmacion donde muestra al usuario los datos que cargo en el formulario.

let listaParticipantes = JSON.parse(localStorage.getItem("participante"));
let contenedor = document.querySelector("#info"); 
let cancelarBtn = document.querySelector("#cancel-btn"); 

listaParticipantes.forEach(participante => {
    contenedor.innerHTML = `
        <p>Nombre: ${participante.name}</p>
        <p>Email: ${participante.email}</p>
        <p>Pais: ${participante.country}</p>
        <p>Ciudad: ${participante.city}</p>
        <p>Edad: ${participante.age}</p>
        <p>Asistencia en Transporte: ${participante.transportationAssist}</p>
        <p>Metodo de Pago: ${participante.paymentType}</p>
    `
})

// Boton para cancelar el envio de los datos que lleva de vuelta a la pagina del formulario y saca los datos del localStorage.

cancelarBtn.addEventListener("click", () => {
    localStorage.removeItem("participante");
})