<template>
  <div class="container">
    <div class="row">
      <profile-nav />
      <div v-if="getOrderId" class="orders-page-id col">
        <OrderParamsAll :get-order-id="getOrderId" />
        <OrderTableOffers
          :offers="getOrderId.offers"
          :get-order-id="getOrderId"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ProfileNav from '~/components/profile/profile-nav.vue'
import { PageOrdersId } from '~/composition/orders/page-orders-id'
import OrderParamsAll from '~/components/orders/page-id/order-params-all.vue'
import OrderTableOffers from '~/components/orders/page-id/order-table-offers.vue'
export default {
  name: 'PageOrdersId',
  components: { OrderTableOffers, OrderParamsAll, ProfileNav },
  setup() {
    return { ...PageOrdersId() }
  },
}
</script>

<style lang="sass">
@import "assets/sass/order/page/order-page-id"
</style>
