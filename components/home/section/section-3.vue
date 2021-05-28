<template>
  <section class="section3">
    <div class="container">
      <div class="row section3-row">
        <home-block-carbrands
          v-for="(link, index) in link1"
          :key="index"
          :link="link"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import HomeBlockCarbrands from '~/components/home/elem/home-block-carbrands.vue'
import { HomeSection3 } from '~/composition/home/section/section-3'

export default {
  name: 'Section3',
  components: { HomeBlockCarbrands },
  setup() {
    return { ...HomeSection3() }
  },
}
</script>
<style lang="sass">
@import "assets/sass/home/section/section3"
</style>
