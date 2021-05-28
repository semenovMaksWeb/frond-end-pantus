<template>
  <div class="product-blog">
    <product-link-id
      :product="product"
      class-link="link link-hover-main product-blog-link"
    />
    <favorites-icons v-if="getUserAuthorization" :id="product.productCard.id" />
    <product-img
      :alt="product.productCard.name"
      :src="product.productCard.productCardImage.url"
    />
    <div class="product-blog-params-all">
      <product-params
        name="Бренд"
        :value="product.productCard.brand.name"
        :to="'/search?filter_brands=' + product.productCard.brand.id"
      />
      <product-params
        name="Артикул"
        :value="product.productCard.sku.original"
        :to="'/search?filter_substr=' + product.productCard.sku.original"
      />
      <product-params
        name="OEM"
        :value="product.productCard.oem[0]"
        :to="'/search?filter_substr=' + product.productCard.oem[0]"
      />
      <product-params-value
        v-for="oem in product.productCard.oem.slice(1, 5)"
        :key="oem"
        class="product-params-value-array"
        :to="'/search?filter_substr=' + oem"
        :value="oem"
      />
    </div>
    <product-offer-blog
      v-if="product.productOffer[0]"
      :offer="product.productOffer[0]"
      :product="product.productCard"
    />
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'
import { TypeProductVuex } from '~/interface/products/products.interface'
import ProductLinkId from '~/components/products/element/product-link-id.vue'
import ProductImg from '~/components/products/element/product-img.vue'
import ProductParams from '~/components/products/element/params/product-params.vue'
import ProductParamsValue from '~/components/products/element/params/product-params-value.vue'
import ProductOfferBlog from '~/components/products/offers/product-offer-blog.vue'
import { UserAuthorization } from '~/lib/get-user-aruthorization'

export default {
  name: 'ProductBlog',
  components: {
    FavoritesIcons: () => import('~/components/favorites/favorites-icons.vue'),
    ProductOfferBlog,
    ProductParamsValue,
    ProductParams,
    ProductImg,
    ProductLinkId,
  },
  props: {
    product: {
      type: Object as () => PropType<TypeProductVuex>,
    },
  },
  setup() {
    return { ...UserAuthorization() }
  },
}
</script>

<style lang="sass">
@import "assets/sass/products/product-element"
@import "assets/sass/products/product-blog"
</style>
