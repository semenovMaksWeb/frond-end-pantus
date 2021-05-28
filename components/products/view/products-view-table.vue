<template>
  <div class="product-view-table">
    <product-table-head />
    <div class="product-table-body">
      <div
        v-for="elem in product"
        :key="elem.productCard.id"
        class="row-gutters product-table-tr"
      >
        <nuxt-link
          :to="'/search/?filter_brands=' + elem.productCard.brand.id"
          class="link-hover-main link product-table-td product-table-brands"
        >
          {{ elem.productCard.brand.name }}
        </nuxt-link>
        <nuxt-link
          :to="'/search/?filter_substr=' + elem.productCard.sku.normalized"
          class="link-hover-main link product-table-td product-table-sku"
        >
          {{ elem.productCard.sku.original }}
        </nuxt-link>
        <product-img
          :src="elem.productCard.productCardImage.url"
          class-img="product-table-img"
        />
        <product-link-id
          :product="elem"
          class="product-table-name product-table-td"
        />
        <div v-if="elem.productOffer" class="product-view-table-offers">
          <div
            v-for="offer in elem.productOffer"
            :key="offer.id"
            class="row-gutters product-table-offers-row"
          >
            <div class="product-table-td product-table-supplier">
              {{ offer.supplier.name }}
            </div>
            <product-offer-quantity
              class="product-table-offers"
              :link-product="elem.productCard"
              :link-offers="offer"
              :component="'div'"
            />
            <div class="product-table-offers">{{ offer.supplier.deliveryDelay }}</div>
            <div class="product-offer-price product-table-price">
              {{ offer.prices }}
            </div>
            <div class="product-table-button">
              <ProductButtonBuy
                :link-offers="offer"
                :link-product="elem.productCard"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'
import { TypeProductVuex } from '~/interface/products/products.interface'
import ProductImg from '~/components/products/element/product-img.vue'
import ProductLinkId from '~/components/products/element/product-link-id.vue'
import ProductOfferQuantity from '~/components/products/element/offer/product-offer-quantity.vue'
import ProductButtonBuy from '~/components/products/element/product-button.vue'
import ProductTableHead from '~/components/products/table/product-table-head.vue'

export default {
  name: 'ProductsViewTable',
  components: {
    ProductTableHead,
    ProductButtonBuy,
    ProductOfferQuantity,
    ProductLinkId,
    ProductImg,
  },
  props: {
    product: {
      type: Array as () => PropType<TypeProductVuex[]>,
    },
  },
}
</script>

<style lang="sass">
@import "assets/sass/products/product-view-table"
@import "assets/sass/products/product-offer"
@import "assets/sass/products/product-element"
</style>
