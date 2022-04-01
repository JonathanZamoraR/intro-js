alert("Hola Mundo!!! Introducción a JS"); //mensaje*/

/* console.log("Este es otro mensaje...!"); //mensaje en la consola*/


//declaracion de una variable
var nombre = "Jonathan Zamora" 
let edad = 10;
/* edad = "No quiero decirlo ";*/
let titulo = document.getElementById('titulo'); //trae el elemento llamado 'titulo' en el HTML

let body = document.getElementById('body');

let titulo2 = document.getElementById('titulo2');

let mensaje = "Mi nombre es " +nombre+ " y mi edad es " + (edad + 11);

let mensaje2 = 'soy estudiante del Tec';

let mensaje3 = 'click para regresar al inicio';

//impresion de variables
/* console.log("Mi nombre es " +nombre+ " y mi edad es " + (edad + 11));*/
console.log(mensaje);

titulo.innerHTML = mensaje;//para que el texto del selector se vea en formato de pagina web.
titulo.style.color = 'white';//maneja estilos para ese selector. Cambio el color de letra.
titulo.style.textTransform = 'uppercase'; //poner todo en mayusculas
body.style.backgroundColor = 'gray';


titulo.onclick = function(){ //crear una funcion al dar click

    titulo.innerHTML = "Le diste click y cambio de color";
    titulo2.innerHTML = mensaje3;
    titulo.style.textTransform = 'lowercase'; //cambia letras a minuscula 
    titulo.style.color = 'yellow'
    titulo2.style.color = 'orange';
    titulo2.style.textDecoration = 'underline';
    body.style.backgroundColor = 'blue';   
    alert(mensaje2); //mensaje*/
};

titulo2.onclick = function(){
    titulo.innerHTML = mensaje;//para que el texto del selector se vea en formato de pagina web.
    titulo.style.color = 'white';//maneja estilos para ese selector. Cambio el color de letra.
    titulo.style.textTransform = 'uppercase'; //poner todo en mayusculas
    body.style.backgroundColor = 'gray';
    titulo2.innerHTML = '';

};

