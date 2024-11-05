$(document).ready(function(){ //실행틀 시작

  var swiper = new Swiper(".mv", {
    spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var Mainswiper = new Swiper(".pd", {
    spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var Subswiper1 = new Swiper(".ib1", {
    spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var Subswiper2 = new Swiper(".ib2", {
    spaceBetween: 30,
    centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".npd", {
    slidesPerView: 1,
    speed: 1000,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    loop : true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      768: {
          slidesPerView: 3,
          spaceBetween: 10,
      },

      1200: {
          slidesPerView: 5,
          spaceBetween: 30,
      },
    },
  });

  var newsList = new Swiper(".news-list", {
    direction: "vertical",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop:true,
  });

  function createLoopingText(el) {
    const lerp = (current, target, factor) => current * (1 - factor) + target * factor;
  
    const state = {
      el, 
      lerp: {
        current: 0,
        target: 0 
      },
      interpolationFactor: 0.1, // 선형 보간에 사용되는 요인
      speed: 0.025, 
      direction: -1
    };
    
    state.el.style.cssText = 'position: relative; display: inline-flex; white-space: nowrap;';
    state.el.children[1].style.cssText = `position: absolute; left: ${100 * -state.direction}%;`;
  
    
    function animate() {
      state.lerp.target += state.speed;
      state.lerp.current = lerp(state.lerp.current, state.lerp.target, state.interpolationFactor);
  
      if (state.lerp.target > 100) {
        state.lerp.current -= state.lerp.target;
        state.lerp.target = 0;
      }
  
      const x = state.lerp.current * state.direction;
      state.el.style.transform = `translateX(${x}%)`;
    }
  
    function render() {
      animate();
      window.requestAnimationFrame(render);
    }
  
    render();
    return state;
  }
  
  document.querySelectorAll('.loop-container').forEach(el => createLoopingText(el));

});// 실행틀 끝