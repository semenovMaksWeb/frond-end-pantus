<template>
  <div class="order-form-delivery-wrapper">
    <h3 class="h3">Способ доставки <span class="text-error">*</span></h3>
    <div v-for="data in getOrderDelivery" :key="data.id">
      <div class="row order-form-delivery-row">
        <BaseRadio
          v-if="data.active"
          :id="'delivery-' + data.id"
          :key="data.id"
          class="col order-form-delivery-input"
          :value-radio="data.id"
          :text="data.name"
          name="delivery"
          :validate-input="$v"
          @value="setCity($event)"
        >
          <div class="order-form-description">{{ data.description }}</div>
        </BaseRadio>
        <div class="col order-form-extra">{{ data.extra }}</div>
      </div>
    </div>
    <base-error :validate-input="$v" />
    <slot />
  </div>
</template>

<script lang="ts">
import BaseRadio from '~/components/base/input/base-radio.vue'
import { GetOrderForm } from '~/composition/orders/order-form/get-order-form'
import { OrderDelivery } from '~/composition/orders/order-form/order-delivery'
import BaseError from '~/components/base/error/base-error.vue'

export default {
  name: 'OrderFormDelivery',
  components: { BaseError, BaseRadio },
  props: {
    $v: {
      type: Object,
      require: true,
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props: any, { emit }: { emit: Function }) {
    return { ...GetOrderForm(), ...OrderDelivery(emit) }
  },
}
</script>

<style lang="sass">
@import "assets/sass/order/form/order-form-delivery"
</style>
