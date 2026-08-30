function mostrarCitas() {

    // 1. Declaración de variables

    let fechaConsulta;
    let ls = localStorage;
    let respuesta = "";

    // Horarios de atención
    let horarios = [
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00"
    ];

    // 2. Lectura de datos

    fechaConsulta = document.getElementById("fechaConsulta").value;

    // 3. Validar que se haya seleccionado una fecha

    if (fechaConsulta == "") {

        respuesta = "<p>Seleccione una fecha para consultar los horarios.</p>";

    } else {

        // 4. Verificar si existen citas guardadas

        let arreglo = [];

        if (ls.getItem("arregloCitas") != null) {

            arreglo = JSON.parse(ls.getItem("arregloCitas"));

        }

        // 5. Mostrar los horarios

        respuesta = "";

        for (let i = 0; i < horarios.length; i++) {

            let ocupado = false;

            // 6. Buscar si el horario está ocupado

            for (let j = 0; j < arreglo.length; j++) {

                if (arreglo[j].fecha == fechaConsulta &&
                    arreglo[j].hora == horarios[i]) {

                    ocupado = true;

                }

            }

            // 7. Mostrar resultado

            if (i == 0) {
                respuesta += `
        <table>
            <tr>
                <th>Hora</th>
                <th>Estado</th>
            </tr>
    `;
            }

            if (ocupado) {

                respuesta += `
        <tr>
            <td>${horarios[i]}</td>
            <td>Ocupado</td>
        </tr>
    `;

            } else {

                respuesta += `
        <tr>
            <td>${horarios[i]}</td><td>Disponible</td></tr>    `;
            }

            if (i == horarios.length - 1) {
                respuesta += "</table>";
            }
        }
    }

    // 8. Mostrar resultado en la página

    document.getElementById("listaHorarios").innerHTML = respuesta;
}