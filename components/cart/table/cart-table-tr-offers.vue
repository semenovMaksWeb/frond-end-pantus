<template>
  <tr class="base-table-tr cart-table-tr">
    <td
      class="cart-table-td base-table-td cart-table-td-supplier"
      data-label="Поставщик"
    >
      <template v-if="offers.activity">
        {{ offers.supplier.name }}
      </template>
    </td>
    <td class="cart-table-td base-table-td" data-label="Остаток">
      <template v-if="offers.activity">
        {{ offers.quantity }}
      </template>
    </td>
    <td class="cart-table-td base-table-td" data-label="Цена">
      <template v-if="offers.activity"> {{ offers.prices }} ₽ </template>
    </td>
    <td
      class="cart-table-td base-table-td cart-table-td-count"
      data-label="Количество"
    >
      <cart-count-offers v-if="offers.activity" :offers="offers" />
    </td>
    <product-symma
      v-if="offers.activity"
      data-label="Сумма"
      class="base-table-td"
      :component="'td'"
      :symma="offers.count * offers.prices"
    />
    <td v-else><cart-not-active /></td>
    <td class="base-table-td">
      <cart-delete-offers :id="offers.id" />
    </td>
    <td class="">
      <cart-offer-edit-count v-if="offers.activity" :offer="offers" />
    </td>
  </tr>
</template>

<script lang="ts">
import { PropType } from 'vue'
import ProductSymma from '~/components/products/element/product-symma.vue'
import { CartOfferInterface } from '~/interface/cart/cart.interface'
import CartDeleteOffers from '~/components/cart/button/cart-delete-offers.vue'
import CartCountOffers from '~/components/cart/cart-count-offers.vue'
import CartOfferEditCount from '~/components/cart/button/cart-offer-edit-count.vue'
import CartNotActive from '~/components/cart/cart-not-active.vue'
export default {
  name: 'CartTableTrOffers',
  components: {
    CartNotActive,
    CartOfferEditCount,
    CartCountOffers,
    CartDeleteOffers,
    ProductSymma,
  },
  props: {
    offers: {
      type: Object as PropType<CartOfferInterface>,
    },
  },
}
</script>
