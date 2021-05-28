<template>
  <div class="container">
    <cart-group-button v-if="getCart.length > 0" />
    <CartTable v-if="getCart.length > 0" :cart="getCart" />
    <Error404 v-else :text="'Корзина пустая'" />
    <cart-group-button v-if="getCart.length > 0" />
  </div>
</template>

<script lang="ts">
import { PageCart } from '~/composition/cart/page-cart'
import CartTable from '~/components/cart/table/cart-table.vue'
import Error404 from '~/components/base/error/404.vue'
import CartGroupButton from '~/components/cart/cart-group-button.vue'

export default {
  name: 'PageCart',
  components: { CartGroupButton, Error404, CartTable },
  setup() {
    return { ...PageCart() }
  },
}
</script>
