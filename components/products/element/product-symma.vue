<template>
  <component :is="component">
    <slot name="start" />
    {{ symma.toFixed(2) }} ₽
    <slot name="end" />
  </component>
</template>

<script>
export default {
  name: 'ProductSymma',
  props: {
    component: {
      type: String,
      default: 'div',
    },
    symma: {
      type: Number,
    },
  },
}
</script>

<!--<style scoped></style>-->
