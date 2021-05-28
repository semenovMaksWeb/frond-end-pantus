<template>
  <div>
    <button class="button link-hover-button header-mobile" @click="setStart">
      <font-awesome v-if="!activeNav" unicode="&#xf0c9;" />
      <font-awesome v-if="activeNav" unicode="&#xf00d;" />
    </button>
    <the-header-mobile-nav v-if="activeNav" />
  </div>
</template>

<script>
import FontAwesome from '~/components/base/font-awesome/font-awesome'
import { HeaderMobile } from '~/composition/header/header-mobile'
export default {
  name: 'TheHeaderMobile',
  components: {
    TheHeaderMobileNav: () =>
      import('~/components/header/header-mobile/the-header-mobile-nav'),
    FontAwesome,
  },
  setup() {
    return { ...HeaderMobile() }
  },
}
</script>

<style lang="sass">
@import "assets/sass/header/header-mobile/header-mobile"
</style>
