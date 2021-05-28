<template>
  <div class="favorites-icons-wrapper" :title="textTitle">
    <font-awesome
      v-if="!getCheck"
      unicode="&#xf097;"
      class="favorites-icons"
      @click="putFavorites"
    />
    <font-awesome
      v-if="getCheck"
      unicode="&#xf02e;"
      class="favorites-icons"
      @click="deleteFavorites"
    />
  </div>
</template>

<script lang="ts">
import FontAwesome from '~/components/base/font-awesome/font-awesome.vue'
import { FavoritesIcons } from '~/composition/favorites/favorites-icons'
export default {
  name: 'FavoritesIcons',
  components: { FontAwesome },
  props: {
    id: {
      type: Number,
    },
  },
  setup(props: any) {
    return { ...FavoritesIcons(props.id) }
  },
}
</script>

<style lang="sass">
@import "assets/sass/favorites/favorites-icons"
</style>
