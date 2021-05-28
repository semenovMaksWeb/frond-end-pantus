import { computed, ref, useContext, useFetch } from '@nuxtjs/composition-api'

export function Section7() {
  const { store } = useContext()
  const popular = computed(() => {
    return store.getters['product/popular/getProductPopular']
  })
  useFetch(async () => {
    await store.dispatch('product/popular/actionsProductPopular')
  })
  const swiperOption = ref({
    loop: true,
    slidesPerGroup: 1,
    autoHeight: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // centeredSlides: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      450: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      700: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  })
  return { swiperOption, popular }
}
