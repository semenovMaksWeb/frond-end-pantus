<template>
  <div v-if="getProfile" class="link-hover-main link header-user-items-link">
    <div class="header-user-text header-user-name">
      {{ getProfile.surname }}
    </div>
    <div class="header-user-text header-user-name">{{ getProfile.name }}</div>
  </div>
</template>

<script lang="ts">
import { HeaderUserName } from '~/composition/header/header-user/header-user-name'
export default {
  name: 'TheHeaderUserName',
  setup() {
    return { ...HeaderUserName() }
  },
}
</script>
