// Formulario registro de participante en campamento. 
// Variables 
const allParticipants = JSON.parse(localStorage.getItem("participante")) || []; 
let campCost = 2000;
let transportServices = 1000;
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

// Evento que ejecuta la funcion anterior


sendBtn?.addEventListener("click", () => {
    newParticipant()
});

resetBtn?.addEventListener("click", () => {
    Swal.fire({
        title: 'Datos borrados!',
        icon: 'error'
    })
})
