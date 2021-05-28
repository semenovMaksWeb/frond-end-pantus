<template>
  <div class="cart-group-button">
    <cart-not-active
      v-if="getActiveCartAll"
      class="cart-mot-active__all"
      text="В вашей корзине присутствуют товары не доступные к покупке."
    />
    <button
      v-if="getCartAxios"
      class="link-hover-button button"
      @click="updateCart"
    >
      Обновить корзину
    </button>
    <nuxt-link
      v-else-if="!getUserAuthorization"
      to="/authorization"
      class="link-hover-button button"
    >
      Авторизоваться
    </nuxt-link>
    <nuxt-link
      v-else-if="getUserAuthorization"
      to="/order"
      class="link-hover-button button"
    >
      Оформить заказ
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { CartGroupButton } from '~/composition/cart/cart-group-button'
import CartNotActive from '~/components/cart/cart-not-active.vue'

export default {
  name: 'CartGroupButton',
  components: { CartNotActive },
  setup() {
    return { ...CartGroupButton() }
  },
}
</script>
<style lang="sass">
@import "assets/sass/cart/cart-group-button"
</style>
