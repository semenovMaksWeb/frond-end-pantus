<template>
  <div class="link-hover-main">
    <font-awesome v-if="!toggle" unicode="&#xf0ab;" />
    <font-awesome v-if="toggle" unicode="&#xf0aa;" />
  </div>
</template>

<script>
import FontAwesome from '~/components/base/font-awesome/font-awesome'
export default {
  name: 'FilterButtonGet',
  components: { FontAwesome },
  props: {
    toggle: {
      type: Boolean,
    },
  },
}
</script>
