<template>
  <div class="order-city-block">
    <base-input
      text="Город"
      :validate-input="$v"
      @value="searchCity($event)"
      @click="ToggleBodyFunctionClick"
    />
    <ul v-if="ToggleBody && getCity.length > 0" class="col order-city-ul">
      <li
        v-for="elem in getCity"
        :key="elem.id"
        :class="{ active: elem.zip === zip }"
        class="order-city-li"
        @click="setCityOrder(`${elem.typeShort} ${elem.name}`, elem.zip)"
      >
        {{ elem.typeShort }} {{ elem.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import BaseInput from '~/components/base/input/base-input.vue'
import { OrderCity } from '~/composition/orders/order-form/order-city'
import { ToggleBodyFalse } from '~/composition/_toggle/toggle-body-false'

export default {
  name: 'OrderFormCity',
  components: { BaseInput },
  props: {
    $v: {
      type: Object,
      require: true,
    },
    zip: {
      type: Number,
      require: true,
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props: any, { emit }: { emit: Function }) {
    return { ...OrderCity(emit), ...ToggleBodyFalse() }
  },
}
</script>

<style lang="sass">
@import "assets/sass/order/form/order-form-city"
</style>
