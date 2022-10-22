// Pagina de confirmacion donde muestra al usuario los datos que cargo en el formulario.

let listaParticipantes = JSON.parse(localStorage.getItem("participante"));
const contenedor = document.querySelector("#info"); 
const btnConfirmar = document.querySelector("#confirm-btn");
const cancelarBtn = document.querySelector("#cancel-btn"); 
const costoTotal = document.querySelector("#valor-total");

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


// boton de confirmacion que genera alert de sweet alert

btnConfirmar.addEventListener("click", () => {
    Swal.fire({
        title: 'Registro confirmado!',
        icon: 'success'
    })
})

// Boton para cancelar el envio de los datos que lleva de vuelta a la pagina del formulario y saca los datos del localStorage.

cancelarBtn.addEventListener("click", () => {
    localStorage.removeItem("participante");
})