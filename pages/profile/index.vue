<template>
  <div class="container">
    <div class="row row-profile">
      <ProfileNav />
      <ProfileForm />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ProfileForm from '~/components/profile/profile-form.vue'
import ProfileNav from '~/components/profile/profile-nav.vue'
export default Vue.extend({
  name: 'PageProfile',
  components: { ProfileNav, ProfileForm },
  middleware: 'check-user-guest',
})
</script>

<style lang="sass">
@import "assets/sass/profile/profile.sass"
</style>
