<template>
  <table class="base-table">
    <thead class="base-table-thead">
      <tr>
        <th class="base-table-th base-table-th-full">Поставщик</th>
        <th class="base-table-th base-table-th-full">Наличие</th>
        <th class="base-table-th base-table-th-full">Срок</th>
        <th class="base-table-th base-table-th-full">Цена</th>
        <th class="base-table-th base-table-th-full"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="offer in product.productOffer" :key="offer.id">
        <td class="base-table-td base-table-td-full" data-label="Поставщик">
          {{ offer.supplier.name }}
        </td>
        <td class="base-table-td base-table-td-full" data-label="Наличие">
          {{ offer.quantity }}
        </td>
        <td class="base-table-td base-table-td-full" data-label="Срок">
          {{ offer.supplier.deliveryDelay }}
        </td>
        <td class="base-table-td base-table-td-full" data-label="Цена">
          <product-symma :symma="offer.prices" />
        </td>
        <td class="base-table-td base-table-td-full">
          <product-button-buy
            :link-product="product.productCard"
            :link-offers="offer"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { PropType } from 'vue'
import { TypeProductVuex } from '~/interface/products/products.interface'
import ProductSymma from '~/components/products/element/product-symma.vue'
import ProductButtonBuy from '~/components/products/element/product-button.vue'

export default {
  name: 'ProductOfferId',
  components: { ProductButtonBuy, ProductSymma },
  props: {
    product: {
      type: Object as () => PropType<TypeProductVuex>,
    },
  },
}
</script>

<style lang="sass">
@import "assets/sass/base/base-table"
</style>
