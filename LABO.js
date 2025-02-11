function mostrarMensaje(mensaje) {
    alert(mensaje);
}

function cambiarColor(elemento) {
    elemento.style.backgroundColor = '#b3e0ff';
    elemento.innertext("¡Ser exitoso!", elemento);
}

function mostrarTooltip(elemento, texto) {
    let tooltip = document.createElement("div");
    tooltip.id = "tooltip";
    tooltip.style.position = "absolute";
    tooltip.style.backgroundColor = "black";
    tooltip.style.color = "white";
    tooltip.style.padding = "5px";
    tooltip.style.borderRadius = "5px";
    tooltip.innerText = texto;
    document.body.appendChild(tooltip);
    document.addEventListener("mousemove", function(event) {
        tooltip.style.left = event.pageX + "px";
        tooltip.style.top = event.pageY + "px";
    });
}

function ocultarTooltip() {
    let tooltip = document.getElementById("tooltip");
    if (tooltip) tooltip.remove();
}

function agrandarTexto(elemento) {
    elemento.style.fontSize = "1.5rem";
    elemento.innerText = "No podría vivir sin la música, me encanta.";
    elemento.style.textAlign = "center";
}

function restaurarTexto(elemento) {
    elemento.style.fontSize = "1.2rem";
    elemento.innerText = "Algo sin lo que no podría vivir";
}

function rotarElemento(elemento) {
    elemento.style.transform = "rotate(10deg)";
    elemento.innerText = "Tengo un gran talento para los videojuegos!";
}

function restaurarRotacion(elemento) {
    elemento.style.transform = "rotate(0deg)";
    elemento.innerText = "Un talento que poseo";
}

function cambiarTexto(event, elemento) {
    event.preventDefault();
    // Asegúrate de que el texto no se sobrescriba si ya se cambió en otras funciones
    if (elemento.innerText !== "¡El color ha cambiado!") {
        elemento.innerText = "Amo los lobos";
    }
}
