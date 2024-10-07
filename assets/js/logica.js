function asignarEventos(){
    let elBoton = document.getElementById('botonEspecial');
    elBoton.addEventListener('click', saludar);

    let elBotonSumar = document.getElementById('btnSumar');
    elBotonSumar.addEventListener('click', resultadoSuma);
}

function saludar(){
    let elParrafo = document.getElementById('parrafoEspecial');
    elParrafo.innerHTML = "Hola desde Js";
    elParrafo.style.color = "orange";
    elParrafo.style.backgroundColor = "black";
    elParrafo.style.fontSize = "60px";
}


function resultadoSuma(){
    let dato1 = Number(document.getElementById('dato1').value);
    let dato2 = Number(document.getElementById('dato2').value);
    let elResultadoSuma = dato1 + dato2;
    let mostrarResultadoSuma = document.getElementById('resultado');
    mostrarResultadoSuma.value = elResultadoSuma;

}

