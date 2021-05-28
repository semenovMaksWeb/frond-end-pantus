<template>
  <section class="section4">
    <div class="container">
      <h2 class="h2">
        Мы официальные дилеры 45-ти производителей автозапчастей
      </h2>
      <swiper :options="swiperOption">
        <swiper-slide v-for="brand in brands" :key="brand.code">
          <nuxt-link :to="brand.code">
            <VLazyImage
              :src="brand.img"
              class="img section4-img"
              :src-placeholder="require('@/assets/img/Ajux_loader.gif')"
            />
          </nuxt-link>
          <a :href="brand.img" @click.prevent="" />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script lang="ts">
import 'swiper/swiper.min.css'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { PropType } from 'vue'
import VLazyImage from 'v-lazy-image'
import { BrandCarousel } from '~/interface/brands/brand-carousel'
import { Section4 } from '~/composition/home/section/section-4'
export default {
  name: 'Section4',
  components: {
    Swiper,
    SwiperSlide,
    VLazyImage,
  },
  props: {
    brands: Array as PropType<BrandCarousel[]>,
  },
  setup() {
    return { ...Section4() }
  },
}
</script>

<style lang="sass">
@import "assets/sass/home/section/section4"
</style>
