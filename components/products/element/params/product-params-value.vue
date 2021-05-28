<template>
  <div class="product-params-value-all">
    <div v-if="!to" :title="value" class="">
      {{ value }}
    </div>
    <nuxt-link v-if="to" :title="value" :to="to" class="link link-hover-main">
      {{ value }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'ProductParamsValue',
  props: {
    to: {
      type: String,
    },
    value: {
      type: String,
    },
  },
}
</script>
