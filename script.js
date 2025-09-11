AOS.init({
  duration: 800,
  once: true
});

const acessibilidadeBtn = document.getElementById('acessibilidade-btn');
const acessibilidadeMenu = document.getElementById('acessibilidade-menu');

const aumentarFonteBtn = document.getElementById('aumentar-fonte');
const diminuirFonteBtn = document.getElementById('diminuir-fonte');
const altoContrasteBtn = document.getElementById('alto-contraste');
const resetarBtn = document.getElementById('resetar');
const modoEscuroBtn = document.getElementById('modo-escuro');
const fonteDysBtn = document.getElementById('fonte-dyslexic');
const lerTextoBtn = document.getElementById('ler-texto');


acessibilidadeBtn.addEventListener('click', () => {
  const isVisible = acessibilidadeMenu.style.display === 'block';
  acessibilidadeMenu.style.display = isVisible ? 'none' : 'block';
  acessibilidadeMenu.setAttribute('aria-hidden', isVisible);
});

aumentarFonteBtn.addEventListener('click', () => {
  document.body.style.fontSize = 'larger';
});

diminuirFonteBtn.addEventListener('click', () => {
  document.body.style.fontSize = 'smaller';
});

altoContrasteBtn.addEventListener('click', () => {
  document.body.classList.toggle('alto-contraste');
});

modoEscuroBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

fonteDysBtn.addEventListener('click', () => {
  document.body.classList.toggle('fonte-dyslexic');
});

lerTextoBtn.addEventListener('click', () => {
  const texto = document.body.innerText;
  const utterance = new SpeechSynthesisUtterance(texto);
  utterance.lang = "pt-BR";
  speechSynthesis.speak(utterance);
});

resetarBtn.addEventListener('click', () => {
  document.body.style.fontSize = '';
  document.body.classList.remove('alto-contraste', 'dark-mode', 'fonte-dyslexic');
  speechSynthesis.cancel();
});

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

document.addEventListener('DOMContentLoaded', function() {
 
  setTimeout(() => {
    const animateElements = document.querySelectorAll('.animate-on-load');
    animateElements.forEach((element, index) => {
      setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }, 300 * index);
    });
  }, 500);
  
  initScrollAnimations();
  
  initNavbarScroll();
  
  initSkillsAnimation();
});

function initScrollAnimations() {
 
  gsap.registerPlugin(ScrollTrigger);
  
  ScrollTrigger.config({
    limitCallbacks: true,
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
  });
  
  gsap.utils.toArray('.section').forEach((section, index) => {
   
    gsap.set(section, {
      opacity: 0,
      y: 30
    });
    
    gsap.to(section, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        end: "bottom 60%",
        toggleActions: "play none reverse none",
        markers: false,
        id: `section-${index}`
      }
    });
  });
  
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 1000);
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    if (anchor.getAttribute('href') !== '#') {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          gsap.to(window, {
            duration: 1.2,
            scrollTo: target,
            ease: "power2.inOut"
          });
        }
      });
    }
  });
}

function initNavbarScroll() {
  const navbar = document.querySelector('.custom-navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

function initSkillsAnimation() {
  const progressBars = document.querySelectorAll('.progress-bar');
  
  progressBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0';
    
    ScrollTrigger.create({
      trigger: bar,
      start: 'top 90%',
      onEnter: () => {
        gsap.to(bar, {
          width: width,
          duration: 1.5,
          ease: 'power2.out'
        });
      }
    });
  });
}