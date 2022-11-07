// Pagina de confirmacion donde muestra al usuario los datos que cargo en el formulario.

let listaParticipantes = JSON.parse(localStorage.getItem("participante"));
const contenedor = document.querySelector("#info"); 
const btnConfirmar = document.querySelector("#confirm-btn");
const cancelarBtn = document.querySelector("#cancel-btn"); 
const costoTotal = document.querySelector("#valor-total");
const paymentCost = document.querySelector("#paymentCost");
const botonPagar = document.querySelector("#paymentBtn");

//Funcion que calcula total a pagar

const calculateTotal = () => {
    let totalCost = 0;
    listaParticipantes.forEach(participante => {
        if(participante.transportationAssist == 'si' && participante.paymentType == 'tarjeta credito'){
            totalCost = `Total: R$${campCost + transportServices * 1.15} incluye el recargo de 15% por pago con Tarjeta de credito`; 
        }else if(participante.transportationAssist == 'si' && participante.paymentType == 'tarjeta debito') {
            totalCost = `Total: R$${campCost + transportServices}`; 
        }else if(participante.transportationAssist == 'si' && participante.paymentType == 'transferencia') {
            totalCost = `Total: R$${campCost + transportServices}`; 
        }else if(participante.transportationAssist == 'no' && participante.paymentType == 'tarjeta credito') {
            totalCost = `Total: R$${campCost * 1.15} incluye el recargo de 15% por pago con Tarjeta de credito`; 
        }else {
            totalCost = `Total: R$${campCost}`; 
        }
    })
    return totalCost;
}

// Se aplica metodo para mostrar en el HTML los datos enviados por el usuario

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
    paymentCost.innerHTML = `<p class="valor-confirmacion">${calculateTotal()}</p>`
})


//EVENTOS
// boton de confirmacion que genera alert de sweet alert

botonPagar.addEventListener("click", () => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Pago Realizado',
        showConfirmButton: false,
        timer: 1500
    });
})

// Boton para cancelar el envio de los datos que lleva de vuelta a la pagina del formulario y saca los datos del localStorage.

cancelarBtn.addEventListener("click", () => {
    localStorage.removeItem("participante");
    listaParticipantes.pop()
})