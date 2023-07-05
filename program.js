// TOMAR BOTONES LIMPIAR Y CALCULAR
const clearInp = document.getElementById("clear-input");
const result = document.getElementById("resultado");
const pantalla = document.getElementById("mostResult");



// -----------------------------------------------------
document.addEventListener('DOMContentLoaded',()=>{
    let buttons = document.querySelectorAll(".num");

    clearInp.addEventListener('click',()=>{
        pantalla.value='';
    })

    result.addEventListener('click',()=>{
        if (pantalla.value) {
            operacion(pantalla.value);
        }
    })

    buttons.forEach((e) => {
        e.addEventListener('click',()=>{
            pantalla.value += e.textContent;
        })
    })
});


// EN ESTA ZONA USÉ UN TRY CATCH PARA SOLUCIONAR EL PROBLEMA DEL USO DE CARÁCTERES DISTINTOS A LOS UTILIZADOS PARA LAS OPERACIONES MATEMÁTICAS.
function operacion(op){
    try {
        pantalla.value = eval(op);
    } catch (err) {
        pantalla.value= 'Syntax Error';
        console.log('Error provocado: '+err.message);
    }
}
