<template>
  <HeaderDropdown target="header-user-text header-user-name" :array="link">
    <div class="header-dropdown-link" @click="exitUser">Выход</div>
  </HeaderDropdown>
</template>

<script lang="ts">
import { ProfileLink } from '~/composition/profile/profile-link'
import HeaderDropdown from '~/components/header/header-dropdown.vue'
import { ProfileExit } from '~/composition/profile/profile-exit'
export default {
  name: 'TheHeaderDropdownUser',
  components: { HeaderDropdown },
  setup() {
    return {
      ...ProfileLink(),
      ...ProfileExit(),
    }
  },
}
</script>

<style lang="sass">
@import "assets/sass/header/header-main/header-dropdown"
</style>
