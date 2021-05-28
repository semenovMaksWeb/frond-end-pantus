<template>
  <div v-if="getBlockInfo.active" class="block-info" :class="getBlockInfo.type">
    <div class="container">
      <div class="block-info-row">
        <p class="col">{{ getBlockInfo.text }}</p>
        <font-awesome
          class="close-block-info"
          unicode="&#xf00d;"
          @click="closeBlockInfo"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { BlockInfo } from '~/composition/block-info/block-info'
import FontAwesome from '~/components/base/font-awesome/font-awesome.vue'

export default {
  name: 'BlockInfo',
  components: { FontAwesome },
  setup() {
    return { ...BlockInfo() }
  },
}
</script>
<style lang="sass">
@import "assets/sass/base/blog-info"
</style>
