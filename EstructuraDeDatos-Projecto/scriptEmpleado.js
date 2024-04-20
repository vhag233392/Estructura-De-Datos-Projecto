let objetosArray2 = [100, 200, 300];
let objetosArray3 = [];

let miFuncion = (a, b, c) => {
    let objetosArray = [a, b, c];

    objetosArray3.push(objetosArray[0] * objetosArray2[0]);
    console.log("Producto 1: " + (objetosArray[0] * objetosArray2[0]));
    objetosArray3.push(objetosArray[1] * objetosArray2[1]);
    console.log("Producto 2: " + (objetosArray[1] * objetosArray2[1]));
    objetosArray3.push(objetosArray[2] * objetosArray2[2]);
    console.log("Producto 3: " + (objetosArray[2] * objetosArray2[2]));

    const total = objetosArray3.reduce((d, v) => {
        return d + v;
    });

    console.log("Total a pagar: " + total + "$");
    return [objetosArray[0] * objetosArray2[0], objetosArray[1] * objetosArray2[1], objetosArray[2] * objetosArray2[2], total];
}

function calcularTotal() {
    let cantidad1 = parseInt(document.getElementById("cantidad1").value) || 0;
    let cantidad2 = parseInt(document.getElementById("cantidad2").value) || 0;
    let cantidad3 = parseInt(document.getElementById("cantidad3").value) || 0;
    let pagoCliente = parseInt(document.getElementById("pagoCliente").value) || 0;
    
    

    let resultados = miFuncion(cantidad1, cantidad2, cantidad3);
    
    let resultadosDiv = document.getElementById("resultados");
    if (pagoCliente < resultados[3]) {
        resultados[3]="Pago Insuficiente"
        resultadosDiv.innerHTML = `
        <p>TOTAL --> ${resultados[3]}$ <-- </p>
        `
    }
    else{
    resultadosDiv.innerHTML = `
        <p>Bolas Del Dragron (Decoracion) --> ${resultados[0]}$</p>
        <p>Muñeca --> ${resultados[1]}$</p>
        <p>KATANA --> ${resultados[2]}$</p>
        <p>TOTAL --> ${resultados[3]}$ <-- </p>
        <p>Cambio --> ${pagoCliente - resultados[3]}</p>
    `;
    }

    objetosArray3 = []; 
    
}

function redireccionar() {

    window.location.href = 'index.html';
}




 function obtenerParametroURL(nombre) {
    let parametrosURL = new URLSearchParams(window.location.search);
    return parametrosURL.get(nombre);
}


let nuevoPrecio1 = obtenerParametroURL('precio1');
let nuevoPrecio2 = obtenerParametroURL('precio2');
let nuevoPrecio3 = obtenerParametroURL('precio3');

if (nuevoPrecio1 !== null && nuevoPrecio2 !== null && nuevoPrecio3 !== null) {
    objetosArray2[0] = parseInt(nuevoPrecio1);
    objetosArray2[1] = parseInt(nuevoPrecio2);
    objetosArray2[2] = parseInt(nuevoPrecio3);
}


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("precio1").value = nuevoPrecio1 || objetosArray2[0];
    document.getElementById("precio2").value = nuevoPrecio2 || objetosArray2[1];
    document.getElementById("precio3").value = nuevoPrecio3 || objetosArray2[2];
});