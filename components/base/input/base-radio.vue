<template>
  <div :class="classItem" class="base-radio">
    <input
      v-model="propsValue"
      type="radio"
      v-bind="$attrs"
      :value="valueRadio"
    />
    <label class="base-radio-label" :class="classLabel" :for="$attrs.id"
      >{{ text }}
    </label>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { TypeValidateInput } from '@/composition/_validate/validate-type'
import { ValidateProps } from '~/composition/_validate/validate-props'
export default Vue.extend({
  name: 'BaseRadio',
  inheritAttrs: false,
  props: {
    valueRadio: {
      type: [Number, String],
    },
    validateInput: {
      type: Object as () => PropType<TypeValidateInput>,
      required: true,
    },
    text: {
      default: '',
      type: String,
    },
    classItem: {
      type: String,
      default: '',
    },
    classLabel: {
      type: String,
      default: '',
    },
    classRadio: {
      type: String,
      default: '',
    },
  },
  setup(props: any, { emit }: { emit: Function }) {
    return { ...ValidateProps(props.validateInput, emit) }
  },
})
</script>
