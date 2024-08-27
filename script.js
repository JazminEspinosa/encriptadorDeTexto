

/*
function validarTexto() {
  const inputTexto = document.getElementById("elTexto").value;
  const regex = /^[a-zA-Z\s]+$/;
  const errorMensaje = document.getElementById("error");

  if (!regex.test(inputTexto)) {
    errorMensaje.textContent = "Por favor, ingresa solo letras.";
    return false;
  } else {
    errorMensaje.textContent = "";
    return true;
  }
}

if (errorMensaje== true) {

    encriptar();

}else{
  validarTexto();
}

*/





function encriptar() {
  var texto = document.getElementById("elTexto").value;

  var textoArraySplit = Array.from(texto);
  console.log(textoArraySplit);

  var textoRemplazado = "";

  for (var i = 0; i < textoArraySplit.length; i++) {
    if (textoArraySplit[i] === "e") {
      textoRemplazado = textoRemplazado + "enter";
    } else if (textoArraySplit[i] === "i") {
      textoRemplazado = textoRemplazado + "imes";
    } else if (textoArraySplit[i] === "o") {
      textoRemplazado = textoRemplazado + "ober";
    } else if (textoArraySplit[i] === "u") {
      textoRemplazado = textoRemplazado + "ufat";
    } else if (textoArraySplit[i] === "a") {
      textoRemplazado = textoRemplazado + "ai";
    } else {
      textoRemplazado = textoRemplazado + textoArraySplit[i];
    }
  }

  //console.log(textoRemplazado);
  document.getElementById("mostrarTexto").innerHTML = textoRemplazado;
}

function desencriptar() {
  var texto = document.getElementById("elTexto").value;

  var textoEncriptado = Array.from(texto);
  console.log(textoEncriptado);

  var textoDesencriptado = "";

  for (var i = 0; i < textoEncriptado.length; i++) {
    if (textoEncriptado[i] === "e") {
      textoDesencriptado = textoDesencriptado + textoEncriptado[i];
      i = i + 4;
    } else if (textoEncriptado[i] === "i") {
      textoDesencriptado = textoDesencriptado + textoEncriptado[i];
      i = i + 3;
    } else if (textoEncriptado[i] === "o") {
      textoDesencriptado = textoDesencriptado + textoEncriptado[i];
      i = i + 3;
    } else if (textoEncriptado[i] === "u") {
      textoDesencriptado = textoDesencriptado + textoEncriptado[i];
      i = i + 3;
    } else if (textoEncriptado[i] === "a") {
      textoDesencriptado = textoDesencriptado + textoEncriptado[i];
      i = i + 1;
    } else {
      textoDesencriptado = textoDesencriptado + textoEncriptado[i];
    }
  }

  //console.log(textoDesencriptado);
  document.getElementById("mostrarTexto").innerHTML = textoDesencriptado;
}

function copiar() {
  var copiarTexto = document.getElementById("mostrarTexto").innerHTML;

  navigator.clipboard.writeText(copiarTexto);

  console.log(copiarTexto);
}

/*
const botonEncriptar = document.getElementById('boton__encriptar');
const botonCopiar = document.getElementById('botonCopiar');
const botonDesencriptar=document.getElementById('boton__desencriptar');
var limpiarTexto=document.getElementById('elTexto');
var limpiarRectangulo=document.getElementById('mostrarTexto');





botonEncriptar.addEventListener('click', function() {
    botonCopiar.style.display = 'inline-block'; // Muestra el botón oculto
    botonEncriptar.style.display = 'none'; 
    botonDesencriptar.style.display = 'none'; 
});


botonCopiar.addEventListener('click', function() {
    botonDesencriptar.style.display = 'inline-block'; 
    botonCopiar.style.display = 'none'; 
    limpiarRectangulo.value="";
    limpiarTexto.value="";
    limpiarTexto.focus();
    



});


botonDesencriptar.addEventListener('click', function() {
    botonCopiar.style.display = 'inline-block'; 
    botonEncriptar.style.display = 'inline-block'; 
});
*/
