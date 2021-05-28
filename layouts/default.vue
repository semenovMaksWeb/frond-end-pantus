<template>
  <div class="wrapper-full">
    <portal-target name="body" />
    <TheHeader />
    <main>
      <Nuxt />
    </main>
    <footer-main />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import TheHeader from '@/components/header/the-header.vue'
import FooterMain from '~/components/footer/footer-main.vue'

export default Vue.extend({
  components: {
    FooterMain,
    TheHeader,
  },
})
</script>
