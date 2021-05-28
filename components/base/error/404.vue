<template>
  <h2 class="text-error">{{ text }}</h2>
</template>

<script>
export default {
  name: 'Error404',
  props: {
    text: {
      type: String,
    },
  },
}
</script>
