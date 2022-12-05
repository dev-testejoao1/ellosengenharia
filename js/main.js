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
  effect: "cube",
  spaceBetween: 30,
  centeredSlides: true,
  focusableElements: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 0,
    shadowScale: 0,
  },
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true,
  },
  grabCursor: true,
  keyboard: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Slide Popup

var swiper2 = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

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

// Modal imagens

const verFotosBtn = document.querySelector('#fotos-btn')
const verFotosBtn2 = document.querySelector('#fotos-btn2')
const verFotosBtn3 = document.querySelector('#fotos-btn3')
const verFotosBtn4 = document.querySelector('#fotos-btn4')
const verFotosBtn5 = document.querySelector('#fotos-btn5')
const modal = document.querySelector('dialog')
const modalClose = document.querySelector('dialog #fechar')
const modalClose2 = document.querySelector('dialog #fechar2')
const modalClose3 = document.querySelector('dialog #fechar3')
const modalClose4 = document.querySelector('dialog #fechar4')
const modalClose5 = document.querySelector('dialog #fechar5')
const modalClose6 = document.querySelector('dialog #fechar6')
const modalClose7 = document.querySelector('dialog #fechar7')
const modalClose8 = document.querySelector('dialog #fechar8')
const modalClose9 = document.querySelector('dialog #fechar9')
const modalClose10 = document.querySelector('dialog #fechar10')
const modalClose11 = document.querySelector('dialog #fechar11')
const modalClose12 = document.querySelector('dialog #fechar12')
const modalClose13 = document.querySelector('dialog #fechar13')
const modalClose14 = document.querySelector('dialog #fechar14')
const modalClose15 = document.querySelector('dialog #fechar15')
const modalClose16 = document.querySelector('dialog #fechar16')
const modalClose17 = document.querySelector('dialog #fechar17')
const modalClose18 = document.querySelector('dialog #fechar18')
const modalClose19 = document.querySelector('dialog #fechar19')
const modalClose20 = document.querySelector('dialog #fechar20')
const body = document.querySelector('body')

verFotosBtn.onclick = function () {
  modal.showModal()
  body.style.overflow = 'hidden'
}

verFotosBtn2.onclick = function () {
  modal.showModal()
  body.style.overflow = 'hidden'
}

verFotosBtn3.onclick = function () {
  modal.showModal()
  body.style.overflow = 'hidden'
}

verFotosBtn4.onclick = function () {
  modal.showModal()
  body.style.overflow = 'hidden'
}

verFotosBtn5.onclick = function () {
  modal.showModal()
  body.style.overflow = 'hidden'
}

// Fechar Popup
document.onkeydown = function (e) {
  if(e.key === 'Escape') {
    modal.close()
    body.style.overflow = 'auto'
  }
}

modalClose.onclick = function () {
  modal.close()
  body.style.overflow = 'auto'
}

modalClose2.onclick = function () {
  modal.close()
  body.style.overflow = 'auto'
}

modalClose3.onclick = function () {
  modal.close()
  body.style.overflow = 'auto'
}

modalClose4.onclick = function () {
  modal.close()
  body.style.overflow = 'auto'
}

modalClose5.onclick = function () {
  modal.close()
  body.style.overflow = 'auto'
}

modalClose6.onclick = function () {
  modal.close()
  body.style.overflow = 'auto'
}

modalClose7.onclick = function () {
  modal.close()
  body.style.overflow = 'auto'
}

modalClose8.onclick = function () {
  modal.close()
  body.style.overflow = 'auto'
}

modalClose9.onclick = function () {
  modal.close()
  body.style.overflow = 'auto'
}

modalClose10.onclick = function () {
  modal.close()
  body.style.overflow = 'auto'
}

modalClose11.onclick = function () {
  modal.close()
  body.style.overflow = 'auto'
}

modalClose12.onclick = function () {
  modal.close()
  body.style.overflow = 'auto'
}

modalClose13.onclick = function () {
  modal.close()
  body.style.overflow = 'auto'
}

modalClose14.onclick = function () {
  modal.close()
  body.style.overflow = 'auto'
}

modalClose15.onclick = function () {
  modal.close()
  body.style.overflow = 'auto'
}

modalClose16.onclick = function () {
  modal.close()
  body.style.overflow = 'auto'
}

modalClose17.onclick = function () {
  modal.close()
  body.style.overflow = 'auto'
}

modalClose18.onclick = function () {
  modal.close()
  body.style.overflow = 'auto'
}

modalClose19.onclick = function () {
  modal.close()
  body.style.overflow = 'auto'
}

