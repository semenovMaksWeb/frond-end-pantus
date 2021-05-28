<template>
  <nav v-if="getProfile" class="profile-nav col">
    <div class="profile-nav-data_user">
      <div class="profile-nav-name_user">
        {{ getProfile.surname }} {{ getProfile.name }}
      </div>
      <div>{{ getProfile.login }}</div>
    </div>
    <div class="profile-nav-item">
      <nuxt-link
        v-for="data in link"
        :key="data.id"
        :exact-active-class="'active'"
        class="profile-nav-link"
        :to="data.to"
        >{{ data.text }}
      </nuxt-link>
    </div>
    <!--    <nuxt-link to="" class="profile-nav-link">-->
    <div class="profile-nav-link" @click="exitUser">Выйти</div>
    <!--    </nuxt-link>-->
  </nav>
</template>

<script lang="ts">
import { ProfileLink } from '~/composition/profile/profile-link'
import { ProfileExit } from '~/composition/profile/profile-exit'
import { ProfileNav } from '~/composition/profile/profile-nav'

export default {
  name: 'ProfileNav',
  setup() {
    return { ...ProfileLink(), ...ProfileExit(), ...ProfileNav() }
  },
}
</script>

<style lang="sass">
@import "assets/sass/profile/profile-nav"
</style>
