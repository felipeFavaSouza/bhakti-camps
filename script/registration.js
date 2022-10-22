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
    calculateTotal(){
        let totalCost = 0;
        if(this.transportationAssist == 'si' && this.paymentType == 'tarjeta credito'){
            totalCost = `El costo total es $${campCost + transportServices * 1.15} incluye el recargo de 15% por pago con TC`; 
        }else if(this.transportationAssist == 'si' && this.paymentType == 'tarjeta debito') {
            totalCost = `El costo total es $${campCost + transportServices}`; 
        }else if(this.transportationAssist == 'si' && this.paymentType == 'transferencia') {
            totalCost = `El costo total es $${campCost + transportServices}`; 
        }else if(this.transportationAssist == 'no' && this.paymentType == 'tarjeta credito') {
            totalCost = `El costo total es $${campCost * 1.15} incluye el recargo de 15% por pago con TC`; 
        }else {
            totalCost = `El costo total es $${campCost}`; 
        }
        return totalCost;
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

sendBtn.addEventListener("click", () => {
    newParticipant();
})
