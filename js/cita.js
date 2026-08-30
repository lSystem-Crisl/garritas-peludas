function procesar() {

    // 1. Declaración de variables
    const patronNombre = /^[a-z]{2,}( [a-z]{2,}){0,2}$/i;
    const patronMascota = /^[a-z]{2,}$/gi;
    const patronTelefono = /^9[0-9]{8}$/;

    let propietario, mascota, tipoMascota, servicio;
    let fecha, hora, telefono, motivo;
    let respuesta = "";
    let valido = true;

    // 2. Lectura de datos

    propietario = document.getElementById("propietario").value;
    mascota = document.getElementById("mascota").value;
    tipoMascota = document.getElementById("tipoMascota").value;
    servicio = document.getElementById("servicio").value;
    fecha = document.getElementById("fecha").value;
    hora = document.getElementById("hora").value;
    telefono = document.getElementById("telefono").value;
    motivo = document.getElementById("motivo").value;

    // 3. Proceso: Evaluación de los datos

    // Validar propietario

    let evaluar = patronNombre.test(propietario);

    if (evaluar) {
        respuesta += "Propietario correcto.<br>";
    } else {
        respuesta += "Error en nombre del propietario.<br>";
        valido = false;
    }

    // Validar mascota

    evaluar = patronMascota.test(mascota);
    if (evaluar) { respuesta += "Nombre de mascota correcto.<br>"; }
    else { respuesta += "Error en nombre de mascota.<br>"; valido = false; }

    // Validar tipo de mascota

    if (tipoMascota != "") {
        respuesta += "Tipo de mascota correcto.<br>";
    } else {
        respuesta += "Seleccione el tipo de mascota.<br>"; valido = false;
    }


    // Validar servicio

    if (servicio != "") { respuesta += "Servicio correcto.<br>"; }
    else { respuesta += "Seleccione un servicio.<br>"; valido = false; }

    // Validar fecha

    if (fecha != "") {

        let fechaActual = new Date().toISOString().split("T")[0];

        if (fecha >= fechaActual) {
            respuesta += "Fecha correcta.<br>";
        } else {
            respuesta += "La fecha no puede ser anterior a hoy.<br>"; valido = false;
        }

    } else {
        respuesta += "Seleccione una fecha.<br>"; valido = false;
    }

    // Validar hora

    if (hora != "") { respuesta += "Hora correcta.<br>"; }
    else { respuesta += "Seleccione una hora.<br>"; valido = false; }

    // Validar teléfono

    evaluar = patronTelefono.test(telefono);

    if (evaluar) {
        respuesta += "Teléfono correcto.<br>";
    } else {
        respuesta += "Error en teléfono.<br>"; valido = false;
    }

    // Validar motivo

    if (motivo != "") {
        respuesta += "Motivo correcto.<br>";
    } else {
        respuesta += "Ingrese el motivo de la consulta.<br>"; valido = false;
    }

    // Validar si la fecha y hora ya están ocupadas

    if (valido) {
        if (citaOcupada(fecha, hora)) {
            respuesta += "La fecha y hora seleccionadas ya están ocupadas.<br>";
            valido = false;
        } else {
            respuesta += "Fecha y hora disponibles.<br>";
            grabarCita();
            respuesta = "Cita registrada correctamente.";
        }
    }
    // 4. Mostrar resultado
    document.getElementById("tituloResultado").innerHTML = "Resultado de la validación";
    document.getElementById("mensajeResultado").innerHTML = respuesta;
    document.getElementById("resultado").style.display = "flex";
}


function cerrarResultado() {

    document.getElementById("resultado").style.display = "none";

}

function citaOcupada(fecha, hora) {

    let ls = localStorage;

    if (ls.getItem("arregloCitas") == null) {
        return false;
    }

    let arreglo = JSON.parse(ls.getItem("arregloCitas"));
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i].fecha == fecha && arreglo[i].hora == hora) {
            return true;
        }
    }

    return false;
}

function grabarCita() {

    let propietario = document.getElementById("propietario").value;
    let mascota = document.getElementById("mascota").value;
    let tipoMascota = document.getElementById("tipoMascota").value;
    let servicio = document.getElementById("servicio").value;
    let fecha = document.getElementById("fecha").value;
    let hora = document.getElementById("hora").value;
    let telefono = document.getElementById("telefono").value;
    let motivo = document.getElementById("motivo").value;

    let ls = localStorage;

    if (ls.getItem("arregloCitas") == null) {

        let arreglo = [
            {
                propietario: propietario,
                mascota: mascota,
                tipoMascota: tipoMascota,
                servicio: servicio,
                fecha: fecha,
                hora: hora,
                telefono: telefono,
                motivo: motivo
            }
        ];

        ls.setItem("arregloCitas", JSON.stringify(arreglo));

    } else {

        let arreglo = JSON.parse(ls.getItem("arregloCitas"));

        arreglo.push(
            {
                propietario: propietario,
                mascota: mascota,
                tipoMascota: tipoMascota,
                servicio: servicio,
                fecha: fecha,
                hora: hora,
                telefono: telefono,
                motivo: motivo
            }
        );

        ls.setItem("arregloCitas", JSON.stringify(arreglo));
    }
}