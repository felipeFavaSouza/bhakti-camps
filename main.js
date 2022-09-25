const campCost = 2000;
let totalCost = 0;
let paymentType = prompt('Por favor elija un metodo de pago. "tc" para tarjeta de credito "ef" para efectivo o "tf" para transferencia');

const calculateTotal = () => {
    let childQuantity = parseInt(prompt('Cuantos hijos te gustaria enviar al campamento?'));
    if(childQuantity === 2) {
        totalCost = (campCost * 2) * 0.9;
        alert(`Enviado 2 hijos obtendras un descuento de 10% llevando el costo total a $ ${totalCost}`);
        return totalCost;
    } else if(childQuantity >= 3){
        totalCost = (campCost * childQuantity) * 0.85;
        alert(`Enviado ${childQuantity} hijos obtendras un descuento de 15% llevando el costo total a $ ${totalCost}`);
        return totalCost;
    }

}

if(paymentType === 'tc'){
    alert('En este caso no contas con descuento');
}else if(paymentType === 'ef' || paymentType === 'tf'){
    calculateTotal();
}

