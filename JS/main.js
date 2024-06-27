// Печатает текст на автоматически

const typingText = document.querySelector('.main__title');
const typingText2 = document.querySelector('.main__subtitle');
const text = 'Привет, меня зовут Максим, я Frontend-разработчик';
const text2 = 'Всё, что вы видите здесь, создано мной';
let index = 0, index2 = 0;
function typeText() {
  if (index < text.length) {
    typingText.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 50); // Меняйте скорость печатания, увеличивая/уменьшая значение
  }
  else{
    typingText2.textContent += text2.charAt(index2);
    index2++;
    setTimeout(typeText, 50);
  }
}
typeText();

// Печатает текст на автоматически
// Слайдер
$('.skill__slider').slick({
  adaptiveHeight: true,
  arrows: false,
  slidesToShow: 4,
  infinite: true,
  draggable: false,
  dots: true,
  waitForAnimate: true,
  appendDots: $('.skill__dots'),
  responsive:
    [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          draggable: true,
        },
      },
    ]
})
$('.left').on('click', function (e) {
  e.preventDefault()
  $('.skill__slider').slick('slickPrev')
})
$('.right').on('click', function (e) {
  e.preventDefault()
  $('.skill__slider').slick('slickNext')
})
// Слайдер
// Регулировка высоты слайдера
$(document).ready(function() {
  var slides = $('.skill__slider .slick-slide');
  var maxHeight = 0;
  slides.each(function() {
    var slideHeight = $(this).height();
    if (slideHeight > maxHeight) {
      maxHeight = slideHeight;
    }
  });
  slides.height(maxHeight);
});
// Регулировка высоты слайдера
// Миксер
$(function () {
  var mixer = mixitup('.portf__box-mixer',{
    animation: {
      effects: 'fade',
      duration: 0
    },
    controls: {
      enable: true, 
      live: true
    }
  });
  $('.portf__box-filter').on('click', function () {
    $('.portf__box-filter').removeClass('portf__box-active')
    $(this).addClass('portf__box-active')
  })
})
// Миксер
// Аккордеон
$('.answ__box-item-href').on('click', function (e) {
  e.preventDefault();
  var $currentItem = $(this).closest('.answ__box-item');
  $currentItem.toggleClass('answ__box-item-act-bg');
  $(this).children('.answ__box-item-wrapper').children('.answ__box-item-plus').toggleClass('answ__box-item-active');
  $(this).children('.answ__box-item-descr').slideToggle();
});
// Аккордеон
// Дневной и ночной режимы
const logo1 = document.getElementById('logo1');
const logo2 = document.getElementById('logo2');
const background = document.body
const button1 = document.querySelector('.header__day');
const button2 = document.querySelector('.header__night');
function changeUrlCss(obj, url) {
  obj.style.backgroundImage = url;
}
function changeLogo(newLogoSrc) {
  logo1.src = newLogoSrc;
  logo2.src = newLogoSrc;
}
button2.addEventListener('click', () => {
  // Day
  document.documentElement.style.setProperty('--image-filter', 'brightness(1)');
  document.documentElement.style.setProperty('--blue', '#08f1f5');
  document.documentElement.style.setProperty('--green', '#08f553');
  document.documentElement.style.setProperty('--light-green', '#b7f1c9');
  document.documentElement.style.setProperty('--black', '#07178a');
  document.documentElement.style.setProperty('--black-bg', '#07178a');
  document.documentElement.style.setProperty('--white', '#fff');
  document.documentElement.style.setProperty('--red', '#e64207');
  document.documentElement.style.setProperty('--red-bg', '#e64207');
  document.documentElement.style.setProperty('--orange', '#ff8800');
  document.documentElement.style.setProperty('--orange-bg', '#ff8800');
  document.documentElement.style.setProperty('--grey', '#f6f1f0');
  document.documentElement.style.setProperty('--black-grey', '#b5afae');
  document.documentElement.style.setProperty('--fiol', '#b72ee1');
  changeLogo('./Data/main/Лого тёмное.png')
  changeUrlCss(background,'url("/Data/main/bg.png")')
  button1.classList.remove('hidden');
  button2.classList.add('hidden');
});
button1.addEventListener('click', () => {
  // Night
  document.documentElement.style.setProperty('--blue', '#109799');
  document.documentElement.style.setProperty('--green', '#046623');
  document.documentElement.style.setProperty('--light-green', '#3c4175');
  document.documentElement.style.setProperty('--black', '#ceced4');
  document.documentElement.style.setProperty('--black-bg', '#000000');
  document.documentElement.style.setProperty('--white', '#000000');
  document.documentElement.style.setProperty('--red', '#df5f30');
  document.documentElement.style.setProperty('--red-bg', '#e64207');
  document.documentElement.style.setProperty('--orange', '#f38405');
  document.documentElement.style.setProperty('--orange-bg', '#a45a06');
  document.documentElement.style.setProperty('--grey', '#626060');
  document.documentElement.style.setProperty('--black-grey', '#d9d3d2');
  document.documentElement.style.setProperty('--fiol', '#b72ee1');
  changeLogo('./Data/main/Лого светлое.png')
  changeUrlCss(background,'url("/Data/main/bg-dark.png")')
  button1.classList.add('hidden');
  button2.classList.remove('hidden');
});
// Дневной и ночной режимы
