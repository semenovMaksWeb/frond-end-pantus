<template>
  <div class="cart-active">
    <font-awesome class="cart-icons-active" unicode="&#xf12a;" />
    <div class="cart-text-active">{{ text }}</div>
  </div>
</template>

<script>
import FontAwesome from '~/components/base/font-awesome/font-awesome'
export default {
  name: 'CartNotActive',
  components: { FontAwesome },
  props: {
    text: {
      type: String,
      default:
        'К сожалению позиция от данного поставщика уже не доступна к покупке и не будет добавлена в Ваш заказ.',
    },
  },
}
</script>

<style lang="sass">
@import "assets/sass/cart/cart-not-active.sass"
</style>
