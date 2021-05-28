<template>
  <table class="order-offer-table base-table">
    <thead class="base-table-thead">
      <tr class="base-table-tr-th">
        <th class="base-table-th">Артикул</th>
        <th class="base-table-th">Наименование</th>
        <th class="base-table-th">Цена</th>
        <th class="base-table-th">Кол-во</th>
        <th class="base-table-th orders-offer-right">Сумма</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="data in offers"
        :key="data.id"
        class="base-table-tr orders-offer-tr"
      >
        <td data-label="Артикул" class="base-table-td base-table-td-top">
          {{ data.sku }}
        </td>
        <td
          data-label="Наименование"
          class="base-table-td-top base-table-td orders-offer-td-name"
        >
          {{ data.name }}
        </td>
        <td data-label="Цена" class="base-table-td-top base-table-td">
          {{ data.price }} ₽
        </td>
        <td data-label="Кол-во" class="base-table-td-top base-table-td">
          {{ data.quantity }}
        </td>
        <product-symma
          data-label="Сумма"
          component="td"
          class="base-table-td orders-offer-right"
          :symma="data.price * data.quantity"
        />
      </tr>
      <tr class="">
        <td colspan="5" class="base-table-td orders-offer-right">
          Стоимость товаров: {{ getOrderId.price }} ₽
        </td>
      </tr>
      <tr class="">
        <td colspan="5" class="base-table-td orders-offer-right">
          Доставка: {{ getOrderId.delivery.price }} ₽
        </td>
      </tr>
      <tr class="">
        <product-symma
          colspan="5"
          class="base-table-td orders-offer-right"
          :component="'td'"
          :symma="getOrderId.price + getOrderId.delivery.price"
        >
          <template #start> Итого: </template>
        </product-symma>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { PropType } from 'vue'
import {
  OrdersIdInterface,
  OrdersIdOffersInterface,
} from '@/interface/orders/orders-id.interface'
import ProductSymma from '~/components/products/element/product-symma.vue'

export default {
  name: 'OrderTableOffers',
  components: { ProductSymma },
  props: {
    offers: Array as PropType<OrdersIdOffersInterface[]>,
    getOrderId: {
      type: Object as PropType<OrdersIdInterface>,
    },
  },
}
</script>

<style lang="sass">
@import "assets/sass/base/base-table"
@import "assets/sass/order/page/order-table-offers"
</style>
