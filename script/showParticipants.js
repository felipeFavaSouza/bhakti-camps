const contenedorDatos = document.querySelector("#contenedor-datos");
const botonAdmin = document.querySelector("#btn-admin")

// Fetch que trae los datos de los participantes de la base de datos JSON. 

const obtenerDatos = async () => {
    try{
        let response = await fetch("../datos/datos-participantes.json");
        let result = await response.json();
        let datos = result;
        datos.forEach(dato => {
            contenedorDatos.innerHTML += `
                <h4>Nombre: ${dato.name}</h4>
                <p>Email: ${dato.email}</p>
                <p>Pais: ${dato.country}</p>
                <p>Ciudad: ${dato.city}</p>
                <p>Edad: ${dato.age}</p>
                <p>Asistencia en Transporte: ${dato.transportationAssist}</p>
                <p>Metodo de Pago: ${dato.paymentType}</p>
                <br>
            `
        });
    } catch(error) {
        contenedorDatos.innerHTML = `<p>${error}</p>`;
    }

}

botonAdmin.addEventListener('click', () => {
    obtenerDatos();
})