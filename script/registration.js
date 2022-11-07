// Formulario registro de participante en campamento. 
// Variables 
const allParticipants = JSON.parse(localStorage.getItem("participante")) || []; 
let campCost = 2000;
let transportServices = 1000;
let validar = 0;
const userName = document.querySelector("#nombre");
const userEmail = document.querySelector("#email");
const userCountry = document.querySelector("#pais");
const userCity = document.querySelector("#ciudad");
const userAge = document.querySelector("#edad");
const userTransport = document.querySelector("#select-transport");
const userPayment = document.querySelector("#forma-de-pago");
const sendBtn = document.querySelector("#registration-btn");
const resetBtn = document.querySelector("#reset-btn");
const form = document.querySelector(".registration-form")



// Class constructora para registro de participantes

class Participant {
    constructor(name, email, age, country, city, paymentType, transportationAssist){
        this.name = name;
        this.email = email;
        this.age = age;
        this.country = country;
        this.city = city;
        this.paymentType = paymentType;
        this.transportationAssist = transportationAssist; 
    }
}


// Funciones
//Funcion que toma datos del formulario y envia al localStorage

const newParticipant = () => {
    let nombre = userName.value;
    let email = userEmail.value;
    let edad = parseInt(userAge.value);
    let pais = userCountry.value;
    let ciudad = userCity.value;
    let transporte = userTransport.value;
    let metodoPago = userPayment.value;

    let nuevoParticipante = new Participant(nombre, email, edad, pais, ciudad, metodoPago, transporte);
    allParticipants.push(nuevoParticipante);
    localStorage.setItem("participante", JSON.stringify(allParticipants));

    return nuevoParticipante;

}


// Funcion que agrega mensaje de error si el usuario no pone sus datos en input

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.className = "error";
    inputControl.classList.remove('success');

};

// Funcion que agrega clase success a los campos correctos

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    // const errorDisplay = inputControl.querySelector(".error");

    // errorDisplay.innerText = '';
    inputControl.className = "success";
    inputControl.classList.remove('error');
    validar ++
};

// Funcion que valida correo con regex 

const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

//funcion de validacion de datos 

const validateInputs = () => {
    const nombre = userName.value.trim();
    const email = userEmail.value.trim();
    const edad = parseInt(userAge.value.trim());
    const pais = userCountry.value.trim();
    const ciudad = userCity.value.trim();
    const transporte = userTransport.value.trim();
    const metodoPago = userPayment.value.trim();

    if(nombre === ''){
        setError(nombre, 'Nombre completo es obligatorio');
    } else {
        setSuccess(nombre);
    }

    if(email === ''){
        setError(email, 'Correo es obligatorio');
    } else if (!isValidEmail(email)) {
        setError(email, 'Por favor indica un correo valido');
    } else {
        setSuccess(email);
    }

    if(edad === ''){
        setError(edad, 'Edad es obligatoria');
    } else {
        setSuccess(edad);
    }

    if(pais === ''){
        setError(pais, 'Pais es obligatorio');
    } else {
        setSuccess(pais);
    }

    if(ciudad === ''){
        setError(ciudad, 'Ciudad es obligatoria');
    } else {
        setSuccess(ciudad);
    }

    if(transporte === ''){
        setError(transporte, 'Obligatorio seleccionar si o no');
    } else {
        setSuccess(transporte);
    }

    if(metodoPago === ''){
        setError(metodoPago, 'Metodo de pago es obligatorio');
    } else {
        setSuccess(metodoPago);
    }
}


// Evento que ejecuta la funcion anterior

// form?.addEventListener("submit", (e) => {
//     e.preventDefault();
//     validateInputs();
//     newParticipant();
// });

// sendBtn?.addEventListener("click", (e) => {
//     if(validar == 7){
//         newParticipant()
//     }else {
//         e.preventDefault();
//         validar = 0;
//     }
    
// });

sendBtn?.addEventListener("click", () => {
    newParticipant()
});

resetBtn?.addEventListener("click", () => {
    Swal.fire({
        title: 'Datos borrados!',
        icon: 'error'
    })
})
