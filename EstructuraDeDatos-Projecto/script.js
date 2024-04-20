document.addEventListener('DOMContentLoaded', function () {
    const adminUser = "admin";
    const adminPin = "777";
    const empleadoUser = "empleado";
    const empleadoPin = "123";

    const usuarioInput = document.querySelector('.entrada[type="text"]');
    const pinInput = document.querySelector('.entrada[type="password"]');
    const botonInicioSesion = document.querySelector('.boton');

    botonInicioSesion.addEventListener('click', function () {
        const usuario = usuarioInput.value.trim();
        const pin = pinInput.value.trim();

        if (usuario == adminUser && pin == adminPin) {
      
            window.location.href = 'admin.html';
        } else if (usuario === empleadoUser && pin === empleadoPin) {
            
            window.location.href = 'empleado.html';
        } else {
            
            alert('Usuario o PIN incorrecto');
        }
    });
});


