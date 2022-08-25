/* casi todo el codigo de las partes anteriores */

// funciÃ³n mostrarPerfil 

    // Se agregaron 2 lineas a la concatenaciÃ³n
    // ...
    "<button id='agregarInfo'>Agregar descripcion</button>" +
    "<div id='info'></div>" +
// </div>

// Se agrega el evento de clic al botÃ³n de "agregar descripciÃ³n"
document.querySelector("#agregarInfo").addEventListener("click", fnAgregarInfo);

// cierre funciÃ³n

function fnAgregarInfo() {
var parrafo = prompt("Â¿Que quieres agregar a tu perfil?");
var info = document.querySelector("#info");
info.innerHTML = "<p>" + parrafo + "</p>";

}