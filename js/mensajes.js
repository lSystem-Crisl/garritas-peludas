// Leer los mensajes guardados

let arregloMensajes = JSON.parse(localStorage.getItem("arregloMensajes")) || [];

let lista = document.getElementById("listaMensajes");

let respuesta = "";

for (let i = 0; i < arregloMensajes.length; i++) {

    respuesta += "<div class='mensaje'>";

    respuesta += "<h3>" + arregloMensajes[i].asunto + "</h3>";

    respuesta += "<p><strong>Nombre:</strong> "
        + arregloMensajes[i].nombre + "</p>";

    respuesta += "<p><strong>Correo:</strong> "
        + arregloMensajes[i].correo + "</p>";

    respuesta += "<p><strong>Teléfono:</strong> "
        + arregloMensajes[i].telefono + "</p>";

    respuesta += "<p><strong>Mensaje:</strong> "
        + arregloMensajes[i].mensaje + "</p>";

    respuesta += "</div>";

}

lista.innerHTML = respuesta;