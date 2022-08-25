
// FUNCION
function ingresarData(){
    // variable y DOM 
    var usuario = document.querySelector("#usuario").value;
    var clave = document.querySelector("#contrasenia").value;
    var error = document.querySelector(".error")
    
    var miUsuario = "Diego";
    var miClave = "Clave";
    
    // CONDICIONAL
    if(usuario == miUsuario && clave == miClave){
        console.log("¡Ingresó correctamente!"); 
        mostrarPerfil();
    } else{
        console.error("Datos incorrectos, volvé a intentar")
        error.style.display = "block";
        error.innerHTML = "Datos incorrectos, volvé a intentar"
    }
}


//La funcion mostrarPerfil para mostrar al usuario
function mostrarPerfil() {
    var cajaPerfil = document.querySelector("#main");
    

    cajaPerfil.innerHTML = 
        "<div id='caja'>" + 
            "<h3>" + miPerfil[0] + "</h3>" +
            "<p>" + miPerfil[1] + " años </p>" +
            "<img src=" + miPerfil[3] + ">" +
            "<h4>" + miPerfil[4] +"</h4>" +
            "<hr>" +
            "<p>" + miPerfil[2] + "</p>" +
            "<button id='agregarInfo'>Agregar descripcion</button>" +
            "<div id='info'></div>" +
        "</div>" ;
    
    document.querySelector('#agregarInfo').addEventListener("click", fnAgregarInfo);
}

// Array miPerfil
var miPerfil = [
    "Juan", 
    27, 
    "juan@mail.com",  
    "img/chico1.jpg", 
    "Programador Web Frontend"
]


function fnAgregarInfo() {
    var parrafo = prompt("¿Que quieres agregar a tu perfil?");
    var info = document.querySelector("#info");
    info.innerHTML = "<p>" + parrafo + "</p>";
}