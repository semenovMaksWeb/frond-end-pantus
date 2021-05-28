<template>
  <div v-if="getToggle" :class="classItems">
    <nuxt-link
      v-for="data in array"
      :key="data.id"
      :to="data.to"
      :class="classLink"
    >
      {{ data.text }}
    </nuxt-link>
    <slot />
  </div>
</template>

<script lang="ts">
import { ToggleBody } from '@/composition/_toggle/toggle-body.ts'
export default {
  name: 'HeaderDropdown',
  props: {
    classItems: {
      default: 'header-dropdown',
      type: String,
    },
    classLink: {
      default: 'header-dropdown-link',
      type: String,
    },
    target: {
      type: String,
      require: true,
    },
    array: {
      type: Array,
    },
  },
  setup(props: any) {
    return { ...ToggleBody(undefined, props.target) }
  },
}
</script>
