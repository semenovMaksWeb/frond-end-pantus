<template>
  <div class="container">
    <h1 class="h1">Дилерские сертификаты производителей запчастей</h1>
    <div class="row-gutters">
      <certificates-id
        v-for="elem in certificates"
        :key="elem.id"
        :certificates="elem"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { PageCertificates } from '~/composition/certificates/page-certificates'
import CertificatesId from '~/components/certificates/certificates-id.vue'

export default {
  name: 'PageCertificates',
  components: { CertificatesId },
  setup() {
    return { ...PageCertificates() }
  },
}
</script>

<!--<style lang="sass">-->

<!--</style>-->
