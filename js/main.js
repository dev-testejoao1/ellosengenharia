/*  abre e fecha o menu quando clicar no ícone: hambúrguer e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da página quando der scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}

/* works carousel slider swiper */
var swiper = new Swiper('.swiper-container', {
  // effect: "cube",
  // spaceBetween: 30,
  // centeredSlides: true,
  // focusableElements: true,
  // autoplay: {
  //   delay: 5500,
  //   disableOnInteraction: false,
  //   pauseOnMouseEnter: true,
  // },
  // cubeEffect: {
  //   shadow: true,
  //   slideShadows: true,
  //   shadowOffset: 0,
  //   shadowScale: 0,
  // },
  // pagination: {
  //   el: '.swiper-pagination',
  //   dynamicBullets: true,
  //   clickable: false,
  // },
  // grabCursor: false,
  // keyboard: false,
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  cssMode: true,
  focusableElements: true,
  centeredSlides: true,
  autoplay: {
      delay: 5500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
  grabCursor: true,
});

function slide() {
  let slideValue = document.getElementById('slider-img').value;
  document.getElementById('my-img').style.clipPath = 'polygon(0 0,' + slideValue + '% 0,' + slideValue + '% 100%, 0 100%)';
}

function slide2() {
  let slideValue = document.getElementById('slider-img2').value;
  document.getElementById('my-img2').style.clipPath = 'polygon(0 0,' + slideValue + '% 0,' + slideValue + '% 100%, 0 100%)';
}

function slide3() {
  let slideValue = document.getElementById('slider-img3').value;
  document.getElementById('my-img3').style.clipPath = 'polygon(0 0,' + slideValue + '% 0,' + slideValue + '% 100%, 0 100%)';
}

/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card, .card button,
  #works header, #works .work
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

/* Botão voltar para o topo */
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* Botão whatsapp na pagina */
const whatsappButton = document.querySelector('.whatsapp')

function whatsapp() {
  if (window.scrollY >= 560) {
    whatsappButton.classList.add('show')
  } else {
    whatsappButton.classList.remove('show')
  }
}

/* Menu ativo conforme a seção visível na página */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

// Modo Dark e Modo Light

const changeThemeBtn = document.querySelector('#change-theme')

// Botão Dark Mode
function toggleDarkMode() {
  document.body.classList.toggle('light')
}

// Carregar Light ou Dark Mode
function loadTheme() {
  const lightMode = localStorage.getItem('light')

  if (lightMode) {
    toggleDarkMode()
  }
}

changeThemeBtn.addEventListener('change', function () {
  toggleDarkMode()

  // Salvar ou remover Dark Mode
  localStorage.removeItem('light')

  if (document.body.classList.contains('light')) {
    localStorage.setItem('light', 1)
  }
})

loadTheme()

/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  whatsapp()
  activateMenuAtCurrentSection()
})