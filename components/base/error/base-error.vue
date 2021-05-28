<template>
  <div class="base_error_validate-item">
    <template v-for="data in validateInput.regulations">
      <div v-if="data.active" :key="data.id" class="base_error_validate-text">
        {{ data.text }}
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { TypeValidateInput } from '~/composition/_validate/validate-type'

export default Vue.extend({
  name: 'BaseError',
  props: {
    validateInput: {
      type: Object as () => PropType<TypeValidateInput>,
      required: true,
    },
  },
})
</script>
<style lang="sass">
@import "assets/sass/base/base-error-validate"
</style>
