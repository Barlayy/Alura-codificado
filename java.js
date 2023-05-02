 //===================== Função do Site ==========================

 // Criptografar o Texto
function encrypt() {
  let message = document.getElementById("message").value.toLowerCase();
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

// Descriptografas o Texto
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

// botão menu selecionar
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAtrribute('id');

    if(top >= offset && top < offset + height) {
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id +']').classList.add('active');
      });
    };
  });

  // menu  mobile 
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
}
// Animação de Digitar //
window.onload = function() {
  var maquinaEscrever = document.querySelector('.maquina-escrever');
  maquinaEscrever.classList.add('animar');
};
