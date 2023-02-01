//esta funcion despliega el menú
function desplegarMenu(){
    document.getElementById("menu_desplegable").style.opacity = "1";
    document.getElementById("menu_desplegable").style.visibility = "visible";
}

//esta funcion esconde el menú
function guardarMenu(){
    document.getElementById("menu_desplegable").style.opacity = "0";
    document.getElementById("menu_desplegable").style.visibility = "hidden";
}

//esta función esconde la caja de texto
function ocultarContenedorTexto(){
    document.getElementById("contenedor").style.display = "none";
    document.getElementById("menu_desplegable").style.opacity = "1";
    document.getElementById("menu_desplegable").style.pointerEvents = "auto";
}

//esta función muestra la caja de texto "carta 1"
function mostrarCarta1(){
    document.getElementById("contenedor").style.display = "block";
    document.getElementById("caja_de_texto--contacto").style.display = "none";
    document.getElementById("caja_de_texto--carta1").style.display = "block";
    document.getElementById("caja_de_texto--carta2").style.display = "none";
    document.getElementById("carta_responsiva").style.display = "none";
    document.getElementById("caja_de_texto--portafolio").style.display = "none";
    document.getElementById("caja_de_texto--objetivo").style.display = "none";
    document.getElementById("caja_de_texto--formacion1").style.display = "none";
    document.getElementById("caja_de_texto--formacion2").style.display = "none";
    document.getElementById("formacion_alt").style.display = "none";
    document.getElementById("caja_de_texto--datos--personales").style.display = "none";
    document.getElementById("caja_de_texto--experiencia1").style.display = "none";
    document.getElementById("caja_de_texto--experiencia2").style.display = "none";
    document.getElementById("menu_desplegable").style.opacity = "0.8";
    document.getElementById("menu_desplegable").style.pointerEvents = "none";
}

//esta función lleva a caja de texto "carta 2"
function mostrarCarta2(){
    document.getElementById("contenedor").style.display = "block";
    document.getElementById("caja_de_texto--carta2").style.display = "block";
    document.getElementById("carta_responsiva").style.display = "none";
    document.getElementById("caja_de_texto--contacto").style.display = "none";
    document.getElementById("caja_de_texto--carta1").style.display = "none";
    document.getElementById("caja_de_texto--portafolio").style.display = "none";
    document.getElementById("caja_de_texto--objetivo").style.display = "none";
    document.getElementById("caja_de_texto--formacion1").style.display = "none";
    document.getElementById("caja_de_texto--formacion2").style.display = "none";
    document.getElementById("formacion_alt").style.display = "none";
    document.getElementById("caja_de_texto--datos--personales").style.display = "none";
    document.getElementById("caja_de_texto--experiencia1").style.display = "none";
    document.getElementById("caja_de_texto--experiencia2").style.display = "none";
    document.getElementById("experiencia_alt").style.display = "none";
    document.getElementById("menu_desplegable").style.opacity = "0.8";
    document.getElementById("menu_desplegable").style.pointerEvents = "none";
}

//esta función muestra la caja de texto "carta responsiva"
function mostrarCartaResponsiva(){
    document.getElementById("contenedor").style.display = "block";
    document.getElementById("caja_de_texto--contacto").style.display = "none";
    document.getElementById("caja_de_texto--carta1").style.display = "none";
    document.getElementById("caja_de_texto--carta2").style.display = "none";
    document.getElementById("carta_responsiva").style.display = "block";
    document.getElementById("caja_de_texto--portafolio").style.display = "none";
    document.getElementById("caja_de_texto--objetivo").style.display = "none";
    document.getElementById("caja_de_texto--formacion1").style.display = "none";
    document.getElementById("caja_de_texto--formacion2").style.display = "none";
    document.getElementById("formacion_alt").style.display = "none";
    document.getElementById("caja_de_texto--datos--personales").style.display = "none";
    document.getElementById("caja_de_texto--experiencia1").style.display = "none";
    document.getElementById("caja_de_texto--experiencia2").style.display = "none";
    document.getElementById("experiencia_alt").style.display = "none";
    document.getElementById("menu_desplegable").style.opacity = "0.8";
    document.getElementById("menu_desplegable").style.pointerEvents = "none";
}

