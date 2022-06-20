let ubicacionPrincipal=window.pageYOffset;
let botonPA=document.querySelector("#paraArriba");

window.addEventListener("scroll",function(){
    let ubicacionActual=window.pageYOffset;
    if(ubicacionActual==0){
        botonPA.style.bottom= "-80px";
    }
    if(ubicacionActual<=100){
        botonPA.style.bottom= "-80px";
    }
    else{
        botonPA.style.bottom= "20px"
    }
    ubicacionPrincipal=ubicacionActual;
})

