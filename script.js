const textArea = document.querySelector(".textarea");
const mensaje = document.querySelector(".mensaje");


// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"], ["i", "imes"], ["a","ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++){
        if (stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada

}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
   
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"], ["i", "imes"], ["a","ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++){
        if (stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada

}

function copiarAlPortapapeles(stringEncriptada) {
    // Crear un elemento de entrada temporal
    const elementoTemporal = document.createElement('input');
  
    // Asignar el texto a copiar al valor del elemento
    elementoTemporal.value = stringEncriptada;
  
    // Agregar el elemento al documento de forma temporal
    document.body.appendChild(elementoTemporal);
  
    // Seleccionar el texto del elemento
    elementoTemporal.select();
  
    // Copiar el texto seleccionado al portapapeles
    document.execCommand('copy');
  
    // Remover el elemento temporal del documento
    document.body.removeChild(elementoTemporal);
  }