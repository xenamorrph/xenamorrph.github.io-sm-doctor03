

// "use strict";

document.addEventListener('DOMContentLoaded', function(){

  const articleText = document.querySelector('.b-main-article__text');
  const paragraphsAll = articleText.querySelectorAll('p');
  const paragraphsHidden = articleText.querySelectorAll('p:not(:first-child)');
  const showMore = articleText.querySelector('.b-main-article__button');

  start();
  window.onresize = start;

  function start(){
    if (paragraphsAll.length > 1 && document.documentElement.clientWidth < 768) {
      showMore.style.display="block";
      showMore.textContent = 'Читать полностью';

      reveal();

      function reveal() {
        showMore.addEventListener('click', () => {
          if (showMore.textContent = 'Читать полностью') {
            paragraphsHidden.forEach((element) => {
              element.classList.add('active')
            });
            showMore.textContent = 'Скрыть';
            hide();
          }
        });
      }
      
      function hide() {
        showMore.addEventListener('click', () => { 
          if (showMore.textContent = 'Скрыть') {
            paragraphsHidden.forEach((element) => {
              element.classList.remove('active');
            })
            showMore.textContent = 'Читать полностью';
            reveal();
          }
        })
      }
    }

    else {
      showMore.style.display="none";
    }
  }
})

