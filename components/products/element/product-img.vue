<template>
  <div :class="classImg">
    <v-lazy-image
      class="img"
      :src="src"
      alt=""
      :src-placeholder="require('@/assets/img/Ajux_loader.gif')"
    />
    <a :to="src" @click.prevent="" />
  </div>
</template>

<script lang="ts">
import VLazyImage from 'v-lazy-image'

export default {
  name: 'ProductImg',
  components: { VLazyImage },
  props: {
    classImg: {
      type: String,
      default: 'product-img',
    },
    src: {
      type: String,
    },
    alt: {
      type: String,
    },
  },
}
</script>
