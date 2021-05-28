<template>
  <nav v-if="activeNav" class="header-mobile-nav box-shadow">
    <div
      v-if="activeNav.backLink"
      class="link link-hover-main header-mobile-link header-mobile-row"
      :to="activeNav.backLink.to"
      @click="setActiveMav(activeNav.backLink.name)"
    >
      {{ activeNav.backLink.text }}
      <font-awesome unicode="&#xf060;" />
    </div>
    <div>
      <template v-for="(link, index) in activeNav.link">
        <div v-if="link.to" :key="index" @click="setStart(null)">
          <nuxt-link
            class="link link-hover-main header-mobile-link"
            :to="link.to"
          >
            {{ link.text }}
          </nuxt-link>
        </div>

        <p
          v-if="link.name"
          :key="index"
          class="link link-hover-main header-mobile-link header-mobile-row"
          @click="setActiveMav(link.name)"
        >
          {{ link.text }}
          <font-awesome unicode="&#xf054;" />
        </p>
      </template>
    </div>
    <!--      <nuxt-link ></nuxt-link>-->
  </nav>
</template>

<script lang="ts">
import { HeaderMobile } from '~/composition/header/header-mobile'
import FontAwesome from '~/components/base/font-awesome/font-awesome.vue'

export default {
  name: 'TheHeaderMobileNav',
  components: { FontAwesome },
  setup() {
    return { ...HeaderMobile() }
  },
}
</script>

<style lang="sass">
@import "assets/sass/header/header-mobile/header-mobile-nav"
</style>
