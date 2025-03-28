var textInput=document.querySelector("#input-texto");
var outInput=document.querySelector("#output");

function criptografar(){
    var texto=textInput.value;

    var resultCripto = texto.replace(/e/g,"enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")

    document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">'+resultCripto + '</textarea>' + '<button class="btn__copiar" id="copiar" onclick="copiar()">copiar</button>'
}
function descriptografar(){
    var texto=textInput.value;

    var resultDescripto = texto.replace(/ufat/g, "u")  // Primeiro os maiores
                               .replace(/ober/g, "o")
                               .replace(/imes/g, "i")
                               .replace(/enter/g, "e")
                               .replace(/ai/g, "a")

    document.getElementById('output').innerHTML = `<textarea readonly id="input-texto">${resultDescripto}</textarea><button class="btn__copiar" id="copiar" onclick="copiar()">copiar</button>`
}
function copiar(){
    var textoCop= document.getElementById('output').querySelector('textarea');

    textoCop.select();
    document.execCommand('copy');
    alert("texto copiado");
}
