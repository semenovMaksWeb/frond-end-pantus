<template>
  <div class="checkbox-data-user-blog">
    <div class="row-gutters">
      <input
        id="input-data-user"
        v-model.trim="propsValue"
        name="checkbox-data-user"
        type="checkbox"
        v-bind="$attrs"
      />
      <label for="input-data-user" class="checkbox-text">
        Я принимаю условия
        <nuxt-link
          class="checkbox-data-user-link"
          to="/documents/user-agreement/"
          >Соглашения сторон
        </nuxt-link>
        и соглашаюсь на обработку персональных данных, размещаемых на
        <nuxt-link class="checkbox-data-user-link" to="/">pantus.ru</nuxt-link>
      </label>
    </div>
    <base-error :validate-input="validateInput" />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { TypeValidateInput } from '~/composition/_validate/validate-type'
import BaseError from '~/components/base/error/base-error.vue'
import { ValidateProps } from '~/composition/_validate/validate-props'

export default Vue.extend({
  name: 'CheckboxDataUser',
  components: { BaseError },
  props: {
    validateInput: {
      type: Object as () => PropType<TypeValidateInput>,
      required: true,
    },
  },
  setup(props: any, { emit }: { emit: Function }) {
    return { ...ValidateProps(props.validateInput, emit) }
  },
})
</script>
<style lang="sass">
@import "assets/sass/register/checkbox-data-user"
</style>
