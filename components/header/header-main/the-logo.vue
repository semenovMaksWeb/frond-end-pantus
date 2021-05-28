<template>
  <div class="logo-img-items col">
    <nuxt-link to="/">
      <img :src="require('~/assets/img/logo.png')" class="img" alt="logo" />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'TheLogo',
}
</script>

<style lang="sass">
@import "assets/sass/logo/logo"
</style>