//esta función muestra la caja de texto "datos personales"
function mostrarDatosPersonales(){
    document.getElementById("contenedor").style.display = "block";
    document.getElementById("caja_de_texto--contacto").style.display = "none";
    document.getElementById("caja_de_texto--datos--personales").style.display = "block";
    document.getElementById("caja_de_texto--portafolio").style.display = "none";
    document.getElementById("caja_de_texto--carta1").style.display = "none";
    document.getElementById("caja_de_texto--carta2").style.display = "none";
    document.getElementById("carta_responsiva").style.display = "none";
    document.getElementById("caja_de_texto--formacion1").style.display = "none";
    document.getElementById("caja_de_texto--formacion2").style.display = "none";
    document.getElementById("formacion_alt").style.display = "none";
    document.getElementById("caja_de_texto--objetivo").style.display = "none";
    document.getElementById("caja_de_texto--experiencia1").style.display = "none";
    document.getElementById("experiencia_alt").style.display = "none";
    document.getElementById("caja_de_texto--experiencia2").style.display = "none";
    document.getElementById("menu_desplegable").style.opacity = "0.8";
    document.getElementById("menu_desplegable").style.pointerEvents = "none";
}

//esta función muestra la caja de texto "objetivo"
function mostrarObjetivo(){
    document.getElementById("contenedor").style.display = "block";
    document.getElementById("caja_de_texto--contacto").style.display = "none";
    document.getElementById("caja_de_texto--objetivo").style.display = "block";
    document.getElementById("caja_de_texto--portafolio").style.display = "none";
    document.getElementById("caja_de_texto--carta1").style.display = "none";
    document.getElementById("caja_de_texto--carta2").style.display = "none";
    document.getElementById("carta_responsiva").style.display = "none";
    document.getElementById("caja_de_texto--formacion1").style.display = "none";
    document.getElementById("caja_de_texto--formacion2").style.display = "none";
    document.getElementById("formacion_alt").style.display = "none";
    document.getElementById("caja_de_texto--datos--personales").style.display = "none";
    document.getElementById("caja_de_texto--experiencia1").style.display = "none";
    document.getElementById("experiencia_alt").style.display = "none";
    document.getElementById("caja_de_texto--experiencia2").style.display = "none";
    document.getElementById("menu_desplegable").style.opacity = "0.8";
    document.getElementById("menu_desplegable").style.pointerEvents = "none";
}

//esta función muestra la caja de texto "formacion1"
function mostrarFormacion1(){
    document.getElementById("contenedor").style.display = "block";
    document.getElementById("caja_de_texto--contacto").style.display = "none";
    document.getElementById("caja_de_texto--formacion1").style.display = "block";
    document.getElementById("caja_de_texto--formacion2").style.display = "none";
    document.getElementById("formacion_alt").style.display = "none";
    document.getElementById("caja_de_texto--portafolio").style.display = "none";
    document.getElementById("caja_de_texto--carta1").style.display = "none";
    document.getElementById("caja_de_texto--carta2").style.display = "none";
    document.getElementById("carta_responsiva").style.display = "none";
    document.getElementById("caja_de_texto--objetivo").style.display = "none";
    document.getElementById("caja_de_texto--datos--personales").style.display = "none";
    document.getElementById("caja_de_texto--experiencia1").style.display = "none";
    document.getElementById("caja_de_texto--experiencia2").style.display = "none";
    document.getElementById("experiencia_alt").style.display = "none";
    document.getElementById("menu_desplegable").style.opacity = "0.8";
    document.getElementById("menu_desplegable").style.pointerEvents = "none";
}

