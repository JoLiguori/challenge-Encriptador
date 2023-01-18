
var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
let munheco = document.querySelector(".contenedor-munheco");
let h3= document.querySelector(".contenedor-h3");
let parrafo = document.querySelector(".contenedor-parrafo");
let resultado = document.querySelector(".texto-resultado");
let botonCopiar = document.querySelector(".btn-copiar");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;

function encriptar(){
    ocultarAdelante();
    let area = recuperarTexto();
    resultado.textContent = encriptarTexto(area);
}
function desencriptar(){
    ocultarAdelante();
    let area = recuperarTexto();
    resultado.textContent = desencriptarTexto(recuperarTexto());
}

 function recuperarTexto(){
    var area = document.querySelector(".area");
    return area.value;
 }

 
 function ocultarAdelante(){
    munheco.classList.add("ocultar");
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");
 }

 function encriptarTexto(mensaje){
    let texto = mensaje;
    let textoFinal = "";

    for(let i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
 }
  
 function desencriptarTexto(mensaje){
    let texto = mensaje;
    let textoFinal = "";

    for(let i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
 }

 function copiar(){
    let txtCopiar = document.querySelector('.texto-resultado').innerHTML;
    navigator.clipboard.writeText(txtCopiar)
  }