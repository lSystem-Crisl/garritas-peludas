function mostrarServicio(servicio) {

    let titulo = "";
    let descripcion = "";

    if (servicio == "consulta") {
        titulo = "Consulta Veterinaria";
        descripcion = "Realizamos evaluaciones médicas, controles preventivos y diagnósticos para conocer el estado de salud de tu mascota.";
    }

    if (servicio == "vacunacion") {
        titulo = "Vacunación";
        descripcion = "Contamos con planes de vacunación para ayudar a proteger a las mascotas frente a diferentes enfermedades.";
    }

    if (servicio == "cirugia") {
        titulo = "Cirugía";
        descripcion = "Realizamos procedimientos quirúrgicos con profesionales especializados y equipos adecuados.";
    }

    if (servicio == "desparasitacion") {
        titulo = "Desparasitación";
        descripcion = "Ofrecemos tratamientos para prevenir y controlar parásitos internos y externos en las mascotas.";
    }

    if (servicio == "peluqueria") {
        titulo = "Baño y Peluquería";
        descripcion = "Servicio de higiene y cuidado estético para mantener limpia y saludable a tu mascota.";
    }

    if (servicio == "farmacia") {
        titulo = "Farmacia Veterinaria";
        descripcion = "Disponemos de medicamentos y productos veterinarios para complementar el cuidado de las mascotas.";
    }

    document.getElementById("titulo-servicio").innerHTML = titulo;

    document.getElementById("descripcion-servicio").innerHTML = descripcion;

    let seccion = document.getElementById("informacion-servicio");

    window.scrollTo({
        top: seccion.offsetTop - 180,
        behavior: "smooth"
    });

}