//esta función muestra la caja de texto "formacion2"
function mostrarFormacion2(){
    document.getElementById("contenedor").style.display = "block";
    document.getElementById("caja_de_texto--contacto").style.display = "none";
    document.getElementById("caja_de_texto--formacion1").style.display = "none";
    document.getElementById("caja_de_texto--formacion2").style.display = "block";
    document.getElementById("formacion_alt").style.display = "none";
    document.getElementById("caja_de_texto--portafolio").style.display = "none";
    document.getElementById("caja_de_texto--carta1").style.display = "none";
    document.getElementById("caja_de_texto--carta2").style.display = "none";
    document.getElementById("carta_responsiva").style.display = "none";
    document.getElementById("caja_de_texto--objetivo").style.display = "none";
    document.getElementById("caja_de_texto--datos--personales").style.display = "none";
    document.getElementById("caja_de_texto--experiencia1").style.display = "none";
    document.getElementById("experiencia_alt").style.display = "none";
    document.getElementById("caja_de_texto--experiencia2").style.display = "none";
    document.getElementById("menu_desplegable").style.opacity = "0.8";
    document.getElementById("menu_desplegable").style.pointerEvents = "none";
}

//esta función muestra la caja de texto "formacion_alt"
function mostrarFormacionAlt(){
    document.getElementById("contenedor").style.display = "block";
    document.getElementById("caja_de_texto--contacto").style.display = "none";
    document.getElementById("caja_de_texto--carta1").style.display = "none";
    document.getElementById("caja_de_texto--carta2").style.display = "none";
    document.getElementById("carta_responsiva").style.display = "none";
    document.getElementById("caja_de_texto--portafolio").style.display = "none";
    document.getElementById("caja_de_texto--objetivo").style.display = "none";
    document.getElementById("caja_de_texto--formacion1").style.display = "none";
    document.getElementById("caja_de_texto--formacion2").style.display = "none";
    document.getElementById("formacion_alt").style.display = "block";
    document.getElementById("caja_de_texto--datos--personales").style.display = "none";
    document.getElementById("caja_de_texto--experiencia1").style.display = "none";
    document.getElementById("experiencia_alt").style.display = "none";
    document.getElementById("caja_de_texto--experiencia2").style.display = "none";
    document.getElementById("menu_desplegable").style.opacity = "0.8";
    document.getElementById("menu_desplegable").style.pointerEvents = "none";
}

//esta función muestra la caja de texto "experiencia1"
function mostrarExperiencia1(){
    document.getElementById("contenedor").style.display = "block";
    document.getElementById("caja_de_texto--contacto").style.display = "none";
    document.getElementById("caja_de_texto--experiencia1").style.display = "block";
    document.getElementById("caja_de_texto--experiencia2").style.display = "none";
    document.getElementById("experiencia_alt").style.display = "none";
    document.getElementById("caja_de_texto--portafolio").style.display = "none";
    document.getElementById("caja_de_texto--carta1").style.display = "none";
    document.getElementById("caja_de_texto--carta2").style.display = "none";
    document.getElementById("carta_responsiva").style.display = "none";
    document.getElementById("caja_de_texto--objetivo").style.display = "none";
    document.getElementById("caja_de_texto--datos--personales").style.display = "none";
    document.getElementById("caja_de_texto--formacion1").style.display = "none";
    document.getElementById("caja_de_texto--formacion2").style.display = "none";
    document.getElementById("formacion_alt").style.display = "none";
    document.getElementById("menu_desplegable").style.opacity = "0.8";
    document.getElementById("menu_desplegable").style.pointerEvents = "none";
}

//esta función muestra la caja de texto "experiencia2"
function mostrarExperiencia2(){
    document.getElementById("contenedor").style.display = "block";
    document.getElementById("caja_de_texto--contacto").style.display = "none";
    document.getElementById("caja_de_texto--experiencia1").style.display = "none";
    document.getElementById("caja_de_texto--experiencia2").style.display = "block";
    document.getElementById("experiencia_alt").style.display = "none";
    document.getElementById("caja_de_texto--portafolio").style.display = "none";
    document.getElementById("caja_de_texto--carta1").style.display = "none";
    document.getElementById("caja_de_texto--carta2").style.display = "none";
    document.getElementById("carta_responsiva").style.display = "none";
    document.getElementById("caja_de_texto--objetivo").style.display = "none";
    document.getElementById("caja_de_texto--datos--personales").style.display = "none";
    document.getElementById("caja_de_texto--formacion1").style.display = "none";
    document.getElementById("caja_de_texto--formacion2").style.display = "none";
    document.getElementById("formacion_alt").style.display = "none";
    document.getElementById("menu_desplegable").style.opacity = "0.8";
    document.getElementById("menu_desplegable").style.pointerEvents = "none";
}

