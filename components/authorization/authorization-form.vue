<template>
  <form class="authorization-form">
    <base-input
      :id="'login'"
      :name="'login'"
      placeholder="Введите ваш логин"
      text="Логин"
      :validate-input="formData.login"
      @value="ValidateInput(formData.login).onSwitch($event)"
    />
    <base-input
      :id="'password'"
      :name="'password'"
      type="password"
      placeholder="Введите ваш пароль"
      text="Пароль"
      :validate-input="formData.password"
      @value="ValidateInput(formData.password).onSwitch($event)"
    />
    <button
      class="authorization-button link-hover-button"
      @click.prevent="authorizationValidateForm"
    >
      Авторизоваться
    </button>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import { AuthorizationForm } from '~/composition/authorization/authorization-form'
import BaseInput from '~/components/base/input/base-input.vue'
import { ValidateInput } from '~/composition/_validate/validate-input'

export default Vue.extend({
  name: 'AuthorizationForm',
  components: { BaseInput },
  setup() {
    return { ...AuthorizationForm(), ValidateInput }
  },
})
</script>
