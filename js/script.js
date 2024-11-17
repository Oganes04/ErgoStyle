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
        el: ".swiper-scrollbar-slider-menu",
      },
      breakpoints: {
        1200: {
          spaceBetween: 13
        }, 
        1500: {
          spaceBetween: 16
        }, 
        0: {
          spaceBetween: 10
        },
      }
    });

    //=================== Слайдр галереи ============

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
      scrollbar: {
        el: ".swiper-scrollbar-partners",
      },
      navigation: {
        nextEl: ".partners-slider-next",
        prevEl: ".partners-slider-prev",
    },

      breakpoints: {
        1200: {
          spaceBetween: 13
        }, 
        1500: {
          spaceBetween: 16
        }, 
        0: {
          spaceBetween: 10
        }
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
      let $currentAnswer = $(this).find('.faq__item-answer');
      let $currentQuestion = $(this).find('.faq__item-question');
    
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



 //=================== Вы смотрели ============

  const wachedSlider = new Swiper(".wached__slider", {
    spaceBetween: 20,
    initialSlide: 0,
    speed: 600,
    slidesPerView: 'auto',
    // grabCursor: true,
    // autoplay: {
    //   delay: 4000,
    //   disableOnInteraction: false,
    // },
    scrollbar: {
      el: ".swiper-scrollbar-recommendation",
    },
    navigation: {
      nextEl: ".wached-slider-next",
      prevEl: ".wached-slider-prev",
  },

    breakpoints: {
      1200: {
        spaceBetween: 13
      }, 
      1500: {
        spaceBetween: 16
      }, 
      601: {
        slidesPerView: 'auto'
      },
      310: {
        slidesPerView: 2,
        spaceBetween: 10
      }
    }
  });


//=================== Слайдре партнеров ============

  const productGallery = new Swiper(".product-gallery", {
    loop: true,
    speed: 600,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    // grabCursor: true,
    navigation: {
      nextEl: ".product-slider-next",
      prevEl: ".product-slider-prev",
    },

    breakpoints: {
      1200: {
        spaceBetween: 13
      }, 
      1500: {
        spaceBetween: 16
      }, 
      0: {
        spaceBetween: 5
      }
    },
    on: {
      slideChangeTransitionStart: function () {
      
      },
      transitionEnd: function () {
          let activeSlideImgLink = this.slides[this.activeIndex].src;
          $('.product__photo>img').attr('src', activeSlideImgLink);

      },
    },

  });


  //=================== Выбор цвета у товара ============
  let defaultColor = $(".product__info-selector-color .product__info-selector-item input").first().attr('value');
  $(".product__info-selector-color p span").text(defaultColor);

  $(".product__info-selector-color .product__info-selector-item").on("click", function () {
    let currentColor = $(this).find('input').attr('value');
    $(this).parent().parent().find('p span').text(currentColor);
  });

  //=================== Выбор цвета у товара ============

   let defaultСrosspiece = $(".product__info-selector-crosspiece .product__info-selector-item input").first().attr('value');
   $(".product__info-selector-crosspiece p span").text(defaultСrosspiece);
 
   $(".product__info-selector-crosspiece .product__info-selector-item").on("click", function () {
     let currentColor = $(this).find('input').attr('value');
     $(this).parent().parent().find('p span').text(currentColor);
   });



   //=================== Выбор характеристики товара у первого типа карточки ============


   $('.product__full-info-tabs span').on("click", function () {
      $('.product__full-info-tabs span').removeClass('active');
      $(this).toggleClass('active');
   });


   //=================== Dropdown инструкции в карточке товара ============
   $('.product__full-info-manual button').on("click", function () {

    $('.product__full-info-manual-files').slideToggle(300);

    $(this).find('svg').toggleClass('active');
   });

   $('.product__full-info-specifications').slideDown();
   $('.product__full-info-collection').slideUp();

   $('#product__full-info-tabs-specifications').on("click", function () {
      $('.product__full-info-specifications').slideDown();
      $('.product__full-info-collection').slideUp();
   });

   $('#product__full-info-tabs-collection').on("click", function () {
    $('.product__full-info-specifications').slideUp();
    $('.product__full-info-collection').slideDown();
 });




   
 //=================== Слайдер "Коллекции товара" ============

  const collectionSlider = new Swiper(".product-collection-slider", {
    spaceBetween: 20,
    initialSlide: 0,
    speed: 600,
    slidesPerView: 'auto',
    grabCursor: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".product-collection-slider-next",
      prevEl: ".product-collection-slider-prev",
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


  
   //=================== Анимация для иконуи "Избранное" ============

   $('.favourites-icon').on("click", function () {
      console.log('aaa');
      $(this).toggleClass('active');
   });


   //=================== Меню в личерм кабинете ============

   $('.account__content-item').slideUp();
   $('.account__content-profile').slideDown();
  //  $('.account__content-discounts').slideDown();
   $('#profile').addClass('active');


   $('.account aside nav ul li').on("click", function () {
    $('.account aside nav ul li').removeClass('active');
    $(this).addClass('active');
    let munudId = $(this).attr('id');
    let accountContent = '[class^="account__content-"][class$="' + munudId + '"]';
    $('.account__content-item').slideUp();
    $(accountContent).slideDown();
    
   });


   //=================== Слайдр каталога ============

   const docsSlider = new Swiper(".docs-silder", {
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



  //=================== Смена текста на странице оформления карты ============


  $('.gift__card-form-info-content').slideUp();
  $('#1').addClass('active');
  $('.gift__card-form-info-content-1').slideDown();

  $('.gift__card-form-info-swich span').on("click", function () {
    $('.gift__card-form-info-swich span').removeClass('active');
    $(this).addClass('active');

    let munudId = $(this).attr('id');
    let content = '[class^="gift__card-form-info-content"][class$="' + munudId + '"]';
    $('.gift__card-form-info-content').slideUp();
    $(content).slideDown();
  });










  $("#burger_menu").click(function() {
    $(this).toggleClass('open');
    $("#catalogContentAdaptive").toggleClass("open");
    // $("html").toggleClass("site__fixed");
    // $("body").toggleClass("site__fixed");
  });

  $("#catalog").click(function() {
    $(this).addClass('active');
    // $("#room").removeClass('active');
    $("#catalogContent").toggleClass("open");
    $(this).find('.swich-icon').toggleClass("open");
    $(this).find('.cross-icon').toggleClass("open");
    // $("#room").find('.swich-icon').removeClass("open");
    // $("#room").find('.cross-icon').removeClass("open");
  });

  // $("#room").click(function() {
  //   $(this).toggleClass('active');
  //   $("#catalog").removeClass('active');
  //   $("#catalogContent").toggleClass("open");
  //   $(this).find('.swich-icon').toggleClass("open");
  //   $(this).find('.cross-icon').toggleClass("open");
  //   $("#catalog").find('.swich-icon').removeClass("open");
  //   $("#catalog").find('.cross-icon').removeClass("open");
  // });


  $(".catalog__item-fav").click(function() {
      $(this).toggleClass('active');
  });



  // const minScroll = $('.header__main').offset().top;

  // console.log(minScroll);
 
  // $(window).on('scroll', function(e) {
  //   let y = $(this).scrollTop();
 
  //   if (y > minScroll) {
  //     $('.header__main').addClass('fixed');
  //   } else {
  //     $('.header__main').removeClass('fixed');
  //   }
  // });


  // const minScrollMenu = $('.catalog__menu').offset().top;

  // console.log(minScroll);
 
  // $(window).on('scroll', function(e) {
  //   let y = $(this).scrollTop();
 
  //   if (y > minScrollMenu) {
  //     $('.catalog__menu').addClass('fixed');
  //   } else {
  //     $('.catalog__menu').removeClass('fixed');
  //   }
  // });


  $("#bannerClose").click(function() {
    $(this).parent().slideUp(300);
  });


});
