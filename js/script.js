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
        // pagination: {
        //     el: ".product-silder-pagination",
        //   },
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
          })

          function getIndex(el) {
            return Array.from(el.parentNode.children).indexOf(el);
          } 
      }

      if (document.querySelector('[data-mousemove-swipe]')) {
        sliderMouseSlideInit();
      }


      
      // function sliderMouseSlideInit() {
      //   $(document).on('mousemove', function(e) {
      //     var $targetElement = $(e.target);
      //     if ($targetElement.closest('[data-mousemove-swipe]').length) {
      //       var sliderElement = $targetElement.closest('[data-mousemove-swipe]');
      //       var sliderIndex = getIndex(sliderElement);
      //       var sliderItem = productSlider.slides[sliderIndex];
      //       var sliderLength = productSlider.slides.length;
      //       console.log(sliderLength);
            
      //       if (sliderLength > 1) {
      //         var sliderWidth = sliderItem.width;
      //         var sliderPath = Math.round(sliderWidth / sliderLength);
      //         var sliderMousePos = e.clientX - sliderElement.offset().left;
      //         var sliderSlide = Math.floor(sliderMousePos / sliderPath);
              
      //         productSlider.slideTo(sliderSlide);
      //       }
      //     }
      //   });
      // }
      
      // function getIndex(el) {
      //   return $(el).parent().children().index($(el));
      // }
    
      // if ($('[data-mousemove-swipe]').length) {
      //   sliderMouseSlideInit();
      // }
});