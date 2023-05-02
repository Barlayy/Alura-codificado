 //===================== Função do Site==========================

 // Criptografar o Texto
 function encrypt() {
  let message = document.getElementById("message").value.toLowerCase();

  // Verificar se a mensagem contém letras maiúsculas
  if(/[A-Z]/.test(message)){
    alert("A mensagem não pode conter letras maiúsculas.");
    return;
  }

  let encryptedMessage = "";
  
  for (let i = 0; i < message.length; i++) {
    switch (message[i]) {
      case "e":
        encryptedMessage += "enter";
        break;
      case "i":
        encryptedMessage += "imes";
        break;
      case "a":
        encryptedMessage += "ai";
        break;
      case "o":
        encryptedMessage += "ober";
        break;
      case "u":
        encryptedMessage += "ufat";
        break;
      default:
        encryptedMessage += message[i];
        break;
    }
  }
  
  document.getElementById("result").innerHTML = encryptedMessage;
  document.getElementById("copyBtn").style.display = "inline-block";
}

function decrypt() {
  let message = document.getElementById("message").value;
  let decryptedMessage = message
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  document.getElementById("result").innerHTML = decryptedMessage;
  document.getElementById("copyBtn").style.display = "none";
}

      // Copiar texto da Caixa

function copy() {
  let result = document.getElementById("result");
  let range = document.createRange();
  range.selectNode(result);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  alert("Código copiado para a área de transferência!");
}

//====================== Designer do Site ============================

// menu botão
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

  // menu  mobile 
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

// Animação de Digitar //
window.onload = function() {
  var maquinaEscrever = document.querySelector('.maquina-escrever');
  maquinaEscrever.classList.add('animar');
};
