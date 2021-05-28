<template>
  <div class="fontawesome" v-on="$listeners" v-html="unicode" />
</template>

<script>
export default {
  name: 'FontAwesome',
  props: {
    unicode: {
      type: String,
      request: true,
    },
  },
}
</script>
<style lang="sass">
@import "assets/sass/base/font-awesome"
</style>
