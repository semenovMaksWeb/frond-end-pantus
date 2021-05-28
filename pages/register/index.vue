<template>
  <div class="container">
    <form class="register-form" autocomplete="off">
      <div class="register-form-type-user">
        <h3 class="h3">Зарегистрироваться как:</h3>
        <div class="row-gutters">
          <BaseRadio
            :id="'typeUserRetail'"
            :value-radio="'retail'"
            :class-item="'register-form-radio-items'"
            name="typeUser"
            :validate-input="formDataRetail.type"
            :text="'Розничный покупатель'"
            @value="ValidateInput(formDataRetail.type).onSwitch($event)"
          />
          <BaseRadio
            :id="'typeUserWholesale'"
            :value-radio="'wholesale'"
            name="typeUser"
            :text="'Оптовый покупатель'"
            :validate-input="formDataRetail.type"
            @value="ValidateInput(formDataRetail.type).onSwitch($event)"
          />
        </div>
      </div>
      <div class="register-form-user-data">
        <base-input
          :id="'name'"
          :name="'name'"
          :class-input="'register-form-input'"
          text="Имя:"
          :validate-input="formDataRetail.name"
          @value="ValidateInput(formDataRetail.name).onSwitch($event)"
        />
        <base-input
          id="surname"
          :name="'surname'"
          :class-input="'register-form-input'"
          text="Фамилия:"
          :validate-input="formDataRetail.surname"
          @value="ValidateInput(formDataRetail.surname).onSwitch($event)"
        />
        <base-input
          id="email"
          :name="'email'"
          :class-input="'register-form-input'"
          text="Email:"
          :validate-input="formDataRetail.email"
          @value="ValidateInput(formDataRetail.email).onSwitch($event)"
        />
        <base-input
          id="password"
          name="password"
          :class-input="'register-form-input'"
          type="password"
          text="Пароль:"
          autocomplete="new-password"
          :validate-input="formDataRetail.password"
          @value="ValidateInput(formDataRetail.password).onSwitch($event)"
        />
        <base-input
          id="passwordRepeat"
          name="passwordRepeat"
          :class-input="'register-form-input'"
          type="password"
          text="Повторите Пароль:"
          :validate-input="formDataRetail.passwordRepeat"
          @value="ValidateInput(formDataRetail.passwordRepeat).onSwitch($event)"
        />
        <base-input
          id="telephone"
          mask="+# (###) ###-##-##"
          :class-input="'register-form-input'"
          text="Номер телефона:"
          :validate-input="formDataRetail.telephone"
          @value="ValidateInput(formDataRetail.telephone).onSwitch($event)"
        />
        <div v-if="formDataRetail.type.value === 'wholesale'">
          <base-input
            :id="'organization'"
            :class-input="'register-form-input'"
            :name="'organization'"
            :text="'Названия организации'"
            :validate-input="formDataWholesale.organization"
            @value="
              ValidateInput(formDataWholesale.organization).onSwitch($event)
            "
          />
          <base-textarea
            :id="'address'"
            :name="'address'"
            :text="'Адрес: '"
            :class-textarea="'register-form-input register-form-textarea'"
            :validate-input="formDataWholesale.address"
            @value="ValidateInput(formDataWholesale.address).onSwitch($event)"
          />
          <base-input
            :id="'inn'"
            :name="'inn'"
            :text="'Инн: '"
            :class-input="'register-form-input'"
            :validate-input="formDataWholesale.inn"
            @value="ValidateInput(formDataWholesale.inn).onSwitch($event)"
          />
        </div>
        <CheckboxDataUser
          :validate-input="formDataRetail.checkbox"
          @value="ValidateInput(formDataRetail.checkbox).onSwitch($event)"
        />
        <div class="recaptcha">
          <recaptcha @success="checkSuccess($event)" />
        </div>
        <div v-if="!check" class="text-error">Вы не прошли капчу</div>
        <button
          class="button link-hover-button register-form-button"
          @click.prevent="registerValidateForm"
        >
          Зарегистрироваться
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BaseInput from '~/components/base/input/base-input.vue'
import { RegisterForm } from '~/composition/register/register-form'
import BaseRadio from '~/components/base/input/base-radio.vue'
import CheckboxDataUser from '~/components/register/checkbox-data-user.vue'
import { ValidateInput } from '~/composition/_validate/validate-input'
import BaseTextarea from '~/components/base/input/base-textarea.vue'

export default Vue.extend({
  name: 'PageRegister',
  components: { BaseTextarea, CheckboxDataUser, BaseRadio, BaseInput },
  setup() {
    return { ...RegisterForm(), ValidateInput }
  },
})
</script>
<style lang="sass">
@import "assets/sass/register/register-form"
</style>
