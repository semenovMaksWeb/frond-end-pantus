<template>
  <HeaderDropdown
    :array="link"
    target="link-hover-main header-top-link dropdown-click"
    class-items="header-dropdown header-top-dropdown"
  />
</template>

<script lang="ts">
import HeaderDropdown from '~/components/header/header-dropdown.vue'
import { HeaderBottomDropdown } from '~/composition/header/header-top/header-top-dropdown'
export default {
  name: 'TheHeaderTopDropdown',
  components: { HeaderDropdown },
  setup() {
    return { ...HeaderBottomDropdown() }
  },
}
</script>
