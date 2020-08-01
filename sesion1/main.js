const startButton = document.getElementById('start');
const rojo = document.getElementById('rojo');
const verde = document.getElementById('verde');
const azul = document.getElementById('azul');
const amarillo = document.getElementById('amarillo');

/**
 * 1 = Rojo
 * 2 = Verde
 * 3 = Amarillo 
 * 4 = azul
 */


const patron = [];
let entrada = [];

startButton.addEventListener('click', () => {
    console.log(patron);
    crearPatron(patron);
    console.log(patron);
});

rojo.addEventListener('click', () => {
    entrada.push(1);
});


verde.addEventListener('click', () => {
    entrada.push(2);
});


amarillo.addEventListener('click', () => {
    entrada.push(3);
});


azul.addEventListener('click', () => {
    entrada.push(4);
});

function crearPatron(lista) {
    if (patron.length < 1) {
        crearPatronInicial(lista);
    } else {
        const paso = crearPaso();
        lista.push(paso);
    }
    (patron.length % 2) == 0 ? activar(rojo) : desactivar(rojo);
}

function crearPaso() {
    return Math.floor(Math.random() * 4) + 1;
}

function crearPatronInicial(lista) {
    const paso1 = crearPaso();
    const paso2 = crearPaso();
    const paso3 = crearPaso();
    lista.push(paso1);
    lista.push(paso2);
    lista.push(paso3);
}

function activar(elemento) {
    elemento.classList.add('activo');
}

function desactivar(elemento) {
    elemento.classList.remove('activo');
}