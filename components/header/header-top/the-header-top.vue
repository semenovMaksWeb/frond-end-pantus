<template>
  <div class="header-top">
    <div class="container">
      <div class="row-gutters header-top-row">
        <nav class="header-top-nav">
          <span class="link-hover-main header-top-link dropdown-click"
            >О компании</span
          >
          <TheHeaderTopDropdown />
          <nuxt-link
            v-for="data in link"
            :key="data.id"
            class="link-hover-main header-top-link"
            :to="data.to"
          >
            {{ data.text }}
          </nuxt-link>
        </nav>
        <div>
          <nuxt-link class="header-top-tlf_link link-hover-main" :to="tlf.to">
            {{ tlf.text }}
          </nuxt-link>
          <span class="header-top-tlf_text">Звонок по РФ - бесплатный</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { HeaderTop } from '~/composition/header/header-top/header-top'

export default Vue.extend({
  name: 'TheHeaderTop',
  components: {
    TheHeaderTopDropdown: () =>
      import('~/components/header/header-top/the-header-top-dropdown.vue'),
  },
  setup() {
    return { ...HeaderTop() }
  },
})
</script>
<style lang="sass">
@import "assets/sass/header/header-top"
</style>
