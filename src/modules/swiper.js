import Swiper, {Autoplay} from 'swiper';

export const swiper = () => {
    const swiper = new Swiper('.swiper', {
        breakpoints: {
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          },
        loop: true,
        modules: [Autoplay],
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
      });
}