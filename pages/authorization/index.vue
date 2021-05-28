<template>
  <div class="container">
    <h1 class="h1 authorization-title">Авторизация</h1>
    <authorization-form />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AuthorizationForm from '~/components/authorization/authorization-form.vue'

export default Vue.extend({
  name: 'PageAuthorization',
  components: { AuthorizationForm },
  middleware: 'check-user-authorization',
})
</script>
<style lang="sass">
@import "assets/sass/authorization/authorization-form"
</style>
