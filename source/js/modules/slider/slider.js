import Swiper from '../../vendor/swiper';

const slider = () => {
  const swiper = new Swiper('.mySwiper-coaches', {
    slidesPerView: 4,
    spaceBetween: 40,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.slider__button-next',
      prevEl: '.slider__button-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // when window width is >= 1200px
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });

  swiper.on('slideChange', function () {
    console.log('слайд переключен');
  });
};

export {slider};
