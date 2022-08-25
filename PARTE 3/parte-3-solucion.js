function ingresarData(){
    
    var usuario = document.querySelector("#usuario").value;
    var clave = document.querySelector("#contrasenia").value;
    var error = document.querySelector(".error")

    var miUsuario = "miUsuario";
    var miClave = "miClave";

    if(usuario == miUsuario && clave === miClave){
        console.log("Â¡IngresÃ³ correctamente!"); 
        mostrarPerfil();
    } else{
        console.log("Datos incorrectos, volvÃ© a intentar")
        error.style.display = "block";
        error.innerHTML = "Datos incorrectos, volvÃ© a intentar"
    }
}

function mostrarPerfil() {

    var cajaPerfil = document.querySelector("#main");


    cajaPerfil.innerHTML = 
        "<div id='caja'>" + 
            "<h3>" + miPerfil[0] + "</h3>" +
            "<p>" + miPerfil[1] + " aÃ±os </p>" +
            "<img src=" + miPerfil[3] + ">" +
            "<h4>" + miPerfil[4] +"</h4>" +
            "<hr>" +
            "<p>" + miPerfil[2] + "</p>" +
        "</div>";

}

var miPerfil = [
    "Juan", 
    27, 
    "juan@mail.com",  
    "img/juan.jpg", 
    "Programador Web Frontend"
]