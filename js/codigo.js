//-----------------------SECCIÓN BOTONES--------------------------------------------

// Conectar HTML con JavaScript con querySelector
var bottonEncriptar = document.querySelector(".button-codificar");
var info = document.querySelector("#info");
// Escuchar los eventos
bottonEncriptar.addEventListener("click",function(event){
    event.preventDefault();
    visible();
    encriptar();
    info.style.display = "none";
    salida.style.display = "block";
    

});

var bottonDesencriptar = document.querySelector(".button-decodificar");
var info1 = document.querySelector("#info");
bottonDesencriptar.addEventListener("click",function(event){
    event.preventDefault();
    visible();
    desencriptar();
    info1.style.display = "none";
    salida.style.display = "block";
    

});

var bottonCopiar = document.querySelector("#copiar");
var salida = document.querySelector("#salida");
bottonCopiar.addEventListener("click",function(event){
    event.preventDefault();

    //copiar texto de la salida
    let copiar = document.getElementById('salida').innerHTML;
    navigator.clipboard.writeText(copiar);  
    alert("Se ha copiado el texto"); 

    // Borrar caracter del textarea
    var borrarcaracter = document.querySelector("#texto-entrada");
    borrarcaracter.value = "";




    // Poner el cursor listo en el textarea para escribir
    borrarcaracter.focus();
    invisible();
    info1.style.display = "block";
    salida.style.display="none";


   
});


//----------------------SECCIÓN FUNCIONES-------------------------------------------------
function invisible(){
    // Borrar botón del display
    bottonCopiar.style.display = "none";

    
    
}

function visible(){
  // Agregar botón al display
    bottonCopiar.style.display = "block";
}

function encriptar(){
    // Obtener el valor del textarea mediante el nombre de la etiqueta
    var palabra = document.getElementsByTagName("textarea")[0].value;
    // remplazar el valor ingresado por cierto caracter
    var palabra_codificada = palabra.replaceAll("a","xxa").replaceAll("e","xxe").replaceAll("i","xxi").replaceAll("o","xxo").replaceAll("u","xxu");
    var palabra_codificada1 = palabra_codificada.replaceAll("xxa","ai").replaceAll("xxe","enter").replaceAll("xxi","imes").replaceAll("xxo","ober").replaceAll("xxu","ufat");
    // Mostrar los caracteres en el display
    document.getElementById("salida").innerHTML =palabra_codificada1;
    // Verificar si el área de texto esta vacía
    
    while(palabra_codificada1==""){
      alert("No válido, ingrese el texto");
      palabra.remove("salida");
      invisible();
      break;

    }
    if(!palabra_codificada==""){
      alert("Encriptado");
    }

    
    
}


function desencriptar(){
    // Obtener el valor del textarea mediante el nombre de la etiqueta
    var palabra = document.getElementsByTagName("textarea")[0].value;
     // remplazar el valor ingresado por cierto caracter
    var palabra_codificada = palabra.replaceAll("ai","a").replaceAll("enter","e").replaceAll("imes","i").replaceAll("ober","o").replaceAll("ufat","u");
    // Mostrar los caracteres en el display
    document.getElementById("salida").innerHTML =palabra_codificada;
    // Verificar si el área de texto esta vacía
    while( palabra_codificada =="" ){
      alert("No válido, ingrese el texto");
      palabra.remove("salida");
      break;
    }
    if(!palabra==""){
      alert("Desencriptado");
    }  
}

// Validando los caracteres ingresados en el textarea 
function esValido(c) {
    c = c.charCodeAt(0);
    return (c >= 97 && c <= 122) || (c >= 32 && c<=64); // [a-z ]
  }
  
  function validarEntrada(cadena) {
    for (var i = 0; i < cadena.length; i++) {
      if (!esValido(cadena[i])) {
        break;
      }
    }
    return i == cadena.length;
  }
  
  
  function validarTextarea(elem) {
    var txt = elem.value;
    if (!validarEntrada(txt)) {
      elem.classList.add('invalido');
      // Mostrar mensaje en la alerta
      document.getElementsByClassName("invalido").innerHTML= alert("Caracter no válido");
      // Borrar caracteres
      var borrarcaracter = document.querySelector("#texto-entrada");
      borrarcaracter.value = "";
      invisible();
      
      
    } else {
      elem.classList.remove('invalido');
      
    }
 
  }
  