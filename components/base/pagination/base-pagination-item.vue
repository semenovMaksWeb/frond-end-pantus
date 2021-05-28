<template>
  <div class="base-pagination-item" v-on="$listeners">
    <nuxt-link
      exact-active-class="active"
      class="base-pagination-link"
      :to="to"
    >
      {{ text }}
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BasePaginationItem',
  props: {
    to: {
      default: '',
      type: String,
    },
    text: {
      default: 1,
      type: Number,
    },
  },
})
</script>