//esta función muestra la caja de texto "experiencia_alt"
function mostrarExperienciaAlt(){
    document.getElementById("contenedor").style.display = "block";
    document.getElementById("caja_de_texto--contacto").style.display = "none";
    document.getElementById("caja_de_texto--carta1").style.display = "none";
    document.getElementById("caja_de_texto--carta2").style.display = "none";
    document.getElementById("carta_responsiva").style.display = "none";
    document.getElementById("caja_de_texto--portafolio").style.display = "none";
    document.getElementById("caja_de_texto--objetivo").style.display = "none";
    document.getElementById("caja_de_texto--formacion1").style.display = "none";
    document.getElementById("caja_de_texto--formacion2").style.display = "none";
    document.getElementById("formacion_alt").style.display = "none";
    document.getElementById("caja_de_texto--datos--personales").style.display = "none";
    document.getElementById("caja_de_texto--experiencia1").style.display = "none";
    document.getElementById("caja_de_texto--experiencia2").style.display = "none";
    document.getElementById("experiencia_alt").style.display = "block";
    document.getElementById("menu_desplegable").style.opacity = "0.8";
    document.getElementById("menu_desplegable").style.pointerEvents = "none";
}

//esta función muestra la caja de texto "portafolio"
function mostrarPortafolio(){
    document.getElementById("contenedor").style.display = "block";
    document.getElementById("caja_de_texto--contacto").style.display = "none";
    document.getElementById("caja_de_texto--portafolio").style.display = "block";
    document.getElementById("caja_de_texto--experiencia1").style.display = "none";
    document.getElementById("caja_de_texto--experiencia2").style.display = "none";
    document.getElementById("experiencia_alt").style.display = "none";
    document.getElementById("caja_de_texto--carta1").style.display = "none";
    document.getElementById("caja_de_texto--carta2").style.display = "none";
    document.getElementById("carta_responsiva").style.display = "none";
    document.getElementById("caja_de_texto--objetivo").style.display = "none";
    document.getElementById("caja_de_texto--datos--personales").style.display = "none";
    document.getElementById("caja_de_texto--formacion1").style.display = "none";
    document.getElementById("caja_de_texto--formacion2").style.display = "none";
    document.getElementById("formacion_alt").style.display = "none";
    document.getElementById("menu_desplegable").style.opacity = "0.8";
    document.getElementById("menu_desplegable").style.pointerEvents = "none";
}

//esta función muestra la caja de texto "contacto"
function mostrarContacto(){
    document.getElementById("contenedor").style.display = "block";
    document.getElementById("caja_de_texto--contacto").style.display = "block";
    document.getElementById("caja_de_texto--portafolio").style.display = "none";
    document.getElementById("caja_de_texto--experiencia1").style.display = "none";
    document.getElementById("caja_de_texto--experiencia2").style.display = "none";
    document.getElementById("experiencia_alt").style.display = "none";
    document.getElementById("caja_de_texto--carta1").style.display = "none";
    document.getElementById("caja_de_texto--carta2").style.display = "none";
    document.getElementById("carta_responsiva").style.display = "none";
    document.getElementById("caja_de_texto--objetivo").style.display = "none";
    document.getElementById("caja_de_texto--datos--personales").style.display = "none";
    document.getElementById("caja_de_texto--formacion1").style.display = "none";
    document.getElementById("caja_de_texto--formacion2").style.display = "none";
    document.getElementById("formacion_alt").style.display = "none";
    document.getElementById("menu_desplegable").style.opacity = "0.8";
    document.getElementById("menu_desplegable").style.pointerEvents = "none";
}