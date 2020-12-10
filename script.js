var inicio = 0;  //inicializo la variable en 0

function aumentar(){
    var cantidad = document.getElementById('cantidad').value = ++inicio;
}

function disminuir() {
    var cantidad = document.getElementById('cantidad').value = --inicio;  
}