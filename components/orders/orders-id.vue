<template>
  <div class="orders-id">
    <div class="row-gutters row-order-id">
      <nuxt-link class="orders-id-link-id" :to="'/profile/orders/' + order.id">
        Заказ № {{ order.id }}
      </nuxt-link>
      <div class="order-id-status">
        <b>Статус заказа:</b> {{ order.status.name }}
      </div>
    </div>
    <time :datetime="order.date" class="order-id-time"
      >Дата: {{ order.date }}
    </time>
    <nuxt-link class="order-id-link" :to="'/profile/orders/' + order.id">
      Подробнее
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'
import { OrdersInterface } from '~/interface/orders/orders.interface'

export default {
  name: 'OrdersId',
  props: {
    order: Object as PropType<OrdersInterface>,
  },
}
</script>
<style lang="sass">
@import "assets/sass/order/order-id"
</style>
