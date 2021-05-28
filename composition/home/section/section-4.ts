import { ref } from '@nuxtjs/composition-api'

export function Section4() {
  const swiperOption = ref({
    loop: true,
    slidesPerGroup: 1,
    autoplay: {
      delay: 10,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      320: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      680: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      1170: {
        slidesPerView: 7,
        spaceBetween: 30,
      },
    },
  })
  return { swiperOption }
}
