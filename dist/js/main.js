// Cargar el preload y asignamoc la clase cerrar y le damos un tiempo de duración

window.addEventListener('load', ()=>{

    let preloader = document.getElementById('preloader');
setTimeout(function(){
    preloader.classList.add('cerrar');
},5000);

});

// Animación del texto, primero se define la variable

const text = document.getElementById("animate-text");
var str = text.innerHTML;
text.innerHTML = "";

// Declaramos una variable para asignar el valor para que sea el tiempo en ms que durara la función setTimeout
const speed = 800;
let i = 0;

// Esta función recorera todos los caracteres del texto
const typeWriter = () =>{
    if(i < str.length){
        text.innerHTML += str.charAt(i);
        i++;
        setTimeout(typeWriter,speed)
    }
};

// se invoca la función 
setTimeout(typeWriter, speed);



$(document).ready(function(){
    $('.toggle').click(function(){

        $('.toggle').toggleClass('active')
        $('nav ul').toggleClass('active-menu')
        
    })
})