modalClose20.onclick = function () {
  modal.close()
  body.style.overflow = 'auto'
}


function slide() {
  let slideValue = document.getElementById('slider').value
  document.getElementById('my-img').style.clipPath = 'polygon(0 0,' + slideValue + '% 0,' + slideValue + '% 100%, 0 100%)'


  let slideValue2 = document.getElementById('slider2').value
  document.getElementById('my-img2').style.clipPath = 'polygon(0 0,' + slideValue2 + '% 0,' + slideValue2 + '% 100%, 0 100%)'


  let slideValue3 = document.getElementById('slider3').value
  document.getElementById('my-img3').style.clipPath = 'polygon(0 0,' + slideValue3 + '% 0,' + slideValue3 + '% 100%, 0 100%)'


  let slideValue4 = document.getElementById('slider4').value
  document.getElementById('my-img4').style.clipPath = 'polygon(0 0,' + slideValue4 + '% 0,' + slideValue4 + '% 100%, 0 100%)'


  let slideValue5 = document.getElementById('slider5').value
  document.getElementById('my-img5').style.clipPath = 'polygon(0 0,' + slideValue5 + '% 0,' + slideValue5 + '% 100%, 0 100%)'


  let slideValue6 = document.getElementById('slider6').value
  document.getElementById('my-img6').style.clipPath = 'polygon(0 0,' + slideValue6 + '% 0,' + slideValue6 + '% 100%, 0 100%)'


  let slideValue7 = document.getElementById('slider7').value
  document.getElementById('my-img7').style.clipPath = 'polygon(0 0,' + slideValue7 + '% 0,' + slideValue7 + '% 100%, 0 100%)'


  let slideValue8 = document.getElementById('slider8').value
  document.getElementById('my-img8').style.clipPath = 'polygon(0 0,' + slideValue8 + '% 0,' + slideValue8 + '% 100%, 0 100%)'


  let slideValue9 = document.getElementById('slider9').value
  document.getElementById('my-img9').style.clipPath = 'polygon(0 0,' + slideValue9 + '% 0,' + slideValue9 + '% 100%, 0 100%)'


  let slideValue10 = document.getElementById('slider10').value
  document.getElementById('my-img10').style.clipPath = 'polygon(0 0,' + slideValue10 + '% 0,' + slideValue10 + '% 100%, 0 100%)'


  let slideValue11 = document.getElementById('slider11').value
  document.getElementById('my-img11').style.clipPath = 'polygon(0 0,' + slideValue11 + '% 0,' + slideValue11 + '% 100%, 0 100%)'


  let slideValue12 = document.getElementById('slider12').value
  document.getElementById('my-img12').style.clipPath = 'polygon(0 0,' + slideValue12 + '% 0,' + slideValue12 + '% 100%, 0 100%)'


  let slideValue13 = document.getElementById('slider13').value
  document.getElementById('my-img13').style.clipPath = 'polygon(0 0,' + slideValue13 + '% 0,' + slideValue13 + '% 100%, 0 100%)'


  let slideValue14 = document.getElementById('slider14').value
  document.getElementById('my-img14').style.clipPath = 'polygon(0 0,' + slideValue14 + '% 0,' + slideValue14 + '% 100%, 0 100%)'


  let slideValue15 = document.getElementById('slider15').value
  document.getElementById('my-img15').style.clipPath = 'polygon(0 0,' + slideValue15 + '% 0,' + slideValue15 + '% 100%, 0 100%)'


  let slideValue16 = document.getElementById('slider16').value
  document.getElementById('my-img16').style.clipPath = 'polygon(0 0,' + slideValue16 + '% 0,' + slideValue16 + '% 100%, 0 100%)'


  let slideValue17 = document.getElementById('slider17').value
  document.getElementById('my-img17').style.clipPath = 'polygon(0 0,' + slideValue17 + '% 0,' + slideValue17 + '% 100%, 0 100%)'


  let slideValue18 = document.getElementById('slider18').value
  document.getElementById('my-img18').style.clipPath = 'polygon(0 0,' + slideValue18 + '% 0,' + slideValue18 + '% 100%, 0 100%)'


  let slideValue19 = document.getElementById('slider19').value
  document.getElementById('my-img19').style.clipPath = 'polygon(0 0,' + slideValue18 + '% 0,' + slideValue18 + '% 100%, 0 100%)'


  let slideValue20 = document.getElementById('slider20').value
  document.getElementById('my-img20').style.clipPath = 'polygon(0 0,' + slideValue18 + '% 0,' + slideValue18 + '% 100%, 0 100%)'
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