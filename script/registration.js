// Formulario registro de participante en campamento. 
// Variables 
const allParticipants = JSON.parse(localStorage.getItem("participante")) || []; 
let campCost = 2000;
let transportServices = 1000;
let userName = document.querySelector("#nombre");
let userEmail = document.querySelector("#email");
let userCountry = document.querySelector("#pais");
let userCity = document.querySelector("#ciudad");
let userAge = document.querySelector("#edad");
let userTransport = document.querySelector("#select-transport");
let userPayment = document.querySelector("#forma-de-pago");
let sendBtn = document.querySelector("#registration-btn")

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
    viewParticipant() {
        if(this.transportationAssist == 'si'){
            return `Recibimos el registro de Nombre: ${this.name} Email: ${this.email} Edad: ${this.age} Pais: ${this.country} Ciudad: ${this.city} Metodo Pago: ${this.paymentType}. Nuestro Equipo va ayudarlos con el transporte`; 
        } else {
            return `Recibimos el registro de Nombre: ${this.name} Email: ${this.email} Edad: ${this.age} Pais: ${this.country} Ciudad: ${this.city} Metodo Pago: ${this.paymentType}. Los padres se hacen cargo del transporte`;
        }
    }
    calculateTotal(){
        let totalCost = 0;
        if(this.transportationAssist == 'si' && this.paymentType == 'tc'){
            totalCost = `El costo total es $${campCost + transportServices * 1.15} incluye el recargo de 15% por pago con TC`; 
        }else if(this.transportationAssist == 'si' && this.paymentType == 'td') {
            totalCost = `El costo total es $${campCost + transportServices}`; 
        }else if(this.transportationAssist == 'si' && this.paymentType == 'tr') {
            totalCost = `El costo total es $${campCost + transportServices}`; 
        }else if(this.transportationAssist == 'no' && this.paymentType == 'tc') {
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
