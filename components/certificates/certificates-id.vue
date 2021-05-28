<template>
  <div
    class="certificates-id"
    :class="{
      landscape: certificates.orientation === 'landscape',
      portrait: certificates.orientation === 'portrait',
    }"
  >
    <div class="certificates-img">
      <img class="img" :src="certificates.img" alt="" />
      <!--      <v-lazy-image class="img" :src="certificates.img" alt="" />-->
      <!--      <a :to="certificates.img" @click.prevent="" />-->
    </div>
    <h4 class="certificates-id-description">
      {{ certificates.description }}
    </h4>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'
import { CertificatesInterface } from '@/interface/certificates.interface'
// import VLazyImage from 'v-lazy-image'
export default {
  name: 'CertificatesId',
  // components: { VLazyImage },
  props: {
    certificates: {
      type: Object as PropType<CertificatesInterface>,
    },
  },
}
</script>

<style lang="sass">
@import "assets/sass/certificates/certificates"
</style>
