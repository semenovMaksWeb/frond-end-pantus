<template>
  <div class="container">
    <div v-if="getActiveProductId" class="product_id row">
      <div class="product_id-img col">
        <img
          class="img"
          :src="getProductId.productCard.productCardImage.url"
          :alt="getProductId.productCard.name"
        />
      </div>
      <div class="product_id-data col">
        <h1 class="h1">{{ getProductId.productCard.name }}</h1>
        <favorites-icons
          v-if="getUserAuthorization"
          :id="getProductId.productCard.id"
        />
        <div class="product_id-params_all">
          <div class="product_id-params">
            <div class="product_id-params_name">Производитель:</div>
            <nuxt-link
              :to="'/search?filter_brands=' + getProductId.productCard.brand.id"
              class="product_id-params_value link link-hover-main"
            >
              {{ getProductId.productCard.brand.name }}
            </nuxt-link>
          </div>
          <div class="product_id-params">
            <div class="product_id-params_name">Артикул:</div>
            <div class="product_id-params_value">
              {{ getProductId.productCard.sku.original }}
            </div>
          </div>
          <div
            v-if="getProductId.productCard.nomenclature.code"
            class="product_id-params"
          >
            <div class="product_id-params_name">Код Пантуса:</div>
            <div class="product_id-params_value">
              {{ getProductId.productCard.nomenclature.code }}
            </div>
          </div>

          <div
            v-if="getProductId.productCard.categories.length > 0"
            class="product_id-params"
          >
            <div class="product_id-params_name">Категория:</div>
            <nuxt-link
              v-for="categories in getProductId.productCard.categories"
              :key="categories.id"
              :to="'/search?filter_categories=' + categories.id"
              class="product_id-params_value link link-hover-main"
            >
              {{ categories.name }}
            </nuxt-link>
          </div>
          <div
            v-if="getProductId.productCard.applicabilities.length > 0"
            class="product_id-params"
          >
            <div class="product_id-params_name">Применяемость (для а/м):</div>
            <nuxt-link
              v-for="applicabilities in getProductId.productCard
                .applicabilities"
              :key="applicabilities.id"
              :to="'/search?filter_applicabilities=' + applicabilities.id"
              class="product_id-params_value link link-hover-main"
            >
              {{ applicabilities.name }}
            </nuxt-link>
          </div>
        </div>
        <div class="row-gutters product_id-row_offers">
          <h2 class="h2">Предложение</h2>
          <div>
            Уровень цен:
            <template v-if="userProfile && userProfile.type === 'wholesale'">
              Оптовый
            </template>
            <template v-else>Розничный</template>
          </div>
        </div>
        <product-offer-id
          v-if="getProductId.productOffer.length > 0"
          :product="getProductId"
        />
      </div>
      <div
        v-if="getProductId.productCard.oem.length > 0"
        class="product_id-oem"
      >
        <h2 class="h2">Кроссы по ОЕМ-номерам и аналогам</h2>
        <div class="row">
          <div
            v-for="(oem, index) in getProductId.productCard.oem"
            :key="index"
            class="col product_id-col_oem"
          >
            <nuxt-link
              :to="'/search?filter_substr=' + oem"
              class="link link-hover-main"
              >{{ oem }}</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PageProductsId } from '~/composition/products/page-product-id'
import { UserAuthorization } from '~/lib/get-user-aruthorization'

export default {
  name: 'PageProductsId',
  components: {
    FavoritesIcons: () => import('~/components/favorites/favorites-icons.vue'),
    ProductOfferId: () =>
      import('~/components/products/offers/product-offer-id.vue'),
  },
  setup() {
    return { ...PageProductsId(), ...UserAuthorization() }
  },
}
</script>

<style lang="sass">
@import "assets/sass/products/product-element"
@import "assets/sass/products/product-id"
</style>
