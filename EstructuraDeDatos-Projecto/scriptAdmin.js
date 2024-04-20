function redireccionar() {

    window.location.href = 'index.html';
}

    
document.getElementById("precioForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const precio1 = document.getElementById("precio1").value;
    const precio2 = document.getElementById("precio2").value;
    const precio3 = document.getElementById("precio3").value;

    if((precio1 > 0 && precio1 != null ) && (precio2 > 0 && precio2 != null ) && (precio3 > 0 && precio3 != null )){
        
        const nuevaURL = `empleado.html?precio1=${precio1}&precio2=${precio2}&precio3=${precio3}`;
    
        window.location.href = nuevaURL;
    }

    
});
