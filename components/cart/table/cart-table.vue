<template>
  <table class="cart-table base-table">
    <thead class="base-table-thead">
      <tr class="base-table-tr-th">
        <th class="base-table-th">Брэнд</th>
        <th class="base-table-th">Артикул</th>
        <th class="base-table-th">Название товара</th>
        <th class="base-table-th">Поставщик</th>
        <th class="base-table-th">Остаток</th>
        <th class="base-table-th">Цена</th>
        <th class="base-table-th">Количество</th>
        <th class="base-table-th">Сумма</th>
        <th class="base-table-th"></th>
      </tr>
    </thead>
    <tbody class="base-table-tbody">
      <template v-for="data in cart">
        <tr :key="data.productCard.id" class="cart-table-tr base-table-tr">
          <td
            data-label="Брэнд"
            :rowspan="data.productOffer.length"
            class="base-table-td base-table-td-top"
          >
            {{ data.productCard.brand.name }}
          </td>
          <td
            data-label="Артикул"
            :rowspan="data.productOffer.length"
            class="base-table-td base-table-td-top"
          >
            {{ data.productCard.sku.original }}
          </td>
          <td
            data-label="Название товара"
            :rowspan="data.productOffer.length"
            class="base-table-td base-table-td-top cart-table-td-name"
          >
            {{ data.productCard.name }}
          </td>
          <template v-if="data.productOffer.length > 0">
            <td
              class="base-table-td-top base-table-td cart-table-td-supplier"
              data-label="Поставщик"
            >
              <template v-if="data.productOffer[0].activity">
                {{ data.productOffer[0].supplier.name }}</template
              >
            </td>
            <td class="base-table-td-top base-table-td" data-label="Остаток">
              <template v-if="data.productOffer[0].activity">
                {{ data.productOffer[0].quantity }}
              </template>
            </td>
            <td class="base-table-td-top base-table-td" data-label="Цена">
              <template v-if="data.productOffer[0].activity">
                {{ data.productOffer[0].prices }} ₽
              </template>
            </td>
            <td
              data-label="Количество"
              class="base-table-td-top base-table-td cart-table-td-count"
            >
              <template v-if="data.productOffer[0].activity">
                <cart-count-offers :offers="data.productOffer[0]" />
              </template>
            </td>
            <product-symma
              v-if="data.productOffer[0].activity"
              data-label="Сумма"
              class="base-table-td base-table-td-top"
              :component="'td'"
              :symma="data.productOffer[0].count * data.productOffer[0].prices"
            />
            <td
              v-if="!data.productOffer[0].activity"
              class="base-table-td base-table-td-top"
            >
              <cart-not-active />
            </td>
            <td class="base-table-td base-table-td-top">
              <cart-delete-offers :id="data.productOffer[0].id" />
            </td>
            <td class="">
              <cart-offer-edit-count :offer="data.productOffer[0]" />
            </td>
          </template>
        </tr>
        <template v-if="data.productOffer.length > 1">
          <CartTableTrOffers
            v-for="offers in data.productOffer.slice(1)"
            :key="offers.id"
            :offers="offers"
          />
        </template>
      </template>
    </tbody>
  </table>
</template>

<script lang="ts">
import { PropType } from 'vue'
import { CartInterface } from '~/interface/cart/cart.interface'
import CartTableTrOffers from '~/components/cart/table/cart-table-tr-offers.vue'
import ProductSymma from '~/components/products/element/product-symma.vue'
import CartDeleteOffers from '~/components/cart/button/cart-delete-offers.vue'
import CartCountOffers from '~/components/cart/cart-count-offers.vue'
import CartOfferEditCount from '~/components/cart/button/cart-offer-edit-count.vue'
import CartNotActive from '~/components/cart/cart-not-active.vue'
export default {
  name: 'CartTable',
  components: {
    CartNotActive,
    CartOfferEditCount,
    CartCountOffers,
    CartDeleteOffers,
    ProductSymma,
    CartTableTrOffers,
  },
  props: {
    cart: {
      type: Array as PropType<CartInterface[]>,
    },
  },
}
</script>

<style lang="sass">
@import "../../../assets/sass/base/base-table"
@import "../../../assets/sass/cart/cart-table"
</style>
