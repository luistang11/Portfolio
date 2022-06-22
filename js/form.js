var nombre =document.querySelector('#nombre');
var email= document.querySelector('#email');
var asunto = document.querySelector('#asunto');
var mensaje = document.querySelector('#mensaje');
var error= document.querySelector('#error');
error.style.color='red';

error.addEventListener('click', function(event){
    event.preventDefault();
    validarForm();


})

function validarForm(){
    var mensajesError=[];

    if(nombre.value=== null || nombre.value===''){
        mensajesError.push('Ingresa tu nombre')
    }

    if(mensaje.value=== null || mensaje.value===''){
        mensajesError.push('Ingresa el mensaje')
    }
    if(asunto.value=== null || asunto.value===''){
        mensajesError.push('Ingresa el asunto')
    }

    error.innerHTML =mensajesError.join(', ');

}