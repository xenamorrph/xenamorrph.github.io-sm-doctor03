// "use strict";

document.addEventListener('DOMContentLoaded', function(){

 
  const swiperGallery = new Swiper('.b-gallery__swiper', {
    // Кол-во пролистываемых сдайдеров
    slidesPerGroup: 1,
    breakpoints: {
      // when window width is >= 320px
      320: {
        // Отображение кол-ва слайдов
        slidesPerView: 1,
        spaceBetween: 0,
      },
      
      480: {
        slidesPerView: 2,
        // Отступ между слайдами
        spaceBetween: 20,
      },

      1300: {
        slidesPerView: 3,
        spaceBetween: 35,
      },
      
      1600: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
    
    // Стрелки
    navigation: {
      prevEl: '.b-gallery__swiper-button-prev',
      nextEl: '.b-gallery__swiper-button-next',
    },
    // Возможность управлять с клавиатуры
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    // Отключение слайдера, если слайдов меньше видимой области
    watchOverflow: true,
  });
})

