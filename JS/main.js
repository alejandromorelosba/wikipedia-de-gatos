/**
 * toggleCat — abre/cierra cada gato
 * Usa clases CSS en lugar de medir scrollHeight,
 * evitando el problema con imágenes no cargadas
 */
function toggleCat(header) {
    const body   = header.nextElementSibling;
    const icon   = header.querySelector('.toggle-icon');
    const isOpen = body.classList.contains('open');

    if (isOpen) {
        body.classList.remove('open');
        icon.textContent = '▼';
        header.classList.remove('active');
    } else {
        body.classList.add('open');
        icon.textContent = '▲';
        header.classList.add('active');
    }
}

var btnMenu   = document.getElementById("btn-menu");
var menu      = document.getElementById("menu");
var btnCerrar = document.getElementById("btn-cerrar");

// Abrir menú
btnMenu.addEventListener("click", function (e) {
    e.stopPropagation();                        // evita que el clic llegue al document
    var estaAbierto = !menu.classList.contains("oculto");

    if (estaAbierto) {
        cerrarMenu();
    } else {
        abrirMenu();
    }
});

// Cerrar con la X
btnCerrar.addEventListener("click", function () {
    cerrarMenu();
});

// Cerrar al hacer clic fuera del menú
document.addEventListener("click", function (e) {
    if (!menu.contains(e.target) && e.target !== btnMenu) {
        cerrarMenu();
    }
});

// Cerrar con la tecla Escape
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        cerrarMenu();
    }
});

function abrirMenu() {
    menu.classList.remove("oculto");
    btnMenu.setAttribute("aria-expanded", "true");
}

function cerrarMenu() {
    menu.classList.add("oculto");
    btnMenu.setAttribute("aria-expanded", "false");
}