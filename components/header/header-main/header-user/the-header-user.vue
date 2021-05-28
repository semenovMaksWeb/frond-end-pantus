<template>
  <div class="header-user-row row-gutters col">
    <div class="header-user-items row-gutters">
      <div class="header-user-img">
        <img
          width="21"
          height="21"
          class="img"
          :src="require('~/assets/img/icons/icon-avatar.png')"
          alt="icons-avatar"
        />
      </div>
      <div v-if="!getProfile" class="header-user-items-link">
        <nuxt-link
          v-for="data in link"
          :key="data.id"
          :class="data.class"
          :to="data.to"
        >
          {{ data.text }}
        </nuxt-link>
      </div>
      <TheHeaderUserName />
      <TheHeaderDropdownUser />
    </div>
    <nuxt-link
      to="/cart"
      class="header-user-items row-gutters link-hover-main link"
    >
      <div class="header-user-img">
        <img
          width="21"
          height="21"
          class="img"
          :src="require('~/assets/img/icons/icon-shopping-cart.png')"
          alt="icon-cart"
        />
      </div>
      <div class="header-user-items-link">
        <div class="header-user-text">Корзина</div>
      </div>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { HeaderUser } from '~/composition/header/header-user/header-user'
import TheHeaderDropdownUser from '~/components/header/header-main/header-user/the-header-dropdown-user.vue'
import TheHeaderUserName from '~/components/header/header-main/header-user/the-header-user-name.vue'

export default {
  name: 'TheHeaderUser',
  components: { TheHeaderUserName, TheHeaderDropdownUser },
  setup() {
    return { ...HeaderUser() }
  },
}
</script>

<style lang="sass">
@import "assets/sass/header/header-main/header-user"
</style>
