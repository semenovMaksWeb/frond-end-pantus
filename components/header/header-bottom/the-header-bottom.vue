<template>
  <div class="header-bottom">
    <div class="container">
      <div class="header-bottom-items">
        <div class="header-bottom-link dropdown-click">Все запчасти</div>
        <HeaderBottomDropdown />
        <nuxt-link
          v-for="data in link"
          :key="data.id"
          class="header-bottom-link"
          :to="data.to"
          >{{ data.text }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { HeaderBottom } from '~/composition/header/header-bottom/header-bottom.ts'
import HeaderBottomDropdown from '~/components/header/header-bottom/the-header-bottom-dropdown.vue'

export default Vue.extend({
  name: 'TheHeaderBottom',
  components: { HeaderBottomDropdown },
  setup() {
    return { ...HeaderBottom() }
  },
})
</script>

<style lang="sass">
@import 'assets/sass/header/header-bottom/header-bottom'
</style>
