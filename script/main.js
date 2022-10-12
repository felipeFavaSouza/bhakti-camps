// Formulario registro de participante en campamento. 

const allParticipants = []; 

class Participant {
    constructor(name, age, country, city, paymentType, transportationAssist){
        this.name = name;
        this.age = age;
        this.country = country;
        this.city = city;
        this.paymentType = paymentType;
        this.transportationAssist = transportationAssist; 
    }
    viewParticipant() {
        if(this.transportationAssist == 'si'){
            return `Recibimos el registro de Nombre: ${this.name} Edad: ${this.age} Pais: ${this.country} Ciudad: ${this.city} Metodo Pago: ${this.paymentType}. Nuestro Equipo va ayudarlos con el transporte`; 
        } else {
            return `Recibimos el registro de Nombre: ${this.name} Edad: ${this.age} Pais: ${this.country} Ciudad: ${this.city} Metodo Pago: ${this.paymentType}. Los padres se hacen cargo del transporte`;
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


const campCost = 2000;
const transportServices = 1000;
let initialInput = prompt('Hola! Te gustaria registrar a tu Hijo/a al campamento? "Si" o "No"? Para salir del formulario escribi "Salir". Para saber la cantidad de participantes indica "Cantidad"').toLowerCase();

const newParticipant = () => {
    let nombre = prompt('Indiquenos el nombre del participante').toLowerCase();
    let edad = parseInt(prompt('Indiquenos la edad del participante')); 
    let pais = prompt('Indiquenos el pais del participante').toLowerCase();
    let ciudad = prompt('Indiquenos la ciudad del participante').toLowerCase();
    let metodoPago = prompt('Como hara el pago de la inscripcion? Para Tarjeta de Credito escriba "TC", para debito "TD" y transferencia "TR"').toLowerCase();
    let transporte = prompt('El/La Participante va necesitar ayuda en el transporte?').toLowerCase();

    let nuevoParticipante = new Participant(nombre, edad, pais, ciudad, metodoPago, transporte);
    allParticipants.push(nuevoParticipante);

    return nuevoParticipante;

}


while(initialInput != 'salir'){
    if(initialInput == 'cantidad'){
        alert(`Ya tenemos a ${allParticipants.length} inscriptos`)
    }else if (initialInput == 'si'){
        let secondInput = prompt(`El costo por cada participante es de $${campCost} y el Transporte cuesta $${transportServices}. Desea continuar? "Si" o "No"`).toLowerCase();
        if(secondInput == 'si'){
            let participante = newParticipant();
            alert(participante.viewParticipant());
            alert(participante.calculateTotal()); 
        }
    }else {
        alert('Es una pena no tenerlos en este camping');
    }
    initialInput = prompt('Hola! Te gustaria registrar a tu Hijo/a al campamento? "Si" o "No"? Para salir del formulario escribi "Salir". Para saber la cantidad de participantes indica "Cantidad"').toLowerCase();
}

