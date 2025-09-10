// Inicializa animações
AOS.init({
    duration: 800,
    once: true
  });
  
  
// Seletores
const acessibilidadeBtn = document.getElementById('acessibilidade-btn');
const acessibilidadeMenu = document.getElementById('acessibilidade-menu');

// Abrir/fechar menu de acessibilidade
acessibilidadeBtn.addEventListener('click', () => {
  acessibilidadeMenu.style.display = acessibilidadeMenu.style.display === 'block' ? 'none' : 'block';
});

const aumentarFonteBtn = document.getElementById('aumentar-fonte');
const diminuirFonteBtn = document.getElementById('diminuir-fonte');
const altoContrasteBtn = document.getElementById('alto-contraste');
const resetarBtn = document.getElementById('resetar');

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

// Resetar configurações
resetarBtn.addEventListener('click', () => {
  document.body.style.fontSize = '';
  document.body.classList.remove('alto-contraste');
});
