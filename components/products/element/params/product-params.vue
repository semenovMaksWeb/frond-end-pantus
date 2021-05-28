<template>
  <div v-if="value" class="product-params">
    <div class="product-blog-params-name">{{ name }}</div>
    <ProductParamsValue :value="value" :to="to" />
  </div>
</template>

<script>
import ProductParamsValue from '~/components/products/element/params/product-params-value'
export default {
  name: 'ProductParams',
  components: { ProductParamsValue },
  props: {
    to: {
      type: String,
    },
    name: {
      type: String,
    },
    value: {
      type: String,
    },
  },
}
</script>

<!--<style scoped></style>-->
