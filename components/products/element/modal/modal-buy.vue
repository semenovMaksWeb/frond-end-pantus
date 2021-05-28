<template>
  <div class="modal">
    <div class="modal-dialog" v-on="$listeners">
      <div class="modal-header">
        <h3 class="">Товар будет добавлен в корзину</h3>
        <button class="modal-clone">
          <FontAwesome unicode="&#xf00d;" @click="close" />
        </button>
      </div>
      <div class="modal-body">
        <modal-buy-params :value="linkProduct.name" name="Название:" />
        <modal-buy-params :value="linkProduct.sku.original" name="Артикул:" />
        <modal-buy-params
          :value="linkOffers.prices.toString() + ' ₽'"
          name="Цена:"
        />
        <modal-buy-params
          :value="linkOffers.multiplicity.toString()"
          name="Кратность:"
        />
        <modal-buy-params name="Количество:">
          <product-count-offers
            :offers="linkOffers"
            :cart="cartOffer"
            :count.sync="count"
          />
        </modal-buy-params>

        <modal-buy-params name="Итог:">
          <product-symma :symma="linkOffers.prices * count" />
        </modal-buy-params>
      </div>
      <div class="modal-footer modal-footer-product-buy">
        <ProductPostOffers :id="linkOffers.id" :count="count" @click="close" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'
import {
  TypeCartProduct,
  TypeOfferProduct,
} from '~/interface/products/products.interface'
import { ProductModalBuy } from '~/composition/products/product-modal-buy'
import FontAwesome from '~/components/base/font-awesome/font-awesome.vue'
import ModalBuyParams from '~/components/products/element/modal/modal-buy-params.vue'
import ProductSymma from '~/components/products/element/product-symma.vue'
import ProductCountOffers from '~/components/products/element/offer/product-count-offers.vue'
import { CartOfferInterface } from '~/interface/cart/cart.interface'
import ProductPostOffers from '~/components/products/element/product-post-offers.vue'

export default {
  name: 'ModalBuy',
  components: {
    ProductPostOffers,
    ProductCountOffers,
    ProductSymma,
    ModalBuyParams,
    FontAwesome,
  },
  props: {
    active: {
      type: Boolean,
    },
    linkProduct: {
      request: true,
      type: Object as PropType<TypeCartProduct>,
    },
    linkOffers: {
      request: true,
      type: Object as PropType<TypeOfferProduct>,
    },
    cartOffer: {
      type: Object as PropType<CartOfferInterface>,
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props: any, { emit }: { emit: Function }) {
    return { ...ProductModalBuy(emit) }
  },
}
</script>

<style lang="sass">
@import "assets/sass/base/base-modal"
.modal-footer-product-buy
  text-align: right
</style>
