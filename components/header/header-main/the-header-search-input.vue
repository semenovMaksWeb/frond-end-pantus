<template>
  <div class="header-search-items col">
    <div class="header-search-input-items">
      <TheHeaderMobile />
      <input v-model="search" type="text" class="header-search-input" />
      <button class="header-search-button" @click.prevent="pushSearch">
        Найти
      </button>
    </div>
    <div v-if="false" class="header-search-error">Вы не указали поиск</div>
  </div>
</template>

<script lang="ts">
import { HeaderSearchInput } from '~/composition/header/header-search-input'
import TheHeaderMobile from '~/components/header/header-mobile/the-header-mobile.vue'
export default {
  name: 'TheHeaderSearchInput',
  components: { TheHeaderMobile },
  setup() {
    return { ...HeaderSearchInput() }
  },
}
</script>

<style lang="sass">
@import "assets/sass/header/header-main/header-search-input"
</style>
