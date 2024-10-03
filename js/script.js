$(document).ready(function() {


    //=================== Слайдер в оффере на главной ============

    const offerSlider= new Swiper('.offer-silder', {
        loop: true,
        speed: 800,
        grabCursor: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
   
        navigation: {
            nextEl: ".offer-silder-next",
            prevEl: ".offer-silder-prev",
        },
        pagination: {
            el: ".offer-slider-pagination",
            clickable: true,
          },
      })


  //=================== Слайдр каталога ============

    const menuSlider = new Swiper(".menu-silder", {
      spaceBetween: 20,
      initialSlide: 0,
      speed: 600,
      slidesPerView: 'auto',
      grabCursor: true,
      keyboard: {
        enabled: true,
      },
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      breakpoints: {
        1200: {
          spaceBetween: 13
        }, 
        1500: {
          spaceBetween: 16
        }, 
      }
    });


    const productSlider = new Swiper('.product-silder', {
      speed: 600,
        scrollbar: {
          el: ".product-silder-scrollbar",
        },
    });

    function sliderMouseSlideInit() {
      document.addEventListener("mousemove", function(e) {
          const targetElement = e.target;
          if (targetElement.closest('[data-mousemove-swipe]')) {
              const sliderElement = targetElement.closest('[data-mousemove-swipe]');
              const sliderItem = sliderElement.swiper.slides[getIndex(sliderElement)];
              const sliderLength = sliderElement.swiper.slides.length;
              if (sliderLength > 1) {
                  const sliderWidth = sliderItem.offsetWidth;
                  const sliderPath = Math.round(sliderWidth / sliderLength);
                  const sliderMousePos = e.clientX - sliderElement.offsetLeft;
                  const sliderSlide = Math.floor(sliderMousePos / sliderPath);
                  sliderElement.swiper.slideTo(sliderSlide);
              }
          }
      });
  
      // Добавляем событие для отслеживания ухода мыши с элемента слайдера
      document.querySelectorAll('[data-mousemove-swipe]').forEach(function(sliderElement) {
          sliderElement.addEventListener("mouseleave", function() {
              sliderElement.swiper.slideTo(0); // Возвращаем на первый слайд
          });
      });
  
      function getIndex(el) {
          return Array.from(el.parentNode.children).indexOf(el);
      }
  }
  
  if (document.querySelector('[data-mousemove-swipe]')) {
      sliderMouseSlideInit();
  }





  //=================== Слайдре партнеров ============

    const partnersSlider = new Swiper(".partners-silder", {
      spaceBetween: 20,
      initialSlide: 0,
      speed: 600,
      slidesPerView: 'auto',
      grabCursor: true,
      keyboard: {
        enabled: true,
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".partners-slider-next",
        prevEl: ".partners-slider-prev",
    },
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      breakpoints: {
        1200: {
          spaceBetween: 13
        }, 
        1500: {
          spaceBetween: 16
        }, 
      }
    });



  //=================== Маска номера телефона ============

    $('.phone-input').inputmask({
      "mask": "+7 (999) 999 - 99 - 99",
      "placeholder": "",
      "showMaskOnHover": false,
      "showMaskOnFocus": true
    });


  //=================== Часто задаваемые вопросы ============
  
    // Сначала скроем все ответы
  $('.faq__item-answer').slideUp();

  $('.faq__item').click(function() {
      // Уберем класс rotate-faq у всех SVG в заголовках вопросов
      $('.faq__item-question svg').removeClass('rotate-faq');
      
      // Применим исходные стили к всем элементам
      $(this).find('.faq__item-question').css('border', '1px solid #E8E8E8');
      $(this).find('.faq__item-question span, .faq__item-question p').css('color', '#000');
      $('.faq__item').css('border', '1px solid transparent');

      // Находим текущий вопрос и ответ
      var $currentAnswer = $(this).find('.faq__item-answer');
      var $currentQuestion = $(this).find('.faq__item-question');
    
      // Если текущий ответ виден, скроем его
      if ($currentAnswer.is(':visible')) {
          $currentAnswer.slideUp();
      } else {
          // Скроем все ответы, кроме текущего
          $('.faq__item-answer').not($currentAnswer).slideUp();
          
          // Раскроем только текущий ответ
          $currentAnswer.slideDown();
          
          // Изменяем стиль для текущего вопроса
          $(this).find('.faq__item-question').css('border', '1px solid transparent');
          $(this).parent().find('.faq__item-question span, .faq__item-question p').css('color', '#000');
          $(this).find('.faq__item-question span, .faq__item-question p').css('color', '#DA0916');
          $(this).css('border', '1px solid #E8E8E8');
          
          // Добавляем класс rotate-faq к SVG текущего вопроса
          $currentQuestion.find('svg').addClass('rotate-faq');
      }
  });


  
  //=================== Анимация у checkbox ============

  $(".check-label").on("click", function () {
    let isChecked = $(this).children("input").prop("checked");
    if (isChecked) {
        $(this).find(".fakecheck").addClass("checked");
    } else {
        $(this).find(".fakecheck").removeClass("checked");
    }
  });

});