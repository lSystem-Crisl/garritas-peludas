function procesarContacto() {

    // 1. Declaración de variables

    const patronNombre = /([a-z]{2,}\s?)+/gi;
    const patronTelefono = /^9[0-9]{8}$/;
    const patronCorreo = /^[a-z0-9-_]+\.?[a-z0-9-_]+@[a-z0-9-_]+\.?[a-z]{2,}$/gi;

    let nombre, correo, telefono, asunto, mensaje;
    let respuesta = "";
    let valido = true;

    // 2. Lectura de datos

    nombre = document.getElementById("txtNombre").value;
    correo = document.getElementById("txtCorreo").value;
    telefono = document.getElementById("txtTelefono").value;
    asunto = document.getElementById("txtAsunto").value;
    mensaje = document.getElementById("txtMensaje").value;

    // 3. Proceso: Evaluación de los datos

    // Validar nombre

    let evaluar = patronNombre.test(nombre);

    if (evaluar) {
        respuesta += "Nombre correcto.<br>";
    } else {
        respuesta += "Error en nombre.<br>";
        valido = false;
    }

    // Validar correo

    evaluar = patronCorreo.test(correo);

    if (evaluar) {
        respuesta += "Correo correcto.<br>";
    } else {
        respuesta += "Error en correo.<br>";
        valido = false;
    }

    // Validar teléfono

    evaluar = patronTelefono.test(telefono);

    if (evaluar) {
        respuesta += "Teléfono correcto.<br>";
    } else {
        respuesta += "Error en teléfono.<br>";
        valido = false;
    }

    // Validar asunto

    if (asunto != "") {
        respuesta += "Asunto correcto.<br>";
    } else {
        respuesta += "Ingrese el asunto.<br>";
        valido = false;
    }

    // Validar mensaje

    if (mensaje != "") {
        respuesta += "Mensaje correcto.<br>";
    } else {
        respuesta += "Ingrese el mensaje.<br>";
        valido = false;
    }

    // 4. Mostrar resultado

    if (valido) {
        grabarMensaje();
        document.getElementById("tituloResultado").innerHTML = "Mensaje enviado";
        document.getElementById("mensajeResultado").innerHTML =
            "Tu mensaje fue enviado correctamente.";
    } else {
        document.getElementById("tituloResultado").innerHTML =
            "Resultado de la validación";

        document.getElementById("mensajeResultado").innerHTML =
            respuesta;
    }

    document.getElementById("resultado").style.display = "flex";
}


function cerrarResultado() {

    document.getElementById("resultado").style.display = "none";

}

function grabarMensaje() {

    let nombre = document.getElementById("txtNombre").value;
    let correo = document.getElementById("txtCorreo").value;
    let telefono = document.getElementById("txtTelefono").value;
    let asunto = document.getElementById("txtAsunto").value;
    let mensaje = document.getElementById("txtMensaje").value;

    let ls = localStorage;

    if (ls.getItem("arregloMensajes") == null) {

        let arreglo = [
            {
                nombre: nombre,
                correo: correo,
                telefono: telefono,
                asunto: asunto,
                mensaje: mensaje
            }
        ];

        ls.setItem("arregloMensajes", JSON.stringify(arreglo));

    } else {

        let arreglo = JSON.parse(ls.getItem("arregloMensajes"));

        arreglo.push(
            {
                nombre: nombre,
                correo: correo,
                telefono: telefono,
                asunto: asunto,
                mensaje: mensaje
            }
        );

        ls.setItem("arregloMensajes", JSON.stringify(arreglo));
    }
}