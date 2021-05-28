<template>
  <div class="product-button-buy-items">
    <!--  ТОВАР не КОРЗИНЕ  -->
    <button
      v-if="!activeButton"
      class="product-button-buy"
      @click="ToggleBodyFunctionClick"
    >
      <div class="product-button-buy-text">Купить</div>
      <span class="product-button-buy-img">
        <FontAwesome unicode="&#xf07a;" />
      </span>
    </button>
    <!--  ТОВАР В КОРЗИНЕ  -->
    <template v-if="activeButton">
      <button
        class="product-button-buy active"
        @click="ToggleBodyFunctionClick"
      >
        <span class="product-button-buy-img active">
          <FontAwesome unicode="&#xf07a;" />
        </span>
      </button>
      <FontAwesome
        unicode="&#xf00d;"
        class="product-button-delete link-hover-main"
        @click="cartDelete(linkOffers.id)"
      />
    </template>
    <portal to="body">
      <ModalBuy
        v-if="ToggleBody"
        :link-product="linkProduct"
        :link-offers="linkOffers"
        :cart-offer="cartOffer"
        @close="ToggleFalse"
        @click="ToggleBodyFunctionSelectClick"
      />
    </portal>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'
import FontAwesome from '~/components/base/font-awesome/font-awesome.vue'
import {
  TypeOfferProduct,
  TypeProductVuex,
} from '~/interface/products/products.interface'
import { ProductButtonBuy } from '~/composition/products/product-button-buy'
import { CartDelete } from '~/composition/cart/cart-delete'
import { ToggleBodyFalse } from '~/composition/_toggle/toggle-body-false'
export default {
  name: 'ProductButtonBuy',
  components: {
    ModalBuy: () => import('~/components/products/element/modal/modal-buy.vue'),
    FontAwesome,
  },
  props: {
    linkProduct: {
      type: Object as () => PropType<TypeProductVuex>,
    },
    linkOffers: {
      type: Object as () => PropType<TypeOfferProduct>,
    },
  },
  setup(props: any) {
    return {
      ...ProductButtonBuy(props.linkOffers.id),
      ...CartDelete(),
      ...ToggleBodyFalse(),
    }
  },
}
</script>
<style lang="sass">
@import "/assets/sass/products/product-button"
</style>
