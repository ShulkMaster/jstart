const startButton = document.getElementById('start');
const patron = [];

startButton.addEventListener('click', () => {
    console.log(patron);
    crearPatron(patron);
    console.log(patron);
});

function crearPatron(lista) {
    if (patron.length < 1) {
        crearPatronInicial(lista);
    } else {
        const paso = crearPaso();
        lista.push(paso);
    }
}

function crearPaso() {
    return Math.floor(Math.random() * (3)) + 1;
}

function crearPatronInicial(lista) {
    const paso1 = crearPaso();
    const paso2 = crearPaso();
    const paso3 = crearPaso();
    lista.push(paso1);
    lista.push(paso2);
    lista.push(paso3);
}