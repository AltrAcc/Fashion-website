let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },

  on: {
    slideChange: function() {
      // Remove 'active' class from all slides
      document.querySelectorAll('.swiper-slide').forEach(slide => {
        slide.classList.remove('swiper-slide-active-custom');
      });
      
      // Add 'active' class to the currently active slide
      let activeSlide = this.slides[this.activeIndex];
      activeSlide.classList.add('swiper-slide-active-custom');
    }
  }
});
