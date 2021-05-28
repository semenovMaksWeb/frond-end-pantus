<template>
  <form class="profile-form col">
    <h3 class="h3">Личные данные</h3>
    <base-input
      :id="'name'"
      text="Имя:"
      :validate-input="formData.name"
      class-input="profile-input"
      :name="'name'"
      @value="ValidateInput(formData.name).onSwitch($event)"
    />
    <base-input
      :id="'surname'"
      text="Фамилия:"
      class-input="profile-input"
      :name="'surname'"
      :validate-input="formData.surname"
      @value="ValidateInput(formData.surname).onSwitch($event)"
    />
    <base-input
      :id="'patronymic'"
      text="Отчество:"
      class-input="profile-input"
      :name="'patronymic'"
      :validate-input="formData.patronymic"
      @value="ValidateInput(formData.patronymic).onSwitch($event)"
    />
    <base-input
      :id="'telephone'"
      mask="+# (###) ###-##-##"
      text="Телефон:"
      class-input="profile-input"
      :name="'telephone'"
      :validate-input="formData.telephone"
      @value="ValidateInput(formData.telephone).onSwitch($event)"
    />
    <button
      class="profile-button button link-hover-button"
      @click.prevent="profileValidateForm"
    >
      Изменить
    </button>
  </form>
</template>

<script lang="ts">
import { ProfileForm } from '@/composition/profile/profile-form'
import Vue from 'vue'
import BaseInput from '~/components/base/input/base-input.vue'
import { ValidateInput } from '~/composition/_validate/validate-input'
export default Vue.extend({
  name: 'ProfileForm',
  components: { BaseInput },
  setup() {
    return { ...ProfileForm(), ValidateInput }
  },
})
</script>

<style lang="sass">
@import "assets/sass/profile/profile.sass"
</style>
