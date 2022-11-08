// Pagina de confirmacion donde muestra al usuario los datos que cargo en el formulario.

let listaParticipantes = JSON.parse(localStorage.getItem("participante"));
const contenedor = document.querySelector("#info"); 
const btnConfirmar = document.querySelector("#confirm-btn");
const cancelarBtn = document.querySelector("#cancel-btn"); 
const costoTotal = document.querySelector("#valor-total");
const paymentCost = document.querySelector("#paymentCost");
const botonPagar = document.querySelector("#paymentBtn");
const paymentForm = document.querySelector("#payment-form");
const paymentName = document.querySelector("#paymentName")
const cardNum = document.querySelector("#cardNum")
let validar = 0;

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

// Funcion que agrega mensaje de error si el usuario no pone sus datos en input

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove('success');
};

// Funcion que agrega clase success a los campos correctos

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = '';
    inputControl.classList.add("success");
    inputControl.classList.remove('error');
    validar ++;
};


//funcion de validacion de datos 

const validateInputs = () => {
    const nombre = paymentName.value.trim();
    const numeroTarjeta = parseInt(cardNum.value.trim());

    if(nombre == ''){
        setError(paymentName, 'Nombre completo es obligatorio');
    } else {
        setSuccess(paymentName);
    }

    if(numeroTarjeta == ''){
        setError(cardNum, 'Edad es obligatoria');
    }else if(numeroTarjeta < 16) {
        setError(cardNum, 'Numero invalido, debe contener 16 digitos');
    }else if(numeroTarjeta > 16) {
        setError(cardNum, 'Numero invalido, debe contener 16 digitos')
    }
    else {
        setSuccess(cardNum);
    }

}


//EVENTOS
// una vez enviado en form primero aparece un alert y luego se envia los datos.

paymentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    validateInputs();
    if(validar == 2){
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Pago Realizado',
            showConfirmButton: false,
            timer: 1500
        });
        setTimeout(() => {
            paymentForm.submit();
        }, 1800);
    }else {
        validar = 0;
    }

  
})

// Boton para cancelar el envio de los datos que lleva de vuelta a la pagina del formulario y saca los datos del localStorage.

cancelarBtn.addEventListener("click", () => {
    localStorage.removeItem("participante");
    listaParticipantes.pop()
})

