<template>
  <div class="base-input-blog">
    <div class="base-input-item" :class="classItem">
      <label class="base-input-label" :class="classLabel" :for="$attrs.id"
        >{{ text }}
        <span v-if="validateInput.req" class="base-input-icons-req">*</span>
      </label>
      <input
        v-model.trim="propsValue"
        v-mask="mask"
        class="base-input"
        :class="classInput"
        v-bind="$attrs"
        v-on="$listeners"
      />
    </div>
    <BaseError :validate-input="validateInput" />
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'
import { TypeValidateInput } from '@/composition/_validate/validate-type'
import { ValidateProps } from '~/composition/_validate/validate-props'
import BaseError from '~/components/base/error/base-error.vue'
export default {
  name: 'BaseInput',
  components: { BaseError },
  inheritAttrs: false,
  props: {
    mask: {
      type: String,
    },
    text: {
      default: '',
      type: String,
    },
    //
    validateInput: {
      type: Object as () => PropType<TypeValidateInput>,
      required: true,
    },
    // class item all
    classItem: {
      type: String,
      default: '',
    },
    // class label
    classLabel: {
      type: String,
      default: '',
    },
    // class input
    classInput: {
      type: String,
      default: '',
    },
  },
  setup(props: any, { emit }: { emit: Function }) {
    return { ...ValidateProps(props.validateInput, emit) }
  },
}
</script>
<style lang="sass">
@import "assets/sass/base/base-input"
</style>
