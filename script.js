// Inicializa animações
AOS.init({
    duration: 800,
    once: true
  });
  
// Seletores principais
const acessibilidadeBtn = document.getElementById('acessibilidade-btn');
const acessibilidadeMenu = document.getElementById('acessibilidade-menu');

const aumentarFonteBtn = document.getElementById('aumentar-fonte');
const diminuirFonteBtn = document.getElementById('diminuir-fonte');
const altoContrasteBtn = document.getElementById('alto-contraste');
const resetarBtn = document.getElementById('resetar');
const modoEscuroBtn = document.getElementById('modo-escuro');
const fonteDysBtn = document.getElementById('fonte-dyslexic');
const lerTextoBtn = document.getElementById('ler-texto');

// Abrir/fechar menu
acessibilidadeBtn.addEventListener('click', () => {
  const isVisible = acessibilidadeMenu.style.display === 'block';
  acessibilidadeMenu.style.display = isVisible ? 'none' : 'block';
  acessibilidadeMenu.setAttribute('aria-hidden', isVisible);
});

// Aumentar fonte
aumentarFonteBtn.addEventListener('click', () => {
  document.body.style.fontSize = 'larger';
});

// Diminuir fonte
diminuirFonteBtn.addEventListener('click', () => {
  document.body.style.fontSize = 'smaller';
});

// Ativar alto contraste
altoContrasteBtn.addEventListener('click', () => {
  document.body.classList.toggle('alto-contraste');
});

// Modo escuro
modoEscuroBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Fonte Dyslexic
fonteDysBtn.addEventListener('click', () => {
  document.body.classList.toggle('fonte-dyslexic');
});

// Ler texto em voz alta (Web Speech API)
lerTextoBtn.addEventListener('click', () => {
  const texto = document.body.innerText;
  const utterance = new SpeechSynthesisUtterance(texto);
  utterance.lang = "pt-BR";
  speechSynthesis.speak(utterance);
});

// Resetar configurações
resetarBtn.addEventListener('click', () => {
  document.body.style.fontSize = '';
  document.body.classList.remove('alto-contraste', 'dark-mode', 'fonte-dyslexic');
  speechSynthesis.cancel();
});

// Estilos extras dinâmicos
const style = document.createElement("style");
style.textContent = `
  .dark-mode { 
    background-color: #121212 !important; 
    color: #f5f5f5 !important; 
  }
  .fonte-dyslexic { 
    font-family: 'OpenDyslexic', Arial, sans-serif !important; 
  }
`;
document.head.appendChild(style);

