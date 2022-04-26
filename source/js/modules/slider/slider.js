/* eslint-disable no-unused-vars */
import Swiper from '../../vendor/swiper';

const sliderCoaches = () => {
  const swiperCoaches = new Swiper('.mySwiper-coaches', {
    slidesPerView: 4,
    spaceBetween: 40,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.slider__button-next--coaches',
      prevEl: '.slider__button-prev--coaches',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
};

const sliderFeedback = () => {
  const swiperFeedback = new Swiper('.mySwiper-feedback', {
    slidesPerView: 1,
    spaceBetween: 40,
    slidesPerGroup: 1,
    loop: false,
    loopFillGroupWithBlank: false,
    navigation: {
      nextEl: '.slider__button-next--feedback',
      prevEl: '.slider__button-prev--feedback',
    },
    breakpoints: {
      320: {
        spaceBetween: 20,
      },
      768: {
        spaceBetween: 30,
      },
      1200: {
        spaceBetween: 40,
      },
    },
  });
};

export {sliderCoaches, sliderFeedback};
