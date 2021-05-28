<template>
  <header class="header">
    <TheHeaderTop />
    <TheHeaderMain />
    <TheHeaderBottom />
    <BlockInfo />
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import TheHeaderTop from '~/components/header/header-top/the-header-top.vue'
import TheHeaderMain from '~/components/header/header-main/the-header-main.vue'
import TheHeaderBottom from '~/components/header/header-bottom/the-header-bottom.vue'
import BlockInfo from '~/components/block-info/block-info.vue'
export default Vue.extend({
  name: 'TheHeader',
  components: {
    BlockInfo,
    TheHeaderBottom,
    TheHeaderTop,
    TheHeaderMain,
  },
})
</script>
