<template>
  <div class="">
    <h3 class="h3">Способ оплаты <span class="text-error">*</span></h3>
    <template v-for="data in getOrderPayment">
      <BaseRadio
        v-if="data.active"
        :id="'payment-' + data.id"
        :key="data.id"
        :value-radio="data.id"
        :text="data.name"
        name="payment"
        :validate-input="$v"
        @value="setPaySystem($event)"
      />
    </template>
    <base-error :validate-input="$v" />
  </div>
</template>

<script lang="ts">
import BaseRadio from '~/components/base/input/base-radio.vue'
import { GetOrderForm } from '~/composition/orders/order-form/get-order-form'
import { OrderPayment } from '~/composition/orders/order-form/order-payment'
import BaseError from '~/components/base/error/base-error.vue'

export default {
  name: 'OrderFormPayment',
  components: { BaseError, BaseRadio },
  props: {
    $v: {
      type: Object,
      require: true,
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props: any, { emit }: { emit: Function }) {
    return { ...GetOrderForm(), ...OrderPayment(emit) }
  },
}
</script>

<!--<style lang="sass"></style>-